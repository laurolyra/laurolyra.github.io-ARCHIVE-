import React from 'react';
import Todo from './components/Todo';
import Input from './components/Input';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentValue: [],
    }
  }
  
  myCallback = (dataFromChild) => {
    this.setState({
      parentValue: dataFromChild,
    })
  };

  render() {
    const { parentValue } = this.state;
    return (
      <div className="App">
        <h1>Welcome to your Task List</h1>
        <div className="mainContainer">
          <div className="leftContainer">
            <Input callbackFromParent={this.myCallback} />
          </div>
          <div className="rightContainer">
            <Todo taskList={parentValue} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
