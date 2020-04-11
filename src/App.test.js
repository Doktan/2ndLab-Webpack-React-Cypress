import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';
import Post from './Post';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders Post data", async () => {
  const fakePost = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePost)
    })
    
  );
  await act(async () => {
    render(<Post num="1" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.userId);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.id);
  expect(container.textContent).toContain(fakeUser.body);
  // выключаем фиктивный fetch, чтобы убедиться, что тесты полностью изолированы
  global.fetch.mockRestore();
});


/*test('class post', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Пост/i);
  expect(linkElement).toBeInTheDocument();
});*/


import renderer from 'react-test-renderer';
//import { render} from '@testing-library/react';

it('renders correctly', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


