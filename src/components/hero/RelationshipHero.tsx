import React from "react";
import "./styles.scss";
import Image from "next/image";

const RelationshipHero = () => {
  return (
    <div className="hero-container">
      <div className="left-panel">
        <h1 className="heading">
        Relationship <span className="mellania-span">Coaching</span>
        </h1>
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

export default RelationshipHero;
