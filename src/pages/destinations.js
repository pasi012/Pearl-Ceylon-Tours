import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Destinations.css";

import mirissa from "../assets/mirissa.jpg";
import sigiriya from "../assets/sigiriya.jpg";
import anuradhapura from "../assets/anuradhapura.jpg";
import polonnaruwa from "../assets/polonnaruwa.jpg";
import ella from "../assets/ella.jpg";
import yala from "../assets/yala.jpg";
import kandy from "../assets/kandy.jpg";
import nuwaraEliya from "../assets/nuwara-eliya.jpg";
import ecoEscapes from "../assets/eco-escapes.jpg";

function Destinations() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const destinations = [
        { name: "Mirissa", image: mirissa },
        { name: "Sigiriya", image: sigiriya },
        { name: "Anuradhapura", image: anuradhapura },
        { name: "Polonnaruwa", image: polonnaruwa },
        { name: "Ella", image: ella },
        { name: "Yala", image: yala },
        { name: "Kandy", image: kandy },
        { name: "Nuwara Eliya", image: nuwaraEliya },
        { name: "Eco Escapes", image: ecoEscapes },
    ];

    return (
        <>
            {/* ===== Hero Section ===== */}
            <section className="destinations-hero" data-aos="fade-down">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>Our Tour Destinations</h1>
                        <p>Home &gt; Our Tour Destinations</p>
                    </div>
                </div>
            </section>

            {/* ===== Destinations Grid ===== */}
            <section className="destinations-grid" data-aos="fade-up">
                <div className="grid-container">
                    {destinations.map((dest, index) => (
                        <div className="destination-card" key={index} data-aos="zoom-in">
                            <img src={dest.image} alt={dest.name} />
                            <div className="card-overlay">
                                <p>Travel To:</p>
                                <h3>{dest.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== CTA Section ===== */}
            <section className="cta-section" data-aos="fade-up">
                <div className="cta-box">
                    <div className="cta-left">
                        <img src={require("../assets/hile.png")} className="cta-icon" alt="icon" />

                        <div className="cta-text">
                            <h2>Ready To Adventure And Enjoy Natural</h2>
                            <p>Reach Captain Ceylon Tours For A Secure, Luxurious, And Unforgettable Adventure!</p>
                        </div>
                    </div>

                    <img src={require("../assets/plan.png")} className="cta-plane" alt="plane" />

                    <button className="cta-btn">LET’S GET STARTED</button>
                </div>
            </section>

        </>
    );
}

export default Destinations;
