import React from 'react';
import './App.css';
import Post from './Post'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


class Comment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num: null,
      postId: null,
      id: null,
      name: null,
      email: null,
      body: null
    };
  }
async componentDidMount(){
    let num = getRandomIntInclusive(1,500); // Номер случайного комментария от 1 до 500
    let url = "https://jsonplaceholder.typicode.com/comments/" + num;
await fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            num: num,
            postId: result.postId,
            id: result.id,
            name: result.name,
            email: result.email,
            body: result.body
          });
        }
      )
  }
    render(){
      return(
        <div>
          <b>Случайный комментарий №{this.state.num}</b>
          <ul>
          <li>PostId: {this.state.postId}</li>
          <li>Id: {this.state.id}</li>
          <li>Name: {this.state.name}</li>
          <li>Email: {this.state.email}</li>
          <li>Body: {this.state.body}</li>
          </ul>
        </div>
      )
    }
}

class Album extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num: null,
      userId: null,
      id: null,
      title: null
    };
  }
async  componentDidMount(){
    let num = getRandomIntInclusive(1,100); // Номер случайного альбома 
    let url = "https://jsonplaceholder.typicode.com/albums/" + num;
 await   fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            num: num,
            userId: result.userId,
            id: result.id,
            title: result.title
          });
        }
      )
  }
    render(){
      return(
        <div>
          <b>Случайный альбом №{this.state.num}</b>
          <ul>
          <li>UserId: {this.state.userId}</li>
          <li>Id: {this.state.id}</li>
          <li>Title: {this.state.title}</li>
          </ul>
        </div>
      )
    }
}

class Photo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num: null,
      albumId: null,
      id: null,
      title: null,
      url: null,
      thumbnailUrl: null
    };
  }
 async componentDidMount(){
    let num = getRandomIntInclusive(1,5000); // Случайная фотография из 5000
    let url = "https://jsonplaceholder.typicode.com/photos/" + num;
  await  fetch(url)
      .then(res => res.json())
      .then(
        result => {
        this.setState({
          num: num,
          albumId: result.albumId,
          id: result.id,
          title: result.title,
          url: result.url,
          thumbnailUrl: result.thumbnailUrl
        });
       }
      )
    }
    render(){
      return(
        <div>
          <b>Случайное Фото №{this.state.num}</b>
          <ul>
          <li>AlbumId: {this.state.albumId}</li>
          <li>Id: {this.state.id}</li>
          <li>Title: {this.state.title}</li>
          <li>Url: {this.state.url}</li>
          <li>ThumbnailUrl: {this.state.thumbnailUrl}</li>
          </ul>
        </div>
      )
    }
}

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num: null,
      userId: null,
      id: null,
      title: null,
      completed: null,
    };
  }
async  componentDidMount(){
    let num = getRandomIntInclusive(1,200); // Случайный список дел из 200
    let url = "https://jsonplaceholder.typicode.com/todos/" + num;
 await   fetch(url)
    .then(res => res.json())
    .then(
      result => {
        this.setState({
          num: num,
          userId: result.userId,
          id: result.id,
          title: result.title,
          completed: result.completed
        });
      }
    )
  }
  render(){
    return(
      <div>
        <b>Случайный список дел №{this.state.num}</b>
        <ul>
          <li>UserId: {this.state.userId}</li>
          <li>Id: {this.state.id}</li>
          <li>Title: {this.state.title}</li>
          <li>Completed:  {this.state.completed}</li>
        </ul>
      </div>
    )
  }
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      username: null,
      email: null,
      address: {
        street: null,
        suite: null,
        city: null,
        zipcode: null,
        geo: {
          lat: null,
          lng: null
        }
      },
      phone: null,
      website: null,
      company: {
        name: null,
        catchPhrase: null,
        bs: null
      }  
    };
  }
 async componentDidMount(){
    let num = getRandomIntInclusive(1,10); // Случайный пользователь из 10
    let url = "https://jsonplaceholder.typicode.com/users/" + num;
 await   fetch(url)
    .then(res => res.json())
    .then(
      result => {
        this.setState({
          num: num,
          id: result.id,
          name: result.name,
          username: result.username,
          email: result.email,
          address: {
            street: result.address.street,
            suite: result.address.suite,
            city: result.address.city,
            zipcode: result.address.zipcode,
            geo: {
              lat: result.address.geo.lat,
              lng: result.address.geo.lng
            }
          },
          phone: result.phone,
          website: result.website,
          company: {
            name: result.company.name,
            catchPhrase: result.company.catchPhrase,
            bs: result.company.bs
          }
        });
      }
    )
  }
  render(){
    return(
      <div>
        <b>Случайный пользователь №{this.state.num}</b>
        <ul>
        <li>Id: {this.state.id}</li>
        <li>Name: {this.state.name}</li>
        <li>Username: {this.state.username}</li>
        <li>Email: {this.state.email}</li>
        <li>Address:
          <ul>
              <li>Street: {this.state.address.street}</li>
              <li>Suite: {this.state.address.suite}</li>
              <li>City: {this.state.address.city}</li>
              <li>Zipcode: {this.state.address.zipcode}</li>
              <li>Geo: 
                <ul>
                   <li>Latitude: {this.state.address.geo.lat}</li>
                   <li>Longitude: {this.state.address.geo.lng}</li>
                </ul>
                </li>
          </ul>
        </li>
        <li>Phone: {this.state.phone}</li>
        <li>Website: {this.state.website}</li>
        <li>Company:
          <ul>
              <li>Name: {this.state.company.name}</li>
              <li>CatchPhrase: {this.state.company.catchPhrase}</li>
              <li>Bs: {this.state.company.bs}</li>      
          </ul>
        </li>
        </ul>
      </div>
    )
  }
}

function Signs(props) {
  let postNum = getRandomIntInclusive(1, 10);
  console.log(postNum);
  return (
  <div>
  <h3>Пост №{props.num}</h3>
  <Post num = {props.num}/>
  <Comment/>
  <Album/>
  <Photo/>
  <Todo/>
  <User/>
  </div>
  );
}
function App() {
  return (
    <div  className="Border">
    <ul>
      <li><Signs num = "1"/></li>
      <li><Signs num = "2"/></li>
      <li><Signs num = "3"/></li>
    </ul>
    </div>
  );
}

export default App;

