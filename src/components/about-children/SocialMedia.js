import React, { Component } from "react";
import PropTypes from 'prop-types';


class SocialMedia extends Component {
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
SocialMedia.defaultProps = {
    name: 'xx',	
};

SocialMedia.propTypes = {
    name: PropTypes.string,
};


export default SocialMedia;