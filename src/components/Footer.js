import { Link } from "react-router-dom";
import "../css/Footer.css";

import logo from "../assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";

import g1 from "../assets/feature1.jpg";
import g2 from "../assets/Whale Watching.png";
import g3 from "../assets/yala4.jpg";
import g4 from "../assets/anuradhapura.jpg";
import g5 from "../assets/Nine arch bridge view.png";
import g6 from "../assets/sigiriya.jpg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* ABOUT LEFT SECTION */}
                <div className="footer-about">
                    <img src={logo} alt="Logo" className="footer-logo" />

                    <p>
                        Explore Sri Lanka’s diverse landscapes, rich culture & unforgettable experiences with our expert travel services.
                    </p>

                    <div className="footer-contact-block">
                        <p><Mail size={16} /> pearlceylontours01@gmail.com</p>
                        <p><Phone size={16} /> 077 356 2768</p>
                        <p><MapPin size={16} /> No. 25B, Nidahs Mawatha, Matale, Sri Lanka.</p>
                    </div>
                </div>

                {/* SERVICES LINKS */}
                <div className="footer-links">
                    <h3>Services Req</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/whyChooseUs">Why Choose Us</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/tailor-made-tours">Tailor Made Tours</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* GALLERY SECTION */}
                <div className="footer-gallery">
                    <h3>Gallery</h3>

                    <div className="gallery-grid">
                        <img src={g1} alt="Gallery 1" />
                        <img src={g2} alt="Gallery 2" />
                        <img src={g3} alt="Gallery 3" />
                        <img src={g4} alt="Gallery 4" />
                        <img src={g5} alt="Gallery 5" />
                        <img src={g6} alt="Gallery 6" />
                    </div>
                </div>

                {/* NEWSLETTER SECTION */}
                <div className="footer-newsletter">
                    <h3>Newsletter</h3>

                    <div className="newsletter-input">
                        <input type="email" placeholder="Enter Email Address" />
                        <button>➤</button>
                    </div>

                    <div className="newsletter-agree">
                        <input type="checkbox" />
                        <label>I agree to all your terms and policies</label>
                    </div>

                    <div className="footer-social-inline">
                        <FaFacebookF />
                        <FaYoutube />
                        <FaInstagram />
                        <FaPinterestP />
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>Copyright © 2025 | Designed & Developed by SLTechnology (pvt) LTD</p>
            </div>
        </footer>
    );
}

export default Footer;
