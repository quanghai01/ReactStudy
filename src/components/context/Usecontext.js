import React, { createContext, useState } from "react";
import ContentText from "./ContentText";

//1.creat context
//2. Provider
//3.Consumer
export const ThemeContext = createContext();

const UseContext = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: "20px" }}>
        <button onClick={handleTheme}>Toggle Themes</button>
        <ContentText></ContentText>
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContext;
