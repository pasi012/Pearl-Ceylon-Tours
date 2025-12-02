import { useEffect, useState } from "react";
import '../css/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useNavigate } from "react-router-dom";

import heroVideo from "../assets/hero.mp4";

import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

import { FaArrowLeft, FaArrowRight, FaClock } from "react-icons/fa";

import { motion } from "framer-motion";

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  //about
  const [about1Url, setAbout1Url] = useState("");
  const [about2Url, setAbout2Url] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "about1.jpeg")).then(setAbout1Url);
    getDownloadURL(ref(storage, "about2.jpeg")).then(setAbout2Url);
  }, []);

  //packages
  // States for images
  const [pkgImg1, setPkgImg1] = useState("");
  const [pkgImg2, setPkgImg2] = useState("");
  const [pkgImg3, setPkgImg3] = useState("");
  const [pkgImg4, setPkgImg4] = useState("");
  const [pkgImg5, setPkgImg5] = useState("");

  useEffect(() => {
    // Get all package images
    getDownloadURL(ref(storage, "pkg1.jpg")).then(setPkgImg1);
    getDownloadURL(ref(storage, "pkg2.jpg")).then(setPkgImg2);
    getDownloadURL(ref(storage, "pkg3.jpg")).then(setPkgImg3);
    getDownloadURL(ref(storage, "pkg4.jpg")).then(setPkgImg4);
    getDownloadURL(ref(storage, "pkg5.jpg")).then(setPkgImg5);
  }, []);

  //day Tours
  // States for images
  const [dayImg1, setDayImg1] = useState("");
  const [dayImg2, setDayImg2] = useState("");
  const [dayImg3, setDayImg3] = useState("");
  const [dayImg4, setDayImg4] = useState("");
  const [dayImg5, setDayImg5] = useState("");

  useEffect(() => {
    // Get all package images
    getDownloadURL(ref(storage, "day1.jpg")).then(setDayImg1);
    getDownloadURL(ref(storage, "day2.jpg")).then(setDayImg2);
    getDownloadURL(ref(storage, "day3.jpg")).then(setDayImg3);
    getDownloadURL(ref(storage, "day4.jpg")).then(setDayImg4);
    getDownloadURL(ref(storage, "day5.jpg")).then(setDayImg5);
  }, []);

  //destinations
  const [destiImg1, setDestiImg1] = useState("");
  const [destiImg2, setDestiImg2] = useState("");
  const [destiImg3, setDestiImg3] = useState("");
  const [destiImg4, setDestiImg4] = useState("");
  const [destiImg5, setDestiImg5] = useState("");
  const [destiImg6, setDestiImg6] = useState("");
  const [destiImg7, setDestiImg7] = useState("");
  const [destiImg8, setDestiImg8] = useState("");
  const [destiImg9, setDestiImg9] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "feature1.jpg")).then(setDestiImg1);
    getDownloadURL(ref(storage, "feature2.jpg")).then(setDestiImg2);
    getDownloadURL(ref(storage, "feature3.jpg")).then(setDestiImg3);
    getDownloadURL(ref(storage, "feature4.jpg")).then(setDestiImg4);
    getDownloadURL(ref(storage, "feature5.jpg")).then(setDestiImg5);
    getDownloadURL(ref(storage, "feature6.jpg")).then(setDestiImg6);
    getDownloadURL(ref(storage, "feature7.jpg")).then(setDestiImg7);
    getDownloadURL(ref(storage, "feature8.jpg")).then(setDestiImg8);
    getDownloadURL(ref(storage, "feature9.jpg")).then(setDestiImg9);
  }, []);

  //why choose us
  const [whyChooseUsImg, setWhyChooseUsImg] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "whychoose.jpg")).then(setWhyChooseUsImg);
  }, []);

  //hospitality
  const [hospitalityImg, setHospitalityImg] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "hospitality.jpg")).then(setHospitalityImg);
  }, []);

  //vehicle
  const [vehicleImg1, setVehicleImg1] = useState("");
  const [vehicleImg2, setVehicleImg2] = useState("");
  const [vehicleImg3, setVehicleImg3] = useState("");
  const [vehicleImg4, setVehicleImg4] = useState("");
  const [vehicleImg5, setVehicleImg5] = useState("");
  const [vehicleImg6, setVehicleImg6] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "premio.jpg")).then(setVehicleImg1);
    getDownloadURL(ref(storage, "noah.jpg")).then(setVehicleImg2);
    getDownloadURL(ref(storage, "hiace.jpg")).then(setVehicleImg3);
    getDownloadURL(ref(storage, "mitsubishiSafari.jpg")).then(setVehicleImg4);
    getDownloadURL(ref(storage, "mitsubishiRosa.png")).then(setVehicleImg5);
    getDownloadURL(ref(storage, "kingLong.jpg")).then(setVehicleImg6);
  }, []);

  //hotel
  const [hotelImg1, setHotelImg1] = useState("");
  const [hotelImg2, setHotelImg2] = useState("");
  const [hotelImg3, setHotelImg3] = useState("");
  const [hotelImg4, setHotelImg4] = useState("");
  const [hotelImg5, setHotelImg5] = useState("");
  const [hotelImg6, setHotelImg6] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "brand-logo1.png")).then(setHotelImg1);
    getDownloadURL(ref(storage, "brand-logo2.png")).then(setHotelImg2);
    getDownloadURL(ref(storage, "brand-logo3.png")).then(setHotelImg3);
    getDownloadURL(ref(storage, "brand-logo4.png")).then(setHotelImg4);
    getDownloadURL(ref(storage, "brand-logo5.png")).then(setHotelImg5);
    getDownloadURL(ref(storage, "brand-logo6.png")).then(setHotelImg6);
  }, []);

  //destinations
  useEffect(() => {
    const destSlider = document.getElementById("destSlider");
    const destPrevBtn = document.getElementById("destPrevBtn");
    const destNextBtn = document.getElementById("destNextBtn");

    const scrollAmount = destSlider.offsetWidth / 4 + 20; // roughly one card width

    // Manual scroll
    destNextBtn.addEventListener("click", () => {
      destSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
    destPrevBtn.addEventListener("click", () => {
      destSlider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Auto-scroll every 4 seconds
    const autoScroll = setInterval(() => {
      if (
        destSlider.scrollLeft + destSlider.clientWidth >=
        destSlider.scrollWidth - 5
      ) {
        destSlider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        destSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, []);

  //packages
  useEffect(() => {
    const slider = document.getElementById("pkgSlider");

    const scrollAmount = slider.offsetWidth / 4 + 20; // roughly one card width

    // Auto-scroll every 4 seconds
    const autoScroll = setInterval(() => {
      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 5
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, []);

  //day tour
  useEffect(() => {
    const daySlider = document.getElementById("daySlider");

    const dayScrollAmount = daySlider.offsetWidth / 4 + 20;

    const dayAutoScroll = setInterval(() => {
      if (daySlider.scrollLeft + daySlider.clientWidth >= daySlider.scrollWidth - 5) {
        daySlider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        daySlider.scrollBy({ left: dayScrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(dayAutoScroll);
  }, []);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="overlay"></div>
        <div className="slide-content" data-aos="fade-up">
          <p className="slide-title">Explore Sri Lanka</p>
          <h1 className="slide-text">
            Excitement Tours <br /> Adventure Awaits With Us!
          </h1>

          <button
            className="explore-btn"
            onClick={() => navigate("/packages")}
          >
            CHECK OUT OUR PACKAGES
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        {/* Left Text Area */}
        <div className="about-left" data-aos="fade-right">
          <h1>
            Let Us Plan Your Holiday In <br /> <span>Sri Lanka</span>
          </h1>

          <h2>Pearl Ceylon Tours</h2>

          <p>
            Sri Lankan based locally owned company <strong>Pearl Ceylon Tours</strong> specializes in handling
            wheelchair accessible holidays, senior citizen holidays, tailor-made family holidays, beach holidays,
            and wildlife tours in Sri Lanka. As one of the best travel agencies in Sri Lanka, we are fully geared
            to design and operate your holiday by putting together your interests and our expertise while maintaining
            the highest service standards.
          </p>

          <p>
            Whether it’s adventure, history, spiritualism or nature — we will provide you with an unmatched experience,
            customized tours, and personalized service at its best. We differentiate your Sri Lankan experience
            from the rest by touching the deepest sense and essence of every single aspect.
          </p>

          <div className="about-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/about")}
            >
              Find Out More
            </button>
            <button
              className="outline-btn"
              onClick={() => navigate("/about-sri-lanka")}
            >
              More About Sri Lanka
            </button>
          </div>

          <p className="about-footer">
            <i className="fa fa-map-marker-alt"></i> Start your Sri Lankan adventure with Pearl Ceylon Tours.
            Your unforgettable journey awaits!
          </p>
        </div>

        {/* Right Image Area */}
        <div className="about-right" data-aos="fade-left">
          <div className="image-container">
            <div className="image-left">
              {about1Url && <img src={about1Url} alt="Pool view" />}
            </div>
            <div className="image-right">
              {about2Url && <img src={about2Url} alt="Beach sunset" />}
            </div>

            <div className="ribbon">
              <span>1,500+ Customer Worldwide</span>
            </div>

            <motion.div
              className="experience-box"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <h3>4</h3>
              <p>year of<br />experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section" data-aos="fade-up">
        <h2>
          Our <span className="highlight">Packages</span>
        </h2>

        <div className="packages-slider-wrapper">

          <div className="packages-slider" id="pkgSlider">

            {/* Package 1 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/tour-package/CultureHeritage")}
              style={{ cursor: "pointer" }}
            >
              {pkgImg1 && <img src={pkgImg1} className="package-img" alt="Culture Heritage Trails" />}
              <div className="package-info">
                <p className="package-days"><FaClock /> 9 Days 8 Nights</p>
                <h4>Culture Heritage Trails</h4>
              </div>
            </div>

            {/* Package 2 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/tour-package/HolidayTour")}
              style={{ cursor: "pointer" }}
            >
              {pkgImg2 && <img src={pkgImg2} className="package-img" alt="Accessible Holiday Tour" />}
              <div className="package-info">
                <p className="package-days"><FaClock /> 12 Days 11 Nights</p>
                <h4>Accessible Holiday Tour</h4>
              </div>
            </div>

            {/* Package 3 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/tour-package/HoneymoonTrail")}
              style={{ cursor: "pointer" }}
            >
              {pkgImg3 && <img src={pkgImg3} className="package-img" alt="Honeymoon Trail" />}
              <div className="package-info">
                <p className="package-days"><FaClock /> 14 Days 13 Nights</p>
                <h4>Honeymoon Trail</h4>
              </div>
            </div>

            {/* Package 4 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/tour-package/RamayanaTour")}
              style={{ cursor: "pointer" }}
            >
              {pkgImg4 && <img src={pkgImg4} className="package-img" alt="Ramayana Tour" />}
              <div className="package-info">
                <p className="package-days"><FaClock /> 9 Days 8 Nights</p>
                <h4>Ramayana Tour</h4>
              </div>
            </div>

            {/* Package 5 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/tour-package/EcoTrail")}
              style={{ cursor: "pointer" }}
            >
              {pkgImg5 && <img src={pkgImg5} className="package-img" alt="Eco Trail" />}
              <div className="package-info">
                <p className="package-days"><FaClock /> 9 Days 8 Nights</p>
                <h4>Eco Trail</h4>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Day Tours Section */}
      <section className="packages-section" data-aos="fade-up">
        <h2>
          Day <span className="highlight">Tours</span>
        </h2>

        <div className="packages-slider-wrapper">

          {/* SLIDER */}
          <div className="packages-slider" id="daySlider">

            {/* Day Tour 1 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/day-tours/ColomboCityTour")}
              style={{ cursor: "pointer" }}
            >
              {dayImg1 && <img src={dayImg1} className="package-img" alt="Colombo City Day Tour" />}
              <div className="package-info">
                <p className="package-days"><FaClock /> 1 Day</p>
                <h4>Colombo City Tour</h4>
              </div>
            </div>

            {/* Day Tour 2 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/day-tours/ColomboBenthotaGalle")}
              style={{ cursor: "pointer" }}
            >
              {dayImg2 && <img src={dayImg2} className="package-img" alt="Galle & Unawatuna Day Tour" />}
              <div className="package-info">
                <p className="package-days"><FaClock /> 1 Day</p>
                <h4>Colombo Galle Tour</h4>
              </div>
            </div>

            {/* Day Tour 3 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/day-tours/ColomboKandy")}
              style={{ cursor: "pointer" }}
            >
              {dayImg3 && <img src={dayImg3} className="package-img" alt="Kandy Cultural Day Tour" />}
              <div class="package-info">
                <p className="package-days"><FaClock /> 1 Day</p>
                <h4>Colombo Kandy Tour</h4>
              </div>
            </div>

            {/* Day Tour 4 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/day-tours/ColomboSigiriyaDambulla")}
              style={{ cursor: "pointer" }}
            >
              {dayImg4 && <img src={dayImg4} className="package-img" alt="Sigiriya & Dambulla Day Tour" />}
              <div className="package-info">
                <p className="package-days"><FaClock /> 1 Day</p>
                <h4>Colombo Sigiriya Tour</h4>
              </div>
            </div>

            {/* Day Tour 5 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/day-tours/ColomboKithulgala")}
              style={{ cursor: "pointer" }}
            >
              {dayImg5 && <img src={dayImg5} className="package-img" alt="Kithulgala Day Tour" />}
              <div className="package-info">
                <p className="package-days"><FaClock /> 1 Day</p>
                <h4>Colombo Kithulgala Tour</h4>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Best Destinations Section */}
      <section className="best-destinations-section" data-aos="fade-up">
        <h2>
          Amazing Tour Places <br /> Around The <span className="highlight">Sri Lanka</span>
        </h2>

        <div className="destinations-slider-wrapper">
          <button className="arrow-btn left-des" id="destPrevBtn">
            <FaArrowLeft />
          </button>

          <div className="destinations-slider" id="destSlider">
            <div
              className="destination-card-home"
              onClick={() => navigate("/destinations/Mirissa")}
              style={{ cursor: "pointer" }}
            >
              {destiImg1 && <img src={destiImg1} alt="Yala" />}
              <div className="destination-info">
                <p className="location">📍 South Coast, Sri Lanka</p>
                <h4>Mirissa</h4>
                <p>Southern beach gem.</p>
                <p>
                  Coconut Tree Hill, Whale Watching, Parrot Rock, Surfing, Snorkeling, Driving, Beach Relaxation.
                </p>
              </div>
            </div>

            <div
              className="destination-card-home"
              onClick={() => navigate("/destinations/Sigiriya")}
              style={{ cursor: "pointer" }}
            >
              {destiImg2 && <img src={destiImg2} alt="Kandy" />}
              <div className="destination-info">
                <p className="location">📍 Central, Sri Lanka</p>
                <h4>Sigiriya</h4>
                <p>
                  City blends history, culture, beauty, adventure and sigiriya fortress the 8'th world wonder, showcasing nature's and mankind's marvels.
                </p>
              </div>
            </div>

            <div
              className="destination-card-home"
              onClick={() => navigate("/destinations/Anuradhapura")}
              style={{ cursor: "pointer" }}
            >
              {destiImg3 && <img src={destiImg3} alt="Yala" />}
              <div className="destination-info">
                <p className="location">📍 North Central, Sri Lanka</p>
                <h4>Anuradhapura</h4>
                <p>
                  Anuradhapura Sri Lanka’s first capital showcases ancient history, buddhist heritage and engineering marvels as a UNESCO world heritage site.
                </p>
              </div>
            </div>

            <div
              className="destination-card-home"
              onClick={() => navigate("/destinations/Polonnaruwa")}
              style={{ cursor: "pointer" }}
            >
              {destiImg4 && <img src={destiImg4} alt="Yala" />}
              <div className="destination-info">
                <p className="location">📍 North Central, Sri Lanka</p>
                <h4>Polonnaruwa</h4>
                <p>
                  UNESCO World Heritage site rich in historical exploration, cultural significance and ancient architectural marvels showcasing timeless beauty.
                </p>
              </div>
            </div>

            <div
              className="destination-card-home"
              onClick={() => navigate("/destinations/Ella")}
              style={{ cursor: "pointer" }}
            >
              {destiImg5 && <img src={destiImg5} alt="Yala" />}
              <div className="destination-info">
                <p className="location">📍 Uva, Sri Lanka</p>
                <h4>Ella</h4>
                <p>
                  Nature lovers and adventurers can relax amidst stunning views. major attractions include Adam's Peak, Nine Arches and Ravana Falls
                </p>
              </div>
            </div>

            <div
              className="destination-card-home"
              onClick={() => navigate("/destinations/Yala")}
              style={{ cursor: "pointer" }}
            >
              {destiImg6 && <img src={destiImg6} alt="Yala" />}
              <div className="destination-info">
                <p className="location">📍 Uva, Sri Lanka</p>
                <h4>Yala</h4>
                <p>
                  Yala National Park is one of the most famous wildlife reserves in Sri Lanka. It is located in the southeastern part of the country and covers a large area of forests, grasslands, lagoons, and beaches.
                </p>
              </div>
            </div>

            <div
              className="destination-card-home"
              onClick={() => navigate("/destinations/Kandy")}
              style={{ cursor: "pointer" }}
            >
              {destiImg7 && <img src={destiImg7} alt="Yala" />}
              <div className="destination-info">
                <p className="location">📍 Central, Sri Lanka</p>
                <h4>Kandy</h4>
                <p>
                  Kandy is a city located withing the culture triangle vibrant city renowed for its culture heritage, scieni beauty & Its religious significant.
                </p>
              </div>
            </div>

            <div
              className="destination-card-home"
              onClick={() => navigate("/destinations/Nuwara-Eliya")}
              style={{ cursor: "pointer" }}
            >
              {destiImg8 && <img src={destiImg8} alt="Yala" />}
              <div className="destination-info">
                <p className="location">📍 Central, Sri Lanka</p>
                <h4>Nuwara Eliya</h4>
                <p>
                  Nuwara Eliya called little England, is a charming hill station famous for its colonial architecture, cool climate, tea plantations and greenery.
                </p>
              </div>
            </div>

            <div
              className="destination-card-home"
              onClick={() => navigate("/destinations/Eco-Escapes")}
              style={{ cursor: "pointer" }}
            >
              {destiImg9 && <img src={destiImg9} alt="Yala" />}
              <div className="destination-info">
                <p className="location">📍 Eco Escapes, Sri Lanka</p>
                <h4>Eco Escapes</h4>
                <p>
                  UNESCO World Heritage site rich in historical exploration, cultural significance, and ancient architectural marvels showcasing timeless beauty.
                </p>
              </div>
            </div>

          </div>

          <button className="arrow-btn right-des" id="destNextBtn">
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section-home" data-aos="fade-up">
        <div className="why-choose-container">
          <div className="why-choose-image">
            {whyChooseUsImg && <img src={whyChooseUsImg} />}
            <div className="explore-badge">
              <span>Never stop<br />Exploring</span>
            </div>
          </div>

          <div className="why-choose-content">
            <h2>Why <span className="highlight">Choose Us</span></h2>
            <p>
              A number of people have chosen us as their number one travel destination
              management company and you will also choose us for the following reasons…
            </p>
            <p>
              We are one of the leading tour operators in Sri Lanka who provide tours to
              exotic destinations.
            </p>
            <p>
              Your safety is our priority &amp; we ensure safe travels across Sri Lanka’s
              scenic beauty.
            </p>
            <p>
              We offer affordable prices for all your tour packages which you can compare
              with any travel agent in Sri Lanka.
            </p>
            <p>
              Trusted local guides who will show you the hidden gems of Sri Lanka.
            </p>
            <p>
              We have a passionate and professional team consisting of 40 representatives
              who possess extensive knowledge of the Sri Lankan tourism industry.
            </p>

            <div className="why-choose-buttons">
              <button className="primary-btn" onClick={() => navigate("/about")}>ABOUT Pearl CEYLON TOURS</button>
              <button className="outline-btn" onClick={() => navigate("/whyChooseUs")}>WHY Pearl CEYLON TOURS</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hospitality Highlights Section */}
      <section className="hospitality-section" data-aos="fade-up">

        <div className="hospitality-container">

          {/* Left Image Side */}
          <div className="hospitality-image" data-aos="fade-right">
            {hospitalityImg && <img src={hospitalityImg} />}
            <div className="hospitality-badge">
              <span>Exclusive offer and comprehensive<br />travel package details provided.</span>
            </div>
          </div>

          {/* Right Content Side */}
          <div className="hospitality-content" data-aos="fade-left">

            <div className="hospitality-cards">
              {/* Card 1 */}
              <div className="hospitality-card">
                <h3>COMPLIMENTARY OFFER FROM OUR COMPANY</h3>
                <ul>
                  <li>Complimentary company T-shirt</li>
                  <li>2 Mineral Water bottles (2 liters/day per client)</li>
                  <li>Local SIM Cards (1 per six persons)</li>
                  <li>Entry permit for Traditional Cultural performance (Kandy)</li>
                  <li>Day tour not applicable</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="hospitality-card">
                <h3>OUR PACKAGE INCLUDES</h3>
                <ul>
                  <li>Accommodation in Double Sharing A/C Rooms</li>
                  <li>Meal Basis on H/B (Breakfast/Dinner – Veg or Non-Veg)</li>
                  <li>Transportation by New Luxury A/C Vehicles</li>
                  <li>Guiding by English-speaking Tourist Lecturer</li>
                  <li>All Government Taxes included</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="hospitality-card">
                <h3>OUR PACKAGE EXCLUDES</h3>
                <ul>
                  <li>Airfare and Visa Charges</li>
                  <li>Additional Services not specified</li>
                  <li>Entrance Fees (optional)</li>
                  <li>Lunch during the tour</li>
                  <li>Day tours – refer to separate packages</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" data-aos="fade-up">
        <h2 className="testimonials-title">
          What Our Client <span className="highlight">Say About Us</span>
        </h2>
        <p className="testimonials-subtitle">
          Guest reviews are vital as they build trust, provide valuable feedback, and showcase authentic experiences.
          They help businesses improve, attract new customers, and establish credibility, influencing potential clients’
          decisions while fostering stronger connections with existing customers.
        </p>

        <div className="testimonial-slider-wrapper">

          <div className="testimonial-slider" id="destSlider">

            <div className="testimonial-card">
              <div className="testimonial-profile" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRntUEjrTUhlmUHWEwAi87I3LyP_t-_c7hCkg&s")' }}></div>
              <h4>William Griffin</h4>
              <div className="stars">★★★★★</div>
              <p>
                "We had an unforgettable 5-day family tour across central and southern Sri Lanka..."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile" style={{ backgroundImage: 'url("https://media.licdn.com/dms/image/v2/D5603AQHuywq_W9_KEQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677774441926?e=2147483647&v=beta&t=N57KbeBCH4u74M1T1zMH4myJJB24p1kip5MZYVG4msA")' }}></div>
              <h4>Kuba S</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Great guide! He arranged tickets, took us to amazing spots..."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bc5y-8hwPZxADjpBwl5qKTlHjBnBFUjvpA&s")' }}></div>
              <h4>Tatiana</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Exceptional guide! Our trip was absolutely perfect..."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile" style={{ backgroundImage: 'url("https://media.licdn.com/dms/image/v2/C5103AQHCum1kLu_YnA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516867846397?e=2147483647&v=beta&t=qQnolx_9yQClzO3ZVk3ej4SBiyc5kAQq3gzQsndVSnE")' }}></div>
              <h4>Mark Johnson</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Amazing service from start to finish..."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMs8RFq8_k6eHajOmHy5LKr1YLeDDgbO85XA&s")' }}></div>
              <h4>Angel Sophia</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Our Sri Lanka holiday became extra special..."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1wS1o1vIdgX9OOBOHJ8YgPUQfRYLKBeb8A&s")' }}></div>
              <h4>Daniel K</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Professional, kind, and extremely knowledgeable..."
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Vehicles Section */}
      <section className="vehicle-collection" data-aos="fade-up">
        <h2 className="vehicle-title">Our Luxury Vehicles</h2>

        <div className="vehicle-grid">

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-1">
              {vehicleImg1 && <img src={vehicleImg1} />}
            </div>
            <h4 className="vehicle-name">Toyota Premio</h4>
            <p className="vehicle-seats">(2 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-2">
              {vehicleImg2 && <img src={vehicleImg2} />}
            </div>
            <h4 className="vehicle-name">Toyota Noah</h4>
            <p className="vehicle-seats">(4 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-3">
              {vehicleImg3 && <img src={vehicleImg3} />}
            </div>
            <h4 className="vehicle-name">Toyota Hiace</h4>
            <p className="vehicle-seats">(6 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-4">
              {vehicleImg4 && <img src={vehicleImg4} />}
            </div>
            <h4 className="vehicle-name">Mitsubishi Cab – Safari</h4>
            <p className="vehicle-seats">(3 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-5">
              {vehicleImg5 && <img src={vehicleImg5} />}
            </div>
            <h4 className="vehicle-name">Mitsubishi Rosa Bus</h4>
            <p className="vehicle-seats">(12 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-6">
              {vehicleImg6 && <img src={vehicleImg6} />}
            </div>
            <h4 className="vehicle-name">King Long Bus</h4>
            <p className="vehicle-seats">(25 Seats)</p>
          </div>

          <p className='home-p'>Explore our top destinations voted by more than 1000+ customers around the world.</p>

        </div>
      </section>

      {/* Hotel Brands Section */}
      <section className="hotel-brands-section" data-aos="fade-up">
        <h2 className="hotel-brands-title">
          We’ve been mentioned in Below Brands
        </h2>

        <div className="hotel-brands-logos">

          {hotelImg1 && <img src={hotelImg1} className="hotel-logo" />}

          {hotelImg2 && <img src={hotelImg2} className="hotel-logo" />}

          {hotelImg3 && <img src={hotelImg3} className="hotel-logo" />}

          {hotelImg4 && <img src={hotelImg4} className="hotel-logo" />}

          {hotelImg5 && <img src={hotelImg5} className="hotel-logo" />}

          {hotelImg6 && <img src={hotelImg6} className="hotel-logo" />}

        </div>
      </section>

      {/* CTA Section */}
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94773562768"
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>

    </div>
  );
}

export default Home;
