import "./Start.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Images/fitMeLogo.svg";

function Start() {
  return (
    <div class="start">
      <Logo />
      <p>we keep moving</p>
      <button>
        <Link to="/body-part">Start</Link>{" "}
      </button>
    </div>
  );
}

export default Start;
