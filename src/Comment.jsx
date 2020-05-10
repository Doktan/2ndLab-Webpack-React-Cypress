import React from 'react';

function getRandomIntInclusive(min, max) {
  let mi = min;
  let ma = max;
  mi = Math.ceil(mi);
  ma = Math.floor(ma);
  return Math.floor(Math.random() * (ma - mi + 1)) + mi; // Максимум и минимум включаются
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null,
      postId: null,
      id: null,
      name: null,
      // eslint-disable-next-line react/no-unused-state
      email: null,
      body: null,
    };
  }

  async componentDidMount() {
    const num = getRandomIntInclusive(1, 500); // Номер случайного комментария от 1 до 500
    const url = `https://jsonplaceholder.typicode.com/comments/${num}`;
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
    const { postId } = this.state;
    const { id } = this.state;
    const { name } = this.state;
    const { email } = this.state;
    const { body } = this.state;
    return (
      <div>
        <b>
          Случайный комментарий №
          { num}
        </b>
        <ul>
          <li>
            PostId:
            {postId}
          </li>
          <li>
            Id:
            {id}
          </li>
          <li>
            Name:
            {name}
          </li>
          <li>
            Email:
            {email}
          </li>
          <li>
            Body:
            {body}
          </li>
        </ul>
      </div>
    );
  }
}

export default Comment;
