import React, { useRef } from "react";
import "../css/Popup.css";
import Ingredient from "./Ingredient";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";

export default function Popup(props) {
  const modalContnet = useRef(null);

  function handleChange() {
    modalContnet.current.classList.add("hide-anim");

    setTimeout(() => {
      props.setShow((prevVal) => {
        return !prevVal;
      });
      modalContnet.current.classList.remove("hide-anim");
    }, 500);
  }

  return (
    <>
      <div
        style={{ display: props.show ? "flex" : "none" }}
        // className={`modal-container ${props.show ? "show-anim" : "hide-anim"} `}
        className="modal-container"
      >
        <div ref={modalContnet} className="modal-content">
          <div className="dummy">
            {props.ingredients.map((ingredient, index) => {
              return <Ingredient key={index} ingredient={ingredient} />;
            })}
          </div>
        </div>
        <button id="closeBtn" onClick={handleChange}>
          <ClearOutlinedIcon />
        </button>
      </div>
    </>
  );
}
