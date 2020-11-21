import React, { Component } from "react";
import PropTypes from 'prop-types';



class ExercisesHeader extends Component {

    render() {
      return (
          <figcaption> {this.props.category} exercises </figcaption>          
      );
    }
}


ExercisesHeader.propTypes = {
  category: PropTypes.string,
};


export default ExercisesHeader;