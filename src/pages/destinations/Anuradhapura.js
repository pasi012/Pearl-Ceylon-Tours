import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import mirissaHero from "../../assets/mirissa-hero.jpg";
import mirissa1 from "../../assets/mirissa.jpg";
import mirissa2 from "../../assets/mirissa1.jpg";

import mirissa3 from "../../assets/mirissa2.jpg";
import mirissa4 from "../../assets/mirissa3.jpg";
import mirissa5 from "../../assets/mirissa4.jpg";

import surfing from "../../assets/Surfing.png";
import beginnerGuide from "../../assets/Beginner Guide.png";
import relaxing from "../../assets/Relaxing.png";


function Anuradhapura() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="mirissa-hero"
        style={{ backgroundImage: `url(${mirissaHero})` }}
        data-aos="fade-down"
      >
        <div className="overlay">
          <h1>Mirissa</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mirissa-container">
        {/* LEFT CONTENT */}
        <div className="mirissa-left" data-aos="fade-right">

          <h2>Mirissa</h2>
          <p>
            Hidden gem in southern beach, with many attractions such as coconut tree hill,
            whale watching, parrot rock, surfing, snorkeling & diving, beach relaxation.
          </p>

          <p>
            Mirissa is a popular tourist destination in Sri Lanka, and most visitors come
            to Mirissa Beach for a specialty in the winter.
          </p>

          <div className="mirissa-gallery">
            <img src={mirissa1} alt="Mirissa View" />
            <img src={mirissa2} alt="Mirissa Beach" />
          </div>

          <h3>Coconut Tree Hill</h3>
          <p>
            Coconut tree Hill has recently become one of Sri Lanka's most popular tourist destinations,
            located in the Mirissa region in the Southern Province. It is a small dome-shaped hill surrounded by palm trees.
            The Coconut Hill is one place you should not miss during your trip to the south of Sri Lanka.
            This a private coconut farm that is open all day and welcomes the public to visit. You don't need to buy tickets to enter.
            Once you get there, you'll see stunning views of the Indian Ocean. This place is completely covered with palm trees,
            and you can take stunning photos to post on Instagram. The sea breeze will help you feel more comfortable and relax.
          </p>

          <h3>Whale Watching</h3>
          <p>
            This is a great place to see whales in this beautiful country southern part in addition to trincomalee in eastern part.
          </p>

          <h3>Routes to Coconut Tree Hill</h3>
          <ul className="mirissa-list">
            <li>Through the beach of Mirissa</li>
            <li>Through the Bandaramwela Temple</li>
          </ul>

          {/* EXTRA CONTENT FROM SCREENSHOT */}
          <div className="mirissa-extra" data-aos="fade-up">

            <div className="mirissa-top-gallery">
              <img src={mirissa3} alt="Surfing" />
              <img src={mirissa4} alt="Snorkeling with Turtle" />
              <img src={mirissa5} alt="Boat Fishing" />
            </div>

            <h3>Most of the tourists and visitors come to this place through Mirissa beach.</h3>

            <p>
              If you drive or do not want to walk on the beach, you can get there through the
              Bandaramulla Temple. However, regardless of the path you choose, you will have to
              overcome a difficult path to reach your goal.
            </p>

            <p>
              Mirissa is usually crowded every day, both locals and foreigners. But if you can get
              there in the morning, you can enjoy a wonderful sunrise in a less crowded environment.
              Before 9 a.m., there are fewer people, which is something to consider before your visit.
            </p>

            <p>
              Sunset is a great time to visit the Palm Mountains. The weather report explains that
              the rainy season in the region is from October to December. The best time to visit is
              from January to May. Another factor to consider is that the beach is closed during the
              monsoon season from May to September.
            </p>

          </div>

          {/* ACTIVITIES SECTION */}
          <div className="mirissa-activities" data-aos="fade-up">

            <h2>Activities.</h2>
            <p>You have below activities in Mirissa beach.</p>

            {/* SURFING */}
            <details className="activity-box" open>
              <summary>• Surfing: Ideal for beginners and intermediate surfers.</summary>

              <p>
                Ride the waves in Mirissa’s crystal-clear waters, perfect for beginners and intermediate surfers
                seeking thrilling experiences.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={surfing} alt="Surfing" />
                  <p>Surfing</p>
                </div>

                <div className="activity-card">
                  <img src={beginnerGuide} alt="Beginner Guide" />
                  <p>Beginner Guide</p>
                </div>

                <div className="activity-card">
                  <img src={relaxing} alt="Relaxing" />
                  <p>Relaxing</p>
                </div>
              </div>
            </details>

            {/* SNORKELING */}
            <details className="activity-box">
              <summary>• Snorkeling & Diving: Explore vibrant coral reefs and marine life.</summary>

              <p>
                Discover vibrant coral reefs teeming with colorful fish and marine life,
                creating unforgettable underwater adventures.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={require("../../assets/Whale Watching.png")} alt="Whale Watching" />
                  <p>Whale Watching</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Turtle Watching.png")} alt="Turtle Watching" />
                  <p>Turtle Watching</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Turtle Feeding.png")} alt="Turtle Feeding" />
                  <p>Turtle Feeding</p>
                </div>
              </div>
            </details>

            {/* FISHING */}
            <details className="activity-box">
              <summary>• Fishing Tours: Experience traditional Sri Lankan fishing.</summary>

              <p>
                Join traditional Sri Lankan fishing tours, enjoy serene coastal views,
                and learn age-old fishing techniques firsthand.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={require("../../assets/Boating.png")} alt="Whale Watching" />
                  <p>Whale Watching</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Fishing.png")} alt="Turtle Watching" />
                  <p>Turtle Watching</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Traditional Fishing.png")} alt="Turtle Feeding" />
                  <p>Turtle Feeding</p>
                </div>
              </div>
            </details>
          </div>

          {/* PARROT ROCK SECTION */}
          <div className="mirissa-parrot-rock" data-aos="fade-up">

            <h3>Parrot Rock</h3>
            <p>• A small rocky islet offering beautiful views of the coastline, reachable during low tide.</p>

            <div className="parrot-gallery">
              <img src={require("../../assets/mirissa5.jpg")} alt="Parrot Rock Beach" />
              <img src={require("../../assets/mirissa6.jpg")} alt="Seafood Dish" />
            </div>

            <h3>You can spend your time here unlimitedly.</h3>
          </div>

        </div>

        {/* RIGHT INQUIRY FORM */}
        <div className="mirissa-form" data-aos="fade-left">
          <h3>Make an Inquiry</h3>

          <form>
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="Email Address *" required />
            <input type="text" placeholder="Phone Number *" required />

            <select>
              <option>Choose Your Country *</option>
              <option>Sri Lanka</option>
              <option>India</option>
              <option>UK</option>
              <option>USA</option>
            </select>

            <label>Arrival Date</label>
            <input type="date" />

            <label>Departure Date</label>
            <input type="date" />

            <select>
              <option>Choose Your Interest *</option>
              <option>Beach</option>
              <option>Cultural</option>
              <option>Adventure</option>
            </select>

            <input type="number" placeholder="No. of Adults *" />
            <input type="number" placeholder="No. of Kids" />

            <textarea placeholder="Enter your message here"></textarea>

            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </section>

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

export default Anuradhapura;
