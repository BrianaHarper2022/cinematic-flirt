import React from "react";
import '../styles/SignIn.css';

export default function SignIn() {
    
    function handleSignIn() {
        alert("👏You're signed in!👏");
    }

    return (
        <div className="SignIn">
            <div className="box">
                        <h2>Sign In</h2>
                <form>
                    <div>
                        <input className="user-info" type="text" placeholder="Email" />
                        <input className="password" type="password" placeholder="Password" minlength="8" required/>
                        <input type="checkbox" name="remember-me" id="remember-me" defaultChecked />
                        <label className="remember-me" htmlFor="remember-me">Remember Me</label>
                    <div>
                        <input onClick={handleSignIn} className="submit-button" type="submit" value="Sign In" />
                    </div>
                    </div>
                </form>
                <p>Forgot password?</p>
                <p className="Sign-up-link">New to Cinematic Flirt? Sign up now.</p>
            </div>
        </div>
    )
}