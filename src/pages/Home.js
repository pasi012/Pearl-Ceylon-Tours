import React, { useEffect } from 'react';
import '../css/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useNavigate } from "react-router-dom";

import heroVideo from "../assets/hero.mp4";

import about1 from '../assets/about1.jpeg';
import about2 from '../assets/about2.jpeg';

import { FaArrowLeft, FaArrowRight, FaClock } from "react-icons/fa";
import package1 from "../assets/pkg1.jpg";
import package2 from "../assets/pkg2.jpg";
import package3 from "../assets/pkg3.jpg";
import package4 from "../assets/pkg4.jpg";
import package5 from "../assets/pkg5.jpg";

import day1 from "../assets/day1.jpg";
import day2 from "../assets/day2.jpg";
import day3 from "../assets/day3.jpg";
import day4 from "../assets/day4.jpg";
import day5 from "../assets/day5.jpg";

import { motion } from "framer-motion";

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  //testimonial
  useEffect(() => {
    const testimonialSlider = document.getElementById("testimonialSlider");
    const testimonialPrevBtn = document.getElementById("testimonialPrevBtn");
    const testimonialNextBtn = document.getElementById("testimonialNextBtn");

    const scrollAmount = testimonialSlider.offsetWidth / 4 + 20; // roughly one card width

    // Manual scroll
    testimonialNextBtn.addEventListener("click", () => {
      testimonialSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
    testimonialPrevBtn.addEventListener("click", () => {
      testimonialSlider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Auto-scroll every 4 seconds
    const autoScroll = setInterval(() => {
      if (
        testimonialSlider.scrollLeft + testimonialSlider.clientWidth >=
        testimonialSlider.scrollWidth - 5
      ) {
        testimonialSlider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        testimonialSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
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
    const prevBtn = document.getElementById("pkgPrevBtn");
    const nextBtn = document.getElementById("pkgNextBtn");

    const scrollAmount = slider.offsetWidth / 4 + 20; // roughly one card width

    // Manual scroll
    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

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
    const dayPrevBtn = document.getElementById("dayPrevBtn");
    const dayNextBtn = document.getElementById("dayNextBtn");

    const dayScrollAmount = daySlider.offsetWidth / 4 + 20;

    dayNextBtn.addEventListener("click", () => {
      daySlider.scrollBy({ left: dayScrollAmount, behavior: "smooth" });
    });
    dayPrevBtn.addEventListener("click", () => {
      daySlider.scrollBy({ left: -dayScrollAmount, behavior: "smooth" });
    });

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
              <img src={about1} alt="Pool view" />
            </div>
            <div className="image-right">
              <img src={about2} alt="Beach sunset" />
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
          <button className="arrow-btn left" id="pkgPrevBtn">
            <FaArrowLeft />
          </button>

          <div className="packages-slider" id="pkgSlider">

            {/* Package 1 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/tour-package/CultureHeritage")}
              style={{ cursor: "pointer" }}
            >
              <img src={package1} className="package-img" alt="Culture Heritage Trails" />
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
              <img src={package2} className="package-img" alt="Accessible Holiday Tour" />
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
              <img src={package3} className="package-img" alt="Honeymoon Trail" />
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
              <img src={package4} className="package-img" alt="Ramayana Tour" />
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
              <img src={package5} className="package-img" alt="Ramayana Tour" />
              <div className="package-info">
                <p className="package-days"><FaClock /> 9 Days 8 Nights</p>
                <h4>Eco Trail</h4>
              </div>
            </div>

          </div>

          <button className="arrow-btn right" id="pkgNextBtn">
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Day Tours Section */}
      <section className="packages-section" data-aos="fade-up">
        <h2>
          Day <span className="highlight">Tours</span>
        </h2>

        <div className="packages-slider-wrapper">
          {/* LEFT ARROW */}
          <button className="arrow-btn left" id="dayPrevBtn">
            <FaArrowLeft />
          </button>

          {/* SLIDER */}
          <div className="packages-slider" id="daySlider">

            {/* Day Tour 1 */}
            <div
              className="package-card-home"
              onClick={() => navigate("/day-tours/ColomboCityTour")}
              style={{ cursor: "pointer" }}
            >
              <img src={day1} className="package-img" alt="Colombo City Day Tour" />
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
              <img src={day2} className="package-img" alt="Galle & Unawatuna Day Tour" />
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
              <img src={day3} className="package-img" alt="Kandy Cultural Day Tour" />
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
              <img src={day4} className="package-img" alt="Sigiriya & Dambulla Day Tour" />
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
              <img src={day5} className="package-img" alt="Kithulgala Day Tour" />
              <div className="package-info">
                <p className="package-days"><FaClock /> 1 Day</p>
                <h4>Colombo Kithulgala Tour</h4>
              </div>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button className="arrow-btn right" id="dayNextBtn">
            <FaArrowRight />
          </button>
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
              <img src={require("../assets/feature1.jpg")} alt="Yala" />
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
              <img src={require("../assets/feature2.jpg")} alt="Kandy" />
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
              <img src={require("../assets/feature3.jpg")} alt="Nuwara Eliya" />
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
              <img src={require("../assets/feature4.jpg")} alt="Eco Escapes" />
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
              <img src={require("../assets/feature5.jpg")} alt="Eco Escapes" />
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
              <img src={require("../assets/feature6.jpg")} alt="Eco Escapes" />
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
              <img src={require("../assets/feature7.jpg")} alt="Eco Escapes" />
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
              <img src={require("../assets/feature8.jpg")} alt="Eco Escapes" />
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
              <img src={require("../assets/feature9.jpg")} alt="Eco Escapes" />
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
            <img src={require("../assets/whychoose.jpg")} alt="Sri Lanka Coast" />
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
            <img src={require("../assets/hospitality.jpg")} alt="Hospitality" />
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
          <button className="arrow-btn1 left-des" id="testimonialPrevBtn">
            <FaArrowLeft />
          </button>

          <div className="testimonial-slider" id="testimonialSlider">

            <div className="testimonial-card">
              <div className="testimonial-profile"></div>
              <h4>Gauthamabuddha</h4>
              <div className="stars">★★★★★</div>
              <p>
                "We had done a family trip for 5 days covering central and southern Sri Lanka. It was a very happy, pleasant
                and seamless experience with Harshan, a very professional chauffeur cum guide..."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile"></div>
              <h4>Kuba S</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Very good guide. He arranged the tickets, showed us some cool places in Sri Lanka. Attractive price and good car.
                I highly recommend."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile"></div>
              <h4>Tatiana</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Guide at the top, our stay was amazing thanks to him! It is very professional and it takes us to tourist places we love our stay!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile"></div>
              <h4>Tatiana</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Guide at the top, our stay was amazing thanks to him! It is very professional and it takes us to tourist places we love our stay!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile"></div>
              <h4>Tatiana</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Guide at the top, our stay was amazing thanks to him! It is very professional and it takes us to tourist places we love our stay!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-profile"></div>
              <h4>Tatiana</h4>
              <div className="stars">★★★★★</div>
              <p>
                "Guide at the top, our stay was amazing thanks to him! It is very professional and it takes us to tourist places we love our stay!"
              </p>
            </div>

          </div>

          <button className="arrow-btn1 right-des" id="testimonialNextBtn">
            <FaArrowRight />
          </button>

        </div>

      </section>

      {/* Vehicles Section */}
      <section className="vehicle-collection" data-aos="fade-up">
        <h2 className="vehicle-title">Our Luxury Vehicles</h2>

        <div className="vehicle-grid">

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-1">
              <img src={require("../assets/premio.jpg")} alt="Toyota Premio" />
            </div>
            <h4 className="vehicle-name">Toyota Premio</h4>
            <p className="vehicle-seats">(2 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-2">
              <img src={require("../assets/noah.jpg")} alt="Toyota Noah" />
            </div>
            <h4 className="vehicle-name">Toyota Noah</h4>
            <p className="vehicle-seats">(4 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-3">
              <img src={require("../assets/hiace.jpg")} alt="Toyota Hiace" />
            </div>
            <h4 className="vehicle-name">Toyota Hiace</h4>
            <p className="vehicle-seats">(6 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-4">
              <img src={require("../assets/mitsubishiSafari.jpg")} alt="Mitsubishi Cab Safari" />
            </div>
            <h4 className="vehicle-name">Mitsubishi Cab – Safari</h4>
            <p className="vehicle-seats">(3 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-5">
              <img src={require("../assets/mitsubishiRosa.png")} alt="Mitsubishi Rosa Bus" />
            </div>
            <h4 className="vehicle-name">Mitsubishi Rosa Bus</h4>
            <p className="vehicle-seats">(12 Seats)</p>
          </div>

          <div className="vehicle-card">
            <div className="vehicle-img-wrapper color-6">
              <img src={require("../assets/kingLong.jpg")} alt="King Long Bus" />
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

          <img
            src={require("../assets/brand-logo1.png")}
            alt="The Kingsbury Hotel"
            className="hotel-logo"
          />

          <img
            src={require("../assets/brand-logo2.png")}
            alt="Seagates"
            className="hotel-logo"
          />

          <img
            src={require("../assets/brand-logo3.png")}
            alt="Jetwing Hotels"
            className="hotel-logo"
          />

          <img
            src={require("../assets/brand-logo4.png")}
            alt="Shangri-La Hotel"
            className="hotel-logo"
          />

          <img
            src={require("../assets/brand-logo5.png")}
            alt="Cinnamon Lodge"
            className="hotel-logo"
          />

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
        href="https://wa.me/94762307765"
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
