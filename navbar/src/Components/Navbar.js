import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <header className="header">
        <ul>
          <li>
            <img src="images/kjd.png" alt="logo" className="logo_image" />
          </li>
          <div className="menu">
            <li className="list">
              <a href="www.google.com">Home</a>
            </li>
            <li className="list">
              <a href="www.google.com">About</a>
            </li>
            <li className="list">
              <a href="www.google.com">Gallery</a>
            </li>
            <li className="list">
              <a href="www.google.com">Services</a>
            </li>
            <li className="list">
              <a href="www.google.com">Contact</a>
            </li>
          </div>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
