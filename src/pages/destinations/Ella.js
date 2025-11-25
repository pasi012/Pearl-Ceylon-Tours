import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import ellaHero from "../../assets/ella-hero.jpg";
import ella1 from "../../assets/ella1.jpg";
import ella2 from "../../assets/ella2.jpg";

import ella3 from "../../assets/ella3.jpg";
import ella4 from "../../assets/ella4.jpg";
import ella5 from "../../assets/ella5.jpg";

function Ella() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="mirissa-hero"
        style={{ backgroundImage: `url(${ellaHero})` }}
        data-aos="fade-down"
      >
        <div className="overlay">
          <h1>Ella</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mirissa-container">
        {/* LEFT CONTENT */}
        <div className="mirissa-left" data-aos="fade-right">

          <h2>Ella</h2>
          <p>
            For nature lovers, adventure seekers,
            and those looking to unwind amidst breathtaking landscapes.
            Adams peak, nine arch & ravana fall are major attractions.
          </p>

          <p>
            Do you want to include Ella in your itinerary? If so, you've come to the right place.
            We are Captain Ceylon Tours, offering the best excursion tours for travellers coming to explore the beautiful Sri Lanka.
            Our tour packages in Ella cover the most beautiful and famous places in the city,
            including hiking, trekking, adventures, and excursions.
          </p>

          <div className="mirissa-gallery">
            <img src={ella1} alt="Mirissa View" />
            <img src={ella2} alt="Mirissa Beach" />
          </div>

          <p>
            Sri Lanka is home to many natural treasures and beautiful views and is considered one of the most beautiful islands in the world.
            For all types of visitors, there is much of interest to see and experience here.
            This tour is specially designed for nature lovers and visitors who enjoy exploring.
          </p>

          <h3>Visit Ella in Sri Lanka!</h3>
          <p>
            Ella is a small town in the Uva Province of Sri Lanka, rich and diverse.
            It belongs to the Badulla district, 225 kilometers from Colombo.
            Ella is an important railway station on the railway between Colombo and Badulla.
            The train journey from Kandy to Ella is an indispensable and fantastic experience in Sri Lanka.
            It is generally considered one of the best train journeys in the world.
            It is said that the period from January to March is the best time to visit Ella.
          </p>

          <p>
            Our guide will accompany you on a tour of the city of Ella,
            where you will receive valuable and useful information about this city and country.
          </p>

          <h2>The strengths of our city tour in Ella</h2>

          <p>
            When you are in Ella, there are some places that are "absolutely not to be missed," let's see which places you can visit and enjoy.
            Here are some of the main attractions we cover on this full-day trip:
          </p>

          <h3>Mount Adam's Peak</h3>
          <p>
            Your journey through Ella begins with a hike to Mount Adam's Peak. This is an opportunity to see the valley below in pure air.
            Ella is considered to be one of the places with the highest concentration of oxygen.
            Reaching the top takes about 45 minutes. During the ascent of Adam's Peak,
            you will encounter breath-taking landscapes with tea plantations and the beauty of the local villages.
          </p>

          <h3>The Nine Arches Bridge</h3>
          <p>
            This is a world-famous architectural masterpiece, hidden in the green and lush tea plantations of Ella.
            It is located on the outskirts of the city and is a must-see for anyone who comes to visit it.
            This is a masterfully built bridge that stands proudly in the green landscape of the island.
            Nine Arch is a place you must see during a day in Ella.
          </p>

          <h3>Diyaluma Falls</h3>
          <p>
            Diyaluma Falls is the second highest waterfall in Sri Lanka.
            This is a natural wonder, especially when viewed from above.
            Along the way, there are scattered puddles and ponds where you can even swim.
            The waterfall is located right on the outskirts of the city.
          </p>

          <h3>Ravana's Waterfall</h3>
          <p>
            Ravana's waterfall has become a popular stop for all visitors, including locals and foreign tourists.
            A short swim there will refresh you and prepare you for the next adventure.
            When you travel from Ella to Weligama, you will be greeted by waterfalls.
            The Ravana Falls is one of the places connected to the epic "Ramayana."
          </p>

          <h3>Ella Rock</h3>
          <p>
            If you are ready for a hike, Ella Rock will definitely satisfy you.
            This is a hike of about two hours, from the mountain top you can admire a fantastic panoramic view of the entire city.
          </p>

          <h3>Adventure Park Flying Lava</h3>
          <p>
            This is the perfect place for adventurers. You can participate in many adventure activities.
          </p>

          {/* EXTRA CONTENT FROM SCREENSHOT */}
          <div className="mirissa-extra" data-aos="fade-up">

            <div className="mirissa-top-gallery">
              <img src={ella3} alt="Mirissa View" />
              <img src={ella4} alt="Mirissa Beach" />
              <img src={ella5} alt="Mirissa Beach" />
            </div>

          </div>

          {/* ACTIVITIES SECTION */}
          <div className="mirissa-activities" data-aos="fade-up">

            <details className="activity-box" open>
              <summary>• Nature and Scenic Wonders</summary>

              <p>
                Explore the natural beauty of Ella through its iconic landmarks.
                Begin with a breathtaking hike to Adam’s Peak, enjoy the architectural marvel of the Nine Arches Bridge
                surrounded by lush tea plantations, and take in the grandeur of Diyaluma Falls.
                This part of the tour is perfect for those seeking serene landscapes and unforgettable views.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={require("../../assets/Adam's peak.png")} alt="Whale Watching" />
                  <p>Adam's peak</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Nine arch bridge view.png")} alt="Turtle Watching" />
                  <p>Nine arch bridge view</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Diyaluma Falls.png")} alt="Turtle Feeding" />
                  <p>Diyaluma Falls</p>
                </div>
              </div>

            </details>

            <details className="activity-box">
              <summary>• Historical and Cultural Exploration</summary>

              <p>
                Delve into Ella’s cultural and historical significance by visiting Ravana Falls, a site deeply intertwined with the Ramayana epic.
                Learn about its legendary past while enjoying a refreshing swim in its cool waters.
                This segment offers a blend of relaxation and cultural enrichment, giving visitors a deeper connection to Ella's history.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={require("../../assets/Ravana falls.png")} alt="Whale Watching" />
                  <p>Ravana falls</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Ravana cave.png")} alt="Turtle Watching" />
                  <p>Ravana cave</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Tea planters.png")} alt="Turtle Feeding" />
                  <p>Tea planters</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Adventure and Panoramic Views</summary>

              <p>
                For adventure enthusiasts, this segment includes a thrilling hike to Ella Rock for stunning panoramic views
                of the city and a visit to the Adventure Park Flying Lava for adrenaline-packed activities.
                Whether you love hiking or crave adventurous fun, this part promises excitement and unforgettable memories.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={require("../../assets/Mountain view ella.png")} alt="Whale Watching" />
                  <p>Mountain view ella</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Nine Arch Bridge View1.png")} alt="Turtle Watching" />
                  <p>Nine Arch Bridge View</p>
                </div>

                <div className="activity-card">
                  <img src={require("../../assets/Ella Rock View.png")} alt="Turtle Feeding" />
                  <p>Ella Rock View</p>
                </div>
              </div>
            </details>
          </div>

          <div className="mirissa-parrot-rock" data-aos="fade-up">

            <p>
              For all who love nature, this trip will fulfill your travel dreams.
              This is a rich feast for all nature lovers. Start with Adam mountain, Ella will offer you an unparalleled experience.
              Come on, enjoy the rich knowledge that our guide offers and the spectacular flora and fauna of the city.
              Make sure to breathe in as much fresh air as possible and take as many photos as you can.
              Don't miss this unique beauty.
            </p>

            <p>
              Don't miss this beautiful and unique city! This is about 4 to 5 hour tour.
            </p>

            <div className="parrot-gallery">
              <img src={require("../../assets/ella6.jpg")} alt="Parrot Rock Beach" />
              <img src={require("../../assets/ella7.jpg")} alt="Seafood Dish" />
            </div>

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

export default Ella;
