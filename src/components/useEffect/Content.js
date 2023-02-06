import React from "react";
import { useState } from "react";
import Input from "./Input";

const Content = () => {
  // 1.useEffect(callback)
  //-goi callback moi khi component re-render
  //-goi callback sau khi component them vao DOM
  //2. useEffect(callback,[])
  //3.useEffect(callback,[deps])

  //  cả trong 3 trường hợp callback đều gọi sau khi mount
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="">
        <button
          style={{
            width: "200px",
            height: "50px",
            margin: "20px",
            backgroundColor: "green",
            color: "#fff",
          }}
          onClick={() => {
            setShow(!show);
          }}
        >
          Toggle
        </button>
        {show && <Input></Input>}
      </div>
    </div>
  );
};

export default Content;
