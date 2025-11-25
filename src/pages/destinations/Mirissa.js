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


function Mirissa() {
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
            <input name="name" type="text" placeholder="Name *" />
            <input name="email" type="email" placeholder="Email Address *" />
            <div className="phone-row">
              <input name="code" className="code" type="text" placeholder="Code" />
              <input name="phone" className="phone" type="text" placeholder="Phone Number *" />
            </div>

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

            <input name="adults" type="number" placeholder="No. of Adults *" />
            <input name="kids" type="number" placeholder="No. of Kids" />

            <textarea name="message" placeholder="Enter your message here"></textarea>

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

export default Mirissa;
