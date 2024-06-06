"use client"
import React from "react";
import "./styles.scss";

const Section = () => {
  return (
    <div className="section-container">
      {/* <div className="section-image">
        <img src="https://www.find-a-therapist.com/wp-content/uploads/2021/09/black-female-life-coach-min-scaled.jpeg" alt="Descriptive Alt Text" />
      </div> */}
      <div className="section-text">
        <h2 className="header-title">
          Transform Your Life <span className="mellania-span">Today...</span>
        </h2>
        <p className="section-text">
        Unlock the potential within yourself to create lasting change. This section is strategically positioned alongside an inspiring image, offering insightful guidance to amplify your personal growth and transformational experience.
        </p>
        <button
          className="cta-button"
          onClick={() => {
            window.location.href = "/booking";
          }}
        >
          Book Your Free Session Today!
        </button>
      </div>
    </div>
  );
};

export default Section;
