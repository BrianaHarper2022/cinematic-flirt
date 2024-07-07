import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <div>
        <nav>
            <ul>
        <li><Link to="/Homepage">Homepage</Link></li>
        <li><Link to="/SignIn">SignIn</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Support">Support</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Footer">Footer</Link></li>
        
        </ul>
        </nav>
    </div>
    )
}