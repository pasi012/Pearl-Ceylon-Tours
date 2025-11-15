import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import Destinations from "./pages/destinations";
import DayTourPackages from "./pages/DayTourPackages";
import TailorMadeTours from "./pages/TailorMadeTours";

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
        <Route path="/booking" element={<Booking />} />

        <Route path="/destinations" element={<Destinations />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
