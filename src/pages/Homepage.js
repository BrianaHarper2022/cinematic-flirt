import React from "react";
import SignInButton from "./SignInButton";
import "../styles/Homepage.css";

export default function Homepage() {
    return (
        <div className="Homepage">
            <h3>Cinematic Flirt</h3>
            <h1>Connect based on your favorite movies</h1>
            <h2>Match anywhere. Watch anytime</h2>
            <SignInButton />
        </div>
    )
}