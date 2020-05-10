import React from 'react';
import './App.css';
import Post from './Post.jsx';
import Ability from './Ability.jsx';
import Comment from './Comment.jsx';
import Album from './Album.jsx';
import Photo from './Photo.jsx';
import Todo from './Todo.jsx';
import User from './User.jsx';

function Signs(props) {
  // eslint-disable-next-line react/prop-types
  const { num } = props;
  return (
    <div>
      <h3>
        Пост №
        {num}
      </h3>
      <Post num={num} />
      <Comment />
      <Album />
      <Photo />
      <Todo />
      <User />
    </div>
  );
}

function App() {
  return (
    <div className="Border">
      <Ability />
      <ul>
        <li><Signs num="1" /></li>
        <li><Signs num="2" /></li>
        <li><Signs num="3" /></li>
      </ul>
    </div>
  );
}

export default App;
