import React, { useState } from "react";
import '../styles/LoginSignup.css';

export default function LoginSignup() {
   const [action, setAction] = useState("Sign Up"); 
   

    return (
       <div className="LoginSignup-container">
            <div className="header">
                <div className="text-header">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <input type="text" placeholder="Name"/>
                    </div>
                )}
            <div className="input">
                <input type="email" placeholder="Email" />
            </div>
            <div className="input">
                <input type="password" placeholder="Password"/>
            </div>
            </div>
                {action === "Login" ? (
                    <div className="forgot-password">
                        Forgot Password? <span>Click Here!</span>
                    </div>
                ) : null}
            <div className="submit-container">
                <div className={action === "Login" ? "submit change" : "submit"} onClick={()=>{setAction("Sign up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit change" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
    </div>
    )
}