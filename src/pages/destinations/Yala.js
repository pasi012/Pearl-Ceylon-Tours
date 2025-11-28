import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function Yala() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [imgHero, setImgHero] = useState("");

  // Top gallery
  const [yala1, setYala1] = useState("");
  const [yala2, setYala2] = useState("");

  // Extra gallery
  const [yala3, setYala3] = useState("");
  const [yala4, setYala4] = useState("");
  const [yala5, setYala5] = useState("");

  // Activity icons – Entering Yala
  const [bear, setBear] = useState("");
  const [dear, setDear] = useState("");
  const [adventure, setAdventure] = useState("");

  // Safari Adventure icons
  const [caption, setCaption] = useState("");
  const [caption1, setCaption1] = useState("");
  const [caption2, setCaption2] = useState("");

  // Coastal Area icons
  const [caption3, setCaption3] = useState("");
  const [caption4, setCaption4] = useState("");
  const [caption5, setCaption5] = useState("");

  // Final gallery
  const [yala6, setYala6] = useState("");
  const [yala7, setYala7] = useState("");

  useEffect(() => {

    getDownloadURL(ref(storage, "yala-hero.jpg")).then(setImgHero);

    // TOP GALLERY
    getDownloadURL(ref(storage, "yala1.jpg")).then(setYala1);
    getDownloadURL(ref(storage, "yala2.jpg")).then(setYala2);

    // EXTRA GALLERY
    getDownloadURL(ref(storage, "yala3.jpg")).then(setYala3);
    getDownloadURL(ref(storage, "yala4.jpg")).then(setYala4);
    getDownloadURL(ref(storage, "yala5.jpg")).then(setYala5);

    // ENTERING YALA
    getDownloadURL(ref(storage, "Sri Lanka Bear.png")).then(setBear);
    getDownloadURL(ref(storage, "Sri Lanka Dear.png")).then(setDear);
    getDownloadURL(ref(storage, "Maximum adventure.png")).then(setAdventure);

    // SAFARI ADVENTURE
    getDownloadURL(ref(storage, "caption.png")).then(setCaption);
    getDownloadURL(ref(storage, "caption1.png")).then(setCaption1);
    getDownloadURL(ref(storage, "caption2.png")).then(setCaption2);

    // COASTAL BELT
    getDownloadURL(ref(storage, "caption3.png")).then(setCaption3);
    getDownloadURL(ref(storage, "caption4.png")).then(setCaption4);
    getDownloadURL(ref(storage, "caption5.png")).then(setCaption5);

    // PARROT ROCK / FINAL SECTION
    getDownloadURL(ref(storage, "yala6.jpg")).then(setYala6);
    getDownloadURL(ref(storage, "yala7.jpg")).then(setYala7);

  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="mirissa-hero"
        style={{ backgroundImage: `url(${imgHero})` }}
        data-aos="fade-down"
      >
        <div className="overlay">
          <h1>Yala National Park</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mirissa-container">
        {/* LEFT CONTENT */}
        <div className="mirissa-left" data-aos="fade-right">

          <h2>Yala National Park</h2>
          <p>
            Yala National Park is one of Sri Lanka’s most popular wildlife destinations, known for its diverse ecosystems and abundant wildlife, including the elusive leopard.
          </p>

          <p>
            Yala is a renowned national park located in the southeast of Sri Lanka.
            It covers 979 square kilometers and is home to a variety of animals, including elephants, leopards, and a multitude of bird species.
            The park’s breathtaking scenery and rich biodiversity make it a must-visit destination for wildlife enthusiasts.
          </p>

          <div className="mirissa-gallery">
            <img src={yala1} alt="Yala View" />
            <img src={yala2} alt="Yala View" />
          </div>

          <p>
            A visit to Yala offers a unique opportunity to witness nature at its most raw.
            Visitors often embark on safaris to spot the park’s famous animals in their natural habitats.
            The experience of driving through the park, with the sounds of nature all around, is unforgettable.
            The park is also a key conservation area for the Sri Lankan leopard, one of the rarest wildcats in the world.
          </p>

          <ul className="mirissa-list">
            <li>Spot the elusive Sri Lankan leopard</li>
            <li>Explore the beautiful coastal areas of Yala</li>
            <li>Witness the herds of wild elephants</li>
            <li>Enjoy a guided safari experience</li>
          </ul>

          {/* EXTRA CONTENT FROM SCREENSHOT */}
          <div className="mirissa-extra" data-aos="fade-up">

            <div className="mirissa-top-gallery">
              <img src={yala3} alt="Yala View" />
              <img src={yala4} alt="Yala View" />
              <img src={yala5} alt="Yala View" />
            </div>

            <p>
              The park is divided into five blocks, each with its own unique ecosystem.
              Block I is the most popular for safaris and has the highest concentration of wildlife.
            </p>

            <p>
              Yala's coastal belt also offers a stunning view of the Indian Ocean,
              making it a perfect spot for photography and relaxation after a thrilling safari.
            </p>

          </div>

          {/* ACTIVITIES SECTION */}
          <div className="mirissa-activities" data-aos="fade-up">

            <details className="activity-box" open>
              <summary>• Entering Yala National Park</summary>

              <p>
                As you enter Yala, you will be greeted by the sight of dense forests, grasslands, and waterholes.
                The journey begins with a sense of anticipation as you spot your first glimpse of wildlife, such as deer or monkeys, along the road.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={bear} alt="Bear" />
                  <p>Sri Lanka Bear</p>
                </div>

                <div className="activity-card">
                  <img src={dear} alt="Dear" />
                  <p>Sri Lanka Dear</p>
                </div>

                <div className="activity-card">
                  <img src={adventure} alt="Adventure" />
                  <p>Maximum adventure</p>
                </div>
              </div>

            </details>

            <details className="activity-box">
              <summary>• The Safari Adventure</summary>

              <p>
                The real adventure begins as you embark on a safari. A guide will lead you through the park’s well-maintained trails,
                where you can spot elephants, crocodiles, and perhaps the legendary Sri Lankan leopard.
                The park’s varying landscapes – from forests to open plains – offer a range of habitats for different species.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={caption} alt="caption" />
                  <p>caption</p>
                </div>

                <div className="activity-card">
                  <img src={caption1} alt="caption" />
                  <p>caption</p>
                </div>

                <div className="activity-card">
                  <img src={caption2} alt="caption" />
                  <p>caption</p>
                </div>
              </div>

            </details>

            <details className="activity-box">
              <summary>• Exploring the Coastal Belt</summary>

              <p>
                After an exciting safari, the journey leads you to Yala’s coastal areas, where you can relax by the pristine beaches and observe seabirds and marine life.
                The sunset over the ocean provides the perfect end to your Yala adventure, offering stunning views and a peaceful atmosphere.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={caption3} alt="caption" />
                  <p>caption</p>
                </div>

                <div className="activity-card">
                  <img src={caption4} alt="caption" />
                  <p>caption</p>
                </div>

                <div className="activity-card">
                  <img src={caption5} alt="caption" />
                  <p>caption</p>
                </div>
              </div>
            </details>
          </div>

          {/* PARROT ROCK SECTION */}
          <div className="mirissa-parrot-rock" data-aos="fade-up">

            <div className="parrot-gallery">
              <img src={yala6} alt="Yala" />
              <img src={yala7} alt="Yala" />
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
    </>
  );
}

export default Yala;
