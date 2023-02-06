import React, { useState } from "react";

const Binding = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //   console.log(name);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    console.log(name + " ", email);
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name || ""}
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email || ""}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Binding;
