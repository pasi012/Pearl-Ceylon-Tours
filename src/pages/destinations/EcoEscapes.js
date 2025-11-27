import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/Mirissa.css";

import ecoEscapesHero from "../../assets/ecoEscapes-hero.jpg";

function EcoEscapes() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="mirissa-hero"
        style={{ backgroundImage: `url(${ecoEscapesHero})` }}
        data-aos="fade-down"
      >
        <div className="overlay">
          <h1>Eco Escapes</h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mirissa-container">
        {/* LEFT CONTENT */}
        <div className="mirissa-left" data-aos="fade-right">

          <h2>Eco Escapes</h2>

          <h3>Exploring Sri Lanka's Natural Wonders</h3>
          <p>
            Discover Sri Lanka's breathtaking biodiversity with Eco Escapes, offering serene forests, pristine rivers,
            stunning coastlines, and vibrant wildlife. Immerse yourself in nature at these 18 remarkable destinations:
          </p>

          <ul className="mirissa-list">
            <li>Sinharaja Forest Reserve</li>
            <li>Yala National Park</li>
            <li>Udawalawe National Park</li>
            <li>Knuckles Mountain Range</li>
            <li>Horton Plains National Park</li>
            <li>Madu Ganga River Safari</li>
            <li>Wilpattu National Park</li>
            <li>Minneriya National Park</li>
            <li>Bundala National Park</li>
            <li>Mirissa</li>
            <li>Kalpitiya</li>
            <li>Gal Oya National Park</li>
            <li>Udawaththa Kele Forest Reserve</li>
            <li>Pigeon Island</li>
            <li>Pidurangala Rock</li>
            <li>Muthurajawela Wetland</li>
            <li>Kumana National Park</li>
          </ul>

          <div className="mirissa-gallery">
            <img src={require("../../assets/ecoEscapesHero1.jpg")} alt="Mirissa View" />
            <img src={require("../../assets/ecoEscapesHero2.jpg")} alt="Mirissa Beach" />
          </div>

          <h2>Sinharaja Forest Reserve</h2>
          <p>
            A UNESCO World Heritage lush greenery sinharaja forest reserve Site teeming with biodiversity,
            perfect for nature lovers and adventurers.
            Trek through dense rainforests and discover the magic of Sri Lanka’s endemic flora and fauna.
          </p>

          <div className="mirissa-gallery">
            <img src={require("../../assets/ecoEscapesHero3.jpg")} alt="Mirissa View" />
            <img src={require("../../assets/ecoEscapesHero4.jpg")} alt="Mirissa Beach" />
          </div>

          <p>
            The Sinharaja Forest is a UNESCO World Heritage Site and an important ecotourism destination,
            which can also be described as a lowland tropical forest or a tropical evergreen rainforest.
            Regardless of its - technical - name, it is undoubtedly a rich treasure trove of nature with
            a great diversity of habitats and a large stock of Sri Lanka's endemic species,
            which are not found anywhere else in the world.
          </p>

          <p>
            The birdwatching opportunities in this ecosystem are particularly interesting, as it houses 95% of Sri Lanka's endemic bird species.
            Designated a World Heritage Site in 1989, this lowland rainforest is steeped in deep legend and mystique.
            The word 'Sinharaja' means Lion (Sinha) King (Raja), and it is a popular belief that the legendary origin of the Sinhalese people comes from the union between a princess and the lion king who once lived in the forest.
          </p>

          <p>
            The Sinharaja reserve is located within the transition zone between two important groups of rock types,
            the southwestern group, which consists of metasediments, charnockites, and skarnites containing calc-granulites,
            and the highland group, which includes khondalites of metamorphosed sediments and charnockites.
            The most significant geological feature of Sinharaja is the presence
          </p>

          {/* EXTRA CONTENT FROM SCREENSHOT */}
          <div className="mirissa-extra" data-aos="fade-up">

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero5.jpg")} alt="Surfing" />
              <img src={require("../../assets/ecoEscapesHero6.jpg")} alt="Surfing" />
              <img src={require("../../assets/ecoEscapesHero7.jpg")} alt="Surfing" />
            </div>

            <h3>Yala National Park</h3>

            <p>
              This is home to majestic leopards, elephants, and countless other species which gives unforgettable safari experience.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero8.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero9.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              Yala National Park is one of the most famous nature reserves in Sri Lanka, located in the southeastern part of the island.
              With an area of 979 square kilometers, it is known for its diverse ecosystems, including dry forests, wetlands, and grasslands.
              The park is home to a rich diversity of wildlife, including the Sri Lankan leopard, elephants, crocodiles, and hundreds of bird species.
            </p>

            <p>
              Yala is a popular safari destination, offering visitors the opportunity to see these animals in their natural habitat.
              It is divided into five blocks, with Block I being the most visited.
              The park is also known for its picturesque beauty, including pristine beaches and rocky outcrops.
            </p>

            <p>
              Here you will get safari experience either half day or full day usually star early morning or late afternoon.best time to visit from February to June during dry season for better wildlife sighting
            </p>

            <h3>Highlights yala national park</h3>

            <h3>Tourism</h3>
            <p>
              Yala is one of the most popular tourist destinations in Sri Lanka, contributes significant economic benefits through ecotourism, supports local communities, and promotes sustainable practices.
              The park contains ancient ruins and historical monuments, which add cultural and historical value to its scenic beauty.
            </p>

            <h3>Biodiversity</h3>
            <p>
              Rich wildlife: Yala, home to many species, including leopards, elephants, sloths, deer, and many bird species, plays a key role in the conservation of wildlife in Sri Lanka.
              Endemic species: The park is home to many endemic species of flora and fauna, making it an important area for the conservation of biodiversity.
            </p>

            <h3>Conservation</h3>
            <p>
              Protect endangered species, such as Sri Lankan elephants, sloths, and various bird species. Helps to preserve unique ecosystems, such as the monsoon's dry forests and wetlands.
            </p>

            <h3>Research & Education</h3>
            <p>
              The park is an important object for scientific research and environmental education, which helps shape conservation strategies and raise awareness about the importance of protecting natural environments.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/yala3.jpg")} alt="Surfing" />
              <img src={require("../../assets/yala4.jpg")} alt="Surfing" />
              <img src={require("../../assets/yala5.jpg")} alt="Surfing" />
            </div>

            <h2>Udawalawe National Park</h2>

            <p>
              This is heaven for elephant lovers & paradise for Eco tourists which connect with nature.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero10.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero11.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              Udawalawe National Park, located 230 km southeast of Colombo, was established in 1972 as the fifth national park in the country.
              The area, which borders the provinces of Sabaragamuwa and Uva and covers 30,821 hectares, has an average temperature of around 29 degrees Celsius.
              The parcel was created as a safe place for wildlife that was displaced due to the construction of the Udawalawe Dam on the Walawe River,
              which is now part of the park and an important water source for the animals living there.
              The park has an annual rainfall of 1500 mm, mainly between the months of October to January and March to May.
            </p>

            <p>
              If you want to see the best elephants, Udawalawe is the place you should go to.
              It is considered one of the best destinations to see herds of Asian elephants,
              both adults and young, with an estimated 500 elephants in groups of 100,
              as they wander around the park, eating from the jungle, marshes, and grasslands,
              or enjoying bathing and playing happily in the water.
            </p>

            <p>
              Udawalawe National Park has recorded 94 plant species, 21 fish species, 12 amphibian species, 33 reptile species,
              184 bird species (33 migratory), and 43 mammal species, as well as 135 butterfly species.
              This includes elephants (250 are permanent residents), which are the main attraction It also offers visitors the opportunity to see other animals such as Sambar Deer,
              Sri Lankan axis deer, Golden Jackal, Monkeys such as toque macaque and the tufted grey languor, Wild Buffalo,
              Water Monitor, Fishing cat, Wild Boar, Asian Palm Civet the elusive Leopard and many species of birds both endemic and migratory in their natural habitat.
            </p>

            <p>
              The park is considered a birdwatcher's paradise with endemic species such as the red-faced malkoha,
              Lanka grey hornbill; brown-capped babbler, Sri Lanka bush lark among many rare migrants like the white-tailed blue robin and black-capped kingfisher.
              Flocks of waterfowl such as cormorants, Eurasian spoonbills, black-headed ibises, Asian openbills, and painted storks inhabit the reservoir and its surroundings.
              The open areas of the park attract raptors such as the white-bellied sea eagle, the crested serpent eagle, the grey-headed fish eagle, the booted eagle, and the changeable hawk-eagle.
              A must-visit before the actual park tour is the Udawalawe Elephant Transit Home, which is located near the Udawalawe Reservoir.
              The Transit Home takes care of abandoned elephant calves by providing them with food, water, and protection in a completely natural environment until they can fend for themselves, after which they are released into the wild.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero12.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero13.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero14.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>Knuckles Mountain Range</h2>

            <p>
              The Knuckles Range trekking offers misty mountain & breath taking landscapes. Experience with eco-trekking, camping, and encounters with nature at its purest & it’s true escape for adventurers and nature enthusiasts.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero15.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero16.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              The Knuckles Mountain Range (so named because its appearance resembles a cluster of knuckles in a clenched fist) is a major ecotourism destination in Sri Lanka and has been declared a protected area now known as the Knuckles National Reserve and Wildlife. The region covers an impressive 155 square kilometers and includes five major forest formations, a wide variety of rare and endemic flora and fauna, as well as some breath taking mountain landscapes of Sri Lanka. It is a true paradise for those who love hiking or mountain biking, with numerous mountain trails that take you through clear rivers, dense forests, past roaring waterfalls and green tea plantations, as well as along terraced rice fields and colorful Kandyan houses.
            </p>

            <p>
              The opportunity to visit traditional small mountain villages in this area provides an interesting insight into the close-knit community, which.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero17.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero18.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero19.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>Horton Plains National Park</h2>

            <p>
              Horton Plains National Park, home to World’s End and Baker’s Falls, is perfect for hikers and those seeking serenity in the wild. 🥾💧
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero20.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero21.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              Horton Plains National Park is a UNESCO World Heritage Site in Sri Lanka, known for its unique biodiversity and stunning landscapes. Located in the central highlands, it includes grasslands, montane forests, and attractions such as World's End (a cliff with panoramic views), Baker's Falls, and Baken.
            </p>

            <p>
              In the park, there is a diversity of wildlife, including sambar deer, leopards, and many endemic bird species. The 9.5-kilometer loop offers an unforgettable hike through this calm and misty plateau. This is a must-visit place for nature lovers and tourists.
            </p>

            <h3>Highlights</h3>

            <h3>A world on the edge:</h3>
            <p>
              A dramatic cliff at 870 meters that offers panoramic views over the valley below, especially charming during the clear morning hours.
            </p>

            <h3>Baker falls:</h3>
            <p>
              A picturesque waterfall surrounded by lush vegetation, accessible via panoramic trails.
            </p>

            <h3>Flora and Fauna:</h3>
            <p>
              Home to rare species, such as Sri Lanka's sambur deer, purple-faced langurs, and endemic birds.
            </p>

            <h3>Trekking trails:</h3>
            <p>
              Well-marked circular trails through prairies, misty forests, and foggy mountains.
            </p>

            <h3>Climate and view:</h3>
            <p>
              The cool and misty weather gives the park an ethereal charm.
            </p>

            <h3>Tips for the visit:</h3>
            <p>
              Arrive early (around 6:00 AM) to avoid fog that can obscure visibility. Put on comfortable shoes and bring warm clothes. It's better to explore the park on foot; motor vehicles are restricted inside.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero22.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero23.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero24.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>Madu Ganga River Safari</h2>

            <p>
              A safari on the Madu Ganga River is an indispensable ecotourism destination in Sri Lanka, offering a unique combination of natural beauty, biodiversity, and cultural heritage. Located in the picturesque coastal town of Balapitiya, this tranquil wetland ecosystem is one of the most biologically diverse areas in the country.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero25.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero26.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              Madu Ganga is the second largest wetland in Sri Lanka.
              The estuary spans over 900 hectares, of which 770 hectares are covered by water and inhabited by 64 islands,
              of which 15 islands have a larger landmass. Rich in biodiversity, in the area around the Madu River,
              you will find swamps covered by mangrove forests. It also houses 300 plant species and around 250 animal species.
            </p>

            <p>
              Boat tour & fish therapy in madu gaga. Taking a boat tour along the beautiful stretch of the Madu River and Lake is the main activity at Madu Ganga.
              This would be a fantastic experience of 2 to 4 hours to get to know the diverse wetland ecosystem and the biodiversity of the region.
              The waterway takes you through mangrove forests and small islands. These birdwatching excursions will be accompanied by local fishermen or bird experts.
              Sometimes you can see crocodiles, water snakes, wild boars, and tree snakes in their natural habitat.
              Another interesting experience here is outdoor fish massage, which is more natural in Sri Lanka for treatment in the fish's natural habitats, unlike artificial ponds.
              The nets tied between the poles define a large space for the fish to stay, but with many places to swim.
            </p>

            <p>
              The guests Riding a boat through the beautiful stretch of the Madu River and lake is the most prominent activity at Madu Ganga.
              This would be a fantastic experience of 2 to 4 hours to get to know the diverse wetland ecosystem and the biodiversity of the region.
              The waterway takes you through mangrove forests and small islands. These birdwatching excursions will be accompanied by local fishermen or bird experts.
              Sometimes you can see crocodiles, water snakes, wild boars, and tree snakes in their natural habitat.
              Another interesting experience here is outdoor fish massage, which is more natural in Sri Lanka for treatment in the fish's natural habitats.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero27.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero28.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero29.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>Wilpattu National Park</h2>

            <p>
              Wilpattu National Park is located 180 km north of Colombo, on the country's northwest coast, and is the largest wildlife reserve in Sri Lanka.
              It is also the oldest with a rich historical background behind it.
              According to chronological records, Prince Vijaya (who came from East India in 543 BC and accidentally landed in Sri Lanka) at Thambapanni near Mannar, now known as Kudrimale Point (Horse Point), is believed to be the founder of the Sinhalese nation. He is known to have married Kuweni, a local tribal princess, whose palace ruins can still be seen at Kali Villu, which is located within the park.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero8.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero9.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              The entire park covers an area of 131,693 hectares, with the main block or zone, as it is called, bordering the Indian Ocean in contrast to the smaller zones located inland. What makes Wilpattu unique is its many "Willus" (natural lakes), which, with over 50 pieces, form an intricate network of waterways spread throughout the park. The water comes from the inter-monsoon rains that fall in March and the northeast monsoons that occur from December to February.
            </p>

            <p>
              Filled with exciting wildlife, Wilpattu awaits to be explored! The varied habitats have attracted many species of wildlife, both resident and migratory birds. 31 species of mammals have been identified; some of them are leopard (a favorite among visitors), sloth bear, elephant, spotted and barking deer, sambhar, wild boar, and even crocodiles. It is also home to an abundance of endemic birds such as Jungle Fowl, Painted Stork, Owl, Tern, Gull, Eagle, Heron, and winter migratory birds that stay for short periods within the nature reserve.
            </p>

            <p>
              Butterflies such as Blue and Common Mormons, Common Rose, and Crimson Rose among many other species can be seen fluttering around vibrantly. At the top of the list of reptiles is the Mugger crocodile, followed by monitor lizards, pythons, cobras, rat snakes, along with star tortoises, sea turtles, and mollusks among many others. The park's area spans 131,693 hectares, where the main block or zone, which they
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/yala3.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/yala4.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/yala5.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>Minneriya National Park</h2>

            <p>
              Minneriya National Park is located in the Central Province of Sri Lanka and is famous for its diverse wildlife and picturesque landscapes.
              The park is especially famous for its annual elephant gathering, when hundreds of elephants congregate around the Minneriya tank during the dry season.
              Here, various species of birds, reptiles, and other animals also inhabit.
              The park offers a unique safari experience, making it a popular place for nature lovers and photographers.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero30.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero31.jpg")} alt="Mirissa Beach" />
            </div>

            <h3>. Elephants</h3>
            <p>
              Mineria is primarily known for its huge herds of elephants. In the dry season groups of 150-300 wild elephants gather. Elephants in the Matale, Polonnaruwa and Trincomalee districts migrate to the Minneriya National Park during the dry season. They gather around the Minneriya water body for food and water.
              Therefore, the period from May to September is considered the best time to visit this archive.
            </p>

            <h3>. The Place</h3>
            <p>
              Mineria National Park is located 182 km from Colombo. m. It's far away.
              The journey to the city takes about four hours. It is about 105 km from Kandy. m. There's distance.
              It takes about three hours to get there. Google Maps will help you find the location.
              Dambulla, Sigiriya and Polonnaruwa are the most visited tourist destinations on the island.
              These places are located near the national park.
              Therefore, many of them never miss the opportunity to visit this place.
            </p>

            <h3>. History</h3>
            <p>
              The Mineriya reservoir, or as the locals call it "Mineriya Veva," is an ancient construction.
              It was built by King Mahasena in the 3rd century AD. The purpose of this waterway is to provide water for rice cultivation.
              The surrounding forests were the main source of water for this stream.
              In addition, the Ambon River and the Elahera Canal supply water to the Minneriya Reservoir.
            </p>
            <p>
              In 1938, the reservoir and the surrounding forests were declared a nature reserve. It was declared a national park on August 12, 1997.
              The purpose of the declaration was to protect the reservoir and wildlife in the area.
            </p>

            <h3>. Climate</h3>
            <p>
              Mineria National Park and surrounding areas receive an average annual rainfall of 1000-1500 mm.
              The average annual temperature is about 25-30 ° C.
              The northeast monsoon is the main rain source and is active from October to February.
              There is a distinct dry season from May to September.
            </p>

            <h3>. Wildlife</h3>
            <p>
              There are 24 species of mammals, 1600 species of birds, 9 species of amphibians, 25 species of reptiles, 26 species of fishes and 75 species of butterflies in Animalia Mineria National Park.
            </p>
            <p>
              Some of the birds that you can see here are the Sri Lankan bee, Sri Lankan parrots and the brown babayan. It is a paradise for domestic and migratory birds.
              Together with them, the Sri Lankan cheetah, the Sri Lankan sloth bear, S. R. I sambar, buffalo and two types of local monkeys can also be seen.
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

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero32.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero33.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero34.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>Bundala National Park</h2>

            <p>
              This wetland is a sanctuary for migratory birds and a perfect spot for eco-friendly exploration.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero35.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero36.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              Located in the southern province, near Hambantota, Bundala National Park is considered the most important birdwatching destination in Sri Lanka.
              It was declared a wildlife sanctuary in 1969 and later elevated to national park status in 1993.
              It is located 251 km southeast of the capital Colombo and can be reached from several tourist destinations in the country.
              The climate in Bundala is warm and dry most of the time, with average temperatures of 27 degrees Celsius from May to September, and a large number of migratory birds arriving between September and March.
            </p>

            <p>
              The park spans 6,218 hectares and consists of an impressive landscape made up of a mix of thorny bushes, marshes, lagoons,
              waterways, and sand dunes, making it an attractive destination for thousands of migratory birds,
              some of which are long-distance migrants flying from Eurasian destinations to winter in the park.
              This has made it an internationally important wintering site for thousands of exotic species of migratory birds.
              The reason for this fascination with Sri Lanka is its location.
            </p>

            <p>
              The park has nearly 200 bird species, of which 150 are endemic and the rest are migratory.
              Among the migratory birds are small blue-tailed bee-eaters, flocks of flamingos, brown flycatchers,
              sandpipers, long-winged swallows, waterfowl, common avocets, little sandpipers, and woodcocks.
            </p>

            <p>
              The complex system of wetlands within the park, now designated as Sri Lanka's first 'Ramsar' site (identified as an important wetland in the international network of wetlands) and declared a biosphere reserve by UNESCO in 2005,
              is a refuge for a range of waterbirds such as the migratory greater flamingo (large flocks of more than 1000 birds), ibises,
              painted storks, terns, gulls, and ducks, as well as for the resident water birds like pelicans, herons, cormorants, storks, waders, and storks.
              It has been observed by bird lovers and nature enthusiasts that these migratory birds stop at the same place every year,
              as it is believed that the birds follow established migration routes that are well-defined over long distances.
            </p>

            <p>
              The biodiversity in the park is abundant, with 383plant species registered here, of which six are endemic and seven are endangered.
              It also houses 32 species of mammals, including elephants (most of them reside here permanently, with seasonally migrating herds coming for short periods),
              leopards, deer, sloths, civets, mongooses, monkeys, and giant squirrels.
            </p>

            <p>
              The park's swamps and lagoons are home to both swamp and river crocodiles, while the coastal part of the park is a sanctuary for five species of sea turtles, namely the loggerhead turtle, the green turtle, the hawksbill turtle,
              and the leatherback turtle, which visit the beach to bread and lay eggs.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero37.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero38.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero39.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>Mirissa</h2>

            <p>
              Hidden jem in southern beach ,with many attractions such as coconut tree hill,whale watching ,parrot rock ,surfing, Snorkeling & Diving, beach relaxation
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero40.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero41.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              Mirissa is a popular tourist destination in Sri Lanka, and most visitors come to Mirissa Beach for a specially in the winter.
            </p>

            <h3>. Coconut tree Hill</h3>
            <p>
              Coconut tree Hill has recently become one of Sri Lanka's most popular tourist destinations,
              located in the Mirissa region in the Southern Province. It is a small dome-shaped hill surrounded by palm trees.
              The Coconut Hill is one place you should not miss during your trip to the south of Sri Lanka.
              this a private coconut farm that is open all day and welcomes the public to visit. You don't need to buy tickets to enter.
              Once you get there, you'll see stunning views of the Indian Ocean.
              This place is completely covered with palm trees, and you can take stunning photos to post on Instagram.
              The sea breeze will help you feel more comfortable and relax.
            </p>
            <p>
              You don't need to buy tickets to enter. Once you get there, you'll see stunning views of the Indian Ocean. This place is completely covered with palm trees, and you can take stunning photos to post on Instagram. The sea breeze will help you feel more comfortable and relax.
            </p>

            <h3>. Whales Watching</h3>
            <p>
              whales watching; This is a great place to see whales in this beautiful country southern part in addition to trincomalee in eastern part.
            </p>

            <h3>. From the city of Mirissa to the coconut tree hill there are two main routes:</h3>
            <p>
              Through the beach of Mirissa Through the Bandarawela Temple Most of the tourists and visitors come to this place through Mirissa beach.
            </p>
            <p>
              If you drive or do not want to walk on the beach, you can get there through the Bandaramulla temple.
              However, regardless of the path you choose, you will have to overcome a difficult path to reach your goal.
            </p>
            <p>
              Mirissa is usually crowded every day, both locals and foreigners.
              But if you can get there in the morning, you can enjoy a wonderful sunrise in a less crowded environment.
              Before 9 a.m., there are fewer people, which is something to consider before your visit.
              Sunset is a great time to visit the Palm Mountains. The weather report explains that the rainy season in the region is from October to December.
              The best time to visit is from January to May.
              Another factor to consider is that the beach is closed during the monsoon season from May to September
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero42.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero43.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero44.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>KALPITIYA</h2>

            <p>
              This eco-friendly destination is perfect for adventure and relaxation. & will get experience of dolphin watching to kitesurfing.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero45.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero46.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              Despite its scenic beauty, the western peninsula of KALPITIYA in the Puttalam district of Sri Lanka remains remarkably untouched by tourism.
              But for those lucky enough to visit, there are a number of things to see and do!With the small and tight-knit fishing community that dominates
              the lives of the local inhabitants, visitors can gain an authentic insight into the working life outside the city.
              After watching the fishing boats return in the morning, a visit to one of the fish markets offers the opportunity
              to choose that night's dinner directly from the fresh catch.
            </p>

            <p>
              The Dutch Fort and St. Peter's Kerk church in the town itself are interesting examples of Sri Lanka's rich history and colonial past.
              Peaceful boat rides through the lagoon and canoe trips along the river are a charming way to explore the coast,
              while 4x4 jeep tours along the deserted sand dunes between the sea and the lagoon offer a unique way to see the colourful sunsets.
              For avid divers and snorkelers, the largest coral reef in Sri Lanka ('Bar reef') is just an hour's boat ride from Kalpitiya.
              This beautiful reef is home to an incredible variety of tropical fish and offers the opportunity to see mantas, reef sharks, and sometimes turtles.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero47.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero48.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero49.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>GAL OYA NATIONAL PARK</h2>

            <p>
              Gal Oya offers tranquil boat safaris and witness elephant swing across islands.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero50.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero51.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              Galoya National Park, located 314 km southeast of the city of Colombo,
              is situated in the Ampara district of the Eastern Province of the country.
              The park was established in 1954 as the main catchment area for The Senanayake Samudra,
              Sri Lanka's largest reservoir, which was built by damming the Galoya in Inginiyagala, as part of the Galoya Development Programme.
              The park is scenically located by the dam at the entrance to Inginiyagala, allowing visitors to enjoy a boat ride on the picturesque dam; undoubtedly a great way to get an overview of the park and its many islands. The park, which spans an area of 25,900 hectares, is most famous for its elephant population, which can be observed year-round. While boating, visitors can see elephant herds swimming from island to island through the reservoir to graze on the dense vegetation of the islands. This magnificent spectacle is best observed between March and July each year.
              The boat trip will also give visitors the opportunity to see bird flocks nesting on the island.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero52.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero53.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero54.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>UDAWATHTHAKELE FOREST RESERVE</h2>

            <p>
              Udawattakele is a tranquil ecotourism destination that is ideal for nature lovers and conservation enthusiasts.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero55.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero56.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              This historic forest area, which once served as a refuge for royalty, is a biodiversity paradise that highlights the harmony between cultural heritage and environmental protection.
            </p>

            <p>
              The sanctuary is famous for its extensive avifauna. The reserve also contains a great variety of plant species, especially lianas, shrubs and small trees. There are several giant lianas. Many of small and medium size mammals that inhabit Sri Lanka can be seen here.
              Several kinds of snakes and other reptiles might be seen.
            </p>

            <p>
              Entrance take about 15-20 min from the temple of tooth.
              This is great eco-friendly destination because of its biodiversity, culture & historic significance & Tranquil Trails.
            </p>

            <p>
              Three storied vegetation of UdawattaKele Forest
            </p>

            <ul className="mirissa-list">
              <li>1. mammals in udawaththakale This forest supports many variety of mammals such as Toque Macaque (Macaca sinica), Purple-faced Langur (Semnopithecus vetulus), Indian Flying Fox (Pteropus giganteus), Indian Palm Squirrel (Funambulus palmarum) , Small Indian Civet (Viverricula indica)</li>
              <li>2. Birds in the forest Udawaththa kale is home to wide variety of bird species such as Sri Lanka Hanging Parrot (Loriculus beryllinus) , Layard's Parakeet (Psittacula calthropae), Sri Lanka Grey Hornbill (Ocyceros gingalensis) ,Yellow-fronted Barbet (Psilopogon flavifrons),Oriental Dwarf Kingfisher (Ceyx erithacus)</li>
              <li>3. Plant species at the forest forest is home to a diverse range of tree species, including both native and introduced varieties</li>
            </ul>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero57.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero58.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero59.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>PIDGEON ISLAND</h2>

            <p>
              The Pidgeon island is a one of the srilankan stunning Marine Eco destination.
              Known for its crystal-clear waters and vibrant coral reefs, this protected area offers a unique blend of natural beauty and adventure.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero60.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero61.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              The Pidgeon Island a beautiful national park located off the coast of Trincomalee in Sri Lanka. It consists of two islands, Great Paloma Island and Little Paloma Island, which host a diverse marine life and coral reefs.
              The crystal-clear waters surrounding the islands make them a perfect spot for snorkeling and diving.
            </p>

            <p>
              Visitors to Isla de las Palomas can explore the impressive coral gardens, swim with exotic fish, and relax on the pristine beaches.
              The island is also a popular breeding ground for migratory birds, including the famous Blue Rock Pigeon, which
            </p>

            <h3>Underwater Adventure</h3>

            <p>
              The coral reefs around Pigeon Island are some of the best in Sri Lanka. These colorful underwater gardens are full of life! You’ll see lots of different types of coral, like brain coral and staghorn coral.
              There are also hundreds of species of fish swimming around, including clownfish, butterflyfish, and even sharks!
            </p>

            <p>Activities in Pidgeon island</p>

            <ul className="mirissa-list">
              <li>Snorkeling: See the amazing coral reefs and fish up close! The best time to go snorkeling is during the dry season, from May to September.</li>
              <li>Swimming: The beaches here are perfect for relaxing and taking a dip in the cool water.</li>
              <li>Birdwatching: Look for the blue rock pigeons that the park is named after.</li>
              <li>Boating: Take a boat ride to the island and enjoy the scenery</li>
            </ul>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero62.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero63.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero64.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>PIDURANGALA ROCK</h2>

            <p>
              Pidurangala Rock is a fantastic viewpoint with 360-degree views, located opposite the world-famous Sigiriya Rock.
              Hiking to the top is possible for both rocks, but hiking to the top of Pidurangala Rock at dawn is a true adventure.
              The best part is that you get a fantastic view of the Lion Rock, which is truly special! This is a moment that will stand out on any trip to Sri Lanka,
              so a visit to Sigiriya is a must on your travel itinerary
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero66.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero65.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              When go back to history of pidurangala rock Both Sigiriya and Pidurangala Rock are volcanic hills rising from the jungles of the lowland and central plains of Sri Lanka, and they are steeped in history and mythology.In summary, when King Kashyapa arrived at Sigiriya in the 5th century, he discovered that Sigiriya itself was a monastic complex. Wanting to build a fortress on top of Sigiriya for himself, he offered them to build an alternative and similar monastery on the nearby rock Pidurangala.
            </p>

            <p>
              According to legend, King Kashyapa offered a "golden monastery," or "Aran gala," which would later become Pidurangala, literally meaning "offered heaps of gold." The monks fulfilled their duties, and a Buddhist monastery was built in the caves and on the rocks around Pidurangala.Now only the old cave temple and the reclining Buddha that passes by on the way up remain, as well as a stupa near the temple that is believed to mark the spot where King Kashyapa was cremated.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero67.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero68.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero69.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>MUTHURAJAWELA WET LAND</h2>

            <p>
              Muthurajawela Marsh, an oasis of untouched wetlands located on Sri Lanka's west coast, is a hidden gem for nature lovers, birdwatchers, and adventurers. This unique ecosystem, often called "The King's Marsh," is a testament to the island's incredible biodiversity.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero70.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero71.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              In this guide, we will embark on a journey to discover the charm of the Muthurajawela Marsh, from its lush mangrove forests to its fascinating wildlife and the experiences offered to those who explore its mysterious waters. During boat tour you will be experienced natural wonders, explore man groove forest & bird watching.
            </p>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero72.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero73.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero74.jpg")} alt="Mirissa Beach" />
            </div>

            <h2>KUMANA NATIONAL PARK</h2>

            <p>
              Kumana Bird Sanctuary is definitely a paradise for birdwatchers! Located 391 km from Colombo on the country's southeastern coast, it is one of the best bird reserves in the country.
            </p>

            <div className="mirissa-gallery">
              <img src={require("../../assets/ecoEscapesHero75.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero76.jpg")} alt="Mirissa Beach" />
            </div>

            <p>
              The entrance to the park is through Panama via the Kudumbigala sanctuary and is accessible via Beragala and Koslanda or via the Uduwalawe – Tanamalvilla route.
              The Kumana Bird Sanctuary, established in 1938, is part of Kumana National Park and is one of the most important breeding and nesting areas for birds in Sri Lanka. Of the 400 bird species in the country, it is known that Kumana Bird Sanctuary has recorded 255 species.
            </p>

            <p>
              The vegetation in the park mainly consists of tropical dry forest, covering an area of 35,665 hectares, with the western boundary limited by Kumbukkan Oya, and to the south, the coastline extending all the way to Panama. The extensive bird population in the park thrives in a vast natural mangrove swamp of 200 hectares, "Kumana Villu," and in many ponds and lagoons scattered throughout the park, where thousands of birds nest and raise their young.
              It is known that thousands of birds migrate to the swamp every year between April and July.
            </p>

            <ul className="mirissa-list">
              <li>Home to over 250 bird species, including migratory and endemic birds.Famous for the Kumana Villu, a swampy lagoon where thousands of birds nest during the migratory season.</li>
              <li>Apart from birds, Kumana shelters animals like elephants, leopards, deer, wild boars, and crocodiles. Also a rich variety of reptiles and amphibians adds to its biodiversity.</li>
              <li>Peak season migration of birds April to July.</li>
              <li>Mix of lagoons, grasslands, marshes, and mangrove swamps creates stunning landscapes</li>
            </ul>

            <div className="mirissa-top-gallery">
              <img src={require("../../assets/ecoEscapesHero77.jpg")} alt="Mirissa View" />
              <img src={require("../../assets/ecoEscapesHero78.jpg")} alt="Mirissa Beach" />
              <img src={require("../../assets/ecoEscapesHero79.jpg")} alt="Mirissa Beach" />
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

export default EcoEscapes;
