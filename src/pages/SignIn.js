import React from "react";
import '../styles/SignIn.css';

export default function SignIn() {
    
    function handleSignIn(event) {
        event.preventDefault();
        alert("👏You're signed in!👏");
    }

    return (
        <div className="SignIn-container">
            <div className="box row justify-content-center">
                <div className="col">
                    <h2>Sign In</h2>
                        <form>
                            <div>
                                <input className="user-info" type="text" placeholder="Email" required/>
                                <input className="password" type="password" placeholder="Password" minLength="8" required/>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="remember-me" id="remember-me" defaultChecked />
                                <label className="form-check-label" htmlFor="remember-me">Remember Me</label>
                            </div>
                            <div>
                                <button type="button" className="btn btn-light submit-button" onClick={handleSignIn}>Sign In</button>
                            </div>
                        </form>
                                <p>Forgot password?</p>
                                <p className="Sign-up-link">New to Cinematic Flirt? Sign up now.</p>
                </div>     
            </div>
        </div>
    )
}