import React, { memo } from "react";

const UseCB = (props) => {
  console.log("re-render");
  return (
    <div>
      <button onClick={props.onIncrease}>Click Me</button>
    </div>
  );
};

export default memo(UseCB);
