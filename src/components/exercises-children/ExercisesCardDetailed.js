import React, { Component } from "react";
import PropTypes from 'prop-types';



class ExercisesCardDetailed extends Component {
    constructor(props){
      super();
      this.state = {
      };
    }

    render() {
      return (
        <div>

        </div>
      );
    }
}


// specifying default props + expected prop types  
ExercisesCardDetailed.defaultProps = {
    name: 'xx',	
};

ExercisesCardDetailed.propTypes = {
    name: PropTypes.string,
};


export default ExercisesCardDetailed;