import React from "react";
// import "./Button.scss";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={`${styles.button} ${props.se ? styles.buttonSe : ""}`}>
      {props.children}
    </button>
  );
};

export default Button;
