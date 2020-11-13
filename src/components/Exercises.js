import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Exercises.css';

import ExercisesHeader from './exercises-children/ExercisesHeader';
import ExercisesList from './exercises-children/ExercisesList';
import ExercisesCardDetailed from "./exercises-children/ExercisesCardDetailed";


class Exercises extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render() {
      return (
        <main>
          <ExercisesHeader /> 
          <ExercisesList>
            <ExercisesCardDetailed />
          </ExercisesList>  
        </main>
      );    
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