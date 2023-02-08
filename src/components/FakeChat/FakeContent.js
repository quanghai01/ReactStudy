import React, { useState } from "react";
import FakeChat from "./FakeChat";

const FakeContent = () => {
  const [check, setCheck] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          backgroundColor: "red",
          color: "#fff",
          margin: "auto",
          height: "40px",
        }}
        onClick={() => setCheck(!check)}
      >
        FakeChat Button
      </button>
      {check && <FakeChat></FakeChat>}
    </div>
  );
};

export default FakeContent;
