import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div className="top_nav">
      <a className="active" href="#">
        Home
      </a>
      <a href="#">News</a>
      <a href="#">Contact</a>
      <a href="#">About</a>
    </div>
  );
}

export default NavBar;

