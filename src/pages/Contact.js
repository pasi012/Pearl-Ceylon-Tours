import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Contact.css";

function Contact() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="contact-container">
            {/* ===== Hero Section ===== */}
            <section className="contact-hero" data-aos="fade-down">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>Contact Us</h1>
                        <p>Home &gt; Contact Us</p>
                    </div>
                </div>
            </section>

            {/* ===== Contact Info Boxes ===== */}
            <section className="contact-info" data-aos="fade-up">
                <div className="info-grid">
                    <div className="info-card" data-aos="zoom-in">
                        <i className="fas fa-map-marker-alt"></i>
                        <h4>Address Line</h4>
                        <p>No. 258, Nidahas Mawatha,<br />Matale, Sri Lanka.</p>
                    </div>

                    <div className="info-card" data-aos="zoom-in">
                        <i className="fas fa-phone"></i>
                        <h4>Phone Number</h4>
                        <p>077 356 2768</p>
                    </div>

                    <div className="info-card" data-aos="zoom-in">
                        <i className="fas fa-envelope"></i>
                        <h4>Mail Address</h4>
                        <p>pearlceylontours01@gmail.com</p>
                    </div>
                </div>
            </section>

            {/* ===== Get in touch + Form section ===== */}
            <section className="contact-section">
                <div className="contact-left" data-aos="fade-right">
                    <h2>Get In Touch</h2>
                    <p>
                        Discover Sri Lanka's top destinations, from pristine beaches to scenic
                        hills, all mapped for your perfect journey.
                    </p>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.643116273184!2d80.6237!3d7.466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae34d1ca4dc2625%3A0x4b89f6e92a7e2c89!2sMatale!5e0!3m2!1sen!2slk!4v1707720000000!5m2!1sen!2slk"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="contact-form" data-aos="fade-left">
                    <h3>Fill Up The Form</h3>
                    <p>Your email address will not be published. Required fields are marked *</p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            const name = e.target[0].value;
                            const email = e.target[1].value;
                            const message = e.target[2].value;

                            window.location.href = `mailto:pearlceylontours01@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                        }}
                    >
                        <label>Your Name*</label>
                        <input type="text" placeholder="Enter your name" required />

                        <label>Email Address*</label>
                        <input type="email" placeholder="Enter your email" required />

                        <label>Enter Your Message Here</label>
                        <textarea placeholder="Write your message..."></textarea>

                        <button type="submit" className="submit-btn">
                            Get In Touch
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
