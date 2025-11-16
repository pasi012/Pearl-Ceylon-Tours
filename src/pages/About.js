import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/About.css";

import '@fortawesome/fontawesome-free/css/all.min.css';


import founderImg from "../assets/founder.jpg";
import hileIcon from "../assets/hile.png";
import planeIcon from "../assets/plan.png";

function About() {

    const [active, setActive] = useState(1);

    const toggleAccordion = (index) => {
        setActive(active === index ? null : index);
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            {/* ===== Hero Section ===== */}
            <section className="about-hero" data-aos="fade-down">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>About Us</h1>
                        <p>Home &gt; About Us</p>
                    </div>
                </div>
            </section>

            {/* ===== Welcome Section ===== */}
            <section className="about-intro" data-aos="fade-up">
                <h4>Welcome To Captain Ceylon Tours</h4>
                <h2>Your Gateway To An Unforgettable Sri Lankan Journey</h2>

                <p className="intro-text">
                    At Captain Ceylon Tours, we are committed to creating unique,
                    personalized travel experiences that immerse you in the beauty,
                    culture, and diversity of Sri Lanka. From the moment you begin your
                    journey with us, you'll experience a blend of professionalism, comfort,
                    and a touch of the extraordinary.
                </p>
            </section>

            {/* ===== Founder Section ===== */}
            <section className="founder-section" data-aos="fade-up">
                <div className="founder-container">

                    <div className="founder-img" data-aos="zoom-in">
                        <img src={founderImg} alt="Founder" />
                        <p className="experience-text">
                            20 Years of dedicated sea service and extensive global travel experience
                        </p>
                    </div>

                    <div className="founder-details">
                        <p className="founder-tag">Meet Our Founder</p>

                        <h2 className="founder-name">
                            Captain Dhammika<br />
                            Jayakody <span className="blue-hand">Founder & CEO</span>
                        </h2>
                        <h3 className="company-name">Captain Ceylon Tours</h3>

                        <p className="founder-description">
                            Meet Captain Ceylon Tours, a company founded by Captain Dhammika Jayakody,
                            a visionary leader with over 20 years of sea service and extensive global
                            travel experience.
                        </p>

                        <p className="highlight-text">
                            With Expertise in Travel And Leadership, Captain Ceylon Tours Ensures Excellence
                            And Reliability In Every Operation, Guided By A Profound Understanding Of
                            Travellers’ Needs.
                        </p>

                        <ul className="founder-list">
                            <li>✔ Discover expert-guided tours with global insights.</li>
                            <li>✔ Travel experiences crafted for the discerning explorer.</li>
                            <li>✔ Let your local guide personalize your journey to match your preferences.</li>
                        </ul>

                        <button className="founder-btn">CALL NOW !</button>
                    </div>

                </div>
            </section>

            {/* ===== Team Section ===== */}
            <section className="team-section" data-aos="fade-up">
                <h4 className="team-subtitle">Our Team</h4>
                <h2 className="team-title">Meet Our Experienced <span>Team</span> People</h2>

                <div className="team-container">

                    {/* Member 1 */}
                    <div className="team-card" data-aos="zoom-in">
                        <img src={require("../assets/founder.jpg")} alt="Team Member" className="team-img" />
                        <p className="team-role">Founder/CEO</p>
                        <h3 className="team-name">Dhammika Jayakody</h3>
                    </div>

                    {/* Member 2 */}
                    <div className="team-card" data-aos="zoom-in">
                        <img src={require("../assets/team1.jpg")} alt="Team Member" className="team-img" />
                        <p className="team-role">Tour Operational Executive</p>
                        <h3 className="team-name">K.M.N. Tennakoon</h3>
                    </div>

                    {/* Member 3 */}
                    <div className="team-card" data-aos="zoom-in">
                        <img src={require("../assets/team2.jpg")} alt="Team Member" className="team-img" />
                        <p className="team-role">Chief Financial Officer</p>
                        <h3 className="team-name">Neranjana Tennakoon</h3>
                    </div>

                </div>
            </section>

            {/* ===== What We Offer Section ===== */}
            <section className="offer-section" data-aos="fade-up">

                <h4 className="offer-subtitle">What We Offer</h4>
                <h2 className="offer-title">
                    Great Opportunity For <br />
                    <span className="offer-style">Adventure</span> & Travels
                </h2>

                <div className="offer-container">

                    {/* Card 1 */}
                    <div className="offer-card" data-aos="zoom-in">
                        <img src={require("../assets/icon1.png")} alt="Icon" className="offer-icon" />
                        <h3 className="offer-card-title">Comfortable Travel Options</h3>
                        <p className="offer-card-text">
                            Our Fleet Of Air-Conditioned Vehicles Offers A Luxurious And Smooth Experience
                            Across Sri Lanka, Ensuring Comfort For Scenic And Cultural Tours.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="offer-card" data-aos="zoom-in">
                        <img src={require("../assets/icon2.png")} alt="Icon" className="offer-icon" />
                        <h3 className="offer-card-title">A Skilled And Dedicated Team</h3>
                        <p className="offer-card-text">
                            With A Team Of Highly Trained Travel Experts, We Deliver Exceptional Service
                            Tailored To Every Traveler’s Needs.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="offer-card" data-aos="zoom-in">
                        <img src={require("../assets/icon3.png")} alt="Icon" className="offer-icon" />
                        <h3 className="offer-card-title">Personalized Travel Experiences</h3>
                        <p className="offer-card-text">
                            We Carefully Evaluate Your Preferences, Interests & Budget To Craft A Customized Itinerary.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="offer-card" data-aos="zoom-in">
                        <img src={require("../assets/icon4.png")} alt="Icon" className="offer-icon" />
                        <h3 className="offer-card-title">Explore The Wonders Of Sri Lanka</h3>
                        <p className="offer-card-text">
                            Sri Lanka Offers Stunning Landscapes, Rich Culture & Unique Experiences—Making It
                            “The Most Desirable Island In The World.”
                        </p>
                    </div>

                </div>
            </section>

            {/* ===== Call Us Section ===== */}
            <section className="sl-collage-section" data-aos="fade-up">

                <div className="sl-collage-container">
                    <img
                        src={require("../assets/about-collage.png")}
                        alt="Sri Lanka Collage"
                        className="sl-collage-img"
                    />
                </div>

                <div className="sl-collage-content">

                    <p className="sl-subtitle">Call Us Now</p>

                    <h2 className="sl-main-title">
                        Discover Sri Lanka With <br />
                        Captain Ceylon Tours
                    </h2>

                    {/* Accordion */}
                    <div className="sl-accordion">

                        {/* Item 1 */}
                        <div
                            className={`sl-accordion-item ${active === 1 ? "active" : ""}`}
                            onClick={() => toggleAccordion(1)}
                        >
                            <div className="sl-accordion-header">
                                <h3>Tailored Travel Packages For Every Traveler</h3>
                                <span className="arrow"></span>
                            </div>

                            <div className="sl-accordion-body">
                                <p>
                                    Captain Ceylon Tours offers personalized travel plans tailored to your
                                    preferences, ensuring memorable experiences for adventurers, honeymooners,
                                    families, or solo travelers.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div
                            className={`sl-accordion-item ${active === 2 ? "active" : ""}`}
                            onClick={() => toggleAccordion(2)}
                        >
                            <div className="sl-accordion-header">
                                <h3>Curated Experiences To Uncover Sri Lanka's Magic</h3>
                                <span className="arrow"></span>
                            </div>

                            <div className="sl-accordion-body">
                                <p>
                                    Handpicked destinations and unforgettable experiences crafted with care
                                    by our expert travel planners.
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div
                            className={`sl-accordion-item ${active === 3 ? "active" : ""}`}
                            onClick={() => toggleAccordion(3)}
                        >
                            <div className="sl-accordion-header">
                                <h3>Hassle–Free Travel With A Personal Touch</h3>
                                <span className="arrow"></span>
                            </div>

                            <div className="sl-accordion-body">
                                <p>
                                    From planning to execution, we ensure smooth, comfortable,
                                    and enjoyable travel throughout Sri Lanka.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== Our Mission Section ===== */}
            <section className="mission-sl-wrapper" data-aos="fade-up">
                <div className="mission-sl-box">

                    {/* Left Icon */}
                    <img
                        src={require("../assets/hile.png")}
                        alt="mission icon"
                        className="mission-sl-icon"
                    />

                    {/* Text Content */}
                    <div className="mission-sl-text">
                        <h2>Our Mission</h2>
                        <p>
                            As A Premier Inbound Travel Agency In Sri Lanka, Our Mission Is To Celebrate
                            Individuality By Understanding And Addressing Each Traveler’s Unique Desires,
                            Ensuring Every Journey Is Seamless And Fulfilling. We Are Committed To Promoting
                            The Charm Of Sri Lanka, Showcasing Its Breathtaking Beaches, Lush Tea Plantations,
                            Ancient Ruins, And Vibrant Wildlife. Additionally, We Strive To Build Meaningful
                            Relationships By Connecting Travelers With Trusted Suppliers, Creating Enjoyable
                            And Hassle-Free Vacation Experiences.
                        </p>
                    </div>

                    {/* Call Button */}
                    <button className="mission-sl-call-btn">
                        <i className="fa-solid fa-phone"></i>
                    </button>
                </div>
            </section>

            {/* ===== Why Choose Us ===== */}
            <section className="why-choose-section" data-aos="fade-up">

                <div className="why-choose-left">
                    <h3 className="why-title">Why Choose Captain Ceylon Tours?</h3>

                    <p className="why-description">
                        Unlike Many Other Travel Agencies, We Offer A Personal Touch,
                        Unmatched Expertise, And Dedication To Creating Once–In–A–Lifetime
                        Experiences.
                    </p>

                    <a href="mailto:info@captainceylontours.com" className="why-btn">
                        Contact us at info@captainceylontours.com
                    </a>
                </div>

                <div className="why-choose-right">
                    <img
                        src={require("../assets/why-single.png")}
                        alt="Why Choose Captain Ceylon Tours"
                        className="why-single-img"
                    />
                </div>

            </section>

            {/* ===== Adventure & Travels Section ===== */}
            <section className="explore-sl-section" data-aos="fade-up">

                <h4 className="explore-subtitle">Explore Sri Lanka</h4>

                <h2 className="explore-title">
                    Great Opportunity For <span>Adventure</span> & Travels
                </h2>

                <p className="explore-description">
                    Explore Sri Lanka’s breathtaking landscapes with thrilling adventures
                    and unforgettable travel experiences.
                </p>

                <div className="explore-card-container">

                    {/* Adventure Tours */}
                    <div className="explore-card" data-aos="zoom-in">
                        <img src={require("../assets/icon1.png")} alt="Adventure" className="explore-icon" />
                        <h3>Adventure Tours</h3>
                        <p>
                            Explore Sri Lanka’s wild side with exciting adventure tours across the island.
                        </p>
                    </div>

                    {/* Beach Getaways */}
                    <div className="explore-card" data-aos="zoom-in">
                        <img src={require("../assets/icon2.png")} alt="Beach" className="explore-icon" />
                        <h3>Beach Getaways</h3>
                        <p>
                            Discover pristine beaches with our relaxing coastal escapes.
                        </p>
                    </div>

                    {/* Luxury Villas */}
                    <div className="explore-card" data-aos="zoom-in">
                        <img src={require("../assets/icon3.png")} alt="Villas" className="explore-icon" />
                        <h3>Luxury Villas</h3>
                        <p>
                            Stay in stunning luxury villas with breathtaking views in Sri Lanka.
                        </p>
                    </div>

                    {/* Cultural Tours */}
                    <div className="explore-card" data-aos="zoom-in">
                        <img src={require("../assets/icon4.png")} alt="Culture" className="explore-icon" />
                        <h3>Cultural Tours</h3>
                        <p>
                            Immerse yourself in Sri Lanka’s rich cultural heritage with guided tours.
                        </p>
                    </div>

                </div>
            </section>

        </>
    );
}

export default About;
