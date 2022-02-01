import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="Card" draggable="true">
        {props.children}
      </div>
    </>
  );
}

export default Card;
