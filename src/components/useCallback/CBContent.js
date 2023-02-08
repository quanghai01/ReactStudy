import React, { useCallback, useState } from "react";
import UseCB from "./UseCB";

const CBContent = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);
  return (
    <div>
      <h1 className="title">Hook UseCallBack</h1>
      <h1>{count}</h1>
      <UseCB onIncrease={handleIncrease}></UseCB>
    </div>
  );
};

export default CBContent;
