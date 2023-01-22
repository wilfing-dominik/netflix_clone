import React from "react";
import "../styles/BrowseMenu.css";

function BrowseMenu() {
  return (
    <ul className="browse-menu">
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">TV Shows</a>
      </li>
      <li>
        <a href="">Movies</a>
      </li>
      <li>
        <a href="">New & Popular</a>
      </li>
      <li>
        <a href="">My list</a>
      </li>
      <li>
        <a href="">Browse by languages</a>
      </li>
    </ul>
  );
}

export default BrowseMenu;
