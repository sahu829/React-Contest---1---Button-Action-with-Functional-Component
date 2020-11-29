import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  // let paragraph="krishna"
  const [paragraph, setparagraph] = React.useState("");

  const handleClick = () => {
    let val =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    setparagraph(val);
  };
  return (
    <div id="main">
      <p>{paragraph}</p>
      <button id="click" onClick={handleClick}>
        btn
      </button>
    </div>
  );
}

export default App;
