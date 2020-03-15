import React from 'react';
import './Todo.css';

const save = JSON.parse(localStorage.getItem('Tasks' || '[]'));

function checkButtons(bool) {
  const buttons = document.querySelectorAll('.moveButton');
  buttons.forEach((item) => item.disabled = bool);
}

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyList: true,
    }
    this.changeLoad = this.changeLoad.bind(this);
  }
  componentDidMount() {
    if (save !== null) {
      this.changeLoad(save);
    } if (save !== null && save.length > 1) {
      checkButtons(false)
    } else {
      checkButtons(true)
    }
  }

  componentDidUpdate() {
    const { taskList } = this.props;
    if (save === null) {
      taskList.length > 1 ? checkButtons(false) : checkButtons(true);
    } else {
      save.length + taskList.length > 1 ? checkButtons(false) : checkButtons(true);
    };
  }

  changeLoad(param) {
    this.setState({
      emptyList: false,
      taskToLoad: param,
    })
  }

  selected(e) {
    const allTasks = document.querySelectorAll('.task');
    allTasks.forEach((item) => item.classList.remove('selected'));
    e.target.classList.add('selected');
  }

  checkDone(e) {
    e.target.classList.toggle('done');
  }

  moveUp() {
    const clicked = document.querySelector('.selected');
    if (clicked.previousElementSibling) {
      clicked.parentNode.insertBefore(clicked, clicked.previousElementSibling);
    }
  }

  moveDown() {
    const clicked = document.querySelector('.selected');
    if (clicked.nextElementSibling) {
      clicked.parentNode.insertBefore(clicked.nextElementSibling, clicked);
    }
  }

  removeAll() {
    const taskList = document.querySelector('.taskList');
    if (taskList.children.length === 0) {
      alert('Your task list is empty!')
    } else {
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
      }
      localStorage.clear();
      checkButtons(true)
    }
  }

  removeDone() {
    const allTasks = document.querySelectorAll('.task');
    const taskDone = document.querySelectorAll('.done');
    taskDone.forEach((item) => item.remove());
    allTasks.length > 1 ? checkButtons(false) : checkButtons(true);
  }

  saveTasks() {
    document.querySelectorAll('.done').forEach((item) => item.remove());
    const allTasks = document.querySelectorAll('.task');
    let teste = []
    allTasks.forEach(function (item) {
      teste.push(item.innerText)
    })
    localStorage.setItem('Tasks', JSON.stringify(teste));
    alert('your tasks were saved!')
  }

  generateTasks(param) {
    return param.map((task, number) =>
      <p key={number} onDoubleClick={this.checkDone} onClick={this.selected} className='task'>
        {task}
      </p>);
  }

  render() {
    const { taskList } = this.props;
    const { emptyList } = this.state;
    return (
      <div className="taskComponent">
        <h1>Your tasks:</h1>
        <div className="taskList">
          {emptyList ? null : this.generateTasks(save)}
          {this.generateTasks(taskList)}
        </div>
        <br />
        <div className="taskButtons">
          <div className="arrowContainer">
            <button className="moveButton" onClick={this.moveUp}><strong>↑</strong></button>
            <button className="moveButton" onClick={this.moveDown}><strong>↓</strong></button>
          </div>
          <button onClick={this.removeAll}>Delete all</button>
          <button onClick={this.removeDone}>Delete done</button>
          <button onClick={this.saveTasks}>Save Tasks</button>
        </div>
      </div>
    )
  }
}
