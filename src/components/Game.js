import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from "./Square";

const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.
  function Game() {
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
      
    let next = 'O';
    if (xIsNext) {
        next = 'X';
    }

    function calculateWinner(board) {
        const threes = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
        let winner = null;
        threes.forEach(function(three) {
            if (board[three[0]] === 'X' && board[three[1]] === 'X' && board[three[2]] === 'X') {
                winner = 'X';
                return;
            } else if (board[three[0]] === 'O' && board[three[1]] === 'O' && board[three[2]] === 'O') {
                winner = 'O';
                return;
            } else {
                return;
            }
        })

        return winner;
    }

    let winner = calculateWinner(board);

    let handleClick = square => {
        if (winner != null || board[square] != null) {
            return;
        } else {
            board[square] = next;
            setBoard(board);
            setXisNext(!xIsNext);
            setStepNumber(stepNumber + 1);
        }
    }; 

    let jumpToStart = () => {
        setBoard([null, null, null, null, null, null, null, null, null]);
        setStepNumber(0);
        setXisNext(true);
    };

    let result = board => {
        if (winner != null) {
            return "Winner: " + winner;
        } else if (!board.includes(null)) {
            return "Tie Game";
        } else {
            return "Next Player: " + next;
        }
    };

    return (
      <>
         <h1>Tic Tac Toe</h1>
         <Board squares={board} onClick={i => handleClick(i)} />
         <div className='info-wrapper'>
            <div>
                <button onClick={() => jumpToStart()}>Go to Start</button>
            </div>
            <h3>{result(board)}</h3>
         </div>
      </>
  );

  }

  return Game();  
};
  
export default Game;
