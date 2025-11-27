import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Destinations.css";

import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function Destinations() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Firebase image states
    const [mirissa, setMirissa] = useState("");
    const [sigiriya, setSigiriya] = useState("");
    const [anuradhapura, setAnuradhapura] = useState("");
    const [polonnaruwa, setPolonnaruwa] = useState("");
    const [ella, setElla] = useState("");
    const [yala, setYala] = useState("");
    const [kandy, setKandy] = useState("");
    const [nuwaraEliya, setNuwaraEliya] = useState("");
    const [ecoEscapes, setEcoEscapes] = useState("");

    // Load images
    useEffect(() => {
        getDownloadURL(ref(storage, "mirissa.jpg")).then(setMirissa);
        getDownloadURL(ref(storage, "sigiriya.jpg")).then(setSigiriya);
        getDownloadURL(ref(storage, "anuradhapura.jpg")).then(setAnuradhapura);
        getDownloadURL(ref(storage, "polonnaruwa.jpg")).then(setPolonnaruwa);
        getDownloadURL(ref(storage, "ella.jpg")).then(setElla);
        getDownloadURL(ref(storage, "yala.jpg")).then(setYala);
        getDownloadURL(ref(storage, "kandy.jpg")).then(setKandy);
        getDownloadURL(ref(storage, "nuwara-eliya.jpg")).then(setNuwaraEliya);
        getDownloadURL(ref(storage, "eco-escapes.jpg")).then(setEcoEscapes);
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

    // Convert name → URL slug (ex: Nuwara Eliya → nuwara-eliya)
    const slugify = (text) =>
        text.toLowerCase().replace(/\s+/g, "-");

    return (
        <>
            {/* Hero Section */}
            <section className="destinations-hero" data-aos="fade-down">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>Our Tour Destinations</h1>
                        <p>Home &gt; Our Tour Destinations</p>
                    </div>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="destinations-grid" data-aos="fade-up">
                <div className="grid-container">
                    {destinations.map((dest, index) => (
                        <div
                            className="destination-card"
                            key={index}
                            data-aos="zoom-in"
                            onClick={() => navigate(`/destinations/${slugify(dest.name)}`)}
                            style={{ cursor: "pointer" }}
                        >
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

export default Destinations;
