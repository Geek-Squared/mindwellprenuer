import React from 'react';
import './styles.scss';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-card">
        <h2>Free 20 min session</h2>
        <p>Pre-Session</p>
        <p className="price">Free</p>
      </div>
      <div className="pricing-card">
        <h2>Regular Package</h2>
        <p>R450 per hour</p>
      </div>
      <div className="pricing-card">
        <h2>Book 2 sessions</h2>
        <p>R400 per hour (paid upfront)</p>
      </div>
      <div className="pricing-card">
        <h2>Book 3 sessions</h2>
        <p>R380 per hour (paid upfront)</p>
      </div>
    </div>
  );
};

export default Pricing;
