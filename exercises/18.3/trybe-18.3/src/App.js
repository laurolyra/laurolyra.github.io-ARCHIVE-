import React from 'react';
import './App.css';

// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

function Greeting() {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, changeName] = React.useState(''); 

  const handleChange = (event) => {
    changeName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App;
