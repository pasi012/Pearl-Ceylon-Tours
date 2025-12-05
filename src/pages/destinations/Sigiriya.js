import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function Sigiriya() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [imgHero, setImgHero] = useState("");

  // MAIN GALLERY
  const [sigiriya1, setSigiriya1] = useState("");
  const [sigiriya2, setSigiriya2] = useState("");

  // EXTRA GALLERY (3 images)
  const [sigiriya3, setSigiriya3] = useState("");
  const [sigiriya4, setSigiriya4] = useState("");
  const [sigiriya5, setSigiriya5] = useState("");

  // SECOND EXTRA GALLERY
  const [sigiriya6, setSigiriya6] = useState("");
  const [sigiriya7, setSigiriya7] = useState("");

  // NATIONAL PARK GALLERY
  const [sigiriya8, setSigiriya8] = useState("");
  const [sigiriya9, setSigiriya9] = useState("");

  const [sigiriya10, setSigiriya10] = useState("");
  const [sigiriya11, setSigiriya11] = useState("");
  const [sigiriya12, setSigiriya12] = useState("");

  const [sigiriya13, setSigiriya13] = useState("");
  const [sigiriya14, setSigiriya14] = useState("");

  const [sigiriya15, setSigiriya15] = useState("");
  const [sigiriya16, setSigiriya16] = useState("");
  const [sigiriya17, setSigiriya17] = useState("");

  const [sigiriya18, setSigiriya18] = useState("");
  const [sigiriya19, setSigiriya19] = useState("");

  const [sigiriya20, setSigiriya20] = useState("");
  const [sigiriya21, setSigiriya21] = useState("");

  const [sigiriya22, setSigiriya22] = useState("");
  const [sigiriya23, setSigiriya23] = useState("");

  // ICONS
  const [naturalWaterSprings, setNaturalWaterSprings] = useState("");
  const [elephantRiding, setElephantRiding] = useState("");
  const [ancientPark, setAncientPark] = useState("");

  const [relaxingAtPleasureIsland, setRelaxingAtPleasureIsland] = useState("");
  const [boatRiding, setBoatRiding] = useState("");
  const [kandalamaLakeTankView, setKandalamaLakeTankView] = useState("");

  const [boatRideAcrossATranquilLake, setBoatRideAcrossATranquilLake] = useState("");
  const [experiencingTraditionalVillageLife, setExperiencingTraditionalVillageLife] = useState("");
  const [ancientOxCartRiding, setAncientOxCartRiding] = useState("");

  useEffect(() => {

    getDownloadURL(ref(storage, "sigiriya-hero.jpg")).then(setImgHero);

    // MAIN GALLERY
    getDownloadURL(ref(storage, "sigiriya1.jpg")).then(setSigiriya1);
    getDownloadURL(ref(storage, "sigiriya2.jpg")).then(setSigiriya2);

    // EXTRA GALLERY
    getDownloadURL(ref(storage, "sigiriya3.jpg")).then(setSigiriya3);
    getDownloadURL(ref(storage, "sigiriya4.jpg")).then(setSigiriya4);
    getDownloadURL(ref(storage, "sigiriya5.jpg")).then(setSigiriya5);

    // EXTRA GALLERY 2
    getDownloadURL(ref(storage, "sigiriya6.jpg")).then(setSigiriya6);
    getDownloadURL(ref(storage, "sigiriya7.jpg")).then(setSigiriya7);

    // NATIONAL PARK GALLERY
    getDownloadURL(ref(storage, "sigiriya8.jpg")).then(setSigiriya8);
    getDownloadURL(ref(storage, "sigiriya9.jpg")).then(setSigiriya9);

    getDownloadURL(ref(storage, "sigiriya10.jpg")).then(setSigiriya10);
    getDownloadURL(ref(storage, "sigiriya11.jpg")).then(setSigiriya11);
    getDownloadURL(ref(storage, "sigiriya12.jpg")).then(setSigiriya12);

    getDownloadURL(ref(storage, "sigiriya13.jpg")).then(setSigiriya13);
    getDownloadURL(ref(storage, "sigiriya14.jpg")).then(setSigiriya14);

    getDownloadURL(ref(storage, "sigiriya15.jpg")).then(setSigiriya15);
    getDownloadURL(ref(storage, "sigiriya16.jpg")).then(setSigiriya16);
    getDownloadURL(ref(storage, "sigiriya17.jpg")).then(setSigiriya17);

    getDownloadURL(ref(storage, "sigiriya18.jpg")).then(setSigiriya18);
    getDownloadURL(ref(storage, "sigiriya19.jpg")).then(setSigiriya19);

    getDownloadURL(ref(storage, "sigiriya20.jpg")).then(setSigiriya20);
    getDownloadURL(ref(storage, "sigiriya21.jpg")).then(setSigiriya21);

    getDownloadURL(ref(storage, "sigiriya22.jpg")).then(setSigiriya22);
    getDownloadURL(ref(storage, "sigiriya23.jpg")).then(setSigiriya23);

    // ICONS
    getDownloadURL(ref(storage, "Natural Water Springs.png")).then(setNaturalWaterSprings);
    getDownloadURL(ref(storage, "Elephant Riding.png")).then(setElephantRiding);
    getDownloadURL(ref(storage, "Ancient Park.png")).then(setAncientPark);

    getDownloadURL(ref(storage, "Relaxing At Pleasure Island.png")).then(setRelaxingAtPleasureIsland);
    getDownloadURL(ref(storage, "Boat Riding.png")).then(setBoatRiding);
    getDownloadURL(ref(storage, "Kandalama Lake Tank View.png")).then(setKandalamaLakeTankView);

    getDownloadURL(ref(storage, "Boat ride across a tranquil lake.png")).then(setBoatRideAcrossATranquilLake);
    getDownloadURL(ref(storage, "Experiencing traditional village life.png")).then(setExperiencingTraditionalVillageLife);
    getDownloadURL(ref(storage, "Ancient ox cart riding.png")).then(setAncientOxCartRiding);

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
            You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience.
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

            <h2>Tour to Sigiriya Rock Fortress - The world 8th wonder</h2>

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
              You can include sigiriya in your tour itinerary with Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <div className="mirissa-gallery">
              <img src={sigiriya8} alt="Surfing" />
              <img src={sigiriya9} alt="Snorkeling with Turtle" />
            </div>

            <h2>Safari Tour at Habarana Eco Park</h2>

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

            <h2>Minneriya National Park</h2>

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
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <div className="mirissa-gallery">
              <img src={sigiriya13} alt="Surfing" />
              <img src={sigiriya14} alt="Snorkeling with Turtle" />
            </div>

            <h2>Kaudulla National Park</h2>

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
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience.
            </p>

            <h2>Pidurangala Rock</h2>

            <p>
              Pidurangala is a popular tourist destination in Sri Lanka, known for its panoramic views and rich historical significance.
              This enormous rock is located near the famous Lion Rock fortress and often attracts tourists seeking a unique hiking experience.
            </p>

            <h3>Historical significance:</h3>

            <p>
              Pidulangara has a close connection with the history of Buddhism.
              This monument was the site of a monastery that, according to reports,
              was built during the reign of King Kashyapapa. (477–495 CE).
            </p>

            <p>
              Along the trail, you can see ancient caves and statues of the reclining Buddha, carved into the rocks.
            </p>

            <h3>Trekking trail:</h3>

            <p>
              The hike takes approximately 45 min to 1 hour, the difficulty is moderate, and near the top, there are steep rocky sections.
              The trail combines forest paths and rocky terrain.
            </p>

            <h3>Panoramic view:</h3>

            <p>
              At the top of the mountain, a fantastic 360-degree panoramic view opens up, including the perfect angle of the Lion Rock.
              Dawn and dusk are the best times to enjoy the magnificent landscapes.
            </p>

            <p>
              Pidurangala is less crowded and more accessible, offering a tranquil experience.
              If you explore the culture and natural beauties of Sri Lanka, this place is a must-visit!
            </p>

            <p>
              Many tourists choose to climb Pidurangala Mountain early in the morning to watch the sunrise, and it truly is a magical experience.
              If you have the opportunity to visit the Central Province of Sri Lanka, it is definitely worth it!
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience.
            </p>

            <div className="mirissa-gallery">
              <img src={sigiriya18} alt="Surfing" />
              <img src={sigiriya19} alt="Snorkeling with Turtle" />
            </div>

            <h2>Dambulla Cave Temples</h2>

            <p>
              The Dambulla Cave Temple, also known as the Golden Temple of Dambulla,
              is one of the most iconic cultural and religious sites in Sri Lanka. Located in the central province near Matale,
              it is a UNESCO World Heritage site and an important attraction in the cultural triangle of Sri Lanka.
            </p>

            <h3>Historical significance:</h3>

            <p>
              Since the 1st century B.C., the temple complex served as a refuge for King Valaagamba during his exile.
              When he regained the throne, he converted the caves into a temple.
              Over the centuries, successive kings added to this place, thus enriching its historical and artistic value.
            </p>

            <h3>Cave complex:</h3>

            <p>
              The temple consists of five caves, each of which is decorated with intricate murals and more than 150 statues of Buddha,
              as well as statues of Hindu gods and ancient kings.
              The frescoes, which cover an area of 2100 square meters, illustrate the life of Buddha, Buddhist mythology, and local history.
            </p>

            <h3>The architectural grandeur:</h3>

            <p>
              The caves are carved into a massive rock 160 meters above the surrounding plains, creating a tranquil and expressive atmosphere.
              The entrance is marked by a modern statue of the golden Buddha and a museum at the foot of the temple.
            </p>

            <h3>Spiritual and cultural value:</h3>

            <p>
              The place remains an active center of pilgrimage for Buddhists, with daily rituals and offerings.
            </p>

            <h3>Panoramic views:</h3>

            <p>
              The hilltop location offers stunning views of the surrounding landscape, including landmarks like Sigiriya Rock on clear days.
              Visiting the Dambulla Cave Temple offers a combination of spirituality, history, and artistic value,
              making it an unforgettable experience.
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience.
            </p>

            <h2>Hiriwaduna village tour</h2>

            <p>
              The village of Hirivaduwa is a charming town located near Habarana, in the heart of Sri Lanka's cultural triangle.
              It offers an authentic representation of traditional rural life in Sri Lanka and is a popular spot for ecotourism and cultural experiences.
            </p>

            <p>
              Join here once-in-a-lifetime opportunity to experience the nature and culture of a genuine Sri Lankan village during our 2.5-hour tour.
            </p>

            <h3>Bullok cart ride:</h3>

            <p>
              This 2.5-hour tour usually begins with an bullok cart ride through unused village paths to Hiriwadunna.
              The journey lasts between fifteen and twenty minutes and is pulled by two bulloks.
              The journey ends near Lake Hiriwadunna, where you can get off the cart and embark on a catamaran boat ride.
            </p>

            <h3>Catamaran boat ride:</h3>

            <p>
              Lake hirivadunna is a place for a catamaran ride. During the boat ride,
              you will be able to enjoy breath-taking views of the Sigiriya and Pidurangala rocks above the lake.
              You can also join the boatman if you want to help row. He may surprise you with his ingenuity and craftsmanship.
              A beautiful necklace for ladies and a hat for gentlemen.
              The excursion boat will finally dock at the small town on the other side of the coast.
            </p>

            <h3>Village house activity:</h3>

            <p>
              The typical daily schedule of an authentic rural family is evident.
              It is important to visit the garden where endemic vegetables are grown and the rice fields.
              Try to keep the animals away from the rice field by climbing up to the wooden hut next to the rice field,
              where the farmers spend the nights sleeping.
            </p>

            <p>
              A woman from the village, dressed in a traditional Sri Lankan sari and a hat, warmly greeted us with a kind smile and said: AYUBOWAN!.
            </p>

            <h3>Cooking demonstration:</h3>

            <p>
              She suggested a culinary demonstration of traditional Sri Lankan food in thirty-five minutes.
              Additionally, they can see how a woman from the village prepares roti or a traditional dish.
              She shows how to make a roof from coconut leaves and how to separate the rice seeds from the straw and husks using kulla and mirisgala. You can also taste these products.
              You can enjoy a simple and traditional dishes, prepared with vegetables picked by a farmer and a woman from the village.
            </p>

            <h3>Nature & wild life:</h3>

            <p>
              The natural areas around the village are rich in biodiversity, with the possibility of observing monkeys, birds, and other wildlife.
              The surroundings feature tropical flora and stunning sunsets over the lake.
            </p>

            <h3>Cultural immersion:</h3>

            <p>
              Hiriwaduna offers an understanding of the simplicity and sustainability of rural life in Sri Lanka, beyond the hustle and bustle of the city.
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <div className="mirissa-gallery">
              <img src={sigiriya20} alt="Surfing" />
              <img src={sigiriya21} alt="Snorkeling with Turtle" />
            </div>

            <h2>Pleasure island Dambulla</h2>

            <p>
              Located in the picturesque region of Dambulla, Sathutu Dupata, or Pleasure Island,
              is a piece of paradise that captures the essence of tranquility and adventure.
              This tourist attraction offers visitors the opportunity to relax among the lush greenary and the tranquil streams.
              When you set foot on the island, you are greeted by the gentle sounds of nature, making it an ideal place to relax or take a walk with the family.
              The place is known for its extensive recreational facilities, which are suitable for both thrill-seekers and those looking for a peaceful retreat.
              Families can enjoy picnics in designated areas or explore the diverse flora and fauna that thrive here.
            </p>

            <p>
              The island is particularly known for its exciting activities, such as boat trips, fishing, and bird watching, which offer a unique experience for nature lovers.
              The vibrant fauna, including colorful birds and playful monkeys, adds to the island's charm and makes it an ideal backdrop for both photography enthusiasts and nature lovers.
              Whether you want to exercise outdoors or just enjoy the sun, Sathutu Dupata or pleasure island caters to all preferences.
              The well-maintained trails and the island's amenities make navigation easy for visitors, enhancing the overall experience.
            </p>

            <p>
              Sathutu Dupatha is also an excellent place to try the local cuisine at the nearby restaurants,
              allowing you to enjoy the authentic flavors of Sri Lanka. The island is open every day from 7 AM to 7 PM,
              providing ample time to explore its wonders. When planning your visit, remember that weekends can be more crowded,
              making weekdays a quieter option for those who prefer a more peaceful atmosphere.
              For an unforgettable day surrounded by the beauty of nature, Sathutu Dupatha is a must-visit place in Dambulla.
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

          </div>

          {/* ACTIVITIES SECTION */}
          <div className="mirissa-activities" data-aos="fade-up">

            <h2>Popular Activities</h2>

            <details className="activity-box" open>
              <summary>• At the Sigiriya(ancient rock fortress)</summary>

              <p>
                Discover the majestic Sigiriya, where ancient wonders meet nature's beauty. Marvel at the natural water springs,
                stroll through the lush Sigiriya Park, and embrace the serenity of its historic grounds.
                Add a touch of adventure with elephant rides, immersing yourself in the breathtaking charm of this UNESCO World Heritage Site.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={naturalWaterSprings} alt="Surfing" />
                  <p>Natural Water Springs</p>
                </div>

                <div className="activity-card">
                  <img src={elephantRiding} alt="Beginner Guide" />
                  <p>Elephant Riding</p>
                </div>

                <div className="activity-card">
                  <img src={ancientPark} alt="Relaxing" />
                  <p>Ancient Park</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Dambulla city Kandalama and Pleasure island</summary>

              <p>
                Dambulla's Kandalama Lake, nestled amidst lush greenery, offers serene views and tranquil waters ideal for nature lovers.
                Nearby Pleasure Island features thrilling activities like kayaking, paddleboarding, and nature trails.
                Visitors can relax on the sandy shores, enjoy birdwatching, or savor a peaceful picnic, making it a perfect getaway for outdoor enthusiasts.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={relaxingAtPleasureIsland} alt="Relaxing At Pleasure Island" />
                  <p>Relaxing At Pleasure Island</p>
                </div>

                <div className="activity-card">
                  <img src={boatRiding} alt="Boat Riding" />
                  <p>Boat Riding</p>
                </div>

                <div className="activity-card">
                  <img src={kandalamaLakeTankView} alt="Kandalama Lake Tank View" />
                  <p>Kandalama Lake Tank View</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Hiriwadunna village tour and nature park</summary>

              <p>
                The Dambulla Hiriwadunna Village Tour offers a serene escape into nature, blending scenic beauty with cultural experiences.
                Enjoy a relaxing boat ride across a tranquil lake, surrounded by lush greenery.
                Experience traditional village life with a ride on an ancient ox cart, exploring the charm of rural Sri Lankan culture.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={boatRideAcrossATranquilLake} alt="Boat ride across a tranquil lake" />
                  <p>Boat ride across a tranquil lake</p>
                </div>

                <div className="activity-card">
                  <img src={experiencingTraditionalVillageLife} alt="Experiencing traditional village life" />
                  <p>Experiencing traditional village life</p>
                </div>

                <div className="activity-card">
                  <img src={ancientOxCartRiding} alt="Ancient ox cart riding" />
                  <p>Ancient ox cart riding</p>
                </div>
              </div>
            </details>

            <div className="mirissa-gallery">
              <img src={sigiriya22} alt="Surfing" />
              <img src={sigiriya23} alt="Snorkeling with Turtle" />
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

export default Sigiriya;
