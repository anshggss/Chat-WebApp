import React, { useState } from "react";
import "./LoginPage.css";
import { useUser } from "../../data/UserContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { username, setUsername } = useUser();
  const navigate = useNavigate();

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleClick() {
    navigate("/chat");
  }

  return (
    <>
      <section>
        {" "}
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span>
        <div className="signin">
          <div className="content">
            <h2>Log In</h2>

            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  required
                  id="username"
                  value={username}
                  onChange={handleChange}
                />
                <i>Username</i>
              </div>

              <div className="links">
                {" "}
                <a href="#">If you dont have one, just type a new one</a>{" "}
                <a href="#"></a>
              </div>

              <div className="inputBox">
                {/* <input
                  type="submit"
                  value="Login"
                  id="submitButton"
                  onClick={handleClick}
                  className="loginButton"
                /> */}
                <input
                  type="submit"
                  id="submitButton"
                  onClick={handleClick}
                  className="loginButton"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
