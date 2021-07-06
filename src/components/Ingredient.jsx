import React from "react";
import "../css/Ingredient.css";
export default function Ingredient(props) {
  const { text, foodCategory, image } = props.ingredient;
  return (
    <>
      <div className="ingredient-container">
        <img className="ing-img" src={image} alt="img" width="100%" />
        <div>
          <h4 className="ing-title">{foodCategory}</h4>
          <p className="ing-desc">{text}</p>
        </div>
      </div>
    </>
  );
}
