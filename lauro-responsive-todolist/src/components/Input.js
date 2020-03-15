import React from 'react';
import './Input.css'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tasks: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    })
  }

  enterTask = (e) => {
    if (e.keyCode === 13) {
      this.submitTask();
    }
  };

  submitTask() {
    if (this.state.input !== '') {
      this.setState((state) => {
        this.props.callbackFromParent([...state.tasks, state.input])
        return (
          {
            tasks: [...state.tasks, state.input],
            input: '',
          })
      })
    }
  }

  render() {
    const { input } = this.state;
    return (
      <div className="inputContainer">
        <h1>Write.<br />Add.<br />Do.</h1>
        <div className='leftButtons'>
          <input placeholder="insert a task here" type="text" value={input} onChange={this.handleChange} onKeyUp={this.enterTask} />
          <button onClick={this.submitTask}>Add Task</button>
        </div>
        <p>To change your tasks' order, click on the arrow symbols that will appear on screen.<br />
          To mark a task as done, just double click on it. Undo it by double-clicking the task again.</p>
      </div>
    )
  }
}