import React, { Component } from "react";
import PropTypes from "prop-types";

function ExercisesCard(props) {
  return (
    <div>
      <p>{props.name}</p>

      <img height="150px" width="150px" src={props.images[0].image} />
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
