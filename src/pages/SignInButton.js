import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignInButton.css";

export default function AccessibleButton() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/SignIn");
    }
    return (
        <div>
            <button className="SignInButton"type="button" onClick={handleClick}>Sign In</button>
        </div>
    )
}