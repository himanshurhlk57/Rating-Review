import React from "react";
import img from "./domenico-loia-EhTcC9sYXsw-unsplash.jpg";
import "./card.css";

function Card() {
  return (
    <div className="cardWrapper">
      <img className="cardImg" src={img} alt="" />
      <h2 className="movieDetail title">Title: Legacies</h2>
      <h2 className="movieDetail">Rating: 8.0🌟</h2>
      <h2 className="movieDetail">Rate Count 1897</h2>
      <h2 className="movieDetail">Release Date: 2018-10-25</h2>
    </div>
  );
}

export default Card;
