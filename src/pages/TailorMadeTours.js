import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/TailorMadeTours.css";

function TailorMadeTours() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // ⭐ All form fields stored in state
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        countryCode: "",
        phone: "",
        whatsapp: "",
        arrival: "",
        pickup: "",
        departure: "",
        pax: "",
        children: "",
        hotel: "",
        rooms: "",
        budget: "",
        interests: [],
        tourType: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setForm(prev => ({
                ...prev,
                interests: checked
                    ? [...prev.interests, value]
                    : prev.interests.filter(i => i !== value)
            }));
        } else {
            setForm(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ⭐ Message text for WhatsApp + Email
        const fullMessage = `
            Tailor Made Tour Request:

            PERSONAL DETAILS
            --------------------
            Name: ${form.firstName} ${form.lastName}
            Country: ${form.country}
            Email: ${form.email}
            Phone: ${form.countryCode} ${form.phone}
            WhatsApp: ${form.whatsapp}

            TOUR INFORMATION
            --------------------
            Arrival: ${form.arrival}
            Pick up Location: ${form.pickup}
            Departure: ${form.departure}
            Pax: ${form.pax}
            Children: ${form.children}
            Hotel Category: ${form.hotel}
            Rooms: ${form.rooms}
            Budget: ${form.budget}

            INTERESTS
            --------------------
            ${form.interests.join(", ")}

            TOUR TYPE
            --------------------
            ${form.tourType}

            ADDITIONAL NOTES
            --------------------
            ${form.message}
        `;

        // ⭐ WhatsApp send
        const whatsappNumber = "94786086861";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappURL, "_blank");

        // ⭐ Email send
        const emailURL = `mailto:s.a.pasindupiyushan@gmail.com?subject=Tailor Made Tour Request&body=${encodeURIComponent(fullMessage)}`;
        window.location.href = emailURL;
    };

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

                {/* ⭐ The form now includes onSubmit */}
                <form className="tmt-form-container" onSubmit={handleSubmit}>

                    {/* PERSONAL */}
                    <div className="tmt-section-title">Personal Information</div>
                    <div className="tmt-grid">
                        <input name="firstName" onChange={handleChange} type="text" placeholder="First Name*" />
                        <input name="lastName" onChange={handleChange} type="text" placeholder="Last Name*" />
                        <select name="country" onChange={handleChange}>
                            <option value="">Country</option>
                            <option>Afghanistan</option>
                            <option>Albania</option>
                            <option>Algeria</option>
                            <option>Andorra</option>
                            <option>Angola</option>
                            <option>Antigua and Barbuda</option>
                            <option>Argentina</option>
                            <option>Armenia</option>
                            <option>Australia</option>
                            <option>Austria</option>
                            <option>Azerbaijan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                            <option>Belarus</option>
                            <option>Belgium</option>
                            <option>Belize</option>
                            <option>Benin</option>
                            <option>Bhutan</option>
                            <option>Bolivia</option>
                            <option>Bosnia and Herzegovina</option>
                            <option>Botswana</option>
                            <option>Brazil</option>
                            <option>Brunei</option>
                            <option>Bulgaria</option>
                            <option>Burkina Faso</option>
                            <option>Burundi</option>
                            <option>Cabo Verde</option>
                            <option>Cambodia</option>
                            <option>Cameroon</option>
                            <option>Canada</option>
                            <option>Central African Republic</option>
                            <option>Chad</option>
                            <option>Chile</option>
                            <option>China</option>
                            <option>Colombia</option>
                            <option>Comoros</option>
                            <option>Congo, Democratic Republic of the</option>
                            <option>Congo, Republic of the</option>
                            <option>Costa Rica</option>
                            <option>Côte d’Ivoire</option>
                            <option>Croatia</option>
                            <option>Cuba</option>
                            <option>Cyprus</option>
                            <option>Czech Republic</option>
                            <option>Denmark</option>
                            <option>Djibouti</option>
                            <option>Dominica</option>
                            <option>Dominican Republic</option>
                            <option>Ecuador</option>
                            <option>Egypt</option>
                            <option>El Salvador</option>
                            <option>Equatorial Guinea</option>
                            <option>Eritrea</option>
                            <option>Estonia</option>
                            <option>Eswatini</option>
                            <option>Ethiopia</option>
                            <option>Fiji</option>
                            <option>Finland</option>
                            <option>France</option>
                            <option>Gabon</option>
                            <option>Gambia</option>
                            <option>Georgia</option>
                            <option>Germany</option>
                            <option>Ghana</option>
                            <option>Greece</option>
                            <option>Grenada</option>
                            <option>Guatemala</option>
                            <option>Guinea</option>
                            <option>Guinea-Bissau</option>
                            <option>Guyana</option>
                            <option>Haiti</option>
                            <option>Honduras</option>
                            <option>Hungary</option>
                            <option>Iceland</option>
                            <option>India</option>
                            <option>Indonesia</option>
                            <option>Iran</option>
                            <option>Iraq</option>
                            <option>Ireland</option>
                            <option>Israel</option>
                            <option>Italy</option>
                            <option>Jamaica</option>
                            <option>Japan</option>
                            <option>Jordan</option>
                            <option>Kazakhstan</option>
                            <option>Kenya</option>
                            <option>Kiribati</option>
                            <option>Korea, North</option>
                            <option>Korea, South</option>
                            <option>Kuwait</option>
                            <option>Kyrgyzstan</option>
                            <option>Laos</option>
                            <option>Latvia</option>
                            <option>Lebanon</option>
                            <option>Lesotho</option>
                            <option>Liberia</option>
                            <option>Libya</option>
                            <option>Liechtenstein</option>
                            <option>Lithuania</option>
                            <option>Luxembourg</option>
                            <option>Madagascar</option>
                            <option>Malawi</option>
                            <option>Malaysia</option>
                            <option>Maldives</option>
                            <option>Mali</option>
                            <option>Malta</option>
                            <option>Marshall Islands</option>
                            <option>Mauritania</option>
                            <option>Mauritius</option>
                            <option>Mexico</option>
                            <option>Micronesia</option>
                            <option>Moldova</option>
                            <option>Monaco</option>
                            <option>Mongolia</option>
                            <option>Montenegro</option>
                            <option>Morocco</option>
                            <option>Mozambique</option>
                            <option>Myanmar (Burma)</option>
                            <option>Namibia</option>
                            <option>Nauru</option>
                            <option>Nepal</option>
                            <option>Netherlands</option>
                            <option>New Zealand</option>
                            <option>Nicaragua</option>
                            <option>Niger</option>
                            <option>Nigeria</option>
                            <option>North Macedonia</option>
                            <option>Norway</option>
                            <option>Oman</option>
                            <option>Pakistan</option>
                            <option>Palau</option>
                            <option>Panama</option>
                            <option>Papua New Guinea</option>
                            <option>Paraguay</option>
                            <option>Peru</option>
                            <option>Philippines</option>
                            <option>Poland</option>
                            <option>Portugal</option>
                            <option>Qatar</option>
                            <option>Romania</option>
                            <option>Russia</option>
                            <option>Rwanda</option>
                            <option>Saint Kitts and Nevis</option>
                            <option>Saint Lucia</option>
                            <option>Saint Vincent and the Grenadines</option>
                            <option>Samoa</option>
                            <option>San Marino</option>
                            <option>Sao Tome and Principe</option>
                            <option>Saudi Arabia</option>
                            <option>Senegal</option>
                            <option>Serbia</option>
                            <option>Seychelles</option>
                            <option>Sierra Leone</option>
                            <option>Singapore</option>
                            <option>Slovakia</option>
                            <option>Slovenia</option>
                            <option>Solomon Islands</option>
                            <option>Somalia</option>
                            <option>South Africa</option>
                            <option>South Sudan</option>
                            <option>Spain</option>
                            <option>Sri Lanka</option>
                            <option>Sudan</option>
                            <option>Suriname</option>
                            <option>Sweden</option>
                            <option>Switzerland</option>
                            <option>Syria</option>
                            <option>Taiwan</option>
                            <option>Tajikistan</option>
                            <option>Tanzania</option>
                            <option>Thailand</option>
                            <option>Timor-Leste</option>
                            <option>Togo</option>
                            <option>Tonga</option>
                            <option>Trinidad and Tobago</option>
                            <option>Tunisia</option>
                            <option>Turkey</option>
                            <option>Turkmenistan</option>
                            <option>Tuvalu</option>
                            <option>Uganda</option>
                            <option>Ukraine</option>
                            <option>United Arab Emirates</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                            <option>Uruguay</option>
                            <option>Uzbekistan</option>
                            <option>Vanuatu</option>
                            <option>Vatican City</option>
                            <option>Venezuela</option>
                            <option>Vietnam</option>
                            <option>Yemen</option>
                            <option>Zambia</option>
                            <option>Zimbabwe</option>
                        </select>
                        <input name="email" onChange={handleChange} type="email" placeholder="Email Address*" />
                        <input name="countryCode" onChange={handleChange} type="text" placeholder="Country Code" />
                        <input name="phone" onChange={handleChange} type="text" placeholder="Phone Number" />
                        <input name="whatsapp" onChange={handleChange} type="text" placeholder="WhatsApp" />
                    </div>

                    {/* TOUR INFO */}
                    <div className="tmt-section-title">Tour Information</div>
                    <div className="tmt-grid">
                        <input name="arrival" onChange={handleChange} type="date" />
                        <input name="pickup" onChange={handleChange} type="text" placeholder="Arrival / Pick up Point*" />
                        <input name="departure" onChange={handleChange} type="date" />
                        <select name="pax" onChange={handleChange}>
                            <option value="">No. of Pax</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                        <select name="children" onChange={handleChange}>
                            <option value="">No. of Children</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                        <select name="hotel" onChange={handleChange}>
                            <option value="">Hotel Category</option>
                            <option value="">3 Star</option>
                            <option value="">4 Star</option>
                            <option value="">5 Star</option>
                            <option value="">Boutique</option>
                            <option value="">Eco</option>
                        </select>
                        <input name="rooms" onChange={handleChange} type="text" placeholder="No. of Rooms" />
                        <select name="budget" onChange={handleChange}>
                            <option value="">Approximate Budget*</option>
                            <option value="">less than 500 USD</option>
                            <option value="">500-1000 USD</option>
                            <option value="">1000-1500 USD</option>
                            <option value="">1500-2000 USD</option>
                            <option value="">Over 2000 USD</option>
                        </select>
                    </div>

                    {/* INTERESTS */}
                    <div className="tmt-section-title">Interests</div>
                    <div className="tmt-interests">
                        <label><input type="checkbox" value="Breakfast" onChange={handleChange} /> Breakfast</label>
                        <label><input type="checkbox" value="Lunch" onChange={handleChange} /> Lunch</label>
                        <label><input type="checkbox" value="Dinner" onChange={handleChange} /> Dinner</label>
                        <label><input type="checkbox" value="Eco" onChange={handleChange} /> Eco</label>
                        <label><input type="checkbox" value="Beach" onChange={handleChange} /> Beach</label>
                        <label><input type="checkbox" value="Adventure" onChange={handleChange} /> Adventure</label>
                        <label><input type="checkbox" value="Culture" onChange={handleChange} /> Culture</label>
                        <label><input type="checkbox" value="Relax" onChange={handleChange} /> Relax</label>
                        <label><input type="checkbox" value="Wild Life" onChange={handleChange} /> Wild Life</label>
                    </div>

                    {/* TYPE */}
                    <div className="tmt-section-title">Type of Tour</div>
                    <div className="tmt-radio-group">
                        <label><input name="tourType" onChange={handleChange} type="radio" value="Solo" /> Solo</label>
                        <label><input name="tourType" onChange={handleChange} type="radio" value="Couple" /> Couple</label>
                        <label><input name="tourType" onChange={handleChange} type="radio" value="Family" /> Family</label>
                        <label><input name="tourType" onChange={handleChange} type="radio" value="Honeymoon" /> Honeymoon</label>
                        <label><input name="tourType" onChange={handleChange} type="radio" value="Business" /> Business</label>
                        <label><input name="tourType" onChange={handleChange} type="radio" value="Other" /> Other</label>
                    </div>

                    <textarea name="message" onChange={handleChange} placeholder="Additional Requests or Information"></textarea>

                    <button className="tmt-submit-btn" type="submit">SUBMIT</button>
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
