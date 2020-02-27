import React, { Component } from 'react';
import './Board.css'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X',
      gameEnded: false,
      board: Array(9).fill('')
    }
    this.checkWinner = this.checkWinner.bind(this);
    this.checkSpaces = this.checkSpaces.bind(this);
  }

  squareMark(event) {
    const { dataset } = event.target;
    const { turn, board } = this.state;
    if (board[dataset.square] === '') {
      board[dataset.square] = turn;
      event.target.innerText = turn;
      this.setState({
        turn: turn === 'X' ? 'O' : 'X',
        board: board,
      })
    }
    console.log(board)
  }

  componentDidUpdate() {
    this.checkWinner();
    this.checkSpaces();
  }

  checkSpaces() {
    const { board, gameEnded } = this.state;
    const verifyBoard = board.every(item => item !== '');
    if (verifyBoard === true || gameEnded === false) {
      alert('Draw Game!');
    }
  }

  checkWinner() {
    const { board } = this.state
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    lines.forEach((item) => {
      if (board[item[0]] === 'X' && board[item[1]] === "X" && board[item[2]] === "X") {
        alert('Winner is X!');
      }
    });
  }

  render() {
    const { board } = this.state
    return (
      <div className="board" onClick={(e) => this.squareMark(e)}>
        {board.map((slot, index) => <div key={index} className="square" data-square={`${index}`} />)}
      </div>
    )
  }
}

export default Board
