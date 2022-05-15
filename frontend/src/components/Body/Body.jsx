import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./body.css";

const API_TRENDING =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=7ca4a52d69bb502d564f07dcfac83f2c&language=en-US&page=1";

function Body() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(API_TRENDING);
      const data = await response.json();
      setMovie(data.results);
    }
    fetchApi();
  }, []);

  console.log(movies);

  return (
    <div className="bodyWrapper">
      {movies &&
        movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
    </div>
  );
}

export default Body;
