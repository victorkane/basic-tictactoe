import React, {useState} from 'react';
import './App.css';

const App = () => {
  const title = 'Play TicTacToe'
  return (
    <div className="App">
      <h2>{title}</h2>
      <Game />
    </div>
  );
}

const Square = (props) => {
  return (
    <button 
		  className="square" 
			onClick={props.onClick}
		>
      {props.value}
    </button>
  );
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(false)

  const handleClick = (i) => {
    const theSquares = squares.slice();
		theSquares[i] = 'X';
		theSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(theSquares);
    setXIsNext(!xIsNext);
  }

  const renderSquare = (i) => {
    return (
		  <Square 
			  value={squares[i]} 
				onClick={() => handleClick(i)}
		  />
		)
  }

	const status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

const Game = () => {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}

export default App;
