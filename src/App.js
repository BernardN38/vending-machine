import React from "react";
import { Route, Routes } from "react-router-dom";
import VendingMachine from "./Components/VendingMachine.js";
import  Chips from "./Components/Chips"
import Cokes from "./Components/Coke"
import Chocolate from "./Components/Chocolate"
import "./App.css"
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/chocolate" element={<Chocolate />} />
      <Route path="/coke" element={<Cokes />} />
    </Routes>
  </div>
  );
}

export default App;
