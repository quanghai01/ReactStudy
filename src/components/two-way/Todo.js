import React, { useState } from "react";

const Todo = () => {
  const ListStorage = JSON.parse(localStorage.getItem("jobs"));

  const [job, setJob] = useState("");
  const [list, setList] = useState(ListStorage ?? []);
  const handleAdd = () => {
    setList([...list, job]);
    const jsonList = JSON.stringify([...list, job]);
    localStorage.setItem("jobs", jsonList);
    setJob("");
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setJob(e.target.value);
        }}
        value={job}
      />
      <button onClick={handleAdd}>Thêm</button>

      {list.map((job, index) => (
        <span key={index}>{job + " "}</span>
      ))}
    </div>
  );
};

export default Todo;
