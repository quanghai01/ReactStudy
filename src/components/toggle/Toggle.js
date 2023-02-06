import React, { useState } from "react";
import "./Toggle.css";
const Toggle = () => {
  const [on, setOn] = useState(false);

  const handleDisplay = () => {
    setOn(!on);
  };
  return (
    <div>
      <div
        className={`toggle ${on ? "active" : ""}`}
        id="toggle"
        onClick={() => {
          setOn(!on);
        }}
      >
        <div className={`toggle-main ${on ? "active" : ""}`}>
          <div className={`spinner ${on ? "active" : ""}`}></div>
        </div>
        <p
          className={`toggle-text ${on ? "active" : ""}`}
          id="display"
          onClick={handleDisplay}
          style={{ cursor: "pointer" }}
        >
          {on ? "On" : "Off"}
        </p>
      </div>
    </div>
  );
};

export default Toggle;
