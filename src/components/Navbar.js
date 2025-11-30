import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Phone, Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`main-navbar ${scrolled ? "navbar-shrink" : ""}`}>
        <div className={`navbar-container ${scrolled ? "navbar-full" : ""}`}>

          {/* Left - Logo */}
          <div className="navbar-left">
            <div className="logo-box">
              <img src={logo} alt="Logo" className="logo" />
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/day-tours">Day Tours</Link></li>
            <li><Link to="/tailor-made-tours">Tailor Made Tours</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Phone Button */}
          <div
            className="phone-box"
            onClick={() => (window.location.href = "tel:0773562768")}
          >
            <Phone size={18} className="phone-icon" />
            <div>
              <span className="phone-label">PHONE</span>
              <span className="phone-number">077 356 2768</span>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="mobile-menu">
            <li><Link onClick={() => setMenuOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/destinations">Destinations</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/packages">Packages</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/day-tours">Day Tours</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/tailor-made-tours">Tailor Made Tours</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/about">About Us</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link></li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
