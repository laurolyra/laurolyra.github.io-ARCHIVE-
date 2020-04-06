import React from 'react';
import './App.css';

// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

function Greeting() {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, changeName] = React.useState('');

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={(e) => changeName(e.target.value)} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App;
