import React from "react";
import logo from "./logo.svg";
import { Button } from "./components/index";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Button text={"hello world"} color={"purple-text"} />
    </div>
  );
}

export default App;
