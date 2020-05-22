/* eslint-disable no-alert */
import React from 'react';
import Post from './Post';

class Ability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      post: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this); // без bind не получится обращаться
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    try {
      const { id } = this.state;
      throw (id);
    } catch (error) {
      if (error == null || error === '') {
        alert('Вы не ввели число!');
        this.setState({ post: null });
        return;
      }
      if (!error.match(/^[0-9]+$/)) {
        alert('Ошибка ввода!');
        this.setState({ post: null });
        return;
      }
      if (error > 100) {
        alert('Такого поста не существует!');
        this.setState({ post: null });
        return;
      }
    }
    const { id } = this.state;
    this.setState({ post: <Post num={id} /> });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ id: event.target.value });
  }

  render() {
    const { post } = this.state;
    const { id } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Введите ID поста, который вы хотите увидеть!
          {' '}
          <br />
          На сайте имеется всего-лишь 100 постов, ID [1;100]
          {' '}
          <br />
          <input id="inputArea" type="text" value={id} onChange={this.handleChange} />
          <input id="submitData" type="submit" value="Отправить" />
          <br />
          Результат:
          <br />
          {post}
        </form>
      </div>
    );
  }
}

export default Ability;
