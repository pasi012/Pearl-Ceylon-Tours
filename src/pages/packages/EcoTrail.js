import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css/CultureHeritage.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function EcoTrail() {

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
        getDownloadURL(ref(storage, "ecoTrail1.jpg")).then(setImg1);
        getDownloadURL(ref(storage, "ecoTrail2.jpg")).then(setImg2);
        getDownloadURL(ref(storage, "ecoTrail3.jpg")).then(setImg3);

        getDownloadURL(ref(storage, "ecoTrail-hero.jpg")).then(setImgHero);
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
                                        The "12N 13D Eco Trail" tour package offers an authentic eco-adventure in Sri Lanka, combining nature, culture, and thrilling experiences.
                                    </p>

                                    <h2>Tour Highlights</h2>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Negambo fish market</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Matale Spice Garden Technical Visit</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Minneriya Jeep Safari</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Sigiriya Rock Fortress</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Hiriwaduna Village Tour</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Dambulla Cave Temple</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Temple of the Tooth</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Peradeniya Botanical Garden</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Kandy Culture Show</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Knuckles Trekking</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Pinnawala Elephant Orphanage</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Mini Hike Tea Plantation</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Tea Field Tour</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Cooking Demonstration</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Hakgala Botanical Garden</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Gregory Lake</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Victoria Park</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Horton Plains</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Train Ride from Nanu Oya to Ella</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Yala National Park Jeep Safari</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Visit Coconut Tree Hill in Mirissa</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Visit Parrot Rock in Mirissa</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Relax on Mirissa Beach</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Galle Dutch Fort</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Relax on Hikkaduwa Beach</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Madu Ganga River Safari</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Kosgoda Turtle Hatchery</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Seenigama Temple</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Colombo City Tour</p>
                                    </div>

                                </section>

                                <section className="ch-offers">
                                    <h2>Additional Eco Destinations:</h2>
                                    <p>
                                        YOU HAVE MANY MORE ECO DESTINATIONS WHICH CAN BE EASILY CUSTOMIZED WITH US. SOME ARE AS BELOW WHICH WE HAVE NOT COVERED IN OUR PACKAGE HERE:
                                    </p>

                                    <ul>
                                        <li>Sinharaja Forest Reserve</li>
                                        <li>Udawalawe National Park</li>
                                        <li>Wilpaththu National Park</li>
                                        <li>Kalpitiya</li>
                                        <li>Galoya National Park</li>
                                        <li>Udawaththa Kale Forest Reserve in Kandy</li>
                                        <li>Bundala National Park</li>
                                        <li>Pigeon Island</li>
                                        <li>Pidurangala Rock</li>
                                        <li>Muthurajawela Wetland</li>
                                        <li>Kumana National Park</li>
                                        <li>Arugam Bay Lagoon</li>
                                        <li>Diyaluma Falls</li>
                                    </ul>

                                    <h3>AND MANY MORE...</h3>

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
                                        const whatsappNumber = "94773562768"; // your WhatsApp number
                                        const whatsappURL =
                                            "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

                                        window.open(whatsappURL, "_blank");

                                        // ✅ SEND EMAIL
                                        const mailto =
                                            "mailto:pearlceylontours01@gmail.com" +
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
                            <span className="ch-badge">Cultural Heritage</span>
                            <h1>Eco Trail</h1>
                            <p className="ch-days">⏱ 12 Nights 13 Days</p>
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
                                        It's time to leave conventional vacations behind. Take an authentic eco-adventure tour in Sri Lanka to explore the magnificent natural world outdoors. Set off into the heart of an impressive fauna, hike, climb, and explore. Appreciate moments with the indigenous people, rural farmers, and locals, spend the night in nature under a tarp, on a clay floor, or in a treehouse, and let the photographer within you click freely.
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
                                        const whatsappNumber = "94773562768"; // your WhatsApp number
                                        const whatsappURL =
                                            "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

                                        window.open(whatsappURL, "_blank");

                                        // ✅ SEND EMAIL
                                        const mailto =
                                            "mailto:pearlceylontours01@gmail.com" +
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
                                        Welcome to Sri Lanka. On this day of your 13 days Sri Lanka tour, you shall start exploring its marvels. Upon your arrival at Bandaranaike International Airport, an agent’s representative will greet you and guide you towards a luxury chauffeur-driven vehicle that will take you around the country.

                                        `,
                                        details1: "Overnight stay at Negambo"
                                    },
                                    {
                                        day: "Day 2: Negambo To Sigiriya",
                                        details: `
                                            After breakfast you will start joinery to Sigiriya.

                                            <br/><br/>

                                            In the morning visit to NEGAMBO FISH MARKET also called as LELLAMA is one of Sri Lanka’s largest & vibrant fish markets.
                                            
                                            <br/><br/>
                                            
                                            After fish market go for MUTHURAJAWELA WETLAND boat safari. Muthurajawela wetland is one of the important coastal ecosystems in Sri Lanka. Due to its biodiversity and ecological significance, the name Muthurajawela means "Swamp of Royal Treasure," indicating historical significance tied to Sri Lanka’s royalty. This is home to over 190 species of wildlife, including birds, fish, reptiles, and mammals. Boat safaris offer a close-up view of mangroves, aquatic life, and unique flora.
                                            
                                            <br/><br/>
                                            
                                            Enroute technical visit to Malate spice garden where you will learn about the cultivation & processing of various spices such as cinnamon, cardamom, pepper, and turmeric. It is an excellent place to learn about the rich spice heritage of Sri Lanka and enjoy a tour through lush landscapes.

                                            <br/><br/>

                                            In the evening enjoy MINNERIYA JEEP SAFARI. Minneriya National Park is located in the Central Province of Sri Lanka and is famous for its diverse wildlife and picturesque landscapes. The park is especially famous for its annual elephant gathering, when hundreds of elephants congregate around the Minneriya tank during the dry season. Here, various species of birds, reptiles, and other animals also inhabit. The park offers a unique safari experience, making it a popular place for nature lovers and photographers.
                                            
                                        `,
                                        details1: "Overnight stay in Dambulla/Sigiriya"
                                    },
                                    {
                                        day: "Day 3: Sigiriya",
                                        details: `
                                            Following a delightful breakfast at the hotel start cycling to Sigiriya Rock and climb the Sigiriya Rock Fortress. SIGIRIYA LION ROCK is one of the most famous sites in Sri Lanka, a UNESCO World Heritage Site. Built as a royal palace and fort by King Kashyapa (473-495 CE) and later used as a Buddhist monastery, its entrance has the footprints of a large lion carved in stone, symbolizing its grandeur. It is famous for the Sigiriya mural depicting celestial maidens (apsaras) on the western face of the rock. The rock features symmetrical water gardens, stone gardens, terraced gardens, and stunning views of the surrounding area.

                                            <br/><br/>

                                            In the afternoon, enjoy the Hiriwaduna village tour. Located in the Anuradhapura district, the village offers an authentic rural culture experience with activities like bullock cart rides, canoe rides, and village walks. Visitors can learn about local agricultural practices, visit small farms, and enjoy the tranquil beauty of nature.

                                            <br/><br/>

                                            In the evening, visit the Dambulla Cave Temple, also known as the Golden Temple of Dambulla. It is one of Sri Lanka’s iconic cultural and religious sites, a UNESCO World Heritage site, and a significant attraction in Sri Lanka’s cultural triangle.

                                        `,
                                        details1: "Overnight stay in Dambulla/Sigiriya"
                                    },
                                    {
                                        day: "Day 4: Sigiriya To Kandy",
                                        details: `
                                            Re-energize yourself with a healthy and piping-hot breakfast at the hotel and drive to Kandy.

                                            <br/><br/>

                                            Late morning visit TEMPLE OF TOOTH (Sri Dalada Maligawa) in Kandy. It is one of the most revered Buddhist sites in Sri Lanka and a UNESCO World Heritage Site. It houses the Buddha's tooth relic, which has immense spiritual significance and has influenced Sri Lanka's history and culture through the centuries.

                                            <br/><br/>

                                            Relics of the Holy Tooth: Engraved in a golden box, the relic is kept in the temple's inner sanctum. Even though visitors cannot see the relic itself, the box is displayed during the religious ceremonies.
                                            
                                            <br/><br/>

                                            In the afternoon visit PERADENIYA BOTANICAL GARDEN. This is located near Kandy, Sri Lanka, and is one of the largest and most well-known botanical gardens in the country. Covering an area of 147 acres, it houses an extensive collection of tropical plants, including rare orchids, palm trees, and medicinal plants. In the garden, there is also a Royal Palm Avenue, a tropical greenhouse, and a gigantic Java fig tree. It is a popular place for both tourists and locals, offering a tranquil environment to explore nature and enjoy its beauty.

                                            <br/><br/>

                                            In the evening at around 5 pm, you will be taken to a traditional Kandyan culture show held in the Kandy Art Association Hall. Kandy is famous for its rich cultural heritage and traditional dances, which are a major attraction for tourists. The Kandyan dance (Udarata Natum) is the highlight, deeply rooted in Sri Lanka's history and traditions.

                                        `,
                                        details1: "Overnight stay in Kandy"
                                    },
                                    {
                                        day: "Day 5: Kandy",
                                        details:
                                            `
                                        In the morning we will hand you over to a well-experienced Knuckles trekking team. Trekking in the Knuckles mountain range, which is a UNESCO World Heritage Site, gives you stunning trekking experiences. This is a haven for adventure and nature lovers because of its breathtaking landscape.

                                        <br/><br/>

                                        Knuckles trekking can be customized to your preferred trekking route, such as Knuckles base, Mini World's End, High Knuckles, Manigala trekking, Dumbara trekking, etc.

                                        `,
                                        details1: "Overnight stay in Kandy"
                                    },
                                    {
                                        day: "Day 6: Kandy To Hatton",
                                        details:
                                            `
                                        After enjoying a hearty morning meal at the hotel, set out on a picturesque journey to the vibrant city of Hatton.

                                        <br/><br/>

                                        En route, visit Pinnawala Elephant Orphanage, a world-renowned sanctuary where you can see elephant care and conservation, elephant bathing rituals, and bottle-feeding baby elephants.

                                        <br/><br/>

                                        In the evening, explore the Mini High Tea Plantation, which will take about one and a half hours. Walk through trails and explore the scenery of Sri Lanka's tea country. Enjoy the view from Adam's Peak during the hiking journey across tea estates. Explore a Hindu temple located on a hill. You can also observe the vegetable gardens in the highlands.

                                        `,
                                        details1: "Overnight stay in Hatton"
                                    },
                                    {
                                        day: "Day 7: Hatton",
                                        details:
                                            `
                                        After the breakfast start TEA FIELD TEA TOUR & give great mind relaxing trekking experience. No trip to Sri Lanka would be complete without setting aside some time to visit a tea plantation in Sri Lanka. Plantation in Hill Country. During a visit to a tea plantation, you can learn all about tea picking. It is probably a much more exciting experience if you are a tea lover, but even if you are not, Hill Country or Tea Country, as it is sometimes called, is undoubtedly the most picturesque part of the island and worth a visit. The tea plantations in Sri Lanka offer such a beautiful contrast to the rest of Sri Lanka, and the Hill Country is worth a visit. The tea-growing region in Sri Lanka is mainly located in the central highlands, although some tea-growing areas extend all the way to the coast. The reason why tea grows well.

                                        </br></br>

                                        In the evening join with COOKING DEMONSTRATION where you’ll learn to prepare authentic Sri Lankan dishes using fresh, locally sourced ingredients. This session is not just about cooking but also about immersing yourself in the culture and traditions of Sri Lankan cuisine.

                                        `,
                                        details1: "Overnight stay in Hatton"
                                    },
                                    {
                                        day: "Day 8: Hatton To Nuwara Eliya",
                                        details:
                                            `
                                        Once we've relished breakfast at the hotel, start travel to Nuwara Eliya. Nuwara Eliya is a picturesque mountain village in Sri Lanka, located at an altitude of approximately 1868 meters. Known for its cool climate, luxurious tea plantations, and colonial charm, it is a favourite spot for both locals and international tourists.

                                        </br></br>

                                        In the morning, first visit HAKGALA BOTANICAL GARDEN. Hakgala Botanical Garden is one of the most famous gardens in Sri Lanka. Located at an altitude of 1,745 meters, it is the second-largest botanical garden in the country, offering a tranquil refuge in nature with its lush landscapes and diverse plant collections.

                                        </br></br>

                                        After the garden visit, proceed to GREGORY LAKE which is a calm and picturesque place surrounded by lush vegetation and misty hills, offering a perfect retreat to nature. It is a favorite among visitors seeking relaxation or wanting to enjoy outdoor activities in the cool climate of Nuwara Eliya. You get leisure activities such as boat rides, horse-back riding, and cycling along the path.

                                        <br/><br/>

                                        In the evening, visit VICTORIA PARK, one of the most beautiful and well-maintained city parks in the country. Named in honor of the 60th anniversary of Queen Victoria's reign in 1897, it is a favourite spot for both locals and tourists to enjoy the cool climate and the picturesque beauty of the mountainous region. Ideal for bird watching, walks, picnics, and photographs.
                                        
                                        `,
                                        details1: "Overnight stay in Nuwara Eliya"
                                    },
                                    {
                                        day: "Day 9: Nuwara Eliya To Yala",
                                        details:
                                            `
                                        Today journey starts to YALA. In the morning around 5AM go off with packet breakfast to explore HORTON PLAINS NATIONAL PARK, which is a UNESCO World Heritage Site, known for its unique biodiversity, impressive landscapes, and cool climate. Horton Plains National Park is a UNESCO World Heritage Site in Sri Lanka, known for its unique biodiversity and stunning landscapes. Located in the central highlands, it includes grasslands, montane forests, and attractions such as World's End (a cliff with panoramic views), Baker's Falls, and Baken.

                                        </br></br>

                                        In the park, there is a diversity of wildlife, including sambar deer, leopards, and many endemic bird species. The 9.5-kilometer loop offers an unforgettable hike through this calm and misty plateau. This is a must-visit place for nature lovers and tourists.

                                        <br/><br/>

                                        Depending on availability & time permit, we can arrange Nuwara Eliya to Ella train ride which is one of the most scenic train journeys in the world. This journey will take you through green tea plantations, misty mountains, and charming villages, offering breathtaking views at every turn.

                                        `,
                                        details1: "Overnight stay in Yala"
                                    },
                                    {
                                        day: "Day 10: Yala To Mirissa",
                                        details:
                                            `
                                        After enjoying a hearty morning meal at the hotel you will start journey to Mirissa.

                                        </br></br>

                                        Mirissa beach is a hidden gem in southern beach, with many attractions such as Coconut Tree Hill, whale watching, Parrot Rock, surfing, snorkeling & diving, and beach relaxation.

                                        </br></br>

                                        In the morning start Yala National Park jeep safari which is known for its diverse ecosystems, including dry forests, wetlands, and grasslands. The park is home to a rich diversity of wildlife, including the Sri Lankan leopard, elephants, crocodiles, and hundreds of bird species.

                                        </br></br>

                                        Yala is a popular safari destination, offering visitors the opportunity to see these animals in their natural habitat. It is divided into five blocks, with Block I being the most visited. The park is also known for its picturesque beauty, including pristine beaches and rocky outcrops.

                                        </br></br>

                                        Enjoy Parrot Rock & Coconut Tree Hill while relaxing in Mirissa beach which is within walking distance.

                                        </br></br>

                                        • Coconut Tree Hill has recently become one of Sri Lanka's most popular tourist destinations, located in the Mirissa region in the Southern Province. It is a small dome-shaped hill surrounded by palm trees. The Coconut Hill is one place you should not miss during your trip to the south of Sri Lanka. This private coconut farm is open all day and welcomes the public to visit. You don't need to buy tickets to enter. Once you get there, you'll see stunning views of the Indian Ocean. This place is completely covered with palm trees, and you can take stunning photos to post on Instagram. The sea breeze will help you feel more comfortable and relax.

                                        </br></br>

                                        • Parrot Rock is a small rocky islet offering beautiful views of the coastline, reachable during low tide. You can spend your time here unlimitedly.

                                        `,
                                        details1: "Overnight stay in Mirissa"
                                    },
                                    {
                                        day: "Day 11: Mirissa To Galle",
                                        details:
                                            `
                                        After savouring a lovely breakfast at the hotel, start the journey to Galle.

                                        </br></br>

                                        Today we have planned more relaxation in Hikkaduwa Beach.

                                        </br></br>

                                        Enroute Hikkaduwa visit Galle Dutch Fort. The Galle Fort, a UNESCO World Heritage site, is a historic fortress located in the city of Galle on Sri Lanka's southwestern coast. Built by the Portuguese in the 16th century and later expanded by the Dutch in the 17th century, the fortress is an impressive example of European colonial architecture in Asia.

                                        </br></br>

                                        The fortress is known for its well-preserved walls, narrow cobblestone streets, and old Dutch buildings, where there are shops, cafes, museums, and historical landmarks. Visitors can explore the Galle Lighthouse, the Dutch Reformed Church, and the National Maritime Museum. The fortress offers a combination of history, culture, and stunning sea views.

                                        </br></br>

                                        Afternoon start relaxing in Hikkaduwa Beach.

                                        `,
                                        details1: "Overnight stay in Hikkaduwa"
                                    },
                                    {
                                        day: "Day 12: Hikkaduwa To Colombo",
                                        details:
                                            `
                                        After savoring a lovely breakfast at the hotel, start the journey to Colombo. Enroute, join with MADU GAGA RIVER SAFARI in the afternoon. The Madu Ganga River Safari is a popular ecotourism experience on the Madu River. The safari offers visitors a boat trip through a labyrinth of mangrove forests, islands, and calm waters of the river. This area is rich in biodiversity, and there is a chance to see a variety of wildlife, including birds, monkeys, and crocodiles.

                                        </br></br>

                                        Enroute, visit KOSGODA TURTLE HATCHERY. Kosgoda Turtle Hatchery is a place dedicated to the protection of endangered sea turtles. It collects turtle eggs from the beaches, incubates them safely, and releases the newly hatched young into the sea. Visitors can see different species of turtles, learn about conservation efforts, and sometimes even release the tiny turtle hatchlings into the sea. It is an educational and family-friendly experience that contributes to marine life protection.

                                        </br></br>

                                        In the evening, start the Colombo city tour.

                                        `,
                                        details1: "Overnight stay at Colombo"
                                    },
                                    {
                                        day: "Day 13: Departure Colombo",
                                        details:
                                            `
                                        Based on your departure flight, we can continue the Colombo city tour, which includes some of the following places:

                                        </br></br>

                                        Visit Kalaniya Ancient Buddha Temple (Buddha Visited The Place)

                                        </br></br>

                                        Lotus Tower

                                        </br></br>

                                        Galle Face Green

                                        </br></br>

                                        Port City Beach

                                        </br></br>

                                        Gangarama Temple

                                        </br></br>

                                        Pettah Shopping

                                        </br></br>

                                        Leave for Colombo International Airport according to your flight time.

                                        `,
                                        details1: "Departure Colombo. End of the 12 Nights / 13 Days ECO TRAIL"
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
                                        const whatsappNumber = "94773562768"; // your WhatsApp number
                                        const whatsappURL =
                                            "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

                                        window.open(whatsappURL, "_blank");

                                        // ✅ SEND EMAIL
                                        const mailto =
                                            "mailto:pearlceylontours01@gmail.com" +
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
                                    src={`https://www.google.com/maps/embed/v1/directions?
                                        key=AIzaSyDZqfXy1xcje1qgbyaF-Kb_qoRtUJc_lik
                                        &origin=Bandaranaike+International+Airport
                                        &destination=Colombo
                                        &waypoints=
                                            Negombo|
                                            Muthurajawela|
                                            Sigiriya|
                                            Dambulla|
                                            Kandy|
                                            Knuckles+Range|
                                            Pinnawala|
                                            Hatton|
                                            Nuwara+Eliya|
                                            Horton+Plains|
                                            Ella|
                                            Yala|
                                            Mirissa|
                                            Galle|
                                            Hikkaduwa|
                                            Madu+Ganga|
                                            Kosgoda
                                        &avoid=tolls|highways`
                                        .replace(/\s+/g, "")}
                                ></iframe>
                            </div>


                            <div className="route-info">
                                <p><strong>Distance:</strong> 3259.9 km</p>
                                <p><strong>Duration:</strong> 82 hr 52 min</p>
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
                                    const whatsappNumber = "94773562768"; // your WhatsApp number
                                    const whatsappURL =
                                        "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

                                    window.open(whatsappURL, "_blank");

                                    // ✅ SEND EMAIL
                                    const mailto =
                                        "mailto:pearlceylontours01@gmail.com" +
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

export default EcoTrail;
