import React, { Component } from "react";
import PropTypes from 'prop-types';


class ContactUs extends Component {
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
ContactUs.defaultProps = {
    name: 'xx',	
};

ContactUs.propTypes = {
    name: PropTypes.string,
};


export default ContactUs;