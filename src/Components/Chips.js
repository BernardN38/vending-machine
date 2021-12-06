import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div className="container">
      <iframe
        src="https://giphy.com/embed/xUOxfaABfkwPSJ5M6A"
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/thegoodplace-season-1-xUOxfaABfkwPSJ5M6A">
          via GIPHY
        </a>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Chips;
