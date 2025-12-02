import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "../css/Footer.css";

import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

import logo from "../assets/logo.png";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";

function Footer() {

    const [g1, setG1] = useState("");
    const [g2, setG2] = useState("");
    const [g3, setG3] = useState("");
    const [g4, setG4] = useState("");
    const [g5, setG5] = useState("");
    const [g6, setG6] = useState("");

    useEffect(() => {

        // FOOTER GALLERY IMAGES
        getDownloadURL(ref(storage, "feature1.jpg")).then(setG1);
        getDownloadURL(ref(storage, "Whale Watching.png")).then(setG2);
        getDownloadURL(ref(storage, "yala4.jpg")).then(setG3);
        getDownloadURL(ref(storage, "anuradhapura.jpg")).then(setG4);
        getDownloadURL(ref(storage, "Nine arch bridge view.png")).then(setG5);
        getDownloadURL(ref(storage, "sigiriya.jpg")).then(setG6);

    }, []);

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (img) => {
        setSelectedImage(img);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };


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
                        <p><MapPin size={16} /> No 13, Gotuwala Rd, Meeriya kale, Ella, Sri Lanka.</p>
                    </div>
                </div>

                {/* SERVICES LINKS */}
                <div className="footer-links">
                    <h3>Services Req</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/whyChooseUs">Why Choose Us</Link></li>
                        <li><Link to="/terms-condition">Terms & Conditions</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/tailor-made-tours">Tailor Made Tours</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* GALLERY SECTION */}
                <div className="footer-gallery">
                    <h3>Gallery</h3>

                    <div className="gallery-grid">
                        <img src={g1} alt="Gallery 1" onClick={() => openModal(g1)} />
                        <img src={g2} alt="Gallery 2" onClick={() => openModal(g2)} />
                        <img src={g3} alt="Gallery 3" onClick={() => openModal(g3)} />
                        <img src={g4} alt="Gallery 4" onClick={() => openModal(g4)} />
                        <img src={g5} alt="Gallery 5" onClick={() => openModal(g5)} />
                        <img src={g6} alt="Gallery 6" onClick={() => openModal(g6)} />
                    </div>

                </div>

                {selectedImage && (
                    <div className="image-modal" onClick={closeModal}>
                        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImage} alt="Large preview" />
                            <span className="close-btn" onClick={closeModal}>×</span>
                        </div>
                    </div>
                )}

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
