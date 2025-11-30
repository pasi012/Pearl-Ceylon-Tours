import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function Kandy() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [imgHero, setImgHero] = useState("");

  // Top images
  const [kandy1, setKandy1] = useState("");
  const [kandy2, setKandy2] = useState("");

  // Extra gallery
  const [kandy3, setKandy3] = useState("");
  const [kandy4, setKandy4] = useState("");
  const [kandy5, setKandy5] = useState("");

  // Activity icons
  const [act1, setAct1] = useState("");
  const [act2, setAct2] = useState("");
  const [act3, setAct3] = useState("");
  const [act4, setAct4] = useState("");
  const [act5, setAct5] = useState("");
  const [act6, setAct6] = useState("");
  const [act7, setAct7] = useState("");
  const [act8, setAct8] = useState("");
  const [act9, setAct9] = useState("");

  // Bottom gallery
  const [kandy6, setKandy6] = useState("");
  const [kandy7, setKandy7] = useState("");

  useEffect(() => {

    getDownloadURL(ref(storage, "kandy-hero.jpg")).then(setImgHero);

    // TOP GALLERY
    getDownloadURL(ref(storage, "kandy1.jpg")).then(setKandy1);
    getDownloadURL(ref(storage, "kandy2.jpg")).then(setKandy2);

    // EXTRA GALLERY
    getDownloadURL(ref(storage, "kandy3.jpg")).then(setKandy3);
    getDownloadURL(ref(storage, "kandy4.jpg")).then(setKandy4);
    getDownloadURL(ref(storage, "kandy5.jpg")).then(setKandy5);

    // ACTIVITY IMAGES
    getDownloadURL(ref(storage, "Temple of the Tooth.png")).then(setAct1);
    getDownloadURL(ref(storage, "Kandyan dance.png")).then(setAct2);
    getDownloadURL(ref(storage, "Kandy Lake.png")).then(setAct3);
    getDownloadURL(ref(storage, "Peradeniya Botanical Garden.png")).then(setAct4);
    getDownloadURL(ref(storage, "Udawattakele Forest Reserve.png")).then(setAct5);
    getDownloadURL(ref(storage, "Picturesque landscapes.png")).then(setAct6);
    getDownloadURL(ref(storage, "Hanthana Bird Park.png")).then(setAct7);
    getDownloadURL(ref(storage, "Unwinding amidst scenic views.png")).then(setAct8);
    getDownloadURL(ref(storage, "Cool climate.png")).then(setAct9);

    // BOTTOM GALLERY
    getDownloadURL(ref(storage, "kandy6.jpg")).then(setKandy6);
    getDownloadURL(ref(storage, "kandy7.jpg")).then(setKandy7);

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
          <h1>Kandy</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mirissa-container">
        {/* LEFT CONTENT */}
        <div className="mirissa-left" data-aos="fade-right">

          <h2>Kandy</h2>
          <p>
            Kandy is a city located withing the culture triangle vibrant city renowed for its culture heritage,sceni beauty & its religious significant.
          </p>

          <div className="mirissa-gallery">
            <img src={kandy1} alt="Mirissa View" />
            <img src={kandy2} alt="Mirissa View" />
          </div>

          <p>
            Kandy is a UNESCO word heritage city.
          </p>

          <h2>Main tourist attractions in kandy world heritage city</h2>

          <ul className="mirissa-list">
            <li>Temple of tooth</li>
            <li>Kandyan culture shore</li>
            <li>Peradeniya botanical garden</li>
            <li>Udawaththa kale forest reserve</li>
            <li>Kandy lake</li>
            <li>Hanthana bird park</li>
          </ul>

          {/* EXTRA CONTENT FROM SCREENSHOT */}
          <div className="mirissa-extra" data-aos="fade-up">

            <div className="mirissa-top-gallery">
              <img src={kandy3} alt="Mirissa View" />
              <img src={kandy4} alt="Mirissa View" />
              <img src={kandy5} alt="Mirissa View" />
            </div>

            <h2>Temple of The Tooth</h2>

            <p>
              The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) in Kandy is one of the most revered Buddhist sites in Sri Lanka and a UNESCO World Heritage Site.
              It houses the Buddha's tooth relic, which has immense spiritual significance and has influenced Sri Lanka's history and culture through the centuries.
            </p>

            <h3>Relics of the Holy Tooth</h3>

            <p>
              Engraved in a golden box, the relic is kept in the temple's inner sanctum.
              Even though visitors cannot see the relic itself, the box is displayed during the religious ceremonies.
            </p>

            <h3>Architectural grandeur</h3>

            <p>
              The temple features traditional Sinhalese architecture with intricate woodwork, paintings, and golden decorations.
              The octagonal Pattirippuva, which was originally used by royalty, is a prominent feature in the temple complex.
            </p>

            <p>
              The salad perahara is held annually in the month of August & grand procession honors the Tooth Relic with live cultural performances,
              including traditional drumming, dances, and elephants adorned with exquisite decorations.
            </p>

            <h3>Daily rituals (Thevava)</h3>

            <p>
              The temple performs three daily worships: morning, noon, and evening rituals, during which offerings are made to the relics, accompanied by drumming and singing.
            </p>

            <h3>The temple complex</h3>

            <p>
              The complex includes a museum that displays items related to the relic and Kandy's history. Kandy Lake, which is located nearby, contributes to the serene atmosphere of this place.
            </p>

            <h3>Historical significance</h3>

            <p>
              The relic symbolized royal power in Sri Lanka for centuries. The protection of this relic was one of the primary responsibilities of the monarchs.
            </p>

            <h3>Historical significance</h3>

            <ul className="mirissa-list">
              <li>Dress code: Modest clothing that covers shoulders and knees is required.</li>
              <li>Best time to visit: Early in the morning or in the afternoon during the rituals for a more spiritual experience.</li>
              <li>Photography: Allowed outside the inner sanctum, but respect the sacred atmosphere.</li>
            </ul>

            <h2>You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience</h2>

            <h3>kandyan culture show</h3>

            <p>
              Kandy is famous for its rich cultural heritage and traditional dances, which are a major attraction for tourists.
              The Kandyan dance (Udarata Natum) is the highlight, deeply rooted in Sri Lanka's history and traditions.
              Here is a brief summary of how it is presented to tourists.
            </p>

            <h3>Key features of Kandy dance for tourists:</h3>

            <ul className="mirissa-list">
              <li>Performances in cultural shows: Regular performances are held at cultural centers in Kandy, such as in the Kandy Arts Association hall.</li>
              <li>Traditional attire: The dancers wear ornate costumes in bright colors, metal breastplates, and headdresses.</li>
              <li>Drumming and music: Accompanied by traditional drums, like Geta Bera. The rhythms enhance the impression.</li>
              <li>Fire Walking : Many performances end with an exciting fire walking act.</li>
              <li>Legend: Each dance narrates popular legends or religious stories from Buddhist traditions and provides cultural understanding.</li>
            </ul>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>PERADENIYA BOTANICAL GARDEN</h2>

            <p>
              The Peradeniya Botanical Garden is located near Kandy, Sri Lanka, and is one of the largest and most well-known botanical gardens in the country.
              Covering an area of 147 acres, it houses an extensive collection of tropical plants, including rare orchids, palm trees, and medicinal plants.
              In the garden, there is also a Royal Palm Avenue, a tropical greenhouse, and a gigantic Java fig tree.
              It is a popular place for both tourists and locals, offering a tranquil environment to explore nature and enjoy its beauty.
            </p>

            <p>
              Inside the garden we will taking you orchid house, Avenida de Palmas, Large Java Fig Tree,Medicinal garden,historical trees,bird watching & Diverse Plant Collection
            </p>

            <h2>Main features here in peradeniya botanical garden as below.</h2>

            <p>
              1. The Orchid House: It has more than 300 species of living and rare orchids.
            </p>

            <p>
              2. Avenida de Palmas: Famous avenues with tall palm trees, perfect for photographs.
              Avenida de las Palmas: Famous avenues with tall palm trees, perfect for photographs.
            </p>

            <p>
              3. Large Java Fig Tree: A tree with a wide crown, perfect for picnics.
            </p>

            <p>
              4. Medicinal garden: Shows the rich Ayurvedic heritage of the island.
            </p>

            <p>
              5. Historical trees; Some trees were planted by prominent individuals, including the British royal family and world leaders.
            </p>

            <p>
              6. Birdwatching: Observe birds with bright colors, such as grebes and parrots.
            </p>

            <p>
              7. Diverse Plant Collection: The garden houses more than 4000 plant species, including orchids, spices, medicinal plants, and palms.
            </p>

            <p>
              8. Historical significance: The place has a rich history that dates back to the 1800s and was originally used for the cultivation of coffee and cinnamon.
            </p>

            <p>
              9. Picturesque beauty: Surrounded by the Mahaweli River, the gardens offer a picturesque setting with luxurious green areas and enchanting landscapes. Picturesque Beauty: Surrounded by the Mahaweli River, the gardens offer a picturesque environment with luxurious green areas and enchanting landscapes.
            </p>

            <p>
              10. National Herbarium: Related to gardens, in Sri Lanka, there is the national herbarium, which houses an extensive collection of plant specimens.
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>Udawaththakalee Forest reserve</h2>

            <p>
              The Udawatta Kele forest area, located near Kandy, is a reserve of great historical and ecological significance. It served as a royal forest for the Kandy kings and is now a popular spot for nature lovers, historians, and ornithologists.
            </p>

            <p>
              1. Biodiversity: Home to a diverse flora and fauna, including rare birds, reptiles, and mammals.
            </p>

            <p>
              2. The trails are picturesque: Picturesque trails: Well-maintained through dense forests, ideal for trekking and leisurely walks. Picturesque trails: Well-maintained paths through dense forests, perfect for trekking and leisurely walks.
            </p>

            <p>
              3. Historical sites: Historical sites: Includes Buddhist monasteries and ancient meditation caves.
            </p>

            <p>
              4. View from the viewpoint: View from the viewpoint: The highest trails offer impressive views of the city of Kandy and its surroundings.
            </p>

            <p>
              5. Educational value: Excellent for studying the local eco systems in Sri Lanka and the efforts You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>Kandy lake</h2>

            <p>
              Kandy Lake, also known as the Sea of Milk (Kiri Muhuda),
              is a tranquil artificial lake in the heart of the city of Kandy,
              created in 1807 by King Sri Vikrama Rajasinghe.
              This place is popular among both locals and tourists due to its beauty and historical significance.
            </p>

            <h3>Main attractions in kandy lake</h3>

            <p>
              1.Picturesque walks: A cobblestone path surrounds the lake,
              perfect for peaceful walks with views of the water and the surrounding hills.
              Picturesque walks: A cobblestone path surrounds the lake,
              perfect for leisurely walks with views of the water and the surrounding hills.
            </p>

            <p>
              2. Island in the lake: Small island with legends that it was a royal harem or a place for storing royal treasures.
              Island in the lake: Small island with legends that it was a royal harem or a place for storing royal treasures.
            </p>

            <p>
              3. Historical monuments: Includes the Valakulu Wall, a decorative stone wall built by the king.
            </p>

            <p>
              4. Biological diversity: Home to various fish, birds, and, sometimes, lizards.
            </p>

            <p>
              5. Night views: The lake and its surroundings are beautifully illuminated, creating a calm atmosphere.
            </p>

            <h3>You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience</h3>

            <h2>Hanthana Bird park</h2>

            <p>
              Hantana Bird Park, located in the Hantana area near Kandy, Sri Lanka, is a peaceful retreat dedicated to the conservation and exhibition of a wide variety of bird species.
              It is the perfect place for bird lovers, nature enthusiasts, and families seeking an educational and relaxing experience.
            </p>

            <h3>Wide variety of birds:</h3>

            <p>
              Home to exotic, endemic, and migratory bird species. Includes peacocks, parrots, eagles, owls, and many others, showcasing the diversity of birdlife.
            </p>

            <h3>Interactive experiences:</h3>

            <p>
              Visitors can observe the birds up close and, in some cases, interact with them in specially designated areas.
            </p>

            <h3>Beautiful landscapes:</h3>

            <p>
              The park is located in the center of a green area with well-maintained walkways and a picturesque view of the Hantana hills.
            </p>

            <h3>Educational opportunities:</h3>

            <p>
              Offers an understanding of bird behavior, their habitats, and conservation efforts. Ideal for children and for anyone interested in birds.
            </p>

            <h3>Relaxing atmosphere:</h3>

            <p>
              The calm atmosphere and the cool climate make this place ideal for resting in nature.
            </p>

            <h3>Tips for the visit:</h3>

            <p>
              Best time: Early in the morning or late in the evening, to enjoy the cool weather and the birds' more active behavior.
            </p>

            <p>
              Duration: Spend 2-3 hours for a thorough visit.
            </p>

            <p>
              Accessibility: Easily accessible from the city of Kandy, about 10-15 minutes by car.
            </p>

          </div>

          {/* ACTIVITIES SECTION */}
          <div className="mirissa-activities" data-aos="fade-up">

            <h2>You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience</h2>

            <details className="activity-box" open>
              <summary>• Cultural Experiences</summary>

              <p>
                Kandy offers an enriching cultural journey with the iconic Temple of the Tooth, a revered Buddhist site,
                and vibrant Kandyan dance performances showcasing traditional music, colorful costumes, and captivating legends.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={act1} alt="Whale Watching" />
                  <p>Temple of the Tooth</p>
                </div>

                <div className="activity-card">
                  <img src={act2} alt="Turtle Watching" />
                  <p>Kandyan dance</p>
                </div>

                <div className="activity-card">
                  <img src={act3} alt="Turtle Feeding" />
                  <p>Kandy Lake</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Nature Escapes</summary>

              <p>
                Immerse yourself in nature at the Peradeniya Botanical Garden's vast greenery and Udawattakele Forest Reserve's serene trails,
                where diverse flora, fauna, and picturesque landscapes create a peaceful retreat from city life.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={act4} alt="Whale Watching" />
                  <p>Peradeniya Botanical Garden</p>
                </div>

                <div className="activity-card">
                  <img src={act5} alt="Turtle Watching" />
                  <p>Udawattakele Forest Reserve</p>
                </div>

                <div className="activity-card">
                  <img src={act6} alt="Turtle Feeding" />
                  <p>Picturesque landscapes</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Leisure and Relaxation</summary>

              <p>
                Kandy Lake’s tranquil waters and Hanthana Bird Park’s lush greenery offer perfect settings for leisurely walks, birdwatching, and unwinding amidst scenic views and the region’s calming, cool climate.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={act7} alt="Whale Watching" />
                  <p>Hanthana Bird Park</p>
                </div>

                <div className="activity-card">
                  <img src={act8} alt="Turtle Watching" />
                  <p>Unwinding amidst scenic views</p>
                </div>

                <div className="activity-card">
                  <img src={act9} alt="Turtle Feeding" />
                  <p>Cool climate</p>
                </div>
              </div>
            </details>
          </div>

          {/* PARROT ROCK SECTION */}
          <div className="mirissa-parrot-rock" data-aos="fade-up">

            <div className="parrot-gallery">
              <img src={kandy6} alt="Parrot Rock Beach" />
              <img src={kandy7} alt="Seafood Dish" />
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

export default Kandy;
