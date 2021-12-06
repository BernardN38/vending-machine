import React from "react";
import { Link } from "react-router-dom";

function Display() {
  return <div className="Display">
        <Link to="/chips">Chips</Link>
        <Link to="/coke">Coke</Link>
        <Link to="/chocolate">Chocolate</Link>
  </div>;
}

export default Display;
