import React from 'react';

function getRandomIntInclusive(min, max) {
  let mi = min;
  let ma = max;
  mi = Math.ceil(mi);
  ma = Math.floor(ma);
  return Math.floor(Math.random() * (ma - mi + 1)) + mi; // Максимум и минимум включаются
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null,
      userId: null,
      id: null,
      title: null,
      completed: 1,
    };
  }

  async componentDidMount() {
    const num = getRandomIntInclusive(1, 200); // Случайный список дел из 200
    const url = `https://jsonplaceholder.typicode.com/todos/${num}`;
    await fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            num,
            ...result,
          });
        },
      );
  }

  render() {
    const { num } = this.state;
    const { userId } = this.state;
    const { id } = this.state;
    const { title } = this.state;
    const { completed } = this.state;
    return (
      <div>
        <b>
          Случайный список дел №
          {num}
        </b>
        <ul>
          <li>
            UserId:
            {userId}
          </li>
          <li>
            Id:
            {id}
          </li>
          <li>
            Title:
            {title}
          </li>
          <li>
            Completed:
            {completed}
          </li>
        </ul>
      </div>
    );
  }
}

export default Todo;
