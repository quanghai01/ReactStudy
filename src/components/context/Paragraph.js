import React, { useContext } from "react";
import { ThemeContext } from "./Usecontext";
const Paragraph = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laudantium
        eos sit reprehenderit quae. Consectetur veritatis repellendus sunt,
        facilis omnis aspernatur debitis, dicta, voluptatibus error eaque
        dolorum? Aliquam, molestias reprehenderit!
      </p>
    </div>
  );
};

export default Paragraph;
