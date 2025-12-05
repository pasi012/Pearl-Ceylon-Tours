import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css/CultureHeritage.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function HolidayTour() {

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
        getDownloadURL(ref(storage, "pkg2.jpg")).then(setImg1);
        getDownloadURL(ref(storage, "sigiriya19.jpg")).then(setImg2);
        getDownloadURL(ref(storage, "sigiriya22.jpg")).then(setImg3);

        getDownloadURL(ref(storage, "holidayTour-hero.jpg")).then(setImgHero);
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
                                        The "Accessible Holiday Tour" tour package typically includes visits to historically and culturally significant locations in Sri Lanka.
                                    </p>

                                    <h2>Tour Highlights</h2>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Temple of tooth</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Kandy culture dance</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Jem & jewelary museum</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Botanical garden peradeniya</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Silk & batic factoy</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Kandy lake</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Kandy market</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Nalanda gedige</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Hindu temple</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Spice garden (only for vsit)</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Hiriwaduna village tour</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Anuradhapure</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Minneriya national park</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>dambull acave temple</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>ramboda fall</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Gregory lake</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Damro tea factory</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Botanical garden haggle</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Yala national park</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Mirissa beach</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Unawatuna beach</p>
                                    </div>

                                    <div className="conf-item">
                                        <img src={require("../../assets/maps-flags.png")} alt="icon" />
                                        <p>Kosgoda turtle hatchery</p>
                                    </div>

                                </section>

                                <section className="ch-offers">
                                    <h2>Description:</h2>
                                    <p>
                                        Discover the wonders of Sri Lanka with our thoughtfully designed 12 Days / 11 Nights Accessible Holiday Tour, crafted for individuals with special needs.
                                        This unique journey ensures comfort, accessibility, and enriching experiences, allowing everyone to enjoy the beauty and culture of Sri Lanka without limitations.
                                        With over 20 years of expertise, our team, including a dedicated Sri Lankan government nursing officer, ensures top-notch care and tailored support for differently-abled travelers.
                                        From wheelchair-friendly transportation and accommodation to seamless excursions, we provide a perfect balance of relaxation, adventure, and cultural immersion.
                                    </p>
                                    <ul>
                                        <li>Cultural Highlights: Temple of the Tooth, Kandyan show, Nalanda Gedige, Dambulla Cave Temple.</li>
                                        <li>Nature & Wildlife: Minneriya safari, Yala, Ramboda Falls, Hakgala Gardens.</li>
                                        <li>Scenic Beauty: Tea estates, Gregory Lake, Ella Gap, Mirissa, and Unawatuna beaches.</li>
                                        <li>Unique Experiences: Hiriwaduna tour, Turtle Hatchery, Galle Fort.</li>
                                        <li>Accessibility: Guided tours, personal care assistants, wheelchair-friendly activities.</li>
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
                            <span className="ch-badge">Holiday Tour</span>
                            <h1>Accessible Holiday Tour</h1>
                            <p className="ch-days">⏱ 11 Nights 12 Days</p>
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
                                        We strongly believe that special need people have same rights to enjoy and like others. Holidays for people with disabilities in Sri Lanka are specially designed differently abled children / paraplegic travelers and others who are seeking for wheelchair friendly holidays in Sri Lanka.. The "Accessible Holidays" team at Pearl Ceylon Tours is well-trained and dedicated to organizing HOLIDAYS FOR PEOPLE WITH SPECIAL NEEDS.
                                    </p>

                                    <p>
                                        We are proud to inform that Our team comprises 20 years experienced Sri Lankan government nursing officer who expertly guide our personal care assistants in providing top-notch accessible care."
                                    </p>

                                    <p>
                                        Every person has different accessibility needs, and Pearl Ceylon Tours is ready to find the most suitable vacations for people with disabilities in Sri Lanka according to their requirements. For us, it is a task to find the right level of relaxation for people with disabilities, ensuring easy access to all parts of the relaxation, from transportation and accommodation to activities and excursions. But our dedicated team is fully informed about the resources available in the country to organize vacations for people with disabilities and develop the best possible plan.
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
                                        details: "Welcome to Sri Lanka. On this day of your 12 days Sri Lanka tour, you shall start exploring its marvels. Upon your arrival at Bandaranaike International Airport, an agent’s representative will greet you and guide you towards a luxury chauffeur-driven vehicle , & along with one or two personal care assistant ( numbers as your request we can increase or decrease depending on your requirement) that will take you around the country.",
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in Negambo with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 2: Negambo To Kandy",
                                        details: `
                                            After enjoying breakfast at the hotel, they set out on a picturesque journey to the vibrant city of Kandy which is in the culture triangle, where many cultural and natural beauties awaited them.

                                            <br/><br/>

                                            In the afternoon you will be taking in to the Temple of the Sacred Tooth (Sri Dalada Maligawa) in Kandy.Is one of the most revered Buddhist sites in Sri Lanka and a UNESCO World Heritage Site. It houses the Buddha's tooth relic, which has immense spiritual significance and has influenced Sri Lanka's history and culture through the centuries.
                                            
                                            <br/><br/>
                                            
                                            Relics of the Holy Tooth: Engraved in a golden box, the relic is kept in the temple's inner sanctum. Even though visitors cannot see the relic itself, the box is displayed during the religious ceremonies.
                                            
                                            <br/><br/>
                                            
                                            In the evening at 5pm you will be taking in to traditional kandyan culture show which will held in kandy art association hall.

                                            <br/><br/>

                                            Kandy is famous for its rich cultural heritage and traditional dances, which are a major attraction for tourists. The Kandyan dance (Udarata Natum) is the highlight, deeply rooted in Sri Lanka's history and traditions.
                                            
                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in Kandy with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 3: Kandy",
                                        details: `
                                            Re-energize yourself with a healthy and piping-hot breakfast at the hotel and start kandy city tour.

                                            <br/><br/>

                                            In the morning visit to Royal Botanical Gardens in Peradeniya,

                                            <br/><br/>

                                            The Royal Botanical Gardens in Peradeniya, located near Kandy, is one of the most famous tourist attractions in Sri Lanka. It is known for its extensive collection of plants, picturesque landscapes, and historical significance.

                                            <br/><br/>

                                            Inside the garden we will taking you orchid house, Avenida de Palmas, Large Java Fig Tree,Medicinal garden,historical trees,bird watching & Diverse Plant Collection.
                                            
                                            <br/><br/>

                                            After that late morning we will take you in to jem & jewellery museum , authentic srilankan silk and batic factory only for visit.
                                            
                                            <br/><br/>

                                            Early after noon take round tour around kandy lake.
                                            
                                            <br/><br/>

                                            Kandy Lake, also known as the Sea of Milk (Kiri Muhuda), is a tranquil artificial lake in the heart of the city of Kandy, created in 1807 by King Sri Vikrama Rajasinghe. This place is popular among both locals and tourists due to its beauty and historical significance.
                                        
                                            <br/><br/>

                                            A cobblestone path surrounds the lake, perfect for peaceful walks with views of the water and the surrounding hills. Picturesque walks: A cobblestone path surrounds the lake, perfect for leisurely walks with views of the water and the surrounding hills.
                                            
                                            <br/><br/>

                                            Late afternoon visit kandy market which is a vibrant and bustling spot that offers a glimpse into local life. From their you can purchase Handicrafts , Souvenirs, street food & drinks.
                                            
                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in Kandy with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 4: Kandy To Dambulla",
                                        details: `
                                            After dining at the hotel for breakfast start journey UNESCO world heritage city Dambulla.

                                            <br/><br/>

                                            On the way to dambulla, visit Nalanda Gedige, Matale Spice Garden (visit only), and then visit the Hindu temple during your excursion in Dambulla.

                                            <br/><br/>

                                            <strong>1. Hirivaduwa village tour</strong></br>
                                            In the evening visit your great mind relaxing place Hirivaduwa village tour.The village of Hirivaduwa is a charming town located near Habarana, in the heart of Sri Lanka's cultural triangle. It offers an authentic representation of traditional rural life in Sri Lanka and is a popular spot for ecotourism and cultural experiences.
                                            
                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in Dambulla with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 5: Dambulla/Anuradhapura/Dambulla",
                                        details:
                                            `
                                        Following breakfast in the hotel visit UNESCO world heritage city Anuradhapura.

                                        <br/><br/>

                                        The Anuradhapura is an enriching journey to Sri Lanka's ancient capital, which was the center of the Sinhalese civilization for over a thousand years. Known as a UNESCO World Heritage site, the city is famous for its well-preserved ruins, monumental stupas, and its spiritual significance within Buddhism.

                                        <br/><br/>

                                        We will take you in to many Sacred Places such as below.

                                        <br/><br/>

                                        <strong>1. Sri Maha Bodhi</strong></br>
                                        The revered Boo tree, which grew from a small sapling of the original tree under which Buddha attained enlightenment. It is over 2300 years old and is one of the world's oldest trees with a documented history.

                                        <br/><br/>

                                        <strong>2. Ruwanwelisaya</strong></br>
                                        A massive white stupa that is an architectural marvel and a symbol of the Buddhist heritage.

                                        <br/><br/>

                                        <strong>3. Thuparamaya</strong></br>
                                        The first stupa in Sri Lanka, which is believed to contain a relic of Buddha's collarbone.
                                        </br>
                                        Historical and architectural wonders such a below.

                                        </br></br>

                                        <strong>4. The twin ponds (Kuttam Pokuna)</strong></br>
                                        Beautifully designed baths for the monks, highlighting the ancient hydrological knowledge.

                                        </br></br>

                                        <strong>5. Isurumuniya Vihara</strong></br>
                                        Monastery famous for its intricate carvings, including "Isurumuniya Lovers."
                                        </br>
                                        Monastic Complex: Monastic Complex.

                                        </br></br>

                                        <strong>6. Abhayagiri Monastery</strong></br>
                                        Once a great monastic institution, now home to the impressive Abhayagiri stupa and many ruins.

                                        </br></br>

                                        <strong>7. Stupa Jetavana</strong></br>
                                        One of the largest brick structures in the world, showcasing outstanding ancient engineering.

                                        </br></br>

                                        <strong>8. Ancient water resource management systems</strong></br>
                                        Ancient water resource management systems: Explore the reservoirs, such as Tissa Wewa and Basawakkulama (Abhaya Wewa), which reflect the advanced irrigation systems of the ancient kingdom.
                                        </br>
                                        In the evening enjoy minneriya jeep safari
                                        </br>
                                        Minneriya National Park is another popular tourist destination in Sri Lanka. This place is very popular due to the huge gathering of elephants. It belongs to Polonnaruwa District in North Central Province. Minneria National Park is home to many wild animals. It covers an area of 8, 889.4 hectares.

                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in Dambulla with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 6: Dambulla/Nuwara Eliya(Little England)",
                                        details:
                                            `
                                        After enjoying a hearty morning meal at the hotel start day journey to Nuwara Eliya also called as Little England.

                                        <br/><br/>

                                        Nuwara Eliya is a picturesque mountain village in Sri Lanka, located at an altitude of approximately 1868 meters. Known for its cool climate, luxurious tea plantations, and colonial charm, it is a favourite spot for both locals and international tourists.

                                        <br/><br/>

                                        In the morning visit dambulla cave temple also known as the Golden Temple of Dambulla, is one of the most iconic cultural and religious sites in Sri Lanka. Located in the central province near Matale, it is a UNESCO World Heritage site and an important attraction in the cultural triangle of Sri Lanka.

                                        <br/><br/>

                                        En route to little England also visit Ramboda fall which is renowned for its breathtaking beauty, offering a serene escape into nature. Around the are you experience nature walks, Hiking and trekking,tea plantations, Picturesque views and photography.

                                        <br/><br/>

                                        In the evening visit Damro Tea Factory. Is a popular destination for tea lovers and those curious about production process.

                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in Nuwara Eliya with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 7: Nuwara Eliya",
                                        details:
                                            `
                                        After savoring a lovely breakfast at the hotel starts Nuwara Eliya city tour.

                                        </br></br>

                                        In the morning will visit greogery lake it is a beautiful lake located in the heart of Nuwara Eliya, Sri Lanka. It was created in 1873 during the British colonial period under the supervision of the British governor Sir William Gregory.

                                        </br></br>

                                        It is a wonderful place to visit if you find yourself in Nuwara Eliya, and it offers a combination of natural beauty and recreational opportunities.

                                        </br></br>

                                        late morning visits to hakgala botanical garden , is one of the most famous gardens in Sri Lanka. Located at an altitude of 1,745 meters, it is the second largest botanical garden in the country, offering a tranquil refuge in nature with its lush landscapes and diverse plant collections.

                                        </br></br>

                                        in the afternoon visit Victoria park, is one of the most beautiful and well-maintained city parks in the country. Named in honor of the 60th anniversary of Queen Victoria's reign in 1897, it is a favourite spot for both locals and tourists to enjoy the cool climate and the picturesque beauty of the mountainous region.
                                        
                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in Nuwara Eliya with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 8: Nuwara Eliya To Yala",
                                        details:
                                            `
                                        Following a delightful breakfast at the hotel start journey to yala national park.

                                        </br></br>

                                        Then enjoy madu ganga boat ride

                                        </br></br>

                                        Upon arrival Yala check in the hotel and ready for yala safari tour. Yala is one of the most popular tourist destinations in Sri Lanka, contributes significant economic benefits through ecotourism, supports local communities, and promotes sustainable practices. The park contains ancient ruins and historical monuments, which add cultural and historical value to its scenic beauty.
                                        
                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in Yala with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 9: Yala To Mirissa",
                                        details:
                                            `
                                        After savoring a lovely breakfast at the hotel starts travel to Mirissa. Which is hidden jem in southern beach ,with many attractions such as coconut tree hill,whale watching ,parrot rock ,surfing, Snorkeling & Diving, beach relaxation.

                                        </br></br>

                                        Due to our guest's capabilities and specific care requirements, many of the mentioned activities may not be suitable. However, we will be delighted to offer personalized activities that prioritize comfort, relaxation, and accessibility.

                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in mirissa with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 10: Mirissa To Galle",
                                        details:
                                            `
                                        Once we've relished breakfast at the hotel start journey to Galle.

                                        </br></br>

                                        Leisurely day on the Unawatuna beach

                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in galle with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 11: Galle To Colombo",
                                        details:
                                            `
                                        After savoring a lovely breakfast at the hotel starts travel to Colombo. En-route to Colombo visit kosgoda turtle hatcheryis which is a conservation center dedicated to the protection of endangered sea turtles. It is a fascinating place for nature lovers and those interested in animal conservation.

                                        </br></br>

                                        Here you see Turtle Conservation, Diversity of turtle species, Observe turtles of different ages, from newborns to the older ones who are under rehabilitation.

                                        `,
                                        details1: "Have dinner & Overnight stay with Wheelchair Accessible Hotels in colombo with personal care assistant as you required."
                                    },
                                    {
                                        day: "Day 12: Colombo",
                                        details:
                                            `
                                        End of your holiday in Colombo.

                                        `,
                                        details1: "Leave for Colombo International Airport according to your flight time. Departure colombo"
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
                                The "Accessible Holiday Tour" tour package typically includes visits to historically and culturally significant locations in Sri Lanka.
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

export default HolidayTour;
