import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function Polonnaruwa() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [imgHero, setImgHero] = useState("");

  // TOP GALLERY
  const [polonnaruwa1, setPolonnaruwa1] = useState("");
  const [polonnaruwa2, setPolonnaruwa2] = useState("");

  // EXTRA GALLERY
  const [polonnaruwa3, setPolonnaruwa3] = useState("");
  const [polonnaruwa4, setPolonnaruwa4] = useState("");
  const [polonnaruwa5, setPolonnaruwa5] = useState("");

  // ACTIVITIES IMAGES
  const [galWiharaya, setGalWiharaya] = useState("");
  const [sandakadaPahana, setSandakadaPahana] = useState("");
  const [galpotha, setGalpotha] = useState("");

  const [parakramaSamudra, setParakramaSamudra] = useState("");
  const [parakramaSystem, setParakramaSystem] = useState("");
  const [lotusPond, setLotusPond] = useState("");

  const [nataraja, setNataraja] = useState("");
  const [woodCrafts, setWoodCrafts] = useState("");
  const [artsCrafts, setArtsCrafts] = useState("");

  // PARROT ROCK SECTION
  const [polonnaruwa6, setPolonnaruwa6] = useState("");
  const [polonnaruwa7, setPolonnaruwa7] = useState("");

  useEffect(() => {

    getDownloadURL(ref(storage, "polonnaruwa-hero.jpg")).then(setImgHero);

    // TOP GALLERY
    getDownloadURL(ref(storage, "polonnaruwa1.jpg")).then(setPolonnaruwa1);
    getDownloadURL(ref(storage, "polonnaruwa2.jpg")).then(setPolonnaruwa2);

    // EXTRA GALLERY
    getDownloadURL(ref(storage, "polonnaruwa3.jpg")).then(setPolonnaruwa3);
    getDownloadURL(ref(storage, "polonnaruwa4.jpg")).then(setPolonnaruwa4);
    getDownloadURL(ref(storage, "polonnaruwa5.jpg")).then(setPolonnaruwa5);

    // ACTIVITIES (ANCIENT CITY)
    getDownloadURL(ref(storage, "Gal Wiharaya.png")).then(setGalWiharaya);
    getDownloadURL(ref(storage, "Sandakada Pahana.png")).then(setSandakadaPahana);
    getDownloadURL(ref(storage, "Galpoth (Rock Book).png")).then(setGalpotha);

    // IRRIGATION
    getDownloadURL(ref(storage, "Parakrama Samudra.png")).then(setParakramaSamudra);
    getDownloadURL(ref(storage, "Parakrama Samudra irrigation system.png")).then(setParakramaSystem);
    getDownloadURL(ref(storage, "Lotus Pond.png")).then(setLotusPond);

    // CRAFTS
    getDownloadURL(ref(storage, "Nataraja Statue.png")).then(setNataraja);
    getDownloadURL(ref(storage, "Wooden Crafts.png")).then(setWoodCrafts);
    getDownloadURL(ref(storage, "Arts and crafts.png")).then(setArtsCrafts);

    // PARROT ROCK SECTION
    getDownloadURL(ref(storage, "polonnaruwa6.jpg")).then(setPolonnaruwa6);
    getDownloadURL(ref(storage, "polonnaruwa7.jpg")).then(setPolonnaruwa7);
  }, []);

  return (
    <div className="destination-container">
      {/* HERO SECTION */}
      <section
        className="mirissa-hero"
        style={{ backgroundImage: `url(${imgHero})` }}
        data-aos="fade-down"
      >
        <div className="overlay">
          <h1>Polonnaruwa</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mirissa-container">
        {/* LEFT CONTENT */}
        <div className="mirissa-left" data-aos="fade-right">

          <h2>Polonnaruwa</h2>
          <p>
            UNESCO World Heritage with rich exploration of history, culture, and ancient architecture.
          </p>

          <p>
            The cultural triangle of Sri Lanka connects three cities: Anuradhapura, Polonnaruwa, and Kandy.
            This cultural triangle contains numerous historical and ancient sites.
            Polonnaruwa is an ancient city that is considered one of the eight UNESCO World Heritage Sites in Sri Lanka.
          </p>

          <div className="mirissa-gallery">
            <img src={polonnaruwa1} alt="Polonnaruwa View" />
            <img src={polonnaruwa2} alt="Polonnaruwa Temple" />
          </div>

          <p>
            It was recognized as the second oldest city in Sri Lanka, right after Anuradhapura.
            Polonnaruwa was a kingdom in the history of Sri Lanka that was ruled and administered by many kings.
            The two kingdoms differ mainly in that, unlike the kingdom of Anuradhapura,
            the kingdom of Polonnaruwa was influenced by many Hindu elements and was even ruled by some Tamil kings.
            This cultural city, in addition to Buddhist temples, also has many Hindu temples.
            This city is also known for its agriculture. There are many farmers.
          </p>

          <h3>Places to visit in Polonnaruwa</h3>

          <ul className="mirissa-list">
            <li>Ancient Ruins of the Royal Palace of King Parakramabahu</li>
            <li>Gal Vihara</li>
            <li>Lankatilaka Temple</li>
            <li>Lankarama</li>
            <li>Thuparama</li>
            <li>Pothgul Vihara</li>
            <li>Galpotha (Stone Book)</li>
            <li>Parakrama Samudra</li>
            <li>Local Markets and Craft Shops</li>
          </ul>

          {/* EXTRA CONTENT FROM SCREENSHOT */}
          <div className="mirissa-extra" data-aos="fade-up">

            <div className="mirissa-top-gallery">
              <img src={polonnaruwa3} alt="Image 1" />
              <img src={polonnaruwa4} alt="Image 2" />
              <img src={polonnaruwa5} alt="Image 3" />
            </div>

            <h3>Most of the tourists and visitors come to this place through Mirissa beach.</h3>

            <p>
              In Polonnaruwa, an important place is the ancient ruins of the royal palace of King Parakramabahu.
              Although you can see the ruins, they are a testament to great architecture and design.
            </p>

            <p>
              Another main attraction is "Galvihara," which consists of numerous beautiful Buddha statues and sculptures.
              It is a symbol of exceptional sculptural art. Additionally, in the city, there are several very important temples,
              stupas, and religious places, such as Lankatilaka Temple, Lankarama, Tupparamaya, and Pothgul Vihara.Galpota.
              Great Buddhist temple that reflects the religious importance of Polonnaruwa.
            </p>

            <p>
              Parakrama Bahu Samudra: Enjoy the peaceful view and learn about the ancient irrigation system.
              Great artificial reservoir, built by King Parakramabahu.
            </p>

            <p>
              Local markets or craft shops: Local markets or craft shops: End the day by visiting the souvenir shops and food stalls in the city of Polonnaruwa.
            </p>

            <p>
              Beautiful Sri Lanka, beautiful Polonnaruwa. You can include polonnaruwa in your tour itinerary.
              which consists of very informative and educational. On this day,
              you will learn about the various influences that the kingdom of Polonnaruwa has undergone,
              the names of the rulers, and the impact of agriculture.
              This is the perfect day trip for anyone who loves discovering new cultures and exploring history.
              Sri Lanka, in general, has a very rich history in the realms of kingdoms,
              agriculture, and civilization.This is about 4 to 5 hour tour.
            </p>

          </div>

          {/* ACTIVITIES SECTION */}
          <div className="mirissa-activities" data-aos="fade-up">

            <details className="activity-box" open>
              <summary>• Ancient Ruins of Second Capital in Sri Lanka</summary>

              <p>
                Polonnaruwa, the second capital of Sri Lanka, boasts magnificent ancient ruins, including King Parakramabahu's royal palace.
                These remnants highlight impressive architecture and cultural influence from both Buddhist and Hindu traditions,
                reflecting the city's historical significance and its role as a flourishing kingdom in Sri Lanka's rich heritage.
              </p>

              <div className="activity-gallery">
                <div className="activity-gallery">
                  <div className="activity-card">
                    <img src={galWiharaya} alt="Gal Wiharaya" />
                    <p>Gal Wiharaya</p>
                  </div>

                  <div className="activity-card">
                    <img src={sandakadaPahana} alt="Sandakada Pahana" />
                    <p>Sandakada Pahana</p>
                  </div>

                  <div className="activity-card">
                    <img src={galpotha} alt="Galpotha" />
                    <p>Galpoth (Rock Book)</p>
                  </div>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Irrigation System in Ancient Sri Lanka</summary>

              <p>
                Polonnaruwa showcases the ingenuity of ancient Sri Lankan engineering through its irrigation marvels.
                The Parakrama Samudra, a massive reservoir, demonstrates advanced water management techniques that supported agriculture and sustained the kingdom,
                symbolizing King Parakramabahu's vision that 'not even a drop of water should flow into the ocean unused.'
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={parakramaSamudra} alt="Parakrama Samudra" />
                  <p>Parakrama Samudra</p>
                </div>

                <div className="activity-card">
                  <img src={parakramaSystem} alt="Irrigation system" />
                  <p>Parakrama Samudra irrigation system</p>
                </div>

                <div className="activity-card">
                  <img src={lotusPond} alt="Lotus Pond" />
                  <p>Lotus Pond</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Local Hand Made Crafts</summary>

              <p>
                Polonnaruwa’s vibrant local markets offer unique handmade crafts that reflect the region's cultural richness.
                Traditional carvings, woven goods, and pottery exemplify the artisans' skills,
                providing visitors with beautiful souvenirs while supporting the preservation of Sri Lanka's artisanal heritage and showcasing its diverse cultural traditions.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={nataraja} alt="Nataraja" />
                  <p>Nataraja Statue</p>
                </div>

                <div className="activity-card">
                  <img src={woodCrafts} alt="Wood Crafts" />
                  <p>Wooden Crafts</p>
                </div>

                <div className="activity-card">
                  <img src={artsCrafts} alt="Arts and Crafts" />
                  <p>Arts and crafts</p>
                </div>
              </div>
            </details>
          </div>

          {/* PARROT ROCK SECTION */}
          <div className="mirissa-parrot-rock" data-aos="fade-up">

            <div className="parrot-gallery">
              <img src={polonnaruwa6} alt="Polonnaruwa Lake" />
              <img src={polonnaruwa7} alt="Polonnaruwa Village" />
            </div>

          </div>

        </div>

        {/* RIGHT INQUIRY FORM */}
        <div className="mirissa-form" data-aos="fade-left">
          <h3>Make an Inquiry</h3>

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
              📌 NEW TOUR INQUIRY

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
              const whatsappNumber = "94773562768"; // Your number
              const whatsappURL =
                "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

              window.open(whatsappURL, "_blank");

              // ✅ SEND EMAIL
              const mailto =
                "mailto:pearlceylontours01@gmail.com" +
                "?subject=" + encodeURIComponent("New Tour Inquiry") +
                "&body=" + encodeURIComponent(fullMessage);

              window.location.href = mailto;

              alert("✅ Your Inquiry Has Been Sent!");
            }}
          >
            <input name="name" type="text" placeholder="Name *" required />
            <input name="email" type="email" placeholder="Email Address *" required />

            <div className="phone-row">
              <input name="code" className="code" type="text" placeholder="Code" />
              <input name="phone" className="phone" type="text" placeholder="Phone Number *" required />
            </div>

            <select name="country" required>
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

            <select name="interest" required>
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

            <input name="adults" type="number" placeholder="No. of Adults *" required />
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
    </div>
  );
}

export default Polonnaruwa;
