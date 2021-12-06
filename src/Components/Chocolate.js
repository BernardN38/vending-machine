import React from "react";
import { Link } from "react-router-dom";

function Chocolate() {
  return (
    <div className="container">
      <iframe
        src="https://giphy.com/embed/cOWNPwDDh1tYs"
        width="480"
        height="347"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/cake-chocolate-matilda-cOWNPwDDh1tYs">
          via GIPHY
        </a>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Chocolate;
