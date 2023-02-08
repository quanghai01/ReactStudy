import React, { useState, useReducer } from "react";
// useReducer
//1.Init state : 0
//2. Actions: UP (state+1)   Down  (state-1)
//3. Reducer
//4. dipacth

//init
const initState = 0;

//Actions

const UP_ACTION = "up";
const DOWN_ACTION = "down";

//reducer

const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("invalid action");
  }
};
const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1 style={{ color: "red" }}>UseReducer</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(DOWN_ACTION);
        }}
      >
        Down
      </button>
      <button
        onClick={() => {
          dispatch(UP_ACTION);
        }}
      >
        Up
      </button>
    </div>
  );
};

export default UseReducer;
