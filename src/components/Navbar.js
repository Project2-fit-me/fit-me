import React from "react";
import { ReactComponent as Logo } from './Media/fitMeLogo.svg';
import "./Navbar.css";

const Navbar = () => (
        <div>
          <nav className="Navbar">
            <Logo className="NavLogo" />
          </nav>
        </div>
);

export default Navbar;