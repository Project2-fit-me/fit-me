import React, { Component } from "react";
import PropTypes from 'prop-types';



class ExercisesHeader extends Component {
    constructor(props){
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <div>
          <figcaption> {this.props.bodypart} exercises </figcaption>          
        </div>
      );
    }
}


// specifying default props + expected prop types  
ExercisesHeader.defaultProps = {
    name: 'xx',	
};

ExercisesHeader.propTypes = {
    name: PropTypes.string,
};


export default ExercisesHeader;