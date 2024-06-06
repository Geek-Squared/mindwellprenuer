import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are committed to delivering the best experience for our clients.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: bookings@mindfulwellpreneur.com</p>
          <p>Phone: +27 83 898 1131</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </div>
      </div>
      {/* <p className="footer-text">© 2023 Company Name. All rights reserved.</p> */}
    </div>
  );
};

export default Footer;
