import React, { Component } from "react";
import PropTypes from 'prop-types';


import ExercisesHeader from './exercises-children/ExercisesHeader';
import ExercisesList from './exercises-children/ExercisesList';


class Exercises extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render() {
      return [<ExercisesHeader />, <ExercisesList />];
    }
}


// specifying default props + expected prop types  
Exercises.defaultProps = {
    name: 'xx',	
};

Exercises.propTypes = {
    name: PropTypes.string,
};


export default Exercises;