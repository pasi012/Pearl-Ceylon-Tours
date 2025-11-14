import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Phone } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== Main Navbar ===== */}
      <nav className={`main-navbar ${scrolled ? "navbar-shrink" : ""}`}>
        <div className={`navbar-container ${scrolled ? "navbar-full" : ""}`}>
          <div className="navbar-left">
            <div className="logo-box">
              <img src={logo} alt="Logo" className="logo" />
            </div>
          </div>

          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/day-tours">Day Tours</Link></li>
            <li><Link to="/tailor-made-tours">Tailor Made Tours</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="navbar-right">
            <div className="phone-box">
              <Phone size={18} className="phone-icon" />
              <div>
                <span className="phone-label">PHONE</span>
                <span className="phone-number">0778834842</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
