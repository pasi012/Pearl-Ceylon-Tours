import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/DayTourPackages.css";

import { useNavigate } from "react-router-dom";

import day1 from "../assets/day1.jpg";
import day2 from "../assets/day2.jpg";
import day3 from "../assets/day3.jpg";
import day4 from "../assets/day4.jpg";
import day5 from "../assets/day5.jpg";

function DayTourPackages() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
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

            {/* CTA */}
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
