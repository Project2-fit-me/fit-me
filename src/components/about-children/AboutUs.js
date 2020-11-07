import React, { Component } from "react";


class AboutUs extends Component {
    constructor(props){
      super(props);
      this.state = {
      };
    }

    render() {
      return (

        <div className="aboutUs">
          <h2>About Us</h2>
          <p>
            OUR PURPOSE IS TO INSPIRE ALL HUMAN BEINGS TO BE THEIR GREATEST
            POSSIBLE SELVES, INSIDE AND OUT. <br/> We’ve collaborated with
            hundreds of leading experts in the fitness and wellness space to
            obtain the most up-to-date, unbiased, and credible information for our
            readers and viewers. We experiment by putting every piece of advice to
            the test ourselves. Pulling from our research and personal experience,
            we share ecercises and videos across the spectrum of fitness. We also
            produce comprehensive fitness individual plans for strength,
            conditioning, weight loss, athletic performance, longevity, contact us
            for more private plans. As seen in Men’s Journal, Women’s Running,
            Muscle & Fitness, Shape, Robert Irvine Magazine, Spartan Life,
            Redbook, and MSN
          </p>
        </div>

      );
    }
}


export default AboutUs;