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
import CultureHeritage from "./pages/packages/CultureHeritage";
import HolidayTour from "./pages/packages/HolidayTour";
import HoneymoonTrail from "./pages/packages/HoneymoonTrail";
import RamayanaTour from "./pages/packages/RamayanaTour";
import EcoTrail from "./pages/packages/EcoTrail";
import WhyChooseUs from "./pages/WhyChooseUs";
import ColomboCityTour from "./pages/daypackages/ColomboCityTour";
import ColomboBenthotaGalle from "./pages/daypackages/ColomboBenthotaGalle";
import ColomboKandy from "./pages/daypackages/ColomboKandy";
import ColomboSigiriya from "./pages/daypackages/ColomboSigiriya";
import ColomboKithulgala from "./pages/daypackages/ColomboKithulgala";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";

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
        <Route path="/whyChooseUs" element={<WhyChooseUs />} />
        <Route path="/terms-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* destinations */}
        <Route path="/destinations/Mirissa" element={<Mirissa />} />
        <Route path="/destinations/Sigiriya" element={<Sigiriya />} />
        <Route path="/destinations/Anuradhapura" element={<Anuradhapura />} />
        <Route path="/destinations/Polonnaruwa" element={<Polonnaruwa />} />
        <Route path="/destinations/Ella" element={<Ella />} />
        <Route path="/destinations/Yala" element={<Yala />} />
        <Route path="/destinations/Kandy" element={<Kandy />} />
        <Route path="/destinations/Nuwara-Eliya" element={<NuwaraEliya />} />
        <Route path="/destinations/Eco-Escapes" element={<EcoEscapes />} />

        {/* Packages */}
        <Route path="/tour-package/CultureHeritage" element={<CultureHeritage />} />
        <Route path="/tour-package/HolidayTour" element={<HolidayTour />} />
        <Route path="/tour-package/HoneymoonTrail" element={<HoneymoonTrail />} />
        <Route path="/tour-package/RamayanaTour" element={<RamayanaTour />} />
        <Route path="/tour-package/EcoTrail" element={<EcoTrail />} />

        {/* Day Packages */}
        <Route path="/day-tours/ColomboCityTour" element={<ColomboCityTour />} />
        <Route path="/day-tours/ColomboBenthotaGalle" element={<ColomboBenthotaGalle />} />
        <Route path="/day-tours/ColomboKandy" element={<ColomboKandy />} />
        <Route path="/day-tours/ColomboSigiriyaDambulla" element={<ColomboSigiriya />} />
        <Route path="/day-tours/ColomboKithulgala" element={<ColomboKithulgala />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
