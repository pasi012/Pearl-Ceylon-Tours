import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css/CultureHeritage.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function HoneymoonTrail() {

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
        getDownloadURL(ref(storage, "honeymoon1.jpg")).then(setImg1);
        getDownloadURL(ref(storage, "honeymoon2.jpg")).then(setImg2);
        getDownloadURL(ref(storage, "honeymoon3.jpg")).then(setImg3);

        getDownloadURL(ref(storage, "honeymoonTrail-hero.jpg")).then(setImgHero);
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

                                    <p>
                                        The 'Honeymoon Trail' tour package offers couples an enchanting journey through picturesque locations and culturally rich sites, creating unforgettable memories.
                                    </p>

                                    <h2>Tour Highlights</h2>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Negambo fish market</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Pinnawala elephant orphanage</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Sigiriya lion rock</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Hiriwaduna village tour</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Minneriya national park jeep safari</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Explore UNESCO world heritage Anuradhapura</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Nelaveli beach</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Pidgeon island</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Koneshwara temple</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Hot springs</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Nalanda Gedige, Matale Spice Garden technical visit, and then visit the Hindu temple</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Visit UNESCO world heritage temple of tooth</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Kandyan culture show which will be held in Kandy art association hall</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Peradeniya botanical garden</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Jem & jewellery museum, authentic Sri Lankan silk and batik factory only for visit</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Kandy city tour</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Kithulgala white water rafting (this event consists of adventure & if you are interested)</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Belilena cave</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Visit Ramboda fall & Damro tea factory</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Visit UNESCO world heritage Horton plain</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Hakgala botanical garden</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Train ride Nanu Oya to Ella – (availability of seats & time)</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Little Adams peak</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Visit nine arch in Ella</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Jeep safari in Yala national park</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Mulkiriga temple</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Hunmanaya blow hole</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Relax in Mirissa beach & whale watching</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Coconut tree hill in Mirissa beach</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Galle Dutch port</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Madu river boat ride</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Visit Kosgoda turtle hatchery</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Colombo city tour</p>
                                    </div>

                                </section>

                                <section className="ch-offers">
                                    <h2>Description:</h2>
                                    <p>
                                        Embark on an enchanting 8N/9D Sri Lankan Honeymoon Trail, a perfect blend of romance, adventure, and cultural discovery.
                                        This specially curated journey offers luxurious experiences, serene landscapes, and vibrant traditions.
                                        Relax on pristine beaches like Mirissa and Unawatuna, revel in the misty charm of Nuwara Eliya, and take in breathtaking views from Ella's Nine Arch Bridge.
                                        Indulge in thrilling adventures like hot air ballooning over Sigiriya, white water rafting in Kitulgala, and safaris in Yala National Park.
                                        Explore iconic cultural landmarks, including Sigiriya Fortress, Dambulla Cave Temple, and the sacred Temple of the Tooth.
                                        Savor unique activities like Ayurvedic spa treatments, scenic train rides, and visits to tea plantations.
                                        Complete your romantic journey with unforgettable wildlife encounters, including whale watching, and a stroll through the historic Galle Dutch Fort.
                                    </p>

                                    <h2>Romantic Highlights:</h2>
                                    <ul>
                                        <li>Luxurious Stays: Boutique resorts and villas with private pools, spa treatments, and scenic views.</li>
                                        <li>Beach Retreats: Relax on picturesque beaches like Mirissa, Unawatuna, and Bentota, perfect for sunsets and quiet moments.</li>
                                        <li>Mountain Escapes: Retreats in Nuwara Eliya and Ella amidst tea plantations and lush, misty hills.</li>
                                    </ul>

                                    <h2>Adventure and Wildlife:</h2>
                                    <ul>
                                        <li>Safari Thrills: Yala, Udawalawe, or Minneriya National Parks.</li>
                                        <li>Outdoor Adventures: Hot air ballooning, hiking Horton Plains, and rafting in Kitulgala.</li>
                                        <li>Marine Encounters: Whale watching in Mirissa and visits to Kosgoda Turtle Hatchery.</li>
                                    </ul>

                                    <h2>Cultural Experiences:</h2>
                                    <ul>
                                        <li>Heritage Sites: Explore Sigiriya, Anuradhapura, Polonnaruwa, and Galle Fort.</li>
                                        <li>Traditional Rituals: Participate in temple ceremonies and witness a Kandyan cultural show.</li>
                                        <li>Local Life: Visit spice gardens and experience rural village tours in Hirivaduna.</li>
                                    </ul>

                                    <h2>Unique Activities:</h2>
                                    <ul>
                                        <li>Scenic Train Ride: Journey through misty mountains and tea estates.</li>
                                        <li>Wellness Retreats: Rejuvenate with Ayurvedic spa treatments.</li>
                                        <li>Historic Landmarks: Visit sacred temples, ancient ruins, and iconic sites.</li>
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
                            <span className="ch-badge">Honeymoon Tour</span>
                            <h1>Honeymoon Trail</h1>
                            <p className="ch-days">⏱ 13 Nights 14 Days</p>
                        </section>

                        {/* IMAGE GALLERY */}
                        <section className="ch-gallery" data-aos="fade-up">
                            <img src={img1} alt="heritage" />
                            <img src={img2} alt="beach" />
                            <img src={img3} alt="wildlife" />
                        </section>

                        {/* --- NEW LAYOUT (LEFT CONTENT + RIGHT FORM) --- */}
                        <section className="ch-two-column">

                            {/* LEFT CONTENT */}
                            <div className="ch-left" data-aos="fade-right">

                                <section className="ch-intro">

                                    <h2>Introduction</h2>

                                    <p>
                                        Sri Lanka is one of the best tourist destinations for newlyweds, as it offers a wide range of romantic experiences, impressive natural beauty, and a rich cultural heritage.
                                    </p>

                                    <p>
                                        Undiscovered beautiful beaches along the srilankan coast like Mirissa, Unawatuna, Bentota, and Trincomalee, perfect for relaxing and enjoying romantic sunsets.
                                    </p>

                                    <p>
                                        Luxurious accommodation such as Boutique resorts and villas particularly focused on newlyweds with private pools, spa treatments, and impressive views. Romantic retreats in mountainous areas, such as Nuwara Eliya, offer unique experiences among luxurious tea plantations. The misty hills of Ella, Nuwara Eliya, and Haputale offer impressive landscapes, tea plantations, and a cooler climate, perfect for couples seeking peace and tranquility. Activities such as train journeys through mountainous landscapes add a magical touch. Sri Lanka offers exciting activities for adventure seekers, such as: Hot air ballooning over Sigiriya, Hiking in Horton Plains or Adam's Peak,white water rafting in kithulgala, Safari in the national parks Yala, Udawalawe, or Minneriya to see wildlife.
                                    </p>

                                    <p>
                                        Couples can explore ancient sites, such as Sigiriya Fortress, Dambulla Cave Temple, and Galle Fort, where adventure combines with cultural richness. Visit traditional festivals or participate in rituals at sacred temples for a unique experience.
                                    </p>

                                    <p>
                                        Couples can regain their youth with Ayurvedic spa treatments and wellness retreats that combine ancient methods with modern comforts.
                                    </p>

                                    <p>
                                        From whale watching in Mirissa or trincomalee to encounters with elephants in Minneriya or turtles in Kosgoda, Sri Lanka offers unforgettable wildlife experiences.
                                    </p>

                                </section>

                                <section className="ch-offers">
                                    <h2>COMPLIMENTARY OFFER FROM OUR COMPANY</h2>
                                    <ul>
                                        <li>Will offer complimentary company T shirt</li>
                                        <li>2 Mineral Water bottles total 2 liters per day per Clients.</li>
                                        <li>Local Sim Cards (1 Local Sim Per Six Persons)- Which you have country all saved emergency contact list</li>
                                        <li>Entry Permit of witness of Traditional Cultural performance in Kandy</li>
                                    </ul>
                                </section>

                                <section className="ch-package">
                                    <h2>OUR PACKAGE INCLUDES</h2>

                                    <p>
                                        Experience a hassle-free journey with our comprehensive inclusions designed to enhance your Sri Lanka cultural heritage tour.
                                    </p>
                                    <ul>
                                        <li>Meet and assistance at the colombo Airport in</li>
                                        <li>Accommodation in Double Sharing A/C Rooms- you can revise as required</li>
                                        <li>Meal Basis on H /B Basis (Breakfast / Dinner) Pure Veg or Non-Vegetarian- BB or FB as you request</li>
                                        <li>Transportation on Private basis New Luxury A/C Vehicles</li>
                                        <li>Guiding by National or Chauffeur Tourist Lectures English Speaking</li>
                                        <li>All Related Government Taxes & All Other Taxes</li>
                                    </ul>
                                </section>

                                <section className="ch-excludes">
                                    <h2>OUR PACKAGE EXCLUDES</h2>
                                    <p>
                                        Stay informed with a clear understanding of what is not included in our package to plan your trip effectively.
                                    </p>
                                    <ul>
                                        <li>Air Fare and Visa Charges.</li>
                                        <li>Any Other Services not specified Above.</li>
                                        <li>Site Entrance Fees (We can include costing if you required)</li>
                                        <li>Lunch During the Tour. (We can include costing if you required)</li>
                                        <li>Late check outs & early check in charges are excluded</li>
                                        <li>Air-tickets NOT included</li>
                                        <li>Camera & Video Permits</li>
                                        <li>Travel Insurance is NOT included</li>
                                        <li>Guide/Driver tips</li>
                                    </ul>
                                </section>

                                <section className="ch-excludes">
                                    <h2>Booking information</h2>
                                    <p>
                                        Once booking details are submitted by you, we will go ahead with the booking process.
                                        At this stage, we require a 20% payment from you. A booking confirmation will reach you after 48 hours of making the payment.
                                        A balance of 80% of the payment is required, 30 days prior to the tour start date. Then you may go ahead with applying for Visa.
                                    </p>
                                </section>

                                <section className="ch-excludes">
                                    <h2>Cancellation Policy</h2>
                                    <p>
                                        All travel offers listed on our website are discounted.
                                        As such, all orders are non-refundable, and cannot be used in conjunction with any other promotion.
                                        Thus, no refund for Cancellations made with less than 30 days from the start of a tour and for No-show.
                                    </p>
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
                                        day: "Day 1: Airport To Negambo",
                                        details:
                                            `
                                        Welcome to Sri Lanka. On this day of your 09 days Sri Lanka tour, you shall start exploring its marvels. Upon your arrival at Bandaranaike International Airport, an agent’s representative will greet you and guide you towards a luxury chauffeur-driven vehicle that will take you around the country.

                                        `,
                                        details1: "Overnight stay at Negambo"
                                    },
                                    {
                                        day: "Day 2: Negambo To Sigiriya",
                                        details: `
                                            After breakfast you will start joinery to Sigiriya.

                                            <br/><br/>

                                            In the morning you will visit to Negamobo fish market al so called as LELLAMA is one of the srilanka’s largest & Vibrant fish market.
                                            
                                            <br/><br/>
                                            
                                            En-Roue visit pinnawala elephant orphanage.
                                            
                                            <br/><br/>
                                            
                                            In the evening visit Lion Rock, Sigiriya is one of the most famous sites in Sri Lanka and a UNESCO World Heritage Site and its called 8th . It was built as a royal palace and fort by King Kashyapa (473-495 CE) and was then used as a Buddhist monastery. Its entrance has the footprints of a large lion carved in stone, which symbolizes its grandeur. It is famous for the Sigiriya mural depicting celestial maidens (apsaras) on the western face of the rock. The wall, which once depicted the image of the king, is now decorated with ancient paintings of tourists for centuries. It is one of the oldest landscaped gardens in the world, with symmetrical water gardens, stone gardens and terraced gardens. Amazing views of the surrounding area.
                                            
                                        `,
                                        details1: "Overnight stay in dambull/sigiriya"
                                    },
                                    {
                                        day: "Day 3: Sigiriya",
                                        details: `
                                            <strong>Following a delightful breakfast at the hotel start hiriwaduna village tour.</strong>

                                            <br/><br/>

                                            The village of Hirivaduna is a rural village located in the Anuradhapura district of Sri Lanka, known for its traditional lifestyle and picturesque landscapes. Visitors can experience the authentic rural culture of Sri Lanka by participating in activities such as bullok cart rides, canoe ride, and village walks. The village offers the opportunity to learn about local agricultural practices, visit small farms, and enjoy the tranquil beauty of nature. This is the ideal place for ecotourism and for those who wish to learn about rural life and the heritage of Sri Lanka.

                                            <br/><br/>

                                            <strong>In the afternoon join minneriya national park safari</strong>

                                            <br/><br/>

                                            Minneriya National Park is located in the Central Province of Sri Lanka and is famous for its diverse wildlife and picturesque landscapes. The park is especially famous for its annual elephant gathering, when hundreds of elephants congregate around the Minneriya tank during the dry season. Here, various species of birds, reptiles, and other animals also inhabit. The park offers a unique safari experience, making it a popular place for nature lovers and photographers.
                                            
                                        `,
                                        details1: "Overnight stay in dambull/sigiriya."
                                    },
                                    {
                                        day: "Day 4: Sigiriya To Anuradhapura To Trincomalee",
                                        details: `
                                            Re-energize yourself with a healthy and piping-hot breakfast at the hotel and drive to Anuradhapura & then to trincomalee

                                            <br/><br/>

                                            In the morning visit to Anuradhapura –

                                            <br/><br/>

                                            The Anuradhapura is an enriching journey to Sri Lanka's ancient capital, which was the center of the Sinhalese civilization for over a thousand years. Known as a UNESCO World Heritage site, the city is famous for its well-preserved ruins, monumental stupas, and its spiritual significance within Buddhism.
                                            
                                            <br/><br/>

                                            We will take you in to many Sacred Places such as Sri Maha Bodhi,Ruwanwelisaya,Thuparamaya

                                            <br/><br/>

                                            Historical and architectural wonders such twin ponds (Kuttam Pokuna) which is Beautifully designed baths for the monks, highlighting the ancient hydrological knowledge.

                                            <br/><br/>

                                            Ancient water resource management systems Explore the reservoirs, such as Tissa Wewa and Basawakkulama (Abhaya Wewa), which reflect the advanced irrigation systems of the ancient kingdom.

                                            <br/><br/>

                                            After the complete of historic Anuradhapura will travel to Trincomalee.

                                            <br/><br/>

                                            Calm,clean,white untouch water in nilaveli beach you get activities Snorkeling and diving, boat ride & water sports.

                                            <br/><br/>

                                            Nilaveli Beach is an excellent place to see beautiful sunrises, as the sun rises over the Indian Ocean and offers an impressive view.

                                        `,
                                        details1: "Overnight stay in Trincomalee."
                                    },
                                    {
                                        day: "Day 5: Trincomalee",
                                        details:
                                            `
                                        After indulging in a delicious breakfast at the hotel day spend trincomalee city attraction. Morning start to Pidgeon island visit which is best places in Sri Lanka for snorkeling and diving, with access to colorful coral reefs and a diverse marine life.

                                        <br/><br/>

                                        This untouched water around Pidgeon island you see Unique flora and fauna & place unique for eco tourism.

                                        <br/><br/>

                                        This take half day tour

                                        <br/><br/>

                                        early afternoon visit to see hot springs.

                                        <br/><br/>

                                        The hot springs of Trincomalee are natural hot springs These springs are a unique and popular attraction, offering visitors both a historical and relaxing experience.

                                        <br/><br/>

                                        Many locals believe that the waters have healing properties for joint pain, skin diseases, and stress. The hot water, rich in minerals, supposedly has a calming and rejuvenating effect on the body.

                                        </br></br>

                                        In the evening visit koneshwara temple.

                                        </br></br>

                                        This is an important Hindu temple dedicated to Lord Shiva, located on Swami Rock in Trincomalee, Sri Lanka. It is one of the oldest and most revered temples in the country, with a history spanning over 2000 years. The temple is famous for its stunning views of Trincomalee Bay and its rich cultural and spiritual significance, attracting both pilgrims and tourists.

                                        </br></br>

                                        The temple's architecture is done in the traditional Dravidian style, with intricate reliefs and sculptures. It is an important place for followers of Shaivism and celebrates various religious festivals. The Koneswaram temple is also related to Hindu mythology, especially the Ramayana. Its picturesque location and tranquil atmosphere make it a popular place for visitors seeking spiritual solace and natural beauty.

                                        `,
                                        details1: "Overnight stay in Trincomalee"
                                    },
                                    {
                                        day: "Day 6: Trincomalee To Kandy",
                                        details:
                                            `
                                        After enjoying a hearty morning meal at the hotel set out on a picturesque journey to the vibrant city of Kandy which is in the culture traingle, where many cultural and natural beauties awaited them. On the way to kandy, visit Dambulla cave temple ,Nalanda Gedige, Matale Spice Garden technical visit and then visit the Hindu temple during your excursion in Kandy.

                                        <br/><br/>

                                        In the morning visit dambulla cave temple, also known as the Golden Temple of Dambulla, is one of the most iconic cultural and religious sites in Sri Lanka. Located in the central province near Matale, it is a UNESCO World Heritage site and an important attraction in the cultural triangle of Sri Lanka

                                        <br/><br/>

                                        Early after noon visit technical visit to spice garden .there you will be explained cultivation & processing of various spices such as cinnamon, cardamom, pepper, and turmeric.it is an excellent place to learn about the rich spice heritage of Sri Lanka and enjoy a tour through the lush landscapes.

                                        <br/><br/>

                                        Way back to kandy straight check in the hotel.

                                        <br/><br/>

                                        in the evening at 5pm you will be taking in to traditional kandyan culture show which will held in kandy art association hall.

                                        <br/><br/>

                                        Kandy is famous for its rich cultural heritage and traditional dances, which are a major attraction for tourists. The Kandyan dance (Udarata Natum) is the highlight, deeply rooted in Sri Lanka's history and traditions.

                                        `,
                                        details1: "Overnight stay in Kandy"
                                    },
                                    {
                                        day: "Day 7: Kandy",
                                        details:
                                            `
                                        Once we've relished breakfast at the hotel,

                                        </br></br>

                                        In the morning you will be taking in to the Temple of the Sacred Tooth (Sri Dalada Maligawa) in Kandy.Is one of the most revered Buddhist sites in Sri Lanka and a UNESCO World Heritage Site. It houses the Buddha's tooth relic, which has immense spiritual significance and has influenced Sri Lanka's history and culture through the centuries.

                                        </br></br>

                                        Relics of the Holy Tooth: Engraved in a golden box, the relic is kept in the temple's inner sanctum. Even though visitors cannot see the relic itself, the box is displayed during the religious ceremonies.

                                        </br></br>

                                        Late morning we will take you in to jem & jewellery museum , authentic srilankan silk and batic factory only for visit.

                                        </br></br>

                                        In the afternoon visit Peradeniya Botanical Garden is located near Kandy, Sri Lanka, and is one of the largest and most well-known botanical gardens in the country. Covering an area of 147 acres, it houses an extensive collection of tropical plants, including rare orchids, palm trees, and medicinal plants. In the garden, there is also a Royal Palm Avenue, a tropical greenhouse, and a gigantic Java fig tree. It is a popular place for both tourists and locals, offering a tranquil environment to explore nature and enjoy its beauty.
                                        
                                        `,
                                        details1: "Overnight stay in Kandy."
                                    },
                                    {
                                        day: "Day 8: Kandy/Kithulgala/Nuwara Eliya",
                                        details:
                                            `
                                        Once we've relished breakfast at the hotel, start travel to Nuwara Eliya

                                        </br></br>

                                        Nuwara Eliya is a picturesque mountain village in Sri Lanka, located at an altitude of approximately 1868 meters. Known for its cool climate, luxurious tea plantations, and colonial charm, it is a favourite spot for both locals and international tourists.

                                        </br></br>

                                        En route to nuwara eliya via kithulgala late morning arrive for kithulgala white water rafting adventure.

                                        <br/><br/>

                                        Kitulgala is one of the best places for rafting in Sri Lanka, offering thrilling descents on the Kelani River. Suitable for both beginners and experts, rafting includes class 2-3 rapids that offer excitement amidst stunning landscapes. The activity lasts around 1.5-2 hours, covering approximately 5 kilometers of the river. It is a must-do adventure for nature lovers and thrill-seekers visiting Kitulgala.

                                        <br/><br/>

                                        After the kithulgala adventure in the evening visit Belilena Cave.

                                        <br/><br/>

                                        The Belilena Cave is a prehistoric site near Kitulgala, Sri Lanka, known for its archaeological significance. The Balangoda Man lived here, and human fossils and tools dating back over 12,000 years have been discovered here. Accessible through a scenic hike through dense forests, the cave offers a glimpse into ancient history and the opportunity to enjoy stunning natural beauty

                                        <br/><br/>

                                        After the cave hike resume journey to nuwara eliya
                                        
                                        `,
                                        details1: "Overnight stay in Nuwara Eliya"
                                    },
                                    {
                                        day: "Day 9: Nuwara Eliya",
                                        details:
                                            `
                                        In the morning around 5AM go off with packet breakfast to explore hortain plain national park. is a UNESCO World Heritage Site, known for its unique biodiversity, impressive landscapes, and cool climate.

                                        </br></br>

                                        Horton Plains National Park is a UNESCO World Heritage Site in Sri Lanka, known for its unique biodiversity and stunning landscapes. Located in the central highlands, it includes grasslands, montane forests, and attractions such as World's End (a cliff with panoramic views), Baker's Falls, and Baken.

                                        <br/><br/>

                                        In the park, there is a diversity of wildlife, including sambar deer, leopards, and many endemic bird species. The 9.5-kilometer loop offers an unforgettable hike through this calm and misty plateau. This is a must-visit place for nature lovers and tourists.

                                        <br/><br/>

                                        In the afternoon visit hakgala botanical garden.

                                        <br/><br/>

                                        The Hakgala Botanical Garden, located near Nuwara Eliya, is one of the most beautiful gardens in Sri Lanka, known for its cool climate and vibrant floral compositions. Covering an area of 28 hectares, it offers an impressive collection of roses, orchids, ferns, and camellias, as well as exotic plants from around the world.

                                        <br/><br/>

                                        The garden is part of the Hakgala Nature Reserve and offers picturesque views of the misty mountains and green landscapes. Its tranquil atmosphere makes it an ideal place to relax and photograph, attracting both nature lovers and tourists year-round.

                                        `,
                                        details1: "Overnight stay in Nuwara Eliya."
                                    },
                                    {
                                        day: "Day 10: Nuwara Eliya/Ella/Yala",
                                        details:
                                            `
                                        After enjoying a hearty morning meal at the hotel you will enjoy world most scenic train ride from nanu oya to ella.

                                        </br></br>

                                        ( This train ride plan availability of seats & time)

                                        </br></br>

                                        This journey will take you through green tea plantations, misty mountains, and charming villages, offering breathtaking views at every turn.

                                        </br></br>

                                        The landscapes take your breath away: Wavy tea plantations, roaring waterfalls, and dense forests.

                                        </br></br>

                                        Once reach ella directly travel to ella nature paradise & enjoy 360 panoramic view little adams peak.

                                        </br></br>

                                        Your journey through Ella begins with a hike to Mount Adam's Peak. This is an opportunity to see the valley below in pure air. Ella is considered to be one of the places with the highest concentration of oxygen.

                                        </br></br>

                                        Then to explore nine arch bridge & ella gap.

                                        </br></br>

                                        Nine arch which is a world-famous architectural masterpiece, hidden in the green and lush tea plantations of Ella. It is located on the outskirts of the city and is a must-see for anyone who comes to visit it. This is a masterfully built bridge that stands proudly in the green landscape of the island.

                                        </br></br>

                                        Ten travel to tissamaharama/yala & check in the hotel.

                                        `,
                                        details1: "Overnight stay in Yala/Thissamaharama."
                                    },
                                    {
                                        day: "Day 11: Yala To Mirissa",
                                        details:
                                            `
                                        After enjoying a hearty morning meal at the hotel start travel to Mirissa. Mirissa beach is a hidden jem in southern beach ,with many attractions such as coconut tree hill,whale watching ,parrot rock ,surfing, Snorkeling & Diving, beach relaxation

                                        </br></br>

                                        In the morning start jeep safari to yala national park. it is known for its diverse ecosystems, including dry forests, wetlands, and grasslands. The park is home to a rich diversity of wildlife, including the Sri Lankan leopard, elephants, crocodiles, and hundreds of bird species.

                                        </br></br>

                                        Yala is a popular safari destination, offering visitors the opportunity to see these animals in their natural habitat. It is divided into five blocks, with Block I being the most visited. The park is also known for its picturesque beauty, including pristine beaches and rocky outcrops

                                        </br></br>

                                        In the afternoon after the safari En-route benthota visit mulkirigfala temple which is a historic Buddhist temple located in the southern part of Sri Lanka, near the town of Tangalle. It is known for its rich history, impressive views, and unique architecture. Here are some key features of the temple:

                                        </br></br>

                                        En route Mirissa visit Hunmanaya.

                                        </br></br>

                                        Hunmanaya blow hole is a fascinating natural wonder which natural rock formation where sea water is forced through a narrow crevice, creating a high-pressure spray that shoots up to 30 meters (100 feet) into the air.

                                        `,
                                        details1: "Overnight stay in mirissa"
                                    },
                                    {
                                        day: "Day 12: Mirissa",
                                        details:
                                            `
                                        Today spend more time for beach relaxation.

                                        </br></br>

                                        You get great chance of visit parrot rock & coconut tree hill while relaxing in mirissa beach.

                                        </br></br>

                                        Coconut tree Hill has recently become one of Sri Lanka's most popular tourist destinations, located in the Mirissa region in the Southern Province. It is a small dome-shaped hill surrounded by palm trees. The Coconut Hill is one place you should not miss during your trip to the south of Sri Lanka.

                                        </br></br>

                                        this a private coconut farm that is open all day and welcomes the public to visit. You don't need to buy tickets to enter. Once you get there, you'll see stunning views of the Indian Ocean. This place is completely covered with palm trees, and you can take stunning photos to post on Instagram. The sea breeze will help you feel more comfortable and relax.

                                        </br></br>

                                        Parrot rock is a small rocky islet offering beautiful views of the coastline, reachable during low tide.

                                        </br></br>

                                        You can spend your time here unlimitedly.

                                        `,
                                        details1: "Leave for Colombo International Airport according to your flight time. Departure colombo"
                                    },
                                    {
                                        day: "Day 13: Mirissa To Colombo",
                                        details:
                                            `
                                        After savoring a lovely breakfast at the hotel start jurney to Colombo Enroute in the morning visit Galle dutch fort.

                                        </br></br>

                                        The Galle Fort, a UNESCO World Heritage site, is a historic fortress located in the city of Galle on Sri Lanka's southwestern coast. Built by the Portuguese in the 16th century and later expanded by the Dutch in the 17th century, the fortress is an impressive example of European colonial architecture in Asia.

                                        </br></br>

                                        The fortress is known for its well-preserved walls, narrow cobblestone streets, and old Dutch buildings, where there are shops, cafes, museums, and historical landmarks. Visitors can explore the Galle Lighthouse, the Dutch Reformed Church, and the National Maritime Museum. The fortress offers a combination of history, culture, and stunning sea views, making it a must-visit.

                                        </br></br>

                                        Enroute join with madu gaga river safari in the afternoon The Madu Ganga River Safari is a popular ecotourism experience on the Madu River.The safari offers visitors a boat trip through a labyrinth of mangrove forests, islands, and calm waters of the river. This area is rich in biodiversity, and there is a chance to see a variety of wildlife, including birds, monkeys, and crocodiles.

                                        </br></br>

                                        Enroute visit kosgoda turtle hatchery. Kosgoda Turtle Hatchery is the place dedicated to the protection of endangered sea turtles. It collects turtle eggs from the beaches, incubates them safely, and releases the newly hatched young into the sea. Visitors can see different species of turtles, learn about conservation efforts, and sometimes even release the tiny turtle hatchlings into the sea. It is an educational and family-friendly experience that contributes to the marine life protection.

                                        `,
                                        details1: "End Of The 8 Nights / 9 Days Sri Lanka Culture heritage tour."
                                    },
                                    {
                                        day: "Day 14: End of The Sri Lanka Honeymoon Trails",
                                        details:
                                            `
                                        Based on your departure flight we can arrange Colombo city tour which includes on below places.

                                        </br></br>

                                        Visit Kalaniya Ancient Buddha Temple (Buddha Visited The Place), lotus towe, Galle face green, port city beach, gangarama temple.,pettah shopping.

                                        </br></br>

                                        Leave for Colombo International Airport according to your flight time. Departure colombo.

                                        `,
                                        details1: "End Of The 13 Nights / 14 Days Sri Lanka honeymoon trail."
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

                                                {item.details1 && <h3>{item.details1}</h3>}
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

                            <p>
                                The "Sri Lankan Honeymoon Trail" tour package typically includes romantic getaways, serene beaches, luxurious accommodations, and adventurous experiences in Sri Lanka.
                            </p>

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
                                <p><strong>Distance:</strong> 958.5 km</p>
                                <p><strong>Duration:</strong> 26 hr 32 min</p>
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

export default HoneymoonTrail;
