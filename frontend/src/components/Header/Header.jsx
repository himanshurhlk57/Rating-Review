import React, { useState } from "react";
import "./header.css";
import searchSvg from "./search-24px.svg";
import { useContext } from "react";
import MovieContext from "../../context/MovieContext";

function Header() {
  const [searchText, setSearchText] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);

  const { setMovie } = useContext(MovieContext);

  async function fetchSearchText(params) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7ca4a52d69bb502d564f07dcfac83f2c&language=en-US&query=${searchText}&page=1&include_adult=false`
      );
      const data = await response.json();
      setSearchedMovie(data.results);
      console.log("api called");
    } catch (err) {
      console.log(err);
    }
  }

  if (searchedMovie.length !== 0) {
    setMovie(searchedMovie);
  }

  return (
    <>
      <div className="headerWrapper">
        <div className="headerHeading">
          <span onClick={() => window.scroll(0, 0)}>MovieYard🎦</span>
        </div>
        <div className="headerSearch">
          <input
            className="inputField"
            type="text"
            placeholder="Search for movies"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <img
            onClick={fetchSearchText}
            src={searchSvg}
            alt=""
            className="searchImg"
          />
        </div>
        <div className="headerLogin">
          <span>Login/Signup</span>
        </div>
      </div>
    </>
  );
}

export default Header;
