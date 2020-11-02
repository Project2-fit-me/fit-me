import React, { Component } from "react";
import PropTypes from 'prop-types';


class Footer extends Component {
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
Footer.defaultProps = {
    name: 'xx',	
};

Footer.propTypes = {
    name: PropTypes.string,
};


export default Footer;