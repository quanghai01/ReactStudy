import React, { useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(60);
  let timerId = useRef();
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("stop->", timerId.current);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default UseRef;
