import React from "react";
import '../styles/SignIn.css';

export default function SignIn() {
    return (
        <div className="SignIn">
            <div className="box">
                        <h2>Sign In</h2>
                <form>
                    <div>
                        <input className="user-info" type="text" placeholder="Email or mobile number" />
                        <input className="password" type="password" placeholder="Password" />
                        <input type="checkbox" name="remember-me" id="remember-me" defaultChecked />
                        <label className="remember-me" htmlFor="remember-me">Remember Me</label>
                    <div>
                        <input className="submit-button" type="submit" value="Sign In" />
                    </div>
                    </div>
                </form>
                <p>Forgot password?</p>
                <p className="Sign-up-link">New to Cinematic Flirt? Sign up now.</p>
            </div>
        </div>
    )
}