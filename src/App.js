import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Destinations from "./pages/destinations";
import DayTourPackages from "./pages/DayTourPackages";
import TailorMadeTours from "./pages/TailorMadeTours";
import AboutSriLanka from "./pages/AboutSriLanka";

import Mirissa from "./pages/destinations/Mirissa";
import Sigiriya from "./pages/destinations/Sigiriya";
import Anuradhapura from "./pages/destinations/Anuradhapura";
import EcoEscapes from "./pages/destinations/EcoEscapes";
import Ella from "./pages/destinations/Ella";
import Kandy from "./pages/destinations/Kandy";
import NuwaraEliya from "./pages/destinations/NuwaraEliya";
import Polonnaruwa from "./pages/destinations/Polonnaruwa";
import Yala from "./pages/destinations/Yala";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/day-tours" element={<DayTourPackages />} />
        <Route path="/tailor-made-tours" element={<TailorMadeTours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about-sri-lanka" element={<AboutSriLanka />} />

        <Route path="/destinations/Mirissa" element={<Mirissa />} />
        <Route path="/destinations/Sigiriya" element={<Sigiriya />} />
        <Route path="/destinations/Anuradhapura" element={<Anuradhapura />} />
        <Route path="/destinations/Polonnaruwa" element={<Polonnaruwa />} />
        <Route path="/destinations/Ella" element={<Ella />} />
        <Route path="/destinations/Yala" element={<Yala />} />
        <Route path="/destinations/Kandy" element={<Kandy />} />
        <Route path="/destinations/Nuwara-Eliya" element={<NuwaraEliya />} />
        <Route path="/destinations/Eco-Escapes" element={<EcoEscapes />} />
    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
