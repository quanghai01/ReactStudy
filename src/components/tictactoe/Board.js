import React from "react";
import "./board.css";
import Cell from "./Cell";
const Board = (props) => {
  console.log(props);
  return (
    <div className="board">
      <div className="game-board">
        {props.cells.map((item, index) => (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
            color={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
          ></Cell>
        ))}
      </div>
    </div>
  );
};

export default Board;
