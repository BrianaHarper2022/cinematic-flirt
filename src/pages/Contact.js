import React from "react";
import "../styles/Contact.css";

export default function Contact() {
    function handleSubmit(event) {
        event.preventDefault();
        alert("Thank you for contacting us. We will contact you shortly!");
    }

    return (
        <div className="contact">
            <h1 className="m-4 text-center">Contact Us</h1>
            <h4 className="text-center">Online Inquiry</h4>
            <form>
                <input className="text" type="text" placeholder="Name" required/>
                <input className="email" type="email" placeholder="Email" required/>
                <input className="tel" type="tel" placeholder="Phone Number" required/>
                <textarea className="message" name="message" cols="30" rows="10" value="" placeholder="How Can We Help?" required></textarea>
                <button className="contact-button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}