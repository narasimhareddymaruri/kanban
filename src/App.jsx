import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Board from "./Board";

const App = () => {
  return (
    <div>
      <Navbar />
      <Board />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
