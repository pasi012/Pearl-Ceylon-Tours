import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";

function NuwaraEliya() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [imgHero, setImgHero] = useState("");

  // MAIN GALLERY
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");

  // EXTRA GALLERY
  const [n3, setN3] = useState("");
  const [n4, setN4] = useState("");
  const [n5, setN5] = useState("");

  const [hortonPlains, setHortonPlains] = useState("");
  const [moonPlains, setMoonPlains] = useState("");
  const [gregoryLake, setGregoryLake] = useState("");
  const [sitaTemple, setSitaTemple] = useState("");
  const [golfClub, setGolfClub] = useState("");
  const [victoriaPark, setVictoriaPark] = useState("");
  const [trainRides, settrainRides] = useState("");
  const [waterfalls, setWaterfalls] = useState("");
  const [ambewelaFarm, setAmbewelaFarm] = useState("");

  const [n6, setN6] = useState("");
  const [n7, setN7] = useState("");

  useEffect(() => {

    getDownloadURL(ref(storage, "nuwara-eliya-hero.jpg")).then(setImgHero);

    // TOP GALLERY
    getDownloadURL(ref(storage, "nuwaraEliya1.jpg")).then(setN1);
    getDownloadURL(ref(storage, "nuwaraEliya2.jpg")).then(setN2);

    // EXTRA GALLERY
    getDownloadURL(ref(storage, "nuwaraEliya3.jpg")).then(setN3);
    getDownloadURL(ref(storage, "nuwaraEliya4.jpg")).then(setN4);
    getDownloadURL(ref(storage, "nuwaraEliya5.jpg")).then(setN5);

    // ACTIVITIES – Nature
    getDownloadURL(ref(storage, "Horton Plains.png")).then(setHortonPlains);
    getDownloadURL(ref(storage, "Moon Plains.png")).then(setMoonPlains);
    getDownloadURL(ref(storage, "Gregory Lake.png")).then(setGregoryLake);
    getDownloadURL(ref(storage, "Sita Amman Temple.png")).then(setSitaTemple);
    getDownloadURL(ref(storage, "Golf Club.png")).then(setGolfClub);
    getDownloadURL(ref(storage, "Victoria Park.png")).then(setVictoriaPark);
    getDownloadURL(ref(storage, "Train rides.png")).then(settrainRides);
    getDownloadURL(ref(storage, "Waterfalls.png")).then(setWaterfalls);
    getDownloadURL(ref(storage, "Ambewela Farm.png")).then(setAmbewelaFarm);

    getDownloadURL(ref(storage, "nuwaraEliya6.jpg")).then(setN6);
    getDownloadURL(ref(storage, "nuwaraEliya7.jpg")).then(setN7);

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
          <h1>Nuwara Eliya</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mirissa-container">
        {/* LEFT CONTENT */}
        <div className="mirissa-left" data-aos="fade-right">

          <h2>Nuwara Eliya</h2>
          <p>
            Nuwara eliya is also called as Little England.
          </p>

          <h2>
            Main attractions in Nuwara Eliya:
          </h2>

          <h3>Climate:</h3>
          <p>
            Fresh and invigorating, similar to the European spring, making it an ideal refuge from the tropical heat.
          </p>

          <h3>Tea plantations:</h3>
          <p>
            Surrounded by hills with rolling tea plantations; excursions to places like the Pedro tea plantation are popular.
          </p>

          <h3>Colonial architecture:</h3>
          <p>
            : It has charming buildings inspired by the United Kingdom, including hotels, post offices, and clubs.
          </p>

          <h3>Nature and Adventure:</h3>
          <p>
            The site of Horton Plains National Park, Gregory Lake, and countless waterfalls.
          </p>

          <div className="mirissa-gallery">
            <img src={n1} alt="Nuwara Eliya" />
            <img src={n2} alt="Nuwara Eliya" />
          </div>

          <h3>Activities in nuwara eliya</h3>

          <ul className="mirissa-list">
            <li>Horton plains national park</li>
            <li>Train ride nuwara eliya ( Nanu Oya) to Ela</li>
            <li>Gregory lake</li>
            <li>Victoria park</li>
            <li>Hakgala botanical garden</li>
            <li>Ambewela farm</li>
            <li>Sethaamman temple</li>
            <li>Golf club</li>
            <li>Moon plains</li>
            <li>Pedro tea state</li>
            <li>Ramboda fall</li>
            <li>Damro Tea factory</li>
          </ul>

          {/* EXTRA CONTENT FROM SCREENSHOT */}
          <div className="mirissa-extra" data-aos="fade-up">

            <div className="mirissa-top-gallery">
              <img src={n3} alt="Nuwara Eliya" />
              <img src={n4} alt="Nuwara Eliya" />
              <img src={n5} alt="Nuwara Eliya" />
            </div>

            <h2>Horton plains national park</h2>

            <p>
              Horton Plains National Park is a UNESCO World Heritage Site in Sri Lanka,
              known for its unique biodiversity and stunning landscapes. Located in the central highlands,
              it includes grasslands, montane forests, and attractions such as World's End (a cliff with panoramic views),
              Baker's Falls, and Baken.
            </p>

            <p>
              In the park, there is a diversity of wildlife, including sambar deer, leopards, and many endemic bird species.
              The 9.5-kilometer loop offers an unforgettable hike through this calm and misty plateau.
              This is a must-visit place for nature lovers and tourists.
            </p>

            <h3>Highlights:</h3>

            <p>
              A world on the edge: A dramatic cliff at 870 meters that offers panoramic views over the valley below, especially charming during the clear morning hours.
            </p>

            <p>
              Baker falls: A picturesque waterfall surrounded by lush vegetation, accessible via panoramic trails.
            </p>

            <p>
              Flora and Fauna: Home to rare species, such as Sri Lanka's sambur deer, purple-faced langurs, and endemic birds.
            </p>

            <p>
              Trekking trails: Well-marked circular trails through prairies, misty forests, and foggy mountains.
            </p>

            <p>
              Climate and view: The cool and misty weather gives the park an ethereal charm.
            </p>

            <h3>Tips for the visit:</h3>

            <p>
              Arrive early (around 6:00 AM) to avoid fog that can obscure visibility.
            </p>

            <p>
              Put on comfortable shoes and bring warm clothes.
            </p>

            <p>
              It's better to explore the park on foot; motor vehicles are restricted inside.
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>Train ride nuwara eliya ( Nanu Oya) to Ela</h2>

            <p>
              This is one of the most scenic train journeys in the world.
              This journey will take you through green tea plantations, misty mountains, and charming villages,
              offering breathtaking views at every turn.
              The landscapes take your breath away: Wavy tea plantations, roaring waterfalls, and dense forests.
            </p>

            <p>
              Iconic bridges: Cross monuments like the Nine Arches Bridge near Ella.
            </p>

            <p>
              The landscapes are impressive: Tea plantations, roaring waterfalls, and dense forests.
            </p>

            <p>
              Fresh climate: The journey is refreshing thanks to the altitude and mountain breezes.
            </p>

            <p>
              Charming stations: Picturesque stops, such as Nanu Oya (on the way to Nuwara Eliya) and Demodara, enrich the experience.
            </p>

            <p>
              Local culture: Enjoy the lively atmosphere with vendors offering snacks like samosas and vadas.
            </p>

            <p>
              Travel tip: Duration: Approximately 3-4 hours. Photography: Have your camera ready; every turn reveals a new view.
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>Gregory lake</h2>

            <p>
              it is a beautiful lake located in the heart of Nuwara Eliya, Sri Lanka.
              It was created in 1873 during the British colonial period under the supervision of the British governor Sir William Gregory.
            </p>

            <h3>Here are some points:</h3>

            <p>
              Natural beauty: The lake is surrounded by green hills and offers a picturesque view.
              It is a popular spot for picnics and peaceful walks.
            </p>

            <p>
              Recreational activities: Visitors can enjoy various activities, such as boat trips, pony rides, and bike tours around the lake.
              There are also swan-shaped pedal boats for a fun and unique experience.
              Calm atmosphere: The calm waters and peaceful surroundings make this place an ideal spot to relax and find peace.
            </p>

            <p>
              Calm atmosphere: The calm waters and peaceful atmosphere make this place ideal for resting and finding peace
            </p>

            <p>
              Historical significance: The lake was originally a swamp and was flooded to create more land for the city's expansion.
            </p>

            <p>
              Horseback riding: Explore the lake's surroundings on horseback, a popular activity among visitors.
            </p>

            <p>
              Cool weather: The cold mountain climate enhances the charm of spending time by the lake.
            </p>

            <p>
              It is a wonderful place to visit if you find yourself in Nuwara Eliya, and it offers a combination of natural beauty and recreational opportunities.
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>Victoria park</h2>

            <p>
              Victoria Park, located in the heart of Nuwara Eliya, Sri Lanka,
              is one of the most beautiful and well-maintained city parks in the country.
              Named in honor of the 60th anniversary of Queen Victoria's reign in 1897,
              it is a favourite spot for both locals and tourists to enjoy the cool climate and the picturesque beauty of the mountainous region.
            </p>

            <h3>Highlights of Victoria Park:</h3>

            <p>
              Blooming: Known for its fantastic selection of flowers, especially during the blooming season. (March to May and August to September). There are roses, daisies, and various colorful flowers that create a lively atmosphere.
            </p>

            <p>
              Birdwatching: The park is home to many bird species, including some endemic ones, making it an ideal spot for birdwatchers.
            </p>

            <p>
              Recreational activities: Ideal for quiet walks, picnics, and photographs. The playground for children and the small attractions make it suitable for families.
            </p>

            <p>
              Natural environment: The picturesque paths, streams, and small bridges enhance the park's charm. The green vegetation and the cool climate make it a relaxing retreat.
            </p>

            <p>
              Historical significance: The park was initially used as a research site for exotic plants and was later transformed into a public garden.
            </p>

            <h3>Tips for the visit:</h3>

            <p>
              Best time to visit: In the morning or at dusk to enjoy a cooler climate and fewer people.
            </p>

            <p>
              Entrance: A reasonable fee is charged for both locals and tourists.
            </p>

            <p>
              Nearby attractions: Near Gregory Lake and the post office in Nuwara Eliya.
            </p>

            <p>
              Would you like tips on nearby places or seasonal attractions in the park?
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>Hakgala botanical garden</h2>

            <p>
              The Hakgala Botanical Garden, located near Nuwara Eliya, is one of the most beautiful gardens in Sri Lanka,
              known for its cool climate and vibrant floral compositions. Covering an area of 28 hectares,
              it offers an impressive collection of roses, orchids, ferns, and camellias, as well as exotic plants from around the world.
            </p>

            <p>
              The garden is part of the Hakgala Nature Reserve and offers picturesque views of the misty mountains and green landscapes.
              Its tranquil atmosphere makes it an ideal place to relax and photograph, attracting both nature lovers and tourists year-round.
            </p>

            <h3>Highlights of the Hakgala Botanical Garden:</h3>

            <p>
              Floral diversity: Known for its rose garden, orchids, and camellias.
              The seasonal flowers include warm flowers, such as dahlias and chrysanthemums.
            </p>

            <p>
              Historical significance: Initially founded in 1861 as a cinchona plantation (used for quinine production) and later transformed into a botanical garden.
            </p>

            <p>
              Mythological connection: Related to the legend of the Ramayana; it was supposed to be the pleasure garden of King Ravana, where they kept Sita devi.
            </p>

            <p>
              Cool climate: The high altitude and misty climate create a unique environment for a variety of temperate and subtropical plants.
            </p>

            <p>
              Panoramic beauty: Surrounded by the Hakgala mountain range and with views of rolling hills and valleys.
            </p>

            <p>
              Fauna: Frequent sightings of endemic birds and small animals, such as monkeys and squirrels.
            </p>

            <p>
              Tips for the visit: The best time to visit: from April to August, when most of the flowers are in full bloom.
            </p>

            <p>
              Duration: Spend 1 to 2 hours exploring the garden at a leisurely pace.
            </p>

            <p>
              Accessibility: The garden has well-maintained paths, but it is recommended to wear comfortable shoes for the uneven terrain.
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>Ambewela farm- Little New Zealand</h2>

            <p>
              The Ambevela farm, located near Nuwara Eliya, is often called "Little New Zealand" due to its green pastures,
              cool climate, and dairy production landscape.
              This is one of the most famous dairy farms in Sri Lanka and a popular tourist destination.
            </p>

            <h3>Highlights at Ambewela Farm:</h3>

            <p>
              Picturesque landscapes: Wavy green fields,
              cool breezes, and misty hills create a picturesque atmosphere. Perfect for photography and relaxation.
            </p>

            <p>
              Milk production: Known for the production of fresh milk, cheese, yogurt, and other dairy products.
              Visitors can observe modern methods of milk production and see how cows are milked.
            </p>

            <p>
              Fresh products: You can buy fresh dairy products directly from the farm, including milk and cheese.
            </p>

            <p>
              Interaction with animals: The farm has cows, calves, goats, and rabbits. Visitors, especially children, love to watch and interact with these animals.
            </p>

            <p>
              Tips for the visit: Best time to visit: Early in the morning or late in the evening for a pleasant climate and better agricultural activities.
            </p>

            <p>
              Duration: A typical visit lasts about 1-2 hours.
            </p>

            <p>
              Nearby attractions: Combine your visit with a trip to Horton Plains, Hakgala Botanical Garden, or the strawberry farm in this area.
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>Sethaamman temple</h2>

            <p>
              The Sita Amman Temple, also known as Sita Eliya Sita Amman Tirukovil, is an ancient Hindu Vaishnavite temple located in the Nuwara Eliya district of central Sri Lanka.
              The temple is closely associated with the Hindu epic Ramayana.
              According to legend, it was here that Ravana, the king of demons, held Sita, Lord Rama's wife, captive.
            </p>

            <h3>Highlights of seetha amman temple; Connection to the Ramayana:</h3>

            <p>
              The temple is dedicated to Sita, the wife of Lord Rama. According to legend,
              this is the place where King Ravana held Sita captive during her abduction.
              The nearest stream, according to legend, is the place where Sita bathed.
            </p>

            <h3>Holy footprint:</h3>

            <p>
              It is said that there are footprints related to Lord Hanuman in the rock by the stream.
            </p>

            <h3>Brilliant architecture:</h3>

            <p>
              The temple is adorned with vibrant Dravidian paintings and sculptures of Hindu gods, particularly Lord Rama, Sita, Lakshmana, and Hanuman.
            </p>

            <h3>Calm environment:</h3>

            <p>
              Hidden among the lush vegetation, the temple and its surroundings offer a peaceful environment for prayer and contemplation.
            </p>

            <h3>Cultural significance:</h3>

            <p>
              It is an important stop on the Ramayana trail in Sri Lanka, attracting pilgrims from India and other countries.
            </p>

            <h3>Tips for the visit:</h3>

            <p>
              Dress code: It is recommended to wear modest clothing that covers the shoulders and knees.
              Best time to visit: in the morning or afternoon for a calmer experience.
              Accessibility: The temple is easily accessible by car from the city of Nuwara Eliya.
              in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

            <h2>Golf club</h2>

            <p>
              Nuwara Eliya Golf Club is one of the oldest golf clubs in Sri Lanka, founded in 1889.
              Located in the heart of Nuwara Eliya, this historic club offers a picturesque golfing experience amidst greenery,
              the cool climate, and the impressive mountain views.
              It is a favorite spot for both professional golfers and visitors seeking relaxation in a tranquil environment.
            </p>

            <h3>Attractions of the Nuwara Eliya Golf Club:</h3>

            <h3>Rich history:</h3>

            <p>
              Created during the British colonial era, the club preserves its old-fashioned charm with colonial architecture
              and traditions. One of the oldest golf clubs in Asia.
              Beautiful course: 18-hole course that stretches over 6,399 yards,
              with fairways lined by tall trees and strategically placed bunkers to challenge the players.
              The high location adds a unique touch to the golfing experience.
              The club's services: Includes a cozy restaurant, bar, and lounge to relax after the match.
              Offers equipment rental for those who travel without their own gear.
              Captivating view: Surrounded by mist-covered hills, tea plantations, and the charming town of Nuwara Eliya,
              the club is as picturesque as it is relaxing. Accessibility: Open to members and non-members,
              making it convenient for tourists to enjoy the game.
              Tips for the visit: Reservations: It is recommended to make a reservation in advance,
              especially during peak season. (April-July). Dress code: Normally,
              a style of relaxed elegance is required on the golf course and in the clubhouse.
              The nearest attractions: close to Gregory Lake and Victoria Park,
              which facilitates the exploration of other attractions in Nuwara Eliya.
            </p>

            <h3>in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience.</h3>

            <h2>Moon plains</h2>

            <p>
              Also known as Sadathenna. Moon Plains is a picturesque mountain range located near Nuwara Eliya, Sri Lanka,
              known for its panoramic views and unique biodiversity. It is a relatively new ecotourism attraction and has quickly become popular among nature lovers and photographers. Previously, this area was used for potato cultivation, but it has been transformed into a sustainable ecological zone. Highlights in Moon Plains: 360-degree viewpoint (Mini World's End): Offers an impressive view of Sri Lanka's central mountains, including Piduruthalagala, Kirigalpotta, and Totapola. On clear days, you can even see the southern coast in the distance. Wildlife and biodiversity: Home to animals such as moose, deer, wild boar, and rare leopards. A fantastic place for birdwatching, with endemic and migratory birds often visiting this area. Tea plantations and grasslands: The green hills and lush landscapes create a picturesque atmosphere, perfect for resting or taking photos. Jeep safari: Visitors can explore the plains on a jeep safari with a guide who takes them to viewpoints and other prominent locations. Cool climate: The high altitude provides a pleasant and cool temperature year-round. Tips for the visit: Best time: The early morning hours for clear views and better chances to see wildlife.
              Duration: A typical visit lasts about 1-2 hours. Access: Located approximately 4 km from the town of Nuwara Eliya;
            </p>

            <h3>in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience.</h3>

            <h2>Pedro tea state</h2>

            <p>
              The Pedro Tea Estate, located approximately 3.5 km from the town of Nuwara Eliya, is a historic tea plantation and factory that offers visitors an insight into Sri Lanka's world-renowned tea industry. Surrounded by rolling hills and lush plantations, this estate is a must-visit for tea lovers and those interested in the production process.
            </p>

            <p>
              The factory was founded in 1885 and is a testament to the tea heritage from Sri Lanka's colonial era.
            </p>

            <p>
              Attractions at the Pedro Tea Plantation:
            </p>

            <p>
              once you visit ,you will learn the entire tea production process, from picking the leaves to drying, rolling, fermenting, and packaging.
            </p>

            <p>
              Observe the traditional methods of tea production that are still used today.
            </p>

            <p>
              Tastings: Enjoy the freshly brewed Ceylon tea and experience its unparalleled taste and aroma. Historical significance: Picturesque plantations: Walks through the picturesque tea plantations, often shrouded in mist, offer excellent opportunities for photography. Cool climate: The high altitude creates a refreshing atmosphere, perfect for exploration. Tips for the visit: Best time: Morning hours for the excursion and the observation of the workers who are actively picking the tea leaves. Duration: The visit usually takes 1 to 2 hours. Photography: Photography is usually not allowed inside the factory, but it is permitted in the surrounding fields. Main attractions nearby: Combine your visit with Gregory Lake, the Lovers Leap waterfall, or the Hakgala Botanical Garden.
            </p>

            <h3>in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience.</h3>

            <h2>Ramboda fall</h2>

            <p>
              The Ramboda waterfall is not only a beautiful natural wonder but also an important tourist attraction in the Nuwara Eliya region.
            </p>

            <p>
              Here are some of them: Picturesque views and photography Panoramic landscapes: The waterfalls are surrounded by green tea plantations and hills covered in mist, creating a picturesque environment, perfect for photography.
            </p>

            <p>
              Viewpoints: Around the waterfalls, there are several spots where visitors can enjoy the best views and take memorable photographs.
            </p>

            <p>
              Recreational activities Hiking and trekking: The area around Ramboda Falls offers several hiking trails and trekking opportunities, allowing visitors to explore the natural beauty of the region.
            </p>

            <p>
              Nature walks: Enjoy a peaceful walk through the surrounding forests and tea plantations, and soak in the atmosphere of tranquillity.
            </p>

            <p>
              Nearby attractions The Ramboda Tunnel: Just a few minutes from the waterfalls lies the Ramboda Tunnel, one of the longest tunnels in Sri Lanka, which is an interesting engineering marvel to admire.
            </p>

            <p>
              Tea plantations: The nearest tea plantations offer excursions where you can learn about tea production and enjoy fresh Ceylon tea.
            </p>

            <p>
              Local culture and history The region is rich in cultural history, with various local traditions and customs that visitors can get to know during their visit.
            </p>

            <p>
              The visit to Ramboda Falls offers a combination of natural beauty, recreational activities, and cultural experiences, making it an integral part of the journey in Sri Lanka.
              Whether you are an adventure seeker, a nature lover, or someone who wants to relax and enjoy the tranquility,
              Ramboda Falls offers something for everyone.
            </p>

            <p>
              Whether you're seeking adventure, love nature, or just want to relax and enjoy the tranquility, Ramboda Falls has something for everyone.
            </p>

            <p>
              In your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience.
            </p>

            <h2>Damro Tea factory</h2>

            <p>
              Damro tea factory, located in the mountainous regions of Sri Lanka, is a popular place for tea lovers and those interested in the tea production process.
            </p>

            <h3>Highlights from the Damro Tea Factory</h3>

            <p>
              Guided tour of the tea factory Offers guided tours that explain the entire tea production process, from picking to processing.
              Visitors can see the machines in action and learn about the classification of tea.
            </p>

            <p>
              Tea tasting Enjoy freshly brewed Ceylon tea and discover the flavors that have made Sri Lankan tea famous worldwide.
            </p>

            <p>
              Picturesque views The factory is surrounded by picturesque tea plantations with mountainous landscapes and misty views.
            </p>

            <p>
              Purchase of tea You can buy high-quality tea directly from the source, which guarantees its authenticity.
            </p>

            <p>
              Cultural understanding A surprising way to understand the history of tea and its significance for Sri Lanka's economy and culture.
            </p>

            <p>
              Convenient location It is often visited on the way to destinations such as Nuwara Eliya or Ramboda.
            </p>

            <p>
              Visiting the Damro tea factory offers an experience that is both educational and sensory, perfect for travellers exploring the tea plantations in Sri Lanka.
            </p>

            <p>
              You can include this destinations in your travel itinerary which we Pearl Ceylon Tours will give you unforgettable experience
            </p>

          </div>

          {/* ACTIVITIES SECTION */}
          <div className="mirissa-activities" data-aos="fade-up">

            <details className="activity-box" open>
              <summary>• Nature and Science Exploration</summary>

              <p>
                Discover Nuwara Eliya's breathtaking landscapes, from misty mountains to lush tea plantations. Iconic spots like Horton Plains, Moon Plains, and Gregory Lake offer captivating views and serene environments perfect for nature enthusiasts and photographers alike.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={hortonPlains} alt="Horton Plains" />
                  <p>Horton Plains</p>
                </div>

                <div className="activity-card">
                  <img src={moonPlains} alt="Moon Plains" />
                  <p>Moon Plains</p>
                </div>

                <div className="activity-card">
                  <img src={gregoryLake} alt="Gregory Lake" />
                  <p>Gregory Lake</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Cultural and Historical Landmarkes</summary>

              <p>
                Explore the cultural richness of Nuwara Eliya through attractions like the Sita Amman Temple, colonial-era Golf Club, and Victoria Park. These sites provide a blend of history, mythology, and architectural charm, reflecting the area’s unique heritage.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={sitaTemple} alt="Sita Amman Temple" />
                  <p>Sita Amman Temple</p>
                </div>

                <div className="activity-card">
                  <img src={golfClub} alt="Golf Club" />
                  <p>Golf Club</p>
                </div>

                <div className="activity-card">
                  <img src={victoriaPark} alt="Victoria Park" />
                  <p>Victoria Park</p>
                </div>
              </div>
            </details>

            <details className="activity-box">
              <summary>• Leisure and Adventure Activities</summary>

              <p>
                Engage in thrilling adventures and leisure pursuits. Enjoy scenic train rides, hike near waterfalls, visit Ambewela Farm, or take a boat ride on Gregory Lake. Nuwara Eliya caters to both relaxation seekers and adventure enthusiasts.
              </p>

              <div className="activity-gallery">
                <div className="activity-card">
                  <img src={trainRides} alt="Train Rides" />
                  <p>Train Rides</p>
                </div>

                <div className="activity-card">
                  <img src={waterfalls} alt="Waterfalls" />
                  <p>Waterfalls</p>
                </div>

                <div className="activity-card">
                  <img src={ambewelaFarm} alt="Turtle Feeding" />
                  <p>Ambewela Farm</p>
                </div>
              </div>
            </details>
          </div>

          {/* PARROT ROCK SECTION */}
          <div className="mirissa-parrot-rock" data-aos="fade-up">

            <div className="parrot-gallery">
              <img src={n6} alt="Parrot Rock Beach" />
              <img src={n7} alt="Seafood Dish" />
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

export default NuwaraEliya;
