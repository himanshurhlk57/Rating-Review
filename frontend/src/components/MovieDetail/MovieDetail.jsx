import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";
import MovieDetailCarousel from "../Carousel/MovieDetailCarousel.jsx";

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
    setVideoDetail(data.results[0]?.key || "not available");
  };

  useEffect(() => {
    fetchMovieDetails();
    videoDetails();
    // eslint-disable-next-line
  }, []);

  const {
    id,
    backdrop_path,
    overview,
    release_date,
    title,
    vote_average,
    vote_count,
    tagline,
  } = movieDetails;

  return (
    <>
      <div className="firstRowWrapper">
        <div className="movieDetailss">
          <div className="innerText">
            <h3 className="innerTitle">
              Title : {title} <br /> <small>{tagline && tagline}</small>
            </h3>
            <h3 className="innerDate">Release date : {release_date}</h3>
          </div>
          <div className="innerOverview">
            <p>
              <b>Overview</b> : {overview}
            </p>
          </div>
        </div>

        <div className="movieIframe">
          <iframe
            className="youtubeVideo"
            src={`https://www.youtube.com/embed/${videoDetail}`}
            allowFullScreen="allowFullScreen"
            frameBorder="0"
          ></iframe>
          {/* <a
            rel="noreferrer"
            target="_blank"
            href={`https://www.youtube.com/watch?v=${videoDetail}`}
          >
            <button className="trailerButton">Watch on youtube</button>
          </a> */}
        </div>
      </div>

      <div className="movieIframeWrapper">
        <div>
          <img
            className="movieImageBroad"
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt=""
          />
        </div>
        <div className="movieOverview">
          <div className="subMovieOverview">
            <h3>Average rating : {vote_average}/10⭐</h3>
            <h3>Vote Count : {vote_count}</h3>
            <h4 className="rateThis">Rate and review :</h4>
            <h4 className="giveStar">Stars selected</h4>
            <textarea name="" id="" cols="45" rows="6">
              Write a review
            </textarea>
            <div>
              <button className="postButton">POST</button>
            </div>
          </div>
          <div className="reviewAndRating">
            <h3>Audience reviews</h3>
            <h3>7⭐ Good movie</h3>
            <h3>8⭐ My favorite movie</h3>
            <h3>9⭐ Must watch</h3>
            <h3>10⭐ The best</h3>
          </div>
        </div>
      </div>

      <div className="movieCarousel">
        <h1 className="castAndCrewText">Cast</h1>
        <MovieDetailCarousel id={id} />
      </div>
    </>
  );
}

export default MovieDetail;
