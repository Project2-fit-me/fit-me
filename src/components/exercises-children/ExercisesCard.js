import React, { Component } from "react";
import PropTypes from 'prop-types';


class ExercisesCard extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render() {
      return (

        <div></div>

      );
    }
}


// specifying default props + expected prop types  
ExercisesCard.defaultProps = {
    name: 'xx',	
};

ExercisesCard.propTypes = {
    name: PropTypes.string,
};


export default ExercisesCard;