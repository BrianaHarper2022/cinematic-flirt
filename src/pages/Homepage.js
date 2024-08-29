import React from "react";
import HomepageButton from "./HomepageButton";
import Homepage2 from "./Homepage2";
import "../styles/Homepage.css";

export default function Homepage() {
    return (
        <div>
            <header>
                <div className="Homepage">
                    <h3>Cinematic Flirt</h3>
                    <h1>Connect based on your favorite movies</h1>
                    <h2>Match anywhere. Watch anytime</h2>
                    <HomepageButton />
                </div>
            </header>
                <div>
                    <Homepage2 />
                </div>
        </div>
    )
}