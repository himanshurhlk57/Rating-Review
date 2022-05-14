import React from "react";
import "./header.css";
import searchSvg from "./search-24px.svg";

function Header() {
  return (
    <div className="headerWrapper">
      <div className="headerHeading">
        <span>MovieYard🎦</span>
      </div>
      <div className="headerSearch">
        <input className="inputField" type="text" placeholder="Search for movies" />
        <img type="submit" src={searchSvg} alt="" className="searchImg" />
      </div>
      <div className="headerLogin">
        <span>Login/Signup</span>
      </div>
    </div>
  );
}

export default Header;
