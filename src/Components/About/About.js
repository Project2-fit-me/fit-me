import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

function About() {
  return (
    <div>
      <Link to="/"> Back</Link>
      <div className="aboutUs">
        <h2>About Us</h2>
        <p>
          OUR PURPOSE IS TO INSPIRE ALL HUMAN BEINGS TO BE THEIR GREATEST
          POSSIBLE SELVES, INSIDE AND OUT. <br></br> We’ve collaborated with
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
      <div className="contactUs">
        <h2>Contact Us</h2>
        <p>
          Have a question about a product, feedback, or business inquiry for
          Fit-Me?
        </p>
        <div className="inputContainer">
          <div className="nameContainer">
            <label for="first_name">
              Full Name<sup>*</sup>
            </label>
            <input
              type="text"
              class="textfield"
              id="first_name"
              name="first_name"
              value=""
              required="required"
            ></input>
          </div>
          <div className="emailContainer">
            <label for="sender_email">
              Email Address<sup>*</sup>
            </label>
            <input
              type="email"
              class="textfield"
              id="sender_email"
              name="sender_email"
              value=""
              required="required"
            ></input>
          </div>
          <div className="messageContainer">
            <label for="message">
              Message<sup>*</sup>
            </label>
            <textarea
              class="textarea"
              id="message"
              name="message"
              rows="5"
              cols="25"
              placeholder="Add Message Here"
              required="required"
            ></textarea>
          </div>
          <p>
            Please note: Due to our small team and for liability reasons, we are
            not able to provide answers to personal health or fitness questions
            or custom workout plans. For all other inquiries please allow up to
            24 hours for a response and please be aware that our customer
            service is typically closed on Saturday and Sunday. Thank you for
            understanding.
          </p>
          <button
            type="submit"
            class="btn -main -large-only"
            id="single_click_submit"
          >
            Submit Message
          </button>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}

export default About;
