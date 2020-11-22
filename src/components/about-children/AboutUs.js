
import React, { Component } from "react";
import "./AboutUs.css";
// import about from "./about.jpg";

class AboutUs extends Component {

  render() {
    return (
      <div className="aboutUs">
        <div className="crop">{/* <ißmg src={about} alt="srfdf" /> */}</div>
        <div className="text">
          <h2>About Us</h2>
          <p className="p1">
            OUR PURPOSE IS TO INSPIRE ALL HUMAN BEINGS TO BE THEIR GREATEST
            POSSIBLE SELVES, INSIDE AND OUT.{" "}
          </p>
          <p>
            {" "}
            We’ve collaborated with hundreds of leading experts in the fitness
            and wellness space to obtain the most up-to-date, unbiased, and
            credible information for our readers and viewers.
          </p>
          <p>
            We experiment by putting every piece of advice to the test
            ourselves.
          </p>
          <p>
            Pulling from our research and personal experience, we share
            ecercises and videos across the spectrum of fitness.
          </p>
          <p>
            We also produce comprehensive fitness individual plans for strength,
            conditioning, weight loss, athletic performance, longevity, contact
            us for more private plans.
          </p>
          <p>
            As seen in Men’s Journal, Women’s Running, Muscle & Fitness, Shape,
            Robert Irvine Magazine, Spartan Life, Redbook, and MSN
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;