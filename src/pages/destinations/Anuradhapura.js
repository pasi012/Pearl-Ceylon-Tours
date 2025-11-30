import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function Anuradhapura() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  const [g3, setG3] = useState("");
  const [g4, setG4] = useState("");
  const [g5, setG5] = useState("");
  const [g6, setG6] = useState("");
  const [g7, setG7] = useState("");

  const [act1, setAct1] = useState("");
  const [act2, setAct2] = useState("");
  const [act3, setAct3] = useState("");
  const [act4, setAct4] = useState("");
  const [act5, setAct5] = useState("");
  const [act6, setAct6] = useState("");
  const [act7, setAct7] = useState("");
  const [act8, setAct8] = useState("");
  const [act9, setAct9] = useState("");

  const [imgHero, setImgHero] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "anuradhapura.jpg")).then(setImg1);
    getDownloadURL(ref(storage, "anuradhapura1.jpg")).then(setImg2);

    getDownloadURL(ref(storage, "anuradhapura2.jpg")).then(setG3);
    getDownloadURL(ref(storage, "anuradhapura3.jpg")).then(setG4);
    getDownloadURL(ref(storage, "anuradhapura4.jpg")).then(setG5);
    getDownloadURL(ref(storage, "anuradhapura5.jpg")).then(setG6);
    getDownloadURL(ref(storage, "anuradhapura6.jpg")).then(setG7);

    // Activity icons
    getDownloadURL(ref(storage, "Sri Maha Bodhi.png")).then(setAct1);
    getDownloadURL(ref(storage, "Ruwanwelisaya.png")).then(setAct2);
    getDownloadURL(ref(storage, "Abhayagiriya.png")).then(setAct3);

    getDownloadURL(ref(storage, "Sandakada Pahana.png")).then(setAct4);
    getDownloadURL(ref(storage, "Mura Gal.png")).then(setAct5);
    getDownloadURL(ref(storage, "Ancient Building Ruins.png")).then(setAct6);

    getDownloadURL(ref(storage, "Buddist Monks.png")).then(setAct7);
    getDownloadURL(ref(storage, "Tanks.png")).then(setAct8);
    getDownloadURL(ref(storage, "Buddist Paintings.png")).then(setAct9);

    getDownloadURL(ref(storage, "anuradhapura-hero.jpg")).then(setImgHero);
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
          <h1>Anuradhapura</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mirissa-container">
        {/* LEFT CONTENT */}
        <div className="mirissa-left" data-aos="fade-right">

          <h2>Anuradhapura</h2>
          <p>
            Anuradhapura, Sri Lanka's first capital and a UNESCO World Heritage Site, represents a fascinating journey through ancient history,
            Buddhist heritage and remarkable engineering achievements.
          </p>

          <p>
            Ourof Anuradhapura is specially designed to take you through the city and give you an unforgettable experience of its luxurious culture, pilgrimages and people.
            Anuradhapura is one of the largest cities today in terms of size &ancient ruins .You will get a mentor with excellent local knowledge and communication skills.
            Language guides can be provided on special request.
            For those who love culture and history, this is the perfect tour to enlighten their soul.
          </p>

          <div className="mirissa-top-gallery">
            <img src={img1} alt="View" />
            <img src={img2} alt="Beach" />
          </div>

          <p>
            Anuradhapura is one of the seven kingdoms in the history of Sri Lanka. It is the oldest, the largest and the most rich.
            In 377 BCE, it was declared a kingdom, and King Pandukabhaya made it prosperous.
            It is still considered the capital of the Central-North Province.
            This kingdom existed for 12 centuries until it was destroyed in the 10th century AD.
          </p>

          <div className="mirissa-top-gallery">
            <img src={g3} alt="" />
            <img src={g4} alt="" />
            <img src={g5} alt="" />
          </div>

          <p>
            There are eight significant symbols that represent Sri Lanka's connection with Buddhism, all of which are located in Anuradhapura, thus the collection is known as 'Atmasthana', which means 'eight holy places.' Each of them is associated with a unique story or story. Most of them were built by the kings who ruled the Anuradhapura Kingdom.
            You will visit all these places in our tour of the city of Anuradhapura.
          </p>

          <h3>Sri Maha Bodhi</h3>

          <p>
            That was 288 B.C. It is a BOO tree planted in.
            It is considered sacred as it is believed that Buddha attained enlightenment by meditating under this tree.
          </p>

          <h3>Ruanvelisaya</h3>

          <p>
            It is a "stupa" built by King Dutugamunu and is one of the largest stupas completed to date.
          </p>

          <h3>Thuparamaya</h3>

          <p>
            It is the oldest 'dagoba' in Sri Lanka and, probably, the oldest to be found in the world.
          </p>

          <h3>Lovamahapaya</h3>

          <p>
            The significance of this building is that the roof was once covered with bronze tiles.
          </p>

          <h3>Abahayagiri</h3>

          <p>
            It is one of the largest monasteries in Anuradhapura. It was a monastery with 5000 monks.
          </p>

          <h3>Jethawanaramaya</h3>

          <p>
            This holy place is a World Heritage Site when it can accommodate about 3000 monks. It is very similar to Abhyagiri.
          </p>

          <h3>Mirisawatiya</h3>

          <p>
            This stupa was built by King Tutukemun after conquering King Elara.
          </p>

          <h3>Lankaramaya</h3>

          <p>
            Built by King Valakamba during the reign of Anuradhapura, it is one of the eight sacred places in the city.
          </p>

          <p>
            There are many more places to see and enjoy. Join this day trip to see the major players in the history of Sri Lanka.
            Your love for culture will grow after seeing the wealth of the city.
          </p>

          <p>
            Please include Anuradhapura in your itinerary plan will give you unforgettable experience of its luxurious culture, pilgrimage.
          </p>

          {/* ACTIVITIES SECTION */}
          <div className="mirissa-activities" data-aos="fade-up">

            <details className="activity-box" open>
              <summary>• Religious and Pilgrimage Sites</summary>

              <p>
                Anuradhapura houses eight sacred Buddhist sites, including Sri Maha Bodhi, Ruwanwelisaya,
                and Thuparamaya. These spiritual landmarks symbolize Sri Lanka’s deep Buddhist roots and offer profound religious experiences.
                Each site is historically significant, built by ancient kings,
                making the city a key pilgrimage destination for Buddhist devotees and history enthusiasts.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={act1} alt="Sri Maha Bodhi" />
                  <p>Sri Maha Bodhi</p>
                </div>

                <div className="activity-card">
                  <img src={act2} alt="Ruwanwelisaya" />
                  <p>Ruwanwelisaya</p>
                </div>

                <div className="activity-card">
                  <img src={act3} alt="Abhayagiriya" />
                  <p>Abhayagiriya</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Historical and Archaeological Significance</summary>

              <p>
                Anuradhapura, Sri Lanka's first kingdom, showcases ancient ruins, monasteries, stupas, and engineering marvels.
                These structures reflect the grandeur and innovation of the Anuradhapura Kingdom.
                Visitors can explore 12 centuries of history, from advanced irrigation systems to bronze-tiled buildings,
                making it a treasure trove for historians and archaeology lovers.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={act4} alt="Sandakada Pahana" />
                  <p>Sandakada Pahana</p>
                </div>

                <div className="activity-card">
                  <img src={act5} alt="Mura Gal" />
                  <p>Mura Gala</p>
                </div>

                <div className="activity-card">
                  <img src={act6} alt="Ruins" />
                  <p>Ancient Building Ruins</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Cultural and Heritage Experience</summary>

              <p>
                Dive into Anuradhapura’s luxurious culture with guided tours led by local experts.
                Experience the traditions, stories, and architecture that defined this ancient kingdom.
                Visitors will gain a profound appreciation for Sri Lanka’s heritage while enjoying the city's vibrant atmosphere,
                making it an unforgettable cultural journey through time.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={act7} alt="Monks" />
                  <p>Buddist Monks</p>
                </div>

                <div className="activity-card">
                  <img src={act8} alt="Tanks" />
                  <p>Tanks</p>
                </div>

                <div className="activity-card">
                  <img src={act9} alt="Paintings" />
                  <p>Buddist Paintings</p>
                </div>
              </div>

            </details>

          </div>

          {/* PARROT ROCK SECTION */}
          <div className="mirissa-parrot-rock" data-aos="fade-up">

            <div className="parrot-gallery">
              <img src={g6} alt="Gallery 1" />
              <img src={g7} alt="Gallery 2" />
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
              const whatsappNumber = "94786086861"; // Your number
              const whatsappURL =
                "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(fullMessage);

              window.open(whatsappURL, "_blank");

              // ✅ SEND EMAIL
              const mailto =
                "mailto:s.a.pasindupiyushan@gmail.com" +
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

export default Anuradhapura;
