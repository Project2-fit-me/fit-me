import React, { Component } from "react";
import PropTypes from 'prop-types';

import ExercisesCard from './ExercisesCard';



class ExercisesList extends Component {

    // how to pass the info (exercisesAPI) from the API? as props? key?
    render() {
        return (                         
          <>
            {this.props.results.length ?  
            this.props.results.map(el => <ExercisesCard key={el.id} {...el} />)
            :
            <ExercisesCard />
            }
          </>
        );
    }
}



ExercisesList.propTypes = {
    results: PropTypes.array,
};


export default ExercisesList;