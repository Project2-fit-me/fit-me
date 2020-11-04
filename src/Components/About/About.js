import "./About.css";
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Link to="/"> Back</Link>
      <div className="AboutUs">
        <h1>About Us</h1>
        <p>We aim to </p>
      </div>
      <div className="ContactUs">
        <h1>Contact Us</h1>
        <p>+4524345345</p>
      </div>
      <div className="SocialMedia">
        <h4>Follow Us </h4>
        <a></a>
      </div>
    </div>
  );
}

export default About;
