import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/DayTourPackages.css";

import day1 from "../assets/day1.jpg";
import day2 from "../assets/day2.jpg";
import day3 from "../assets/day3.jpg";
import day4 from "../assets/day4.jpg";
import day5 from "../assets/day5.jpg";

function DayTourPackages() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const dayTours = [
        { title: "Colombo City Day Tour", hours: "8 hours", image: day1, tag: "City Tour" },
        { title: "Galle & Unawatuna Day Tour", hours: "10 hours", image: day2, tag: "Beach Tour" },
        { title: "Kandy Cultural Day Tour", hours: "9 hours", image: day3, tag: "Heritage" },
        { title: "Sigiriya & Dambulla Day Tour", hours: "10 hours", image: day4, tag: "Adventure" },
        { title: "Kithulgala Day Tour", hours: "10 hours", image: day5, tag: "Adventure" },
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
                        <div className="daytour-card" key={i} data-aos="zoom-in">
                            <div className="daytour-tag">{tour.tag}</div>

                            <img src={tour.image} alt={tour.title} />

                            <div className="daytour-info">
                                <h3>{tour.title}</h3>
                                <div className="daytour-meta">
                                    <span>🕒 {tour.hours}</span>
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

export default DayTourPackages;
