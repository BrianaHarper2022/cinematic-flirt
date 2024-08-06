import React from "react";
import "../styles/PrivacyAndSafety.css";

export default function PrivacyAndSafety() {
    return (
        <div className="privacy-and-safety">
            <h1 className="text-center">Privacy & Safety</h1>
            <p className="date"><strong>Effective Date:</strong> 08/06/2024</p>
            <h3>1. Privacy</h3>
            <p>At Cinematic Flirt, your privacy is our priority. We are committed to protecting your personal information.</p>
            <ul>
                <li><strong>Data Collection:</strong> We collect basic personal information such as name, email, and preferences to provide and improve our services.</li>
                <li><strong>Data Usage:</strong> Your information is used to match you with potential partners, communicate with you, and enhance your experience on our platform.</li>
                <li><strong>Data Security:</strong> We implement security measures to protect your data from unauthorized access, use, or disclosure.</li>
                <li><strong>Third-Party Sharing:</strong> We do not sell your personal information to third parties. We may share data with service providers to support our operations, all under strict confidentiality agreements.</li>
            </ul>
            <h3>2. Safety</h3>
            <p>Your safety is our top concern. Follow these guidelines to ensure a safe experience:</p>
            <ul>
                <li><strong>Protect Your Information:</strong> Do not share sensitive personal details such as your home address or financial information.</li>
                <li><strong>Meet Safely:</strong> Arrange to meet in public places and inform a friend or family member about your plans.</li>
                <li><strong>Report Issues:</strong> If you encounter suspicious or inappropriate behavior, report it to us immediately using the in-app reporting feature.</li>
            </ul>
            <h3>3. User Responsibilities</h3>
            <ul>
                <li><strong>Respect Others:</strong> Treat other users with respect and kindness. Harassment, discrimination, or harmful behavior is not tolerated.</li>
                <li><strong>Profile Accuracy:</strong> Ensure your profile information is accurate and truthful.</li>
            </ul>
            <h3>4. Changes to This Policy</h3>
            <p>We may update this policy occasionally. Any changes will be posted on this page with an updated effective date.</p>
            <p>For questions or concerns, please contact us at <a href="mailto:support@cinematicflirt.com">support@cinematicflirt.com</a>.</p>
        </div>
    )
}