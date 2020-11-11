import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialMedia.css";

class SocialMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="social-container">
        <div className="followTitle">
          <h3>Follow us</h3>
        </div>
        <div className="icons">
          <a href="https://www.youtube.com" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
