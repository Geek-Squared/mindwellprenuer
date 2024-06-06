import React from 'react';
import './styles.scss';

const testimonials = [
  {
    name: "John Doe",
    text: "Mellania's coaching has been transformative for my personal and professional life. Her approach is tailored and truly effective. Highly recommend!"
  },
  {
    name: "Jane Smith",
    text: "The tools and strategies I've learned have helped me overcome my anxiety and stress. I'm now more confident and productive than ever."
  },
  {
    name: "Alice Johnson",
    text: "Attending Mellania's sessions has been one of the best decisions of my life. Her insights are invaluable."
  },
  {
    name: "Mark Brown",
    text: "Mellania's techniques have helped me balance my work and personal life effectively. Can't thank her enough!"
  },
  {
    name: "Emily White",
    text: "Her unique approach to personal development is both innovative and impactful. Truly a game-changer!"
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial-section-container">
      <h2 className="testimonial-section-title">What Clients Say About <span className="mellania-span">Mellania...</span></h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

