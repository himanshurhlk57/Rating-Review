import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState("");
  const [videoDetail, setVideoDetail] = useState("");

  const fetchMovieDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-us`
    );
    const data = await response.json();
    setMovieDetails(data);
  };

  const videoDetails = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const data = await response.json();
    setVideoDetail(data.results[0]?.key);
  };

  useEffect(() => {
    fetchMovieDetails();
    videoDetails();
    // eslint-disable-next-line
  }, []);

  console.log(movieDetails);

  return (
    <div>
      <img src="" alt="" />
      <h1>Title</h1>
      <h1>Subtitlee</h1>
    </div>
  );
}

export default MovieDetail;
