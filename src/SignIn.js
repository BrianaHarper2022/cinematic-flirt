import React from "react";
import './SignIn.css';

export default function SignUp() {
    return (
        <div className="SignIn">
            <h2>Sign In</h2>
            <form>
                <div>
                    <input className="user-info" type="text" placeholder="Email or mobile number" />
                </div>
                <div>
                    <input className="password" type="password" placeholder="Password" />
                </div>
                <div>
                <button className="submit-button">Sign In</button>
                </div>
            </form>
            <p>New to Cinematic Flirt? Sign up now.</p>
        </div>
    )
}