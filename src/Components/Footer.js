import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () => {
    return (
        <div className="Main-footer">
            <div className="container">
                <ul className="Link">
                    <li>
                     <Link to="/about" className="underline">Contact Us</Link>
                    </li>
                </ul>
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} Fit-Me | All right reserved | Terms Of Service
                </p>
            </div>
        </div>
    )
}

export default Footer;
