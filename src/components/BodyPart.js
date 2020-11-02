import React, { Component } from "react";
import PropTypes from 'prop-types';


class BodyPart extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render() {
      return (


      );
    }
}


// specifying default props + expected prop types  
BodyPart.defaultProps = {
    name: 'xx',	
};

BodyPart.propTypes = {
    name: PropTypes.string,
};


export default BodyPart;