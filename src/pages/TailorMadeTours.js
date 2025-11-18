import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/TailorMadeTours.css";

function TailorMadeTours() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            {/* HERO */}
            <section className="tmt-hero-section" data-aos="fade-down">
                <div className="tmt-hero-overlay">
                    <div className="tmt-hero-content">
                        <h1>Tailor Made Tours</h1>
                        <p>Home &gt; Tailor Made Tours</p>
                    </div>
                </div>
            </section>

            {/* TITLE SECTION */}
            <section className="tmt-title-section" data-aos="fade-up">
                <h2>Tailor–Made Tours / Custom–Made Tours</h2>
                <p>
                    Make your travel planning easy and fun, and your journey stress-free!
                    Share your preferences, and we'll craft a personalized itinerary with a
                    quote tailored just for you.
                </p>
            </section>

            {/* FEATURES */}
            <section className="tmt-features-section" data-aos="fade-up">
                <ul>
                    <li>✔ Top-rated customer satisfaction</li>
                    <li>✔ Luxury transportation</li>
                    <li>✔ Unbeatable rates</li>
                    <li>✔ 100+ stunning destinations in Sri Lanka</li>
                    <li>✔ Memorable and professionally designed tours</li>
                </ul>
            </section>

            {/* FORM */}
            <section className="tmt-form-section" data-aos="fade-up">
                <h3>Fill Up The Form</h3>

                <form className="tmt-form-container">

                    {/* PERSONAL */}
                    <div className="tmt-section-title">Personal Information</div>

                    <div className="tmt-grid">
                        <input type="text" placeholder="First Name*" />
                        <input type="text" placeholder="Last Name*" />
                        <select>
                            <option>Country</option>
                        </select>
                        <input type="email" placeholder="Email Address*" />
                        <input type="text" placeholder="Country Code" />
                        <input type="text" placeholder="Phone Number" />
                        <input type="text" placeholder="WhatsApp" />
                    </div>

                    {/* TOUR INFO */}
                    <div className="tmt-section-title">Tour Information</div>

                    <div className="tmt-grid">
                        <input type="date" placeholder="Arrival" />
                        <input type="text" placeholder="Arrival / Pick up Point*" />
                        <input type="date" placeholder="Departure" />
                        <select><option>No. of Pax</option></select>
                        <select><option>No. of Children</option></select>
                        <select><option>Hotel Category</option></select>
                        <input type="text" placeholder="No. of Rooms" />
                        <select><option>Approximate Budget (per night per person)*</option></select>
                    </div>

                    {/* INTERESTS */}
                    <div className="tmt-section-title">Interests</div>

                    <div className="tmt-interests">
                        <div className="tmt-checkbox-group">
                            <label><input type="checkbox" /> Breakfast</label>
                            <label><input type="checkbox" /> Lunch</label>
                            <label><input type="checkbox" /> Dinner</label>
                        </div>

                        <div className="tmt-checkbox-group">
                            <label><input type="checkbox" /> Eco</label>
                            <label><input type="checkbox" /> Beach</label>
                            <label><input type="checkbox" /> Adventure</label>
                            <label><input type="checkbox" /> Culture</label>
                            <label><input type="checkbox" /> Relax</label>
                            <label><input type="checkbox" /> Wild Life</label>
                        </div>
                    </div>

                    {/* TYPE */}
                    <div className="tmt-section-title">Type of Tour</div>

                    <div className="tmt-radio-group">
                        <label><input type="radio" name="tour-type" /> Solo</label>
                        <label><input type="radio" name="tour-type" /> Couple</label>
                        <label><input type="radio" name="tour-type" /> Family</label>
                        <label><input type="radio" name="tour-type" /> Honeymoon</label>
                        <label><input type="radio" name="tour-type" /> Business</label>
                        <label><input type="radio" name="tour-type" /> Other</label>
                    </div>

                    <textarea placeholder="Additional Requests or Information"></textarea>

                    <button className="tmt-submit-btn">SUBMIT</button>
                </form>
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

export default TailorMadeTours;
