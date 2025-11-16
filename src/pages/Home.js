import React, { useEffect } from 'react';
import '../css/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const slider = document.getElementById("packagesSlider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 320, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -320, behavior: "smooth" });
    });
  }, []);

  const dayTours = [
    { title: "Colombo City Day Tour", hours: "8 hours", image: day1, tag: "City Tour" },
    { title: "Galle & Unawatuna Day Tour", hours: "10 hours", image: day2, tag: "Beach Tour" },
    { title: "Kandy Cultural Day Tour", hours: "9 hours", image: day3, tag: "Heritage" },
    { title: "Sigiriya & Dambulla Day Tour", hours: "10 hours", image: day4, tag: "Adventure" },
    { title: "Kithulgala Day Tour", hours: "10 hours", image: day5, tag: "Adventure" },
  ];

  const packages = [
    {
      img: package1,
      days: "9 Days 8 Nights",
      title: "Culture Heritage Trails",
    },
    {
      img: package2,
      days: "12 Days 11 Nights",
      title: "Accessible Holiday Tour",
    },
    {
      img: package3,
      days: "14 Days 13 Nights",
      title: "Honeymoon Trail",
    },
    {
      img: package4,
      days: "9 Days 8 Nights",
      title: "Ramayana Tour",
    },
    {
      img: package5,
      days: "9 Days 8 Nights",
      title: "Ramayana Tour",
    },
  ];

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
          <button className="explore-btn">CHECK OUT OUR PACKAGES</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        {/* Left Text Area */}
        <div className="about-left" data-aos="fade-right">
          <h1>
            Let Us Plan Your Holiday In <br /> <span>Sri Lanka</span>
          </h1>

          <h2>Captain Ceylon Tours</h2>

          <p>
            Sri Lankan based locally owned company <strong>Captain Ceylon Tours</strong> specializes in handling
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
            <button className="primary-btn">Find Out More</button>
            <button className="outline-btn">More About Sri Lanka</button>
          </div>

          <p className="about-footer">
            <i className="fa fa-map-marker-alt"></i> Start your Sri Lankan adventure with Captain Ceylon Tours.
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

      {/* Our Packages Section */}
      <section className="packages-section" data-aos="fade-up">
        <h2>
          Our <span className="highlight">Packages</span>
        </h2>

        <div className="packages-slider-wrapper">
          <button className="arrow-btn left" id="prevBtn">
            <FaArrowLeft />
          </button>

          <div className="packages-slider" id="packagesSlider">
            {packages.map((pkg, index) => (
              <div className="package-card" key={index}>
                <img src={pkg.img} alt={pkg.title} className="package-img" />
                <div className="package-info">
                  <p className="package-days">
                    <FaClock className="clock-icon" /> {pkg.days}
                  </p>
                  <h4>{pkg.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow-btn right" id="nextBtn">
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
          <button className="arrow-btn left" id="prevBtn">
            <FaArrowLeft />
          </button>

          <div className="packages-slider" id="packagesSlider">
            {dayTours.map((pkg, index) => (
              <div className="package-card" key={index}>
                <img src={pkg.image} alt={pkg.title} className="package-img" />
                <div className="package-info">
                  <p className="package-days">
                    <FaClock className="clock-icon" /> {pkg.hours}
                  </p>
                  <h4>{pkg.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow-btn right" id="nextBtn">
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
            <div className="destination-card-home">
              <img src={require("../assets/feature1.jpg")} alt="Yala" />
              <div className="destination-info">
                <p className="location">📍 Uva Province, Sri Lanka</p>
                <h4>Yala</h4>
                <p>
                  Nature lovers and adventurers can relax amidst stunning views.
                  Major attractions include Adam’s Peak, Nine Arches, and Ravana Falls.
                </p>
              </div>
            </div>

            <div className="destination-card-home">
              <img src={require("../assets/feature2.jpg")} alt="Kandy" />
              <div className="destination-info">
                <p className="location">📍 Central, Sri Lanka</p>
                <h4>Kandy</h4>
                <p>
                  Kandy is a city located within the cultural triangle vibrant city,
                  renowned for its heritage, scenic beauty, and religious significance.
                </p>
              </div>
            </div>

            <div className="destination-card-home">
              <img src={require("../assets/feature3.jpg")} alt="Nuwara Eliya" />
              <div className="destination-info">
                <p className="location">📍 Central, Sri Lanka</p>
                <h4>Nuwara Eliya</h4>
                <p>
                  Known as Little England, famous for its colonial architecture, cool
                  climate, and tea plantations surrounded by lush greenery.
                </p>
              </div>
            </div>

            <div className="destination-card-home">
              <img src={require("../assets/feature4.jpg")} alt="Eco Escapes" />
              <div className="destination-info">
                <p className="location">📍 Eco Escapes, Sri Lanka</p>
                <h4>Eco Escapes</h4>
                <p>
                  UNESCO World Heritage sites rich in historical exploration, culture,
                  and ancient architectural marvels showcasing timeless beauty.
                </p>
              </div>
            </div>

            <div className="destination-card-home">
              <img src={require("../assets/feature5.jpg")} alt="Eco Escapes" />
              <div className="destination-info">
                <p className="location">📍 Eco Escapes, Sri Lanka</p>
                <h4>Eco Escapes</h4>
                <p>
                  UNESCO World Heritage sites rich in historical exploration, culture,
                  and ancient architectural marvels showcasing timeless beauty.
                </p>
              </div>
            </div>

            <div className="destination-card-home">
              <img src={require("../assets/feature6.jpg")} alt="Eco Escapes" />
              <div className="destination-info">
                <p className="location">📍 Eco Escapes, Sri Lanka</p>
                <h4>Eco Escapes</h4>
                <p>
                  UNESCO World Heritage sites rich in historical exploration, culture,
                  and ancient architectural marvels showcasing timeless beauty.
                </p>
              </div>
            </div>

            <div className="destination-card-home">
              <img src={require("../assets/feature7.jpg")} alt="Eco Escapes" />
              <div className="destination-info">
                <p className="location">📍 Eco Escapes, Sri Lanka</p>
                <h4>Eco Escapes</h4>
                <p>
                  UNESCO World Heritage sites rich in historical exploration, culture,
                  and ancient architectural marvels showcasing timeless beauty.
                </p>
              </div>
            </div>

            <div className="destination-card-home">
              <img src={require("../assets/feature8.jpg")} alt="Eco Escapes" />
              <div className="destination-info">
                <p className="location">📍 Eco Escapes, Sri Lanka</p>
                <h4>Eco Escapes</h4>
                <p>
                  UNESCO World Heritage sites rich in historical exploration, culture,
                  and ancient architectural marvels showcasing timeless beauty.
                </p>
              </div>
            </div>

            <div className="destination-card-home">
              <img src={require("../assets/feature9.jpg")} alt="Eco Escapes" />
              <div className="destination-info">
                <p className="location">📍 Eco Escapes, Sri Lanka</p>
                <h4>Eco Escapes</h4>
                <p>
                  UNESCO World Heritage sites rich in historical exploration, culture,
                  and ancient architectural marvels showcasing timeless beauty.
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
              <button className="primary-btn">ABOUT CAPTAIN CEYLON TOURS</button>
              <button className="outline-btn">WHY CAPTAIN CEYLON TOURS</button>
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

      {/* What Our Client Say About Us Section */}
      <section className="testimonials-section" data-aos="fade-up">
        <h2 className="testimonials-title">
          What Our Client <span className="highlight">Say About Us</span>
        </h2>
        <p className="testimonials-subtitle">
          Guest reviews are vital as they build trust, provide valuable feedback, and showcase authentic experiences.
          They help businesses improve, attract new customers, and establish credibility, influencing potential clients’
          decisions while fostering stronger connections with existing customers.
        </p>

        <div className="testimonials-container">
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
