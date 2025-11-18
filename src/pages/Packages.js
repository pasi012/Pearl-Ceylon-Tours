import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Packages.css";

import pkg1 from "../assets/pkg1.jpg";
import pkg2 from "../assets/pkg2.jpg";
import pkg3 from "../assets/pkg3.jpg";
import pkg4 from "../assets/pkg4.jpg";
import pkg5 from "../assets/pkg5.jpg";

function Packages() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const packages = [
        { title: "Culture Heritage Trails", days: "9 days", nights: "8 Nights", image: pkg1, tag: "Cultural Heritage" },
        { title: "Accessible Holiday Tour", days: "12 days", nights: "11 Nights", image: pkg2, tag: "Holiday Tour" },
        { title: "Honeymoon Trail", days: "14 days", nights: "13 Nights", image: pkg3, tag: "Honeymoon Trail" },
        { title: "Ramayana Tour", days: "9 days", nights: "8 Nights", image: pkg4, tag: "Ramayana Tour" },
        { title: "Eco Trail", days: "13 days", nights: "12 Nights", image: pkg5, tag: "Eco Trail" },
    ];

    return (
        <>
            {/* HERO */}
            <section className="packages-hero-section" data-aos="fade-down">
                <div className="packages-hero-overlay">
                    <div className="packages-hero-content">
                        <h1>Tour Packages</h1>
                        <p>Home &gt; Tour Packages</p>
                    </div>
                </div>
            </section>

            {/* GRID */}
            <section className="package-grid-section" data-aos="fade-up">
                <div className="package-grid-container">
                    {packages.map((pkg, i) => (
                        <div className="package-card" key={i} data-aos="zoom-in">
                            <div className="package-tag">{pkg.tag}</div>

                            <img src={pkg.image} alt={pkg.title} />

                            <div className="package-info">
                                <h3>{pkg.title}</h3>

                                <div className="package-meta">
                                    <span>⏱ {pkg.days}</span>
                                    <span>🌙 {pkg.nights}</span>
                                </div>
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
                            <p>Reach Pearl Ceylon Tours For A Secure, Luxurious, And Unforgettable Adventure!</p>
                        </div>
                    </div>

                    <img src={require("../assets/plan.png")} className="cta-plane" alt="plane" />

                    <button className="cta-btn">LET’S GET STARTED</button>
                </div>
            </section>
        </>
    );
}

export default Packages;
