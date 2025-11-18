import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import sigiriyaHero from "../../assets/sigiriya-hero.jpg";
import sigiriya1 from "../../assets/sigiriya1.jpg";
import sigiriya2 from "../../assets/sigiriya2.jpg";

import sigiriya3 from "../../assets/sigiriya3.jpg";
import sigiriya4 from "../../assets/sigiriya4.jpg";
import sigiriya5 from "../../assets/sigiriya5.jpg";
import sigiriya6 from "../../assets/sigiriya6.jpg";
import sigiriya7 from "../../assets/sigiriya7.jpg";
import sigiriya8 from "../../assets/sigiriya8.jpg";
import sigiriya9 from "../../assets/sigiriya9.jpg";
import sigiriya10 from "../../assets/sigiriya10.jpg";
import sigiriya11 from "../../assets/sigiriya11.jpg";
import sigiriya12 from "../../assets/sigiriya12.jpg";
import sigiriya13 from "../../assets/sigiriya13.jpg";
import sigiriya14 from "../../assets/sigiriya14.jpg";
import sigiriya15 from "../../assets/sigiriya15.jpg";
import sigiriya16 from "../../assets/sigiriya16.jpg";
import sigiriya17 from "../../assets/sigiriya17.jpg";

import surfing from "../../assets/Surfing.png";
import beginnerGuide from "../../assets/Beginner Guide.png";
import relaxing from "../../assets/Relaxing.png";


function Sigiriya() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="mirissa-hero"
        style={{ backgroundImage: `url(${sigiriyaHero})` }}
        data-aos="fade-down"
      >
        <div className="overlay">
          <h1>Sigiriya</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mirissa-container">
        {/* LEFT CONTENT */}
        <div className="mirissa-left" data-aos="fade-right">

          <h2>Sigiriya</h2>
          <p>
            City is a blend of history, culture, natural beauty & adventure & sigiriya rock fortress world 8th wonder.
          </p>

          <p>
            The city developed around the rock of Sigiriya, a royal fortress dating to the 5th century CE.
            King Kashyapa chose this area because of its strategic and aesthetic advantages.
          </p>

          <p>
            The atural beauty surrounded by green forests, rocky landscapes and lakes.
            It is also in close proximity to animal conservation areas such as the Minneriya National Park,
            famous for its elephant herds.
          </p>

          <div className="mirissa-gallery">
            <img src={sigiriya1} alt="Mirissa View" />
            <img src={sigiriya2} alt="Mirissa Beach" />
          </div>

          <h3>Sigiriya fortress</h3>
          <p>
            Home to ancient ruins, murals and gardens related to the Sigiriya fortress.
            Nearby, such places as the Piturangala rock offer alternative walks with an unforgettable view of Sigiriya.
          </p>

          <p>
            Sigiriya City is a blend of history, culture, and natural beauty,
            making it a must-visit destination for travelers exploring Sri Lanka.
          </p>

          <p>
            You can include this destinations in your travel itinerary which we Captain Ceylon Tours will give you unforgettable experience.
          </p>

          <h3>Routes to Coconut Tree Hill</h3>
          <ul className="mirissa-list">
            <li>Tour to Sigiriya Rock Fortress</li>
            <li>Safari Tour at Habarana Eco Park</li>
            <li>Minneriya National Park</li>
            <li>Kaudulla National Park</li>
            <li>Pidurangala Rock</li>
            <li>Dambulla Cave Temples</li>
            <li>Hiriwaduna village tour</li>
            <li>Pleasure island dambulla</li>
          </ul>

          {/* EXTRA CONTENT FROM SCREENSHOT */}
          <div className="mirissa-extra" data-aos="fade-up">

            <div className="mirissa-top-gallery">
              <img src={sigiriya3} alt="Surfing" />
              <img src={sigiriya4} alt="Snorkeling with Turtle" />
              <img src={sigiriya5} alt="Boat Fishing" />
            </div>

            <h3>Tour to Sigiriya Rock Fortress - The world 8th wonder</h3>

            <p>
              The Sigiriya Rock Fortress tour will offer you one of the most exciting experiences.
              We will ensure that you and/or your group receive a guide who can communicate effectively with you.
              The guide will also explain important knowledge and share the historical value of the place.
              If you need a guide who speaks a specific language, we can arrange it upon special request.
            </p>

            <h3>Introduction to Sigiriya</h3>

            <p>
              If you love history, art, nature, and culture,Adventure anyone can experience it all in Sigiriya.
              There are cultural sites and amazing historical monuments. The Sigiriya rock belongs to the second category.
              Because it is one of the most astonishing transformations of nature. This enormous rock fortress was once considered one of the seven wonders of the world.
              This is a symbol of world-famous architecture, with ancient technology, paintings, and a water supply system that still works today.
              This place is probably one of the most visited tourist destinations in Sri Lanka.
            </p>

            <h3>The history and formation of the kingdoms</h3>

            <p>
              The rocky hill was used as a monastery in the early 3rd century BC. Eventually,
              King Kashyapa ruled that fortress and built a palace at the top of the cliff.
              The technology used to build it remains one of the most astonishing discoveries.
              After the reign of the king, it became a monastery again and eventually remained so until it was abandoned.
            </p>

            <h3>The entrance to Sigiriya</h3>

            <p>
              The entrance to the castle is located at the northern end of the cliff,
              and the entire entrance is adorned with sculpted lion statues. This is where the name 'Sigiriya' originated,
              which means 'Lion Rock'. The lion's legs are intact, but the upper part of the body is destroyed.
            </p>

            <div className="mirissa-top-gallery">
              <img src={sigiriya6} alt="Surfing" />
              <img src={sigiriya7} alt="Snorkeling with Turtle" />
              <img src={sigiriya1} alt="Boat Fishing" />
            </div>

            <h3>Fresco: This is an amazing spectacle!</h3>

            <p>
              It is believed that the Sigiriya frescoes (powder paintings) represent the king's wife,
              concubines, or other women performing rituals and customs in the palace. Approximately eighteen paintings have survived to this day.
              These paintings show how women in antiquity lived, their hair adornments, and their pure beauty.
              This is an important symbol in the history of Sri Lanka.
            </p>

            <h3>Mirror, mirror, reflected on the wall, what is your best quality?</h3>

            <p>
              One of the most fantastic elements of Sigiriya is the mirror wall.
              It is so meticulously polished that the king can see himself in it. This is used for visitors to write poetry and scripts.
              The oldest inscription shows that this fortress has been used as a tourist site for over a thousand years.
            </p>

            <h3>The world's oldest landscape</h3>

            <p>
              On the western side of the mountain summit, there are ponds, a terrace-like dam, and designed gardens.
              Globally, the engineering of Sigiriya is considered one of the most complex techniques to date.
              The garden with a pond at the top of the cliff showcases an astonishing hydraulic system that pumped water to the top of the Sigiriya cliff.
            </p>

             <p>
              You can include sigiriya in your tour itinerary with Captain Ceylon Tours will give you unforgettable experience
            </p>

             <p>
              You can include this destinations in your travel itinerary which we Captain Ceylon Tours will give you unforgettable experience
            </p>

            <div className="mirissa-top-gallery">
              <img src={sigiriya8} alt="Surfing" />
              <img src={sigiriya9} alt="Snorkeling with Turtle" />
            </div>

            <h3>Safari Tour at Habarana Eco Park</h3>

            <p>
              The Habarana Ecological Park offers a peaceful and eco-friendly safari experience,
              ideal for nature lovers looking for a peaceful alternative to the large national parks.
            </p>

            <p>
              You have below activities in habarana ECO park
            </p>

            <p>
              This park is known for large herds of wild elephants, often seen at waterholes or grazing in open fields.
              Elephants often migrate between Minneriya, Kaudulla, and Habarana Eco Park, depending on the availability of water.
            </p>

            <p>
              Diverse wildlife- In addition to elephant the park is home to spotted deer,peacock, monkey & Various bird species
            </p>

            <h3>Natural beauty</h3>

            <p>
              The park's landscape includes forests, grasslands, and rocky uplands, creating a picturesque setting for nature lovers. Ecological experience:
            </p>

            <p>
              The practice of sustainable tourism, which aims to minimize interference with wildlife, is emphasized.
            </p>

            <div className="mirissa-top-gallery">
              <img src={sigiriya10} alt="Surfing" />
              <img src={sigiriya11} alt="Snorkeling with Turtle" />
              <img src={sigiriya12} alt="Snorkeling with Turtle" />
            </div>

            <h3>Minneriya National Park</h3>

            <p>
              Minneriya National Park is another popular tourist destination in Sri Lanka.
              This place is very popular due to the huge gathering of elephants. It belongs to Polonnaruwa District in North Central Province.
              Minneria National Park is home to many wild animals. It covers an area of 8, 889.4 hectares.
            </p>

            <h3>Elephants</h3>

            <p>
              Mineria is primarily known for its huge herds of elephants.
              In the dry season groups of 150-300 wild elephants gather.
              Elephants in the Matale, Polonnaruwa and Trincomalee districts migrate to the Minneriya National Park during the dry season.
              They gather around the Minneriya water body for food and water.
              Therefore, the period from May to September is considered the best time to visit this archive.
            </p>

            <h3>The place.</h3>

            <p>
              Mineria National Park is located 182 km from Colombo. m. It's far away. The journey to the city takes about four hours.
              It is about 105 km from Kandy. m. There's distance. It takes about three hours to get there.
              Google Maps will help you find the location. Dambulla, Sigiriya and Polonnaruwa are the most visited tourist destinations on the island.
              These places are located near the national park. Therefore, many of them never miss the opportunity to visit this place.
            </p>

            <h3>History</h3>

            <p>
              The Mineriya reservoir, or as the locals call it "Mineriya Veva," is an ancient construction.
              It was built by King Mahasena in the 3rd century AD. The purpose of this waterway is to provide water for rice cultivation.
              The surrounding forests were the main source of water for this stream.
              In addition, the Ambon River and the Elahera Canal supply water to the Minneriya Reservoir.
            </p>

            <p>
              In 1938, the reservoir and the surrounding forests were declared a nature reserve.
              It was declared a national park on August 12, 1997.
              The purpose of the declaration was to protect the reservoir and wildlife in the area.
            </p>

            <h3>Climate</h3>

            <p>
              Mineria National Park and surrounding areas receive an average annual rainfall of 1000-1500 mm.
              The average annual temperature is about 25-30 ° C. The northeast monsoon is the main rain source and is active from October to February.
              There is a distinct dry season from May to September.
            </p>

            <h3>Wildlife</h3>

            <p>
              There are 24 species of mammals, 1600 species of birds, 9 species of amphibians, 25 species of reptiles,
              26 species of fishes and 75 species of butterflies in Animalia Mineria National Park.
            </p>

            <p>
              Some of the birds that you can see here are the Sri Lankan bee, Sri Lankan parrots and the brown babayan.
              It is a paradise for domestic and migratory birds. Together with them, the Sri Lankan cheetah, the Sri Lankan sloth bear,
              S. R. I sambar, buffalo and two types of local monkeys can also be seen.
            </p>

            <p>
              Around this national park, there are many safari establishments.
            </p>

            <p>
              This is a national park that you must visit if you love the elephants and wildlife of Sri Lanka.
            </p>

            <p>
              If you like Sri Lankan elephants and wilderness, this is the national park to visit.
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Captain Ceylon Tours will give you unforgettable experience
            </p>

            <div className="mirissa-top-gallery">
              <img src={sigiriya13} alt="Surfing" />
              <img src={sigiriya14} alt="Snorkeling with Turtle" />
            </div>

            <h3>Kaudulla National Park</h3>

            <p>
              Sri Lankan elephants are the main attraction at Kaudulla National Park. From August to December,
              visitors can see large herds of elephants near Kautura Lake. They move in search of food and water.
              That season, the elephants also move to Minneriya National Park.This place is considered the largest gathering of elephants in Asia.
              Therefore, many elephant enthusiasts visit Kaudulla to witness this beautiful natural phenomenon.
            </p>

            <p>
              However, people visiting Koudulla can see Sri Lankan sambar deer, Sri Lankan Jungle Fowl,
              wild bear, sloth bear, and leopards. Here, many wildlife species inhabit the area,
              including 24 species of mammals, 160 species of birds, 9 species of amphibians,
              25 species of reptiles, 26 species of fish, and 25 species of butterflies.
            </p>

            <p>
              Kaudulla National Park is a newly established national park managed by the Sri Lanka Wildlife Conservation Authority.
              It is located 197 kilometers away from the capital, Colombo. It is located in the Polonnaruwa region.
              The nearest airport to access Kaudulla National Park by plane is 22 kilometers away.
              The nearest town is Habarana. Also, it is 39 kilometers away from the city of Polonnaruwa.
            </p>

            <p>
              Kudura National Park was designated as a national park in 2002. This is the 15th national park in the country,
              covering an area of nearly 6,900 hectares.
              Hurulu Eco Lodge and Miniria National Park are located near Kauthulla National Park.
            </p>

            <p>
              There is an average annual rainfall of 1500mm, and the average temperature is around 26 degrees Celsius.
              The period from November to February is considered the rainy season in this region.
              Therefore, September is considered the best month to visit Kaudulla National Park.
            </p>

            <p>
              A safari tour to Kaudulla is a wonderful experience for those who love Sri Lankan elephants.
              To enter the national park, you need to pay an entrance fee. This place is located near Sri Lanka's Cultural Triangle,
              so you can visit it during your trip to Anuradhapura, Polonnaruwa, or Sigiriya.
            </p>

            <div className="mirissa-top-gallery">
              <img src={sigiriya15} alt="Surfing" />
              <img src={sigiriya16} alt="Snorkeling with Turtle" />
              <img src={sigiriya17} alt="Snorkeling with Turtle" />
            </div>

            <h3>Activities in kaudulla</h3>

            <p>
              The safari takes place early in the morning or late in the evening.
              This is the best way to explore the park and observe wildlife.
            </p>

            <h3>Jeep Safaris:</h3>

            <p>
              This is very suitable for bird lovers because Kaudular attracts a large number of local and migratory birds.
            </p>

            <h3>Bird Watching:</h3>

            <p>
              This is very suitable for bird lovers because Kaudular attracts a large number of local and migratory birds.
            </p>

            <h3>Photography:</h3>

            <p>
              The combination of wildlife and natural beauty makes this place a paradise for photographers.
            </p>

            <h3>Visit Kaudulla Reservoir:</h3>

            <p>
              King Mahasen was build this ancient tank heart of the park provides a water source for wildlife and a scenic backdrop for safaris.
            </p>

            <h3>Observation of Lush Habitats:</h3>

            <p>
              You can include this destinations in your travel itinerary which we Captain Ceylon Tours will give you unforgettable experience.
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

export default Sigiriya;
