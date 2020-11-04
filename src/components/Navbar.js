import logo from '../logo.svg';
import React, { Component } from "react";
import PropTypes from 'prop-types';


class Navbar extends Component {
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
Navbar.defaultProps = {
    name: 'xx',	
};

Navbar.propTypes = {
    name: PropTypes.string,
};


export default Navbar;