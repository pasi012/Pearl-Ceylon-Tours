import React, { useEffect } from "react";
import "../css/PrivacyPolicy.css";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when page loads
    }, []);

    return (
        <div className="privacy-wrapper">
            {/* Header */}
            <div className="privacy-hero">
                <div className="overlay"></div>
                <h1>Privacy Policy</h1>
                <p>Home &gt; Privacy Policy</p>
            </div>

            {/* Content */}
            <div className="privacy-container">
                <h2 className="privacy-title">PRIVACY POLICY</h2>
                <p className="privacy-text">
                    At Captain Ceylon Tours, we are committed to protecting the privacy and security of our clients’ personal information.
                    This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or make an inquiry.
                    By using our website, you consent to the practices described in this policy.
                </p>

                {/* Section 1 */}
                <div className="privacy-section">
                    <h3>1. Information We Collect</h3>
                    <p>
                        When you visit our website or make an inquiry, we may collect certain information about you, including: Personal identification information (such as your name, email address, phone number) provided voluntarily by you during inquiries or booking requests. Travel-related details, including preferences and special requests, necessary to tailor our services to your needs. Browsing information, such as your IP address, browser type, and device information, collected automatically using cookies and similar technologies.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="privacy-section">
                    <h3>2. Use of Information</h3>
                    <p>We may use the collected information for the following purposes: To respond to your inquiries and provide personalized travel services. To process bookings, reservations, and fulfill travel arrangements, including communication with service providers like hotels, transport services, and tour operators. To communicate with you regarding your travel plans, provide customer support, and respond to any additional requests. To improve our website, services, and user experience based on your feedback and browsing patterns. To detect and prevent fraud, unauthorized activities, or misuse of our website.</p>
                </div>

                {/* Section 3 */}
                <div className="privacy-section">
                    <h3>3. Information Sharing</h3>
                    <p>
                        We respect your privacy and do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                    </p>
                </div>

                {/* Section 4 */}
                <div className="privacy-section">
                    <h3>4. Trusted service providers:</h3>
                    <p>
                        We may share your information with third-party service providers who assist us in processing your travel bookings, payments, and delivering services. These providers are contractually obligated to handle your data securely and confidentially.
                    </p>
                </div>

                {/* Section 5 */}
                <div className="privacy-section">
                    <h3>5. Legal requirements:</h3>
                    <p>
                        We may disclose your information if required by law or in response to valid legal requests or orders.
                    </p>
                </div>

                {/* Section 6 */}
                <div className="privacy-section">
                    <h3>6. Data Security</h3>
                    <p>
                        We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </div>

                {/* Section 7 */}
                <div className="privacy-section">
                    <h3>7. Cookies and Tracking Technologies</h3>
                    <p>
                        We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and gather information about your preferences and interactions with our website. You have the option to disable cookies through your browser settings, but this may limit certain features and functionality of our website.
                    </p>
                </div>

                {/* Section 8 */}
                <div className="privacy-section">
                    <h3>8. Changes to the Privacy Policy</h3>
                    <p>
                        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised “last updated” date. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.
                    </p>
                </div>

                {/* Contact */}
                <div className="privacy-contact">
                    <h3>Contact Us</h3>
                    <p>
                        If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us using the information provided on our website.
                    </p>
                    <p className="email">
                        📧 <a href="mailto:pearlceylontours01@gmail.com">pearlceylontours01@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
