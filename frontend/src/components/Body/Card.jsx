import React from "react";
import img from "./domenico-loia-EhTcC9sYXsw-unsplash.jpg";
import "./card.css";

function Card({ movie }) {
  return (
    <div className="cardWrapper">
      <img
        className="cardImg"
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt=""
      />
      <h2 className="movieDetail title">{movie.title}</h2>
      <h2 className="movieDetail">Rating : {movie.vote_average}🌟</h2>
      <h2 className="movieDetail">Rate Count : {movie.vote_count}</h2>
      <h2 className="movieDetail">Release Date : {movie.release_date}</h2>
    </div>
  );
}

export default Card;
