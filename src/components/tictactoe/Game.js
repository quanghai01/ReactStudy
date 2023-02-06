import React, { useState } from "react";
import { Winner } from "../../helper";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = Winner(board);
  const handleClick = (index) => {
    const boardCoppy = [...board];
    if (winner || boardCoppy[index]) return;
    boardCoppy[index] = xIsNext ? "X" : "O";

    setBoard(boardCoppy);
    setXIsNext(!xIsNext);
  };
  const handleReset = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div className="game">
      <Board cells={board} onClick={handleClick}></Board>
      {`${winner ? `Winner is  ${winner === "X" ? "X" : "O"}` : ""}`}

      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
};

export default Game;
