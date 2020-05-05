import React from "react";

class Post extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
      userId: null,
      id: null,
      title: null,
      body: null
    };
  }

  fetchPost(props) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + props)
      .then(response => response.json())
      .then(result =>
        this.setState({
          num: props,
          ...result
        })
      )
  }

  componentDidMount() {
    console.log("this.state.num " + this.state.num)
    this.fetchPost(this.state.num)
    console.log("mount")
  }

  componentDidUpdate(prevProps) {
      console.log("update")
      console.log("props " + this.props.num + " preProps " + prevProps.num )
      if (this.props.num != prevProps.num) {
        console.log("create")
        this.fetchPost(this.props.num)
      }
  }

  render() {
    return (
      <div className="itro">
        <p className="Joke"><b>Случайный Пост №{this.state.num}</b></p>
        <ul>
          <li>UserId: {this.state.userId}</li>
          <li>Id: {this.state.id}</li>
          <li>Title: {this.state.title}</li>
          <li>Body: {this.state.body}</li>
        </ul>
      </div>
    )
  }
}

export default Post