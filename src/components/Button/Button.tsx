import React, { useState } from "react";
import "./Button.css";
const Button = () => {
  const [clicked, setClicked] = useState(0);
  return (
    <button className={"px-10 py-2.5 border border-red-600"} onClick={() => {setClicked(clicked+1)}}>
      Clicked {clicked} times
    </button>
  );
};

export default Button;
