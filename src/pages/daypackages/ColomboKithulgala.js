import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/CultureHeritage.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function ColomboKithulgala() {

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
        getDownloadURL(ref(storage, "colomboKithulgala1.jpg")).then(setImg1);
        getDownloadURL(ref(storage, "colomboKithulgala2.jpg")).then(setImg2);
        getDownloadURL(ref(storage, "colomboKithulgala3.jpg")).then(setImg3);

        getDownloadURL(ref(storage, "colomboKithulgala-hero.jpg")).then(setImgHero);
    }, []);

    return (
        <div className="main-container">
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

                                    <p>The "Colombo To Kithulgala" tour package typically includes thrilling outdoor activities and scenic adventures.</p>

                                    <h2>Tour Highlights</h2>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>White water rafting in Kelani River</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Rock pool sliding</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Waterfall sliding</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Trekking</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Mini jungle trail</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>River bath</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>River floating</p>
                                    </div>

                                </section>

                                <section className="ch-offers">
                                    <h2>Description:</h2>
                                    <p>
                                        Embark on an exhilarating day tour from Colombo to Kitulgala, where adventure and natural beauty await.
                                        Located just two and a half hours from Colombo, Kitulgala is known for its lush rainforest, scenic landscapes, and thrilling water-based activities.
                                        Experience white water rafting on the Kelani River, enjoy rock and waterfall sliding, and immerse yourself in the beauty of the surrounding jungle through trekking and mini trails.
                                        Kitulgala is also famous for its historical significance as the filming location for the Academy Award-winning movie "The Bridge on the River Kwai." In addition to the exciting activities, discover ancient sites like the Belilena Cave and the Makandawa Rainforest Reserve, a biodiversity hotspot.
                                        This tour is a perfect blend of adventure, nature, and culture.
                                    </p>
                                    <ul>
                                        <li>White water rafting in the Kelani River</li>
                                        <li>Rock pool sliding</li>
                                        <li>Waterfall sliding</li>
                                        <li>Trekking and mini jungle trail</li>
                                        <li>River bath and floating</li>
                                        <li>Belilena Cave visit (pre-historic site)</li>
                                        <li>Makandawa Rainforest Reserve (biodiversity hotspot)</li>
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
                            <h1>Colombo To Kithulgala</h1>
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
                                        It will take about two & half hours from Colombo to Kitulgala Kithulgala is a Rain Forest patch which attracts many resident and foreign tourists for its natural beauty. The Academy Awad-winning movie ‘’The Bridge on the River Kwai’’ was filmed on the Kelani River near Kitulgala, although nothing remains now except the concrete foundations for the bridge.
                                    </p>

                                    <p>
                                        Kitulgala is the base for white-water rafting in Sri Lanka but there are myriad of leisure and adventure activities that can be done in Kutulgala.
                                    </p>

                                    <h3>Below are some more activities which you can customize as require</h3>

                                    <p>
                                        Belilena cave - which is an ancient prehistoric site where Balangoda Man fossils were discovered will take short trek through lush greenery.
                                    </p>

                                    <p>
                                        Makandawa railforest reserve- Which is a biodiversity hotspot with exotic flora and fauna, including endemic bird species.
                                    </p>

                                    <p>
                                        Trekking & hiking -Scenic trails through tea plantations, forests, and hills.
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
                                        <li>Can be claimed if a cancellation request is made in writing at least seven (07) days before the excursion date.</li>
                                    </ul>

                                    <h3>No Refund</h3>
                                    <ul>
                                        <li>No refunds can be claimed if a minimum seven (07) days prior notice is not given in writing.</li>
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
                                        day: "9:00 A.M",
                                        details: "Pick-up from your hotel at Colombo or Negombo OR Colombo airport. A friendly guide will welcome you and accompany you for the exciting day ahead."
                                    },
                                    {
                                        day: "11:30 A.M.",
                                        details: "Start your white water rafting adventure activity in Kithulgala. The exciting rafting experience will take you through the thrilling rapids of the Kelani River surrounded by lush greenery."
                                    },
                                    {
                                        day: "1:30 P.M.",
                                        details: "Enjoy a traditional Sri Lankan lunch with rice and curry, offering a variety of local flavors and spices to energize you for the afternoon adventures."
                                    },
                                    {
                                        day: "2:15 P.M.",
                                        details: "Experience the thrill of rock pool sliding. Slide down the natural rock formations into the refreshing pool below, an adventure activity filled with fun and excitement."
                                    },
                                    {
                                        day: "2:45 P.M.",
                                        details: "Enjoy water pool sliding, another thrilling activity that lets you slide into the cool waters while surrounded by nature’s beauty."
                                    },
                                    {
                                        day: "3:00 P.M.",
                                        details: "Embark on a trekking and mini jungle trail. Experience nature up close as you explore the dense jungle, observing wildlife and enjoying the tranquility of the surroundings."
                                    },
                                    {
                                        day: "4:30 P.M.",
                                        details: "Begin your journey back to Colombo, reflecting on the day's adventures and the memories created during this unforgettable experience."
                                    },
                                    {
                                        day: "7:00 P.M.",
                                        details: "Arrive at your hotel in Colombo or Negombo. End your day with a relaxing evening, rejuvenating after an action-packed adventure."
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
                                <p><strong>Distance:</strong> 185.8 km</p>
                                <p><strong>Duration:</strong> 5 hr 19 min</p>
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
        </div>
    );
}

export default ColomboKithulgala;
