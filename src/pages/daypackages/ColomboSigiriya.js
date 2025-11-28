import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/CultureHeritage.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function ColomboSigiriya() {

    const [activeTab, setActiveTab] = React.useState("inclusion");
    const [activeAccordion, setActiveAccordion] = React.useState(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");

    const [imgHero, setImgHero] = useState("");

    useEffect(() => {
        getDownloadURL(ref(storage, "sigiriya1.jpg")).then(setImg1);
        getDownloadURL(ref(storage, "sigiriya2.jpg")).then(setImg2);
        getDownloadURL(ref(storage, "sigiriya3.jpg")).then(setImg3);

        getDownloadURL(ref(storage, "colomboSigiriya-hero.jpg")).then(setImgHero);
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="ch-hero" data-aos="fade-down">
                <img
                    src={imgHero}
                    alt="banner"
                    className="ch-hero-img"
                />

                {/* TAB BAR */}
                <div className="ch-tabs">
                    <button
                        className={activeTab === "highlights" ? "active" : ""}
                        onClick={() => setActiveTab("highlights")}
                    >
                        🖼 Highlights
                    </button>

                    <button
                        className={activeTab === "inclusion" ? "active" : ""}
                        onClick={() => setActiveTab("inclusion")}
                    >
                        ℹ Inclusion
                    </button>

                    <button
                        className={activeTab === "itinerary" ? "active" : ""}
                        onClick={() => setActiveTab("itinerary")}
                    >
                        📜 Tour Itinerary
                    </button>

                    <button
                        className={activeTab === "route" ? "active" : ""}
                        onClick={() => setActiveTab("route")}
                    >
                        🧭 Route
                    </button>
                </div>
            </section>

            {/* TAB CONTENT */}
            <div className="ch-content">

                {/* ------------------ HIGHLIGHTS ------------------ */}
                {activeTab === "highlights" && (
                    <div>

                        {/* --- NEW LAYOUT (LEFT CONTENT + RIGHT FORM) --- */}
                        <section className="ch-two-column">

                            {/* LEFT CONTENT */}
                            <div className="ch-left" data-aos="fade-right">

                                <section className="ch-intro">

                                    <h1>Our Tour Locations</h1>

                                    <h2>Tour Highlights</h2>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Dambulla Cave Temple</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Hiriwaduna Village Tour</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Sigiriya Rock Fortress</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Spice Garden Technical Visit – Optional</p>
                                    </div>

                                    <h3>We can customize below destinations as you request</h3>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Technical Visit to Matale Spice Garden</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Matale Muththuamman Kovil</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Nalanda Gedige</p>
                                    </div>

                                </section>

                                <section className="ch-offers">
                                    <h2>Description:</h2>
                                    <p>
                                        Embark on an enriching day tour from Colombo to explore two iconic landmarks of Sri Lanka – the Sigiriya Rock Fortress and the Dambulla Cave Temple.
                                        This tour offers a blend of history, culture, and natural beauty, giving you a glimpse into Sri Lanka's ancient architectural heritage.
                                        Sigiriya, known as the 8th Wonder of the World and a UNESCO World Heritage Site, was a royal palace and fortress built by King Kashyapa, showcasing stunning frescoes, water gardens, and awe-inspiring views.
                                        Dambulla Cave Temple, another UNESCO site, reveals Sri Lanka's classical Buddhist architecture with intricately decorated caves and centuries-old statues.
                                    </p>
                                    <p>
                                        The tour also includes a unique experience at Hiriwaduna Village, where you can immerse yourself in local culture and enjoy a traditional Sri Lankan village lunch.
                                        Optional visits to Matale's spice garden, Muththuamman Kovil, and Nalanda Gedige add a customizable touch to this journey.
                                        This package is perfect for travelers seeking to explore the rich history and vibrant culture of Sri Lanka.
                                    </p>
                                    <ul>
                                        <li>UNESCO World Heritage Sites: Sigiriya Rock Fortress & Dambulla Cave Temple.</li>
                                        <li>Cultural Experiences: Hiriwaduna Village tour with Sri Lankan lunch.</li>
                                        <li>Optional Destinations: Matale Spice Garden, Muththuamman Kovil, Nalanda Gedige.</li>
                                        <li>Transportation: Luxury air-conditioned vehicle with English-speaking guide.</li>
                                    </ul>
                                </section>

                            </div>

                            {/* RIGHT FORM */}
                            <div className="ch-right" data-aos="fade-left">

                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();

                                        const name = e.target.name.value;
                                        const email = e.target.email.value;
                                        const country = e.target.country.value;
                                        const code = e.target.code.value;
                                        const phone = e.target.phone.value;
                                        const arrival = e.target.arrival.value;
                                        const departure = e.target.departure.value;
                                        const interest = e.target.interest.value;
                                        const adults = e.target.adults.value;
                                        const kids = e.target.kids.value;
                                        const message = e.target.message.value;

                                        const fullMessage = `
                                                📌 NEW TOUR BOOKING

                                                👤 Name: ${name}
                                                📧 Email: ${email}
                                                🌍 Country: ${country}
                                                📞 Phone: ${code} ${phone}
                                                📅 Arrival: ${arrival}
                                                📅 Departure: ${departure}
                                                🎯 Interest: ${interest}
                                                👨‍👩‍👧 Adults: ${adults}
                                                🧒 Kids: ${kids}

                                                💬 Message: ${message} 
                                            `;

                                        // ✅ SEND WHATSAPP
                                        const whatsappNumber = "94786086861"; // your WhatsApp number
                                        const whatsappURL =
                                            "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

                                        window.open(whatsappURL, "_blank");

                                        // ✅ SEND EMAIL
                                        const mailto =
                                            "mailto:s.a.pasindupiyushan@gmail.com" +
                                            "?subject=" + encodeURIComponent("New Tour Booking") +
                                            "&body=" + encodeURIComponent(fullMessage);

                                        window.location.href = mailto;

                                        alert("✅ Your Booking is Send!");
                                    }}
                                >
                                    <h3>Book This Tour</h3>
                                    <input name="name" type="text" placeholder="Name *" />
                                    <input name="email" type="email" placeholder="Email Address *" />
                                    <select name="country">
                                        <option>Choose Your Country *</option>
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

                                    <div className="phone-row">
                                        <input name="code" className="code" type="text" placeholder="Code" />
                                        <input name="phone" className="phone" type="text" placeholder="Phone Number *" />
                                    </div>

                                    <label>Arrival Date</label>
                                    <input name="arrival" type="date" />

                                    <label>Departure Date</label>
                                    <input name="departure" type="date" />

                                    <select name="interest">
                                        <option>Choose Your Interest *</option>
                                        <option>Eco</option>
                                        <option>Beach</option>
                                        <option>Cultural</option>
                                        <option>Adventure</option>
                                        <option>Wild Life</option>
                                        <option>Relax and Wellness</option>
                                        <option>Honeymoon</option>
                                        <option>Ramayana Trail</option>
                                        <option>All in one Trails</option>
                                    </select>

                                    <input name="adults" type="number" placeholder="Adults *" />
                                    <input name="kids" type="number" placeholder="Kids" />

                                    <textarea name="message" placeholder="Enter your message"></textarea>

                                    <button type="submit">SUBMIT</button>
                                </form>

                                <div className="confidence-box">
                                    <h3>Book With Confidence</h3>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf1.png")} alt="icon" />
                                        <p>Customer care available 24/7</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf2.png")} alt="icon" />
                                        <p>Hand-picked Tours & Activities</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf3.png")} alt="icon" />
                                        <p>Free Travel Insurance</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf4.png")} alt="icon" />
                                        <p>No-hassle best price guarantee</p>
                                    </div>
                                </div>

                            </div>

                        </section>

                    </div>
                )}

                {/* ------------------ INCLUSION ------------------ */}
                {activeTab === "inclusion" && (
                    <div>
                        {/* TITLE SECTION */}
                        <section className="ch-title-section">
                            <h1>Colombo Sigiriya Dambulla</h1>
                            <p className="ch-days">⏱ 1 Day</p>
                        </section>

                        {/* IMAGE GALLERY */}
                        <section className="ch-gallery" data-aos="fade-up">
                            {img1 && <img src={img1} />}
                            {img2 && <img src={img2} />}
                            {img3 && <img src={img3} />}
                        </section>

                        {/* --- NEW LAYOUT (LEFT CONTENT + RIGHT FORM) --- */}
                        <section className="ch-two-column">

                            {/* LEFT CONTENT */}
                            <div className="ch-left" data-aos="fade-right">

                                <section className="ch-intro">

                                    <h2>Introduction</h2>

                                    <p>
                                        This is a tourist package for foreign travellers who prefer to explore the ancient history of Sri Lanka and its outstanding architecture.
                                    </p>

                                    <p>
                                        Sigiriya Rock Fortress is a world-renowned tourist destination and a UNESCO World Heritage Site due to its historical value and architecture.its called 8th world wonder. It was built as a royal palace and fort by King Kashyapa (473-495 CE) and was then used as a Buddhist monastery. Its entrance has the footprints of a large lion carved in stone, which symbolizes its grandeur. It is famous for the Sigiriya mural depicting celestial maidens (apsaras) on the western face of the rock. The wall, which once depicted the image of the king, is now decorated with ancient paintings of tourists for centuries. It is one of the oldest landscaped gardens in the world, with symmetrical water gardens, stone gardens and terraced gardens. Amazing views of the surrounding area.
                                    </p>

                                    <p>
                                        Dambulla Cave Temple is yet another ancient Buddhist temple that will give you a better understanding of the development of Sri Lanka's classical architectural consciousness. This is a UNESCO World Heritage site and an important attraction in the cultural triangle of Sri Lanka.
                                    </p>

                                    <p>
                                        Both Sigiriya and Dambulla Cave Temple have valuable historical stories behind them; therefore, it will be useful for you to plan your trip to Sigiriya and Dambulla from Colombo with one of our experienced drivers/guides. Moreover, the package includes a hiriwaduna village tour that will give you the opportunity to experience the local life in the region.
                                    </p>

                                    <p>
                                        The village of Hirivaduwa is a charming town located near Habarana, in the heart of Sri Lanka's cultural triangle. It offers an authentic representation of traditional rural life in Sri Lanka and is a popular spot for ecotourism and cultural experiences.
                                    </p>

                                    <p>
                                        Optional you can plan technical visit to matale spice garden there you will be explained cultivation & processing of various spices such as cinnamon, cardamom, pepper, and turmeric.it is an excellent place to learn about the rich spice heritage of Sri Lanka and enjoy a tour through the lush landscapes.
                                    </p>

                                </section>

                                <section className="ch-offers">
                                    <h2>Inclusions</h2>
                                    <ul>
                                        <li>Total Transportation in a luxury Air-Conditioned Vehicle as per the itinerary</li>
                                        <li>Service of a fully qualified English Speaking driver/guide</li>
                                        <li>Entrance Fees (For All Inclusive Purchases)</li>
                                        <li>Traditional Sri Lankan Village Lunch (For All Inclusive Purchases)</li>
                                        <li>Bottled Water</li>
                                        <li>All taxes, fees and handling charges</li>
                                        <li>Hotel pickup and drop-off from Colombo, Negombo, or Colombo airport</li>
                                    </ul>
                                </section>

                                <section className="ch-package">
                                    <h2>Exclusions</h2>
                                    <ul>
                                        <li>Gratuities (recommended)</li>
                                        <li>Anything other than mentioned in inclusions</li>
                                    </ul>
                                </section>

                                <section className="ch-excludes">
                                    <h2>Cancellations and Refunds</h2>
                                    <h3>Full Refund</h3>
                                    <ul>
                                        <li>Full refunds can be claimed if a cancellation request is presented in writing a full seven (07) days prior to the excursion date.</li>
                                    </ul>

                                    <h3>No Refund</h3>
                                    <ul>
                                        <li>No refunds can be claimed if a minimum seven (07) days prior notice is not given in writing. Booking to be done at least 10 days in advance.</li>
                                    </ul>

                                    <h3>Booking Information</h3>
                                    <ul>
                                        <li>Booking to be done at least 10 days in prior</li>
                                    </ul>
                                </section>

                            </div>

                            {/* RIGHT FORM */}
                            <div className="ch-right" data-aos="fade-left">

                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();

                                        const name = e.target.name.value;
                                        const email = e.target.email.value;
                                        const country = e.target.country.value;
                                        const code = e.target.code.value;
                                        const phone = e.target.phone.value;
                                        const arrival = e.target.arrival.value;
                                        const departure = e.target.departure.value;
                                        const interest = e.target.interest.value;
                                        const adults = e.target.adults.value;
                                        const kids = e.target.kids.value;
                                        const message = e.target.message.value;

                                        const fullMessage = `
                                                📌 NEW TOUR BOOKING

                                                👤 Name: ${name}
                                                📧 Email: ${email}
                                                🌍 Country: ${country}
                                                📞 Phone: ${code} ${phone}
                                                📅 Arrival: ${arrival}
                                                📅 Departure: ${departure}
                                                🎯 Interest: ${interest}
                                                👨‍👩‍👧 Adults: ${adults}
                                                🧒 Kids: ${kids}

                                                💬 Message: ${message} 
                                            `;

                                        // ✅ SEND WHATSAPP
                                        const whatsappNumber = "94786086861"; // your WhatsApp number
                                        const whatsappURL =
                                            "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

                                        window.open(whatsappURL, "_blank");

                                        // ✅ SEND EMAIL
                                        const mailto =
                                            "mailto:s.a.pasindupiyushan@gmail.com" +
                                            "?subject=" + encodeURIComponent("New Tour Booking") +
                                            "&body=" + encodeURIComponent(fullMessage);

                                        window.location.href = mailto;

                                        alert("✅ Your Booking is Send!");
                                    }}
                                >
                                    <h3>Book This Tour</h3>
                                    <input name="name" type="text" placeholder="Name *" />
                                    <input name="email" type="email" placeholder="Email Address *" />
                                    <select name="country">
                                        <option>Choose Your Country *</option>
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

                                    <div className="phone-row">
                                        <input name="code" className="code" type="text" placeholder="Code" />
                                        <input name="phone" className="phone" type="text" placeholder="Phone Number *" />
                                    </div>

                                    <label>Arrival Date</label>
                                    <input name="arrival" type="date" />

                                    <label>Departure Date</label>
                                    <input name="departure" type="date" />

                                    <select name="interest">
                                        <option>Choose Your Interest *</option>
                                        <option>Eco</option>
                                        <option>Beach</option>
                                        <option>Cultural</option>
                                        <option>Adventure</option>
                                        <option>Wild Life</option>
                                        <option>Relax and Wellness</option>
                                        <option>Honeymoon</option>
                                        <option>Ramayana Trail</option>
                                        <option>All in one Trails</option>
                                    </select>

                                    <input name="adults" type="number" placeholder="Adults *" />
                                    <input name="kids" type="number" placeholder="Kids" />

                                    <textarea name="message" placeholder="Enter your message"></textarea>

                                    <button type="submit">SUBMIT</button>
                                </form>

                                <div className="confidence-box">
                                    <h3>Book With Confidence</h3>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf1.png")} alt="icon" />
                                        <p>Customer care available 24/7</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf2.png")} alt="icon" />
                                        <p>Hand-picked Tours & Activities</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf3.png")} alt="icon" />
                                        <p>Free Travel Insurance</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf4.png")} alt="icon" />
                                        <p>No-hassle best price guarantee</p>
                                    </div>
                                </div>

                            </div>

                        </section>

                    </div>
                )}

                {/* ------------------ ITINERARY ------------------ */}
                {activeTab === "itinerary" && (
                    <div className="itinerary-wrapper">

                        <section className="ch-two-column">

                            {/* LEFT SIDE – ITINERARY ACCORDION */}
                            <div className="itinerary-left">

                                {[
                                    {
                                        day: "6:00 A.M",
                                        details: "Pick-up from your hotel at Colombo or Negombo OR Colombo airport. You will be greeted by your tour guide who will assist you with the journey, ensuring a comfortable start to the tour."
                                    },
                                    {
                                        day: "9:30 A.M.",
                                        details: "Reach Dambulla Cave Temple. This UNESCO World Heritage site is known for its intricate murals and statues of Buddha. You will explore the sacred caves while learning about the history of the temple."
                                    },
                                    {
                                        day: "10:30 A.M.",
                                        details: "Reach Sigiriya & Hiriwaduna Village for a tour and enjoy a traditional village lunch. The experience includes exploring the rural lifestyle and tasting authentic Sri Lankan cuisine, prepared with fresh local ingredients."
                                    },
                                    {
                                        day: "2:00 P.M.",
                                        details: "Guided tour to Sigiriya Rock Fortress. This ancient rock fortress offers breathtaking panoramic views of the surrounding landscapes. Your guide will share fascinating details about its history, architecture, and significance."
                                    },
                                    {
                                        day: "8:00 P.M.",
                                        details: "Reach your hotel in Colombo. After an exciting day of exploration, return to your accommodation where you can unwind, relax, and reflect on the day's journey."
                                    },
                                    {
                                        day: "Customizable Destinations",
                                        details: "Technical visit to Matale Spice Garden to learn about Sri Lanka's rich spice heritage. Matale Muththuamman Kovil, a Hindu temple known for its striking architecture and spiritual significance. Nalanda Gedige, an ancient archaeological site with a blend of Hindu and Buddhist influences, offering a glimpse into the country's past."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="itinerary-item">
                                        <div
                                            className={`itinerary-header ${activeAccordion === index ? "open" : ""
                                                }`}
                                            onClick={() =>
                                                setActiveAccordion(activeAccordion === index ? null : index)
                                            }
                                        >
                                            <span className="day-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <h3>{item.day}</h3>
                                            <span className="arrow">
                                                {activeAccordion === index ? "" : ""}
                                            </span>
                                        </div>

                                        {activeAccordion === index && (
                                            <div className="itinerary-body">
                                                <div
                                                    className="itinerary-body-text"
                                                    dangerouslySetInnerHTML={{ __html: item.details }}
                                                ></div>
                                            </div>
                                        )}

                                    </div>
                                ))}

                            </div>

                            {/* RIGHT SIDE — BOOKING FORM (KEPT SAME AS YOUR DESIGN) */}
                            <div className="ch-right" data-aos="fade-left">

                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();

                                        const name = e.target.name.value;
                                        const email = e.target.email.value;
                                        const country = e.target.country.value;
                                        const code = e.target.code.value;
                                        const phone = e.target.phone.value;
                                        const arrival = e.target.arrival.value;
                                        const departure = e.target.departure.value;
                                        const interest = e.target.interest.value;
                                        const adults = e.target.adults.value;
                                        const kids = e.target.kids.value;
                                        const message = e.target.message.value;

                                        const fullMessage = `
                                                📌 NEW TOUR BOOKING

                                                👤 Name: ${name}
                                                📧 Email: ${email}
                                                🌍 Country: ${country}
                                                📞 Phone: ${code} ${phone}
                                                📅 Arrival: ${arrival}
                                                📅 Departure: ${departure}
                                                🎯 Interest: ${interest}
                                                👨‍👩‍👧 Adults: ${adults}
                                                🧒 Kids: ${kids}

                                                💬 Message: ${message} 
                                            `;

                                        // ✅ SEND WHATSAPP
                                        const whatsappNumber = "94786086861"; // your WhatsApp number
                                        const whatsappURL =
                                            "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

                                        window.open(whatsappURL, "_blank");

                                        // ✅ SEND EMAIL
                                        const mailto =
                                            "mailto:s.a.pasindupiyushan@gmail.com" +
                                            "?subject=" + encodeURIComponent("New Tour Booking") +
                                            "&body=" + encodeURIComponent(fullMessage);

                                        window.location.href = mailto;

                                        alert("✅ Your Booking is Send!");
                                    }}
                                >
                                    <h3>Book This Tour</h3>
                                    <input name="name" type="text" placeholder="Name *" />
                                    <input name="email" type="email" placeholder="Email Address *" />
                                    <select name="country">
                                        <option>Choose Your Country *</option>
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

                                    <div className="phone-row">
                                        <input name="code" className="code" type="text" placeholder="Code" />
                                        <input name="phone" className="phone" type="text" placeholder="Phone Number *" />
                                    </div>

                                    <label>Arrival Date</label>
                                    <input name="arrival" type="date" />

                                    <label>Departure Date</label>
                                    <input name="departure" type="date" />

                                    <select name="interest">
                                        <option>Choose Your Interest *</option>
                                        <option>Eco</option>
                                        <option>Beach</option>
                                        <option>Cultural</option>
                                        <option>Adventure</option>
                                        <option>Wild Life</option>
                                        <option>Relax and Wellness</option>
                                        <option>Honeymoon</option>
                                        <option>Ramayana Trail</option>
                                        <option>All in one Trails</option>
                                    </select>

                                    <input name="adults" type="number" placeholder="Adults *" />
                                    <input name="kids" type="number" placeholder="Kids" />

                                    <textarea name="message" placeholder="Enter your message"></textarea>

                                    <button type="submit">SUBMIT</button>
                                </form>

                                <div className="confidence-box">
                                    <h3>Book With Confidence</h3>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf1.png")} alt="icon" />
                                        <p>Customer care available 24/7</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf2.png")} alt="icon" />
                                        <p>Hand-picked Tours & Activities</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf3.png")} alt="icon" />
                                        <p>Free Travel Insurance</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/conf4.png")} alt="icon" />
                                        <p>No-hassle best price guarantee</p>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                )}

                {/* ------------------ ROUTE ------------------ */}
                {activeTab === "route" && (
                    <section className="ch-two-column">

                        {/* LEFT MAP */}
                        <div className="ch-left" data-aos="fade-right">
                            <h1>Route</h1>

                            <div className="map-container">
                                <iframe
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyAMSBflSdMe2iqCbOsRtIGLTUC-SOjBxmg&origin=CITY1&destination=CITY2
                                        &origin=Colombo,Sri+Lanka
                                        &destination=Galle,Sri+Lanka
                                        &waypoints=Kandy|Sigiriya|Anuradhapura|Polonnaruwa|Ella|Yala|Mirissa
                                        &avoid=tolls|highways`
                                    }>
                                </iframe>

                            </div>

                            <div className="route-info">
                                <p><strong>Distance:</strong> 409.1 km</p>
                                <p><strong>Duration:</strong> 8 hr 38 min</p>
                            </div>
                        </div>

                        {/* RIGHT FORM */}
                        <div className="ch-right" data-aos="fade-left">

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    const name = e.target.name.value;
                                    const email = e.target.email.value;
                                    const country = e.target.country.value;
                                    const code = e.target.code.value;
                                    const phone = e.target.phone.value;
                                    const arrival = e.target.arrival.value;
                                    const departure = e.target.departure.value;
                                    const interest = e.target.interest.value;
                                    const adults = e.target.adults.value;
                                    const kids = e.target.kids.value;
                                    const message = e.target.message.value;

                                    const fullMessage = `
                                                📌 NEW TOUR BOOKING

                                                👤 Name: ${name}
                                                📧 Email: ${email}
                                                🌍 Country: ${country}
                                                📞 Phone: ${code} ${phone}
                                                📅 Arrival: ${arrival}
                                                📅 Departure: ${departure}
                                                🎯 Interest: ${interest}
                                                👨‍👩‍👧 Adults: ${adults}
                                                🧒 Kids: ${kids}

                                                💬 Message: ${message} 
                                            `;

                                    // ✅ SEND WHATSAPP
                                    const whatsappNumber = "94786086861"; // your WhatsApp number
                                    const whatsappURL =
                                        "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

                                    window.open(whatsappURL, "_blank");

                                    // ✅ SEND EMAIL
                                    const mailto =
                                        "mailto:s.a.pasindupiyushan@gmail.com" +
                                        "?subject=" + encodeURIComponent("New Tour Booking") +
                                        "&body=" + encodeURIComponent(fullMessage);

                                    window.location.href = mailto;

                                    alert("✅ Your Booking is Send!");
                                }}
                            >
                                <h3>Book This Tour</h3>
                                <input name="name" type="text" placeholder="Name *" />
                                <input name="email" type="email" placeholder="Email Address *" />
                                <select name="country">
                                    <option>Choose Your Country *</option>
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

                                <div className="phone-row">
                                    <input name="code" className="code" type="text" placeholder="Code" />
                                    <input name="phone" className="phone" type="text" placeholder="Phone Number *" />
                                </div>

                                <label>Arrival Date</label>
                                <input name="arrival" type="date" />

                                <label>Departure Date</label>
                                <input name="departure" type="date" />

                                <select name="interest">
                                    <option>Choose Your Interest *</option>
                                    <option>Eco</option>
                                    <option>Beach</option>
                                    <option>Cultural</option>
                                    <option>Adventure</option>
                                    <option>Wild Life</option>
                                    <option>Relax and Wellness</option>
                                    <option>Honeymoon</option>
                                    <option>Ramayana Trail</option>
                                    <option>All in one Trails</option>
                                </select>

                                <input name="adults" type="number" placeholder="Adults *" />
                                <input name="kids" type="number" placeholder="Kids" />

                                <textarea name="message" placeholder="Enter your message"></textarea>

                                <button type="submit">SUBMIT</button>
                            </form>

                            <div className="confidence-box">
                                <h3>Book With Confidence</h3>

                                <div className="conf-item">
                                    <img src={require("../../assets/conf1.png")} alt="icon" />
                                    <p>Customer care available 24/7</p>
                                </div>

                                <div className="conf-item">
                                    <img src={require("../../assets/conf2.png")} alt="icon" />
                                    <p>Hand-picked Tours & Activities</p>
                                </div>

                                <div className="conf-item">
                                    <img src={require("../../assets/conf3.png")} alt="icon" />
                                    <p>Free Travel Insurance</p>
                                </div>

                                <div className="conf-item">
                                    <img src={require("../../assets/conf4.png")} alt="icon" />
                                    <p>No-hassle best price guarantee</p>
                                </div>
                            </div>

                        </div>

                    </section>
                )}

            </div>

            {/* CTA Section */}
            <section className="cta-section" data-aos="fade-up">
                <div className="cta-box">
                    <div className="cta-left">
                        <img src={require("../../assets/hile.png")} className="cta-icon" alt="icon" />
                        <div className="cta-text">
                            <h2>Ready To Adventure And Enjoy Natural</h2>
                            <p>Reach Pearl Ceylon Tours For A Secure, Luxurious, And Unforgettable Adventure!</p>
                        </div>
                    </div>

                    <img src={require("../../assets/plan.png")} className="cta-plane" alt="plane" />

                    <button className="cta-btn">LET’S GET STARTED</button>
                </div>
            </section>
        </>
    );
}

export default ColomboSigiriya;
