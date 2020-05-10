import React from 'react';
import './App.css';
import Post from './Post';
import Ability from './Ability';
import Comment from './Comment';
import Album from './Album';
import Photo from './Photo';
import Todo from './Todo';
import User from './User';

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
