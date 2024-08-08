import React from "react";
import "../styles/Homepage2.css";
import HomepageDate from "../assets/HomepageDate.png";


export default function Homepage2() {
    return (
        <section>
            <div className="Homepage2">
                <div className="content">
                    <img src={HomepageDate} className="homepage-date img-fluid" alt="Date in Cinema" />
                    <div className="summary">
                        <h2 className="m-2 text-start">Make A Mov(i)e</h2>
                        <p className="m-2 text-start">Whether you're into rom-coms, thrillers, or sci-fi, Cinematic Flirt helps you find your perfect match based on your favorite flicks. Dive into the fun and let your love story unfold, one movie at a time!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}