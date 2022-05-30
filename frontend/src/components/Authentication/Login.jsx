import React, { useState } from "react";
import "./login.css";
import DetailHeader from "../MovieDetail/DetailHeader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <DetailHeader />
      <div>
        <div className="login-wrapper">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">
              Email address
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </label>
            <label htmlFor="password">
              Password
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </label>
            <div>
              <button>TRY TEST CREDENTIALS</button>
            </div>
            <div>
              <button>LOGIN</button>
            </div>

            <small>
              New to MovieYard? <span>Sign up now</span>
            </small>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
