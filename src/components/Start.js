import React, { Component } from "react";
import PropTypes from 'prop-types';


class Start extends Component {
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
Start.defaultProps = {
    name: 'xx',	
};

Start.propTypes = {
    name: PropTypes.string,
};


export default Start;