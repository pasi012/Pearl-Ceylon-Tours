import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/DayTourPackages.css";

import { useNavigate } from "react-router-dom";

import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function DayTourPackages() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Firebase image states
    const [day1, setDay1] = useState("");
    const [day2, setDay2] = useState("");
    const [day3, setDay3] = useState("");
    const [day4, setDay4] = useState("");
    const [day5, setDay5] = useState("");

    // Load all images from Firebase Storage
    useEffect(() => {
        getDownloadURL(ref(storage, "day1.jpg")).then(setDay1);
        getDownloadURL(ref(storage, "day2.jpg")).then(setDay2);
        getDownloadURL(ref(storage, "day3.jpg")).then(setDay3);
        getDownloadURL(ref(storage, "day4.jpg")).then(setDay4);
        getDownloadURL(ref(storage, "day5.jpg")).then(setDay5);
    }, []);

    const dayTours = [
        { title: "Colombo City Tour", days: "1 day", nights: "0 Nights", image: day1, tag: "City Tour", link: "/day-tours/ColomboCityTour" },
        { title: "Colombo Benthota Galle", days: "1 day", nights: "0 Nights", image: day2, tag: "Beach Tour", link: "/day-tours/ColomboBenthotaGalle" },
        { title: "Colombo Kandy", days: "1 day", nights: "0 Nights", image: day3, tag: "Heritage", link: "/day-tours/ColomboKandy" },
        { title: "Colombo Sigiriya Dambulla", days: "1 day", nights: "0 Nights", image: day4, tag: "Adventure", link: "/day-tours/ColomboSigiriyaDambulla" },
        { title: "Colombo Kithulgala", days: "1 day", nights: "0 Nights", image: day5, tag: "Adventure", link: "/day-tours/ColomboKithulgala" },
    ];

    return (
        <>
            {/* HERO */}
            <section className="daytour-hero-section" data-aos="fade-down">
                <div className="daytour-hero-overlay">
                    <div className="daytour-hero-content">
                        <h1>Day Tour Packages</h1>
                        <p>Home &gt; Day Tours</p>
                    </div>
                </div>
            </section>

            {/* GRID */}
            <section className="daytour-grid-section" data-aos="fade-up">
                <div className="daytour-grid-container">
                    {dayTours.map((tour, i) => (
                        <div
                            className="daytour-card"
                            key={i}
                            data-aos="zoom-in"
                            onClick={() => navigate(tour.link)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="daytour-tag">{tour.tag}</div>

                            <img src={tour.image} alt={tour.title} />

                            <div className="daytour-info">
                                <h3>{tour.title}</h3>
                                <div className="daytour-meta">
                                    <span>🕒 {tour.days}</span>
                                    <span>🌙 {tour.nights}</span>
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

export default DayTourPackages;
