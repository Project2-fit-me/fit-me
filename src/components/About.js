import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import AboutUs from "./about-children/AboutUs";
import ContactUs from "./about-children/ContactUs";
import SocialMedia from "./about-children/SocialMedia";

const About = () => (
  <div className="about">
    <Link to="/" className="back">
      {" "}
      Back{" "}
    </Link>
    <AboutUs />
    <ContactUs />
    <SocialMedia />
  </div>
);

export default About;
