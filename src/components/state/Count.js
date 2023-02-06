//stateless functional component : component nhưng ko sử dụng state
// statefull functional component : component sử dụng state

import React, { useState } from "react";

function Count() {
  //1.enable state :bật  useState(initialize value)
  //2.initialize state: useState(false)  khởi tạo
  //3.reading state
  //4.update state

  const [count, setCount] = useState(1); // khởi tạo count = 1

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleReduce = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="count">
      <h1 className="setCount">{count}</h1>
      <button className="increase" onClick={handleIncrease}>
        Increase
      </button>
      <button className="reduce" onClick={handleReduce}>
        Reduce
      </button>
    </div>
  );
}

export default Count;
