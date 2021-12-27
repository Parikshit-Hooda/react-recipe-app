import React from "react";
import "./RecipeTile.css";

function RecipeTile({ recipeProp }) {
  return (
    <div className="RecipeTile">
      <img
        className="recipeTile__img"
        src={recipeProp["recipe"]["image"]}
        alt={recipeProp["recipe"]["label"]}
      >
        {" "}
      </img>
      <p className="recipeTile__name">{recipeProp["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeTile;
