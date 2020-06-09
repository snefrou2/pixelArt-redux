import React from "react";
import "./reset.css";
import Palette from "./components/Palette.jsx";
import Canevas from "./components/Canevas.jsx";

function App() {
  return (
    <div className="App">
      <Palette />
      <Canevas />
    </div>
  );
}

export default App;
