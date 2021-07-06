import React, { useState } from "react";
import "../css/Recipe.css";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";

export default function Recipe(props) {
  const [show, setShow] = useState(false);

  function handleChange() {
    setShow((prevVal) => {
      return !prevVal;
    });
  }

  return (
    <>
      <div className="recipe-container">
        <img className="recipe-img" src={`${props.imgSrc}`} alt="img" />
        <p className="recipe-title">{props.name}</p>
        <div className="btns">
          <Button
            id="button"
            variant="outlined"
            color="primary"
            onClick={() => window.open(props.url)}
          >
            Recipe
          </Button>
          <Button
            id="button"
            variant="outlined"
            color="secondary"
            onClick={handleChange}
          >
            Ingredients
          </Button>
        </div>
        <Popup ingredients={props.ingredients} show={show} setShow={setShow} />
      </div>
    </>
  );
}
