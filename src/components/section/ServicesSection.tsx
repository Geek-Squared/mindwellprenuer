"use client"
import React from "react";
import "./styles.scss";

const ServicesSection = () => {
  return (
    <div className="services-section-container">
      {/* <div className="section-image">
        <img src="https://www.find-a-therapist.com/wp-content/uploads/2021/09/black-female-life-coach-min-scaled.jpeg" alt="Descriptive Alt Text" />
      </div> */}
      <div className="section-text">
        <h2 className="header-title">
          Unlock Your Potential with Our{" "}
          <span className="mellania-span">Free First Session...</span>
        </h2>
        <p className="section-text">
          Are you ready to take the first step toward personal growth and
          success? Our tailored sessions are designed to help you overcome
          challenges, achieve your goals, and live your best life. Here's how we
          can help you: 🌟 Free First Session (45 Minutes) Get to know us and
          see how we can support your journey. Discuss your goals, challenges,
          and what you hope to achieve. No obligation, just a friendly chat to
          see if we’re the right fit for you.
        </p>
        <button className="cta-button" onClick={() => {
          window.location.href = "/booking-premium";
        }}>Book Your Free Session</button>
      </div>
      <div className="section-text">
        <h2 className="header-title">
        Affordable Ongoing Support Just: {" "}
          <span className="mellania-span"> R450 per Hour...</span>
        </h2>
        <p className="section-text">
       Flexible scheduling to fit your lifestyle. Expert
          guidance tailored to your unique needs. Ready to Transform Your Life?
          Take advantage of our free first session to start making positive
          changes today. Click the button below to book your session and begin
          your journey to a better you!
        </p>
        <button className="cta-button" onClick={() => {
          window.location.href = "/booking-premium";
        }}>Book Your Session</button>
      </div>
    </div>
  );
};

export default ServicesSection;
