import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
          <div className="navbar-container">
            <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
              <li className="logo li">Cinematic Flirt</li>
              <li className="link li"><Link to="/">Home</Link></li>
              <li className="link li"><Link to="/Support">Support</Link></li>
              <li className="link li"><Link to="/About">About</Link></li>
              <li className="link li"><Link to="/Contact">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
              &#9776; 
            </div>
          </div>
        </nav>
      );
    };