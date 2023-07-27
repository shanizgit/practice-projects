import React from "react";
import "../Styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <header className="header">
        <ul>
          <li>
            <h4 className="content">Content</h4>
          </li>
          <div className="side_menu">
            <li className="list">
              <a href="www.google.com">Top Review</a>
            </li>
            <li className="list">
              <a href="www.google.com">Download</a>
            </li>
            <li className="list">
              <a href="www.google.com">Gift code</a>
            </li>
            <li className="list">
              <a href="www.google.com">Settings</a>
            </li>
            <li className="list">
              <a href="www.google.com">Sign Out</a>
            </li>
          </div>
        </ul>
      </header>
    </div>
  );
}

export default Sidebar;
