import React from "react";
import PropTypes from 'prop-types';

const ExercisesHeader = ({category}) => <figcaption> {category} exercises </figcaption>;     

ExercisesHeader.propTypes = {
  category: PropTypes.string,
};

export default ExercisesHeader;