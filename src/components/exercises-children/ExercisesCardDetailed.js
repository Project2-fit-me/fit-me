import React, { Component } from "react";
import PropTypes from 'prop-types';



class ExercisesCardDetailed extends Component {
    constructor(props){
      super();
      this.state = {
      };
    }

    render() {
      const {results, handleClick} = this.props;
      return (
        <div className='exercisesCardDetailed'>
          <img src={results.images[0]} alt={results.name} />
          <div> {results.name} </div>
          <div> {results.description} </div>
        </div>
      );
    }
}


ExercisesCardDetailed.propTypes = {
    results: PropTypes.object,
    handleClick: PropTypes.func
};


export default ExercisesCardDetailed;