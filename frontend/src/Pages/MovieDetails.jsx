import React from "react";
import Footer from "../components/Footer/Footer";
import DetailHeader from "../components/MovieDetail/DetailHeader";
import MovieDetail from "../components/MovieDetail/MovieDetail";

function MovieDetails() {
  return (
    <div>
      <DetailHeader />
      <MovieDetail />
      <Footer />
    </div>
  );
}

export default MovieDetails;
