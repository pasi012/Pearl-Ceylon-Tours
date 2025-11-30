import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Packages.css";

import { useNavigate } from "react-router-dom";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function Packages() {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Firebase Image States
    const [pkg1, setPkg1] = useState("");
    const [pkg2, setPkg2] = useState("");
    const [pkg3, setPkg3] = useState("");
    const [pkg4, setPkg4] = useState("");
    const [pkg5, setPkg5] = useState("");

    // Load all images from Firebase
    useEffect(() => {
        getDownloadURL(ref(storage, "pkg1.jpg")).then(setPkg1);
        getDownloadURL(ref(storage, "pkg2.jpg")).then(setPkg2);
        getDownloadURL(ref(storage, "pkg3.jpg")).then(setPkg3);
        getDownloadURL(ref(storage, "pkg4.jpg")).then(setPkg4);
        getDownloadURL(ref(storage, "pkg5.jpg")).then(setPkg5);
    }, []);

    const packages = [
        { title: "Culture Heritage Trails", days: "9 days", nights: "8 Nights", image: pkg1, tag: "Cultural Heritage", link: "/tour-package/CultureHeritage" },
        { title: "Accessible Holiday Tour", days: "12 days", nights: "11 Nights", image: pkg2, tag: "Holiday Tour", link: "/tour-package/HolidayTour" },
        { title: "Honeymoon Trail", days: "14 days", nights: "13 Nights", image: pkg3, tag: "Honeymoon Trail", link: "/tour-package/HoneymoonTrail" },
        { title: "Ramayana Tour", days: "9 days", nights: "8 Nights", image: pkg4, tag: "Ramayana Tour", link: "/tour-package/RamayanaTour" },
        { title: "Eco Trail", days: "13 days", nights: "12 Nights", image: pkg5, tag: "Eco Trail", link: "/tour-package/EcoTrail" },
    ];

    return (
        <div className="packages-container">
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
                        <div
                            className="package-card"
                            key={i}
                            data-aos="zoom-in"
                            onClick={() => navigate(pkg.link)}
                            style={{ cursor: "pointer" }}
                        >
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
        </div>
    );
}

export default Packages;
