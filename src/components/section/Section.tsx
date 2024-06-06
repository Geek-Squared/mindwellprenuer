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
          This is the text content of the section. It is placed on the right
          side of the image and provides additional information or context to
          complement the visual content displayed on the left.
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
