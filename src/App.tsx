import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getTasks } from "./firebase";

function App() {
  return (
    <div className="App">
      <div className="SW-update-dialog"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AAAAAAAA Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getTasks}>AAAAAAAAA</button>
      </header>
    </div>
  );
}

export default App;