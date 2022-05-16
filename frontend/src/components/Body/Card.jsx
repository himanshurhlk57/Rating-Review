import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ movie }) {
  const { id, title, poster_path, vote_average, vote_count, release_date } =
    movie;
  return (
    <div className="cardWrapper">
      <Link to={`/movies/${id}`}>
        <img
          className="cardImg"
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
      </Link>
      <h2 className="movieDetail title">{title}</h2>

      <h2 className="movieDetail">Rating : {vote_average}🌟</h2>
      <h2 className="movieDetail">Rate Count : {vote_count}</h2>
      <h2 className="movieDetail">Release Date : {release_date}</h2>
    </div>
  );
}

export default Card;
