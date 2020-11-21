import React, { Component } from "react";
import PropTypes from 'prop-types';
import ExercisesCardDetailed from "./ExercisesCardDetailed";
import defaultPic from '../Media/no-images-available.jpg' 

class ExercisesCard extends Component {
    constructor(props){
      super();
      this.state = {
      };
    }

    render() {
      return (
        <div className='exerciseSCard'>

        </div>
      );
    }
}


// specifying default props + expected prop types  
ExercisesCard.defaultProps = {
    name: 'No exercises/images available yet. Working on it.',
    images: [defaultPic]
};

ExercisesCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array
};


export default ExercisesCard;