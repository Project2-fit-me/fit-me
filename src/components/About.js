import React, { Component } from "react";
import PropTypes from 'prop-types';

import AboutUs from './about-children/AboutUs';
import ContactUs from './about-children/ContactUs';
import SocialMedia from './about-children/SocialMedia';


class About extends Component {
    constructor(props){
      super(props);
      this.state = {

      };
    }

    render() {
      return [<AboutUs />, <ContactUs />, <SocialMedia />];
    }
}



// specifying default props + expected prop types  
About.defaultProps = {
    name: 'xx',	
};

About.propTypes = {
    name: PropTypes.string,
};


export default About;