import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [paraGraph, setParaGraph] = React.useState("");
  const handleClick = () => {
    setParaGraph(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };
  return (
    <div id="main">
      <paragraph id="para">{paraGraph}</paragraph>
      <button id="click" onClick={handleClick}>
        btn
      </button>
    </div>
  );
}

export default App;
