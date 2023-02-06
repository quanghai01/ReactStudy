import React from "react";
import "./board.css";
const Cell = ({ value, onClick, color }) => {
  return (
    <div className={`game-cell ${color}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
