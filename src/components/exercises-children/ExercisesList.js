import React, { Component } from "react";
import PropTypes from 'prop-types';


import ExercisesCard from './ExercisesCard';


class ExercisesList extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    // how to pass the info (exercisesAPI) from the API? as props? key?
    render() {
      return exercisesAPI.map(item => <ExercisesCard key={exercisesAPI.id} />);
    }
}


// specifying default props + expected prop types  
ExercisesList.defaultProps = {
    name: 'xx',	
};

ExercisesList.propTypes = {
    name: PropTypes.string,
};


export default ExercisesList;