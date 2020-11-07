import React, { Component } from "react";
import { Link } from "react-router-dom";
import './About.css';

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
      return (
        <div className='about'>
          <Link to="/"> Back </Link>
          <AboutUs />
          <ContactUs />
          <SocialMedia />
        </div>
      );
    }
}



export default About;