import React from "react";
import "./footer.css";
import githubIcon from "./img/github-brands.svg";
import linkedinIcon from "./img/linkedin-brands.svg";
import twitterIcon from "./img/twitter-brands.svg";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <hr style={{ marginBottom: "7px" }} />
        <h2>Made with 💗 by Himanshu</h2>
        <div class="icons">
          <a href="" target="_blank">
            <img class="icon" src={githubIcon} alt="githubIcon" />
          </a>
          <a href="#" target="_blank">
            <img class="icon" src={linkedinIcon} alt="linkedinIcon" />
          </a>
          <a href="#" target="_blank">
            <img class="icon" src={twitterIcon} alt="twitterIcon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
