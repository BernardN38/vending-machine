import React from "react";
import { Link } from "react-router-dom";
import "../css/Container.css"
function Coke() {
  return (
    <div className="container">
      <iframe
        src="https://giphy.com/embed/3o6Zt8JOPFB7g64mBO"
        width="480"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/cocacolamx-3o6Zt8JOPFB7g64mBO">
          via GIPHY
        </a>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Coke;
