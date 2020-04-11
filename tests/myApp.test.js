describe('1st test', () => {
  it("'Случайный Пост №2' fetches needed data", () =>{
    cy.visit("/");
    cy.request("https://jsonplaceholder.typicode.com/posts/2")
    .should((response) =>{
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('title')
      expect(response.body.title).contains("qui est esse")
    })
  })
  })

describe("I will take the potato chip and eat it", () => {
  it("'Случайный Пост №1' fetches needed data", () =>{
    cy.visit("/");
    cy.request("https://jsonplaceholder.typicode.com/posts/1")
    .should((response) =>{
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('body')
      expect(response.body.body).contains("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
    })
  })
})

describe("3d test", () => {
  it("'Случайный Пост №3' fetches needed data", () =>{
    cy.visit("/");
    cy.request("https://jsonplaceholder.typicode.com/posts/3")
    .should((response) =>{
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('userId')
      expect(response.body.userId).to.eq(1);
    })
  })
})