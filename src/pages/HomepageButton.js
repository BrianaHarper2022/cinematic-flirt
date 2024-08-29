import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/HomepageButton.css';

export default function HomepagepButton() {
    const navigate = useNavigate();
    
    function handleClick () {
        navigate("/LoginSignup");
    }
    
    return (
        <button className="HomepageButton" type="button" onClick={handleClick}>Sign In</button>
    )
}