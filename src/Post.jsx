import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
      userId: null,
      id: null,
      title: null,
      body: null,
    };
  }

  componentDidMount() {
    const { num } = this.state;
    this.fetchPost(num);
  }

  componentDidUpdate(prevProps) {
    const { num } = this.props;
    if (num !== prevProps.num) {
      this.fetchPost(num);
    }
  }

  fetchPost(props) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props}`)
      .then((response) => response.json())
      .then((result) => this.setState({
        num: props,
        ...result,
      }));
  }

  render() {
    const { num } = this.state;
    const { userId } = this.state;
    const { id } = this.state;
    const { title } = this.state;
    const { body } = this.state;
    return (
      <div className="itro">
        <p className="Joke">
          <b>
            Случайный Пост №
            {num}
          </b>
        </p>
        <ul>
          <li>
            UserId:
            { userId}
          </li>
          <li>
            Id:
            { id}
          </li>
          <li>
            Title:
            { title}
          </li>
          <li>
            Body:
            { body}
          </li>
        </ul>
      </div>
    );
  }
}

Post.propTypes = {
  num: PropTypes.number,
};

Post.defaultProps = {
  num: 0,
};
export default Post;
