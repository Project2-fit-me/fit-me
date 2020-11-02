import React, { Component } from "react";
import PropTypes from 'prop-types';


class AboutUs extends Component {
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
AboutUs.defaultProps = {
    name: 'xx',	
};

AboutUs.propTypes = {
    name: PropTypes.string,
};


export default AboutUs;