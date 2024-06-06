"use client";
import React, { useState } from "react";
import "./styles.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="top-bar">
          <p className="email">Email: info@mindfulwellpreneur.com</p>
          <span className="email">Phone: +27 83 898 1131</span>
        </div>
      </div>

      <div className="navbar">
        <div className="navbar-bottom">
          <div className="logo">
            <h3>Mindfulwellprenuer</h3>
          </div>
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <a href="/">Home</a>
            <div className="dropdown">
              <a href="#" className="dropdown-toggle">
                Work With Me
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/holistic">Holistic Lifestyle</a>
                </li>
                <li>
                  <a href="/relationships">Relationships</a>
                </li>
                <li>
                  <a href="/wellness">Wellness</a>
                </li>
              </ul>
            </div>
            <a href="/blog">Blog</a>
            {/* <a href="/contact">Contact</a> */}
            <a href="/booking" className="book-now">
              Schedule Your Free Booking
            </a>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
