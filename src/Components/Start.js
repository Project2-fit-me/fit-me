import "./Start.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Images/fitMeLogo.svg";
import video from "./Images/video.mp4";

function Start() {
  return (
    <div className="start">
      <video id="backgroundVideo" autoPlay="autoplay" loop="loop" muted="muted">
        <source src={video} type="video/mp4" />
      </video>
      <div className="logo">
        <Logo className="logoSize" />
      </div>
      <p className="keepMoving">we keep moving</p>

      <div>
        <Link
          to="/body-part"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="button">Start</button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default Start;
