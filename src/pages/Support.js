import React from "react";
import { Link } from "react-router-dom";
import "../styles/Support.css";
import { BsSearchHeart } from "react-icons/bs";


export default function Support() {
    return (
        <div>
            <div className="support-hero">
                <h1 className="text-center">Hi. How can we help?</h1>
            <div className="support-search-input-container">
                <BsSearchHeart className="support-search-icon"/>
                <input className="support-search" type="search" name="query" id="query" placeholder="Search" autoComplete="off" aria-label="Search"></input>
            </div>
            </div>
            <div className="d-flex justify-content-center">
                <ul>
                    <li className="support-link m-3"><Link to="/GettingStarted">Getting Started</Link></li>
                    <li className="support-link m-3"><Link to="/OurGuidelines">Our Guidelines</Link></li>
                    <li className="support-link m-3"><Link to="/PrivacyAndSafety">Privacy & Safety</Link></li>
                    <li className="support-link m-3"><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}