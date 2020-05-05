describe('Fetch test', () => {
  it("'Случайный Пост №2' fetches needed data", () => {
    cy.visit("/");
    cy.request("https://jsonplaceholder.typicode.com/posts/2")
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('title')
        expect(response.body.title).contains("qui est esse")
      })
  })
})


describe("Input test 1", () => {
  it("String input instead of number", () => {
    cy.visit("/");
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get('#inputArea').type("hello World!{enter}")
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Ошибка ввода!')
      })
  })
})

describe("Input test 2", () => {
  it("Input null", () => {
    cy.visit("/");
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get('#inputArea').type("{enter}")
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Вы не ввели число!')
      })
  })
})

describe("Input test 3", () => {
  it("Post Id is out of range", () => {
    cy.visit("/");
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get('#inputArea').type("101{enter}")
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Такого поста не существует!')
      })
  })
})

describe("Input test 4", () => {
  it("Correct number is input, and Post appears ", () => {
    cy.visit("/");
    cy.get('#inputArea').type("5{enter}")
    cy.contains("Случайный Пост №5")
  })
})
