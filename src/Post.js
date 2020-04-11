import React from "react";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }


  class Post extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        num: props.num,
        userId: null,
        id: null,
        title: null,
        body: null   
      };
    }

    fetchPost() {
      fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.num)
        .then(response => response.json())
        .then(result =>
          this.setState({
            userId: result.userId,
            id: result.id,
            title: result.title,
            body: result.body
          })
        )
    }

    async componentDidMount() {
      //let num = getRandomIntInclusive(1,100); // Это нужно, для выбора случайного поста в 
      /*let url = "https://jsonplaceholder.typicode.com/posts/" + this.state.num;
       await fetch(url)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              userId: result.userId,
              id: result.id,
              title: result.title,
              body: result.body
            });
          }
        )*/
        this.fetchPost()
    }


    render(){
      return(
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