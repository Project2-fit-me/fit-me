import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ExercisesHeader.css";

class ExercisesHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Main-Header">
        <div className="containerV2">
          <ul className="Back-button">
            <li>
              <Link to="/bodypart" className="underlineV2">
                &#60; Back
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// specifying default props + expected prop types
ExercisesHeader.defaultProps = {
  name: "xx",
};

ExercisesHeader.propTypes = {
  name: PropTypes.string,
};

export default ExercisesHeader;
