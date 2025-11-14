import { Link } from "react-router-dom";
import "../css/Footer.css";
import logo from "../assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTripadvisor, FaYoutube } from "react-icons/fa";
import tripAdvisor from "../assets/trip-advisior.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-about">
                    <img src={logo} alt="Go Lanka Explorers" className="footer-logo" />
                    <p>
                        Experience unforgettable journeys with our tour company, offering
                        personalized, eco-friendly adventures that celebrate cultural
                        diversity and natural beauty.
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/packages">PACKAGES</Link></li>
                        <li><Link to="/things-to-do">THINGS TO DO</Link></li>
                        <li><Link to="/destinations">DESTINATIONS</Link></li>
                        <li><Link to="/gallery">GALLERY</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/tailor-made">TAILOR MADE</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p><Phone size={16} /> +94 77 033 9497</p>
                    <p><Mail size={16} /> info@golankaexplorers.com</p>
                    <p><Mail size={16} /> hashan@golankaexplorers.com</p>
                    <p><MapPin size={16} /> 263/A1, Daluwakotuwa, Kochchikade, Sri Lanka</p>
                </div>

                {/* TripAdvisor Section */}
                <div className="footer-trip">
                    <h3>Trip Advisor</h3>
                    <img
                        src={tripAdvisor}
                        alt="TripAdvisor"
                        className="tripadvisor-logo"
                    />
                    <button className="visa-btn">APPLY VISA</button>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    Copyright © 2025 PEARL CEYLON TOURS | Developed by SLTechnology (PVT) LTD
                </p>
            </div>
        </footer>
    );
}

export default Footer;
