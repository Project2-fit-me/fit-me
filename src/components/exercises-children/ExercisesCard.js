import React, { Component } from "react";
import PropTypes from 'prop-types';
import defaultPic from '../Media/no-images-available.jpg' 

class ExercisesCard extends Component {
    constructor(props){
      super();
      this.state = {
      };
    }

    render() {

      const {name, id, images, handleClick} = this.props;

      return (
        <div className={id!==undefined ? 'exercisesCard' : 'exercisesCardDefault'}>
          <img id={id} src={images[0]} alt={name} onClick={handleClick}/>
          <div> {name} </div>
        </div>
      );
    }
}


// specifying default props + expected prop types  
ExercisesCard.defaultProps = {
    name: 'Sorry, still working on it',
    images: [defaultPic],
};

ExercisesCard.propTypes = {
    name: PropTypes.string,
    images: PropTypes.array,
    handleClick: PropTypes.func,
    id: PropTypes.number,
};


export default ExercisesCard;