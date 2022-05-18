import "./detailHeader.css";
import { Link } from "react-router-dom";

function DetailHeader() {
  return (
    <>
      <div className="headerWrapper">
        <div className="headerHeading">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <span onClick={() => window.scroll(0, 0)}>MovieYard🎦</span>
          </Link>
        </div>
        <div className="headerLogin">
          <span>Login/Signup</span>
        </div>
      </div>
    </>
  );
}

export default DetailHeader;
