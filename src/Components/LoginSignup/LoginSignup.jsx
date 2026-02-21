import React, { useState } from "react";
import "./LoginSignup.css";

import userIcon from "../Assets/person.png";
import emailIcon from "../Assets/email.png";
import passwordIcon from "../Assets/password.png";

const LoginSignup = () => {
  const [mode, setMode] = useState("signup");
  const isSignup = mode === "signup";

  return (
    <div className="auth-background">
      <div className="planet"></div>
      <div className="shooting-star"></div>

      <div className="auth-card">
        <div className="auth-header">
          <h2>{isSignup ? "Sign Up" : "Login"}</h2>
          <div className="auth-underline"></div>
        </div>

        <div className={`form-wrapper ${isSignup ? "signup" : "login"}`}>
          {isSignup && (
            <div className="input-group slide">
              <img src={userIcon} alt="user" />
              <input type="text" placeholder="Full Name" />
            </div>
          )}

          <div className="input-group slide">
            <img src={emailIcon} alt="email" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-group slide">
            <img src={passwordIcon} alt="password" />
            <input type="password" placeholder="Password" />
          </div>

          {!isSignup && (
            <div className="forgot-password fade-in">
              Forgot password? <span>Reset</span>
            </div>
          )}
        </div>

        <div className="button-group">
          <button
            className={isSignup ? "btn active" : "btn"}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>

          <button
            className={!isSignup ? "btn active" : "btn"}
            onClick={() => setMode("login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;