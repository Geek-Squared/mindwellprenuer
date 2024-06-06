import React from "react";
import "./styles.scss";

const Navbar = () => {
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
            <h3>Mellania</h3>
          </div>
          <div className="menu">
            <a href="/">Home</a>
            {/* <a href="/about">About</a> */}
            <div className="dropdown">
              <a href="#" className="dropdown-toggle">
                Work With Me
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/holistic">Hollistic Lifestyle</a>
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
            <a href="/contact">Contact</a>
            <a href="/booking" className="book-now">
              Book Now
            </a>
            {/* <HeaderButton text="Book Now" onClick={() => null}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
