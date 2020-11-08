import { ReactComponent as Logo } from './Media/fitMeLogo.svg';
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    constructor(props){
      super(props);
      this.state = {
      };
    }

    render() {
      return (

        <div>
          <nav className="Navbar">
            <Logo className="NavLogo" />
          </nav>
        </div>

      );
    }
}


export default Navbar;