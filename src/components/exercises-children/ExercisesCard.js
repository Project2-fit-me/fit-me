import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ExercisesCard.css";

function ExercisesCard(props) {
  return (
    <div className="card">
      <p className="name">{props.name}</p>

      <img height="200vw" width="300vw" src={props.images[0].image} />
    </div>
  );
}

// specifying default props + expected prop types
ExercisesCard.defaultProps = {
  name: "xx",
};

ExercisesCard.propTypes = {
  name: PropTypes.string,
};

export default ExercisesCard;
