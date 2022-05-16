import React, { useContext } from "react";
import Card from "./Card";
import "./body.css";
import Pagination from "../Pagination/Pagination";
import MovieContext from "../../context/MovieContext";

function Body() {
  const { movies, page, setPage } = useContext(MovieContext);

  return (
    <>
      <div className="bodyWrapper">
        {movies &&
          movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default Body;
