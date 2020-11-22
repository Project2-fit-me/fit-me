
import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {

  render() {
    return (
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
              className="textfield"
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
              className="textfield"
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
              className="textarea"
              id="message"
              name="message"
              rows="5"
              cols="25"
              placeholder="Add Message Here"
              required="required"
            ></textarea>
          </div>
          <p className="note">
            Please note: Due to our small team and for liability reasons, we are
            not able to provide answers to personal health or fitness questions
            or custom workout plans. For all other inquiries please allow up to
            24 hours for a response and please be aware that our customer
            service is typically closed on Saturday and Sunday. Thank you for
            understanding.
          </p>
          <div className="submitButton">
            <button type="submit">Submit Message</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;