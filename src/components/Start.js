import './Start.css';
import { ReactComponent as Logo } from "./Media/fitMeLogo.svg";
import { Link } from "react-router-dom";
import video from "./Media/video.mp4";


function Start() {
  return (
    <div className="start">
      <video id="backgroundVideo" autoPlay="autoplay" loop="loop" muted="muted">
        <source src={video} type="video/mp4" />
      </video>
      <div className="logo">
        <Logo className="logoSize" />
        <p className="keepMoving">We keep moving</p>
      </div>

      <div>
        <Link
          to="/bodypart"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="button">Start</button>
        </Link>{" "}
      </div>
    </div>
  );
}


export default Start;