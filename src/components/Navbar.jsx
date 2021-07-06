import React from "react";
import "../css/Navbar.css";

export default function Navbar(props) {
  return (
    <header>
      <div className="logo-container">
        <img src="./hamburger.svg" alt="logo" />
        <p>
          Recepie <br /> Finder
        </p>
      </div>
      <div className="searchbar">
        <img src="./search-icon.svg" alt="img" />
        <input
          type="text"
          name="recipe"
          placeholder="Search recipe"
          value={props.recipe}
          onChange={(e) => props.setRecipe(e.target.value)}
        />
      </div>
    </header>
  );
}
