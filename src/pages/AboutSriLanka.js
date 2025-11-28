import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/AboutSriLanka.css";

// Images
import heroImg from "../assets/hero-destination.jpg";

import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function AboutSriLanka() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    //about
    const [aboutSriLanka, setAboutSriLanka] = useState("");
    const [founderUrl, setFounderUrl] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");

    useEffect(() => {
        getDownloadURL(ref(storage, "blog-details.jpg")).then(setAboutSriLanka);
        getDownloadURL(ref(storage, "founder.jpg")).then(setFounderUrl);
        getDownloadURL(ref(storage, "coconut-beach.jpg")).then(setImg1);
        getDownloadURL(ref(storage, "hotel-room.jpg")).then(setImg2);
    }, []);

    return (
        <>
            {/* ================= HERO ================= */}
            <section
                className="sl-hero"
                style={{ backgroundImage: `url(${heroImg})` }}
                data-aos="fade-down"
            >
                <div className="sl-hero-overlay">
                    <h1>Sri Lanka</h1>
                    <p>Home &gt; Sri Lanka</p>
                </div>
            </section>

            {/* =============== MAIN CONTENT WRAPPER =============== */}
            <section className="sl-wrapper">

                {/* ==== LEFT MAIN ARTICLE ==== */}
                <div className="sl-left">

                    {aboutSriLanka && <img src={aboutSriLanka} className="sl-main-img" data-aos="fade-up" />}

                    {/* Info Row */}
                    <div className="sl-info-row" data-aos="fade-up">
                        <span>📅 8 Dec 2024</span>
                        <span>💬 Comments (02)</span>
                        <span>⏱ 3 min Read</span>
                    </div>

                    <h2 className="sl-article-title" data-aos="fade-up">
                        Sri Lanka: A Paradise Of Natural Beauty, Cultural Richness, And Year-Round Adventures
                    </h2>

                    <p data-aos="fade-up">
                        Sri Lanka is a breathtaking destination that captivates travelers with its unparalleled natural beauty,
                        vibrant culture, and diverse experiences. Whether you're seeking serene landscapes, cultural enrichment,
                        or thrilling adventures, this island paradise offers something for everyone.
                    </p>

                    <h3 className="sl-sub-title" data-aos="fade-up">A Land Of Diverse Landscapes</h3>

                    <p data-aos="fade-up">
                        From the sun-kissed golden beaches of Mirissa and Arugam Bay, perfect for relaxation and surfing,
                        to the emerald-green tea plantations in the misty hills of Ella and Nuwara Eliya, Sri Lanka boasts an array of stunning terrains.
                        The ancient Sinharaja Rainforest, a UNESCO World Heritage Site, is a haven for biodiversity,
                        inviting nature lovers to explore its dense foliage and unique wildlife.
                    </p>

                    <h3 className="sl-sub-title" data-aos="fade-up">A Treasure Trove of Cultural Heritage</h3>

                    <p data-aos="fade-up">
                        Sri Lanka's rich history is brought to life through its iconic landmarks.
                        The ancient cities of Anuradhapura and Polonnaruwa offer a glimpse into the island's glorious past with
                        their magnificent ruins and sacred sites.The awe-inspiring Sigiriya Rock Fortress, often referred to as
                        the "Eighth Wonder of the World," and the Temple of the Sacred Tooth Relic in Kandy are must-visit UNESCO
                        World Heritage Sites that blend architectural brilliance with spiritual significance.
                    </p>

                    {/* ================== QUOTE BOX ================== */}
                    <div className="sl-quote-box" data-aos="fade-up">
                        <p className="sl-quote-text">
                            Sri Lanka is one of the world's most underrated countries. I traveled all the way there to show you its beauty,
                            from its breathtaking nature to the locals' favorite drinks.
                        </p>

                        <p className="sl-quote-author">
                            — <span>Nas Daily (Israeli Vlogger)</span>
                        </p>

                        <div className="sl-quote-icon">❞</div>
                    </div>

                    <h3 className="sl-sub-title" data-aos="fade-up" style={{ marginTop: "40px" }}>
                        Sri Lanka's Top Attractions: A Traveler's Checklist
                    </h3>

                    {/* ================== ATTRACTIONS LIST + IMAGE ================== */}
                    <div className="sl-attractions-wrapper" data-aos="fade-up">

                        <ul className="sl-attraction-list">
                            <li>Golden beaches, tea plantations, and rainforests.</li>
                            <li>Ancient cities, Sigiriya, and sacred temples.</li>
                            <li>Safaris for wildlife and whale watching.</li>
                            <li>Sri Lankan curry, kotthu, and seafood.</li>
                            <li>Friendly locals and easy island travel.</li>
                        </ul>

                        {img1 && <img src={img1} className="sl-attraction-img" />}

                    </div>

                    {/* ================= IMAGE ROW ================= */}
                    <div className="sl-image-row" data-aos="fade-up">
                        {img1 && <img src={img1} className="sl-image-box" />}
                        {img2 && <img src={img2} className="sl-image-box" />}
                    </div>

                    <h3 className="sl-sub-title" data-aos="fade-up">Unforgettable Wildlife Encounters</h3>

                    <p data-aos="fade-up">
                        For wildlife enthusiasts, Sri Lanka offers world-class safari experiences.
                        Yala and Wilpattu National Parks are renowned for sightings of majestic leopards,
                        elephants, sloth bears, and a variety of exotic bird species.
                        The island's marine life is equally spectacular—Mirissa is a prime spot for whale watching,
                        where you can marvel at blue whales, dolphins, and other marine creatures.
                    </p>

                    <h3 className="sl-sub-title" data-aos="fade-up">A Gastronomic Adventure</h3>

                    <p data-aos="fade-up">
                        Sri Lanka's culinary scene is a feast for the senses. The island's signature dishes,
                        such as aromatic Sri Lankan curries, sizzling kottu roti, and an array of flavorful street foods,
                        promise a delightful culinary journey. Fresh seafood is a highlight, with prawns, crabs,
                        and fish prepared in mouthwatering styles that showcase the island's coastal charm.
                    </p>

                    <h3 className="sl-sub-title" data-aos="fade-up">Warm Hospitality and Accessibility</h3>

                    <p data-aos="fade-up">
                        Sri Lankans are celebrated for their genuine warmth and hospitality, making visitors feel right at home.
                        Despite its wealth of attractions, the island's compact size ensures that you can traverse from its golden beaches
                        to misty mountains or bustling cities within a matter of hours.
                    </p>

                    <h3 className="sl-sub-title" data-aos="fade-up">A Year-Round Destination</h3>

                    <p data-aos="fade-up">
                        Sri Lanka's unique climate makes it a year-round travel destination.
                        With two distinct monsoon seasons affecting different parts of the island at different times,
                        there's always a sunny spot waiting to be explored. Whether you're seeking adventure,
                        tranquility, or cultural immersion, Sri Lanka promises an unforgettable journey packed with memorable experiences.
                    </p>

                </div>

                {/* ==== RIGHT AUTHOR CARD ==== */}
                <div className="sl-right" data-aos="fade-left">
                    <div className="sl-author-card">
                        {founderUrl && <img src={founderUrl} className="sl-author-img" />}

                        <h4 className="sl-author-name">Amila Dissanayake</h4>

                        <p className="sl-author-desc">
                            Amila Dissanayake, a visionary leader with global travel experience.
                        </p>
                    </div>
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

export default AboutSriLanka;
