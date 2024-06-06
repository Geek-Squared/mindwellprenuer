"use client"
import React from "react";
import "./styles.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="left-panel">
        <h1 className="heading">
          Transform Your Life with{" "}
          <span className="mellania-span">Mellania</span>, <br />
          Your Personal <span className="mellania-span">Life Coach</span>.
        </h1>
        <p className="description">
          Empowering individuals to achieve their goals and live their best
          lives
        </p>
        <button
          className="cta-button-header"
          onClick={() => {
            window.location.href = "/booking";
          }}
        >
          Book Your Free Session Today!
        </button>
      </div>
      <div className="right-panel">
        <Image
          src="/hero.jpeg"
          alt="main"
          width={5000}
          height={600}
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
