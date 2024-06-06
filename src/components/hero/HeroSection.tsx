import React from "react";
import "./styles.scss";
import Image from "next/image";
import Motto from "../body_section/Motto";

interface ContentProps {
    content?: any;
}

const HeroSection: React.FC<ContentProps> = ({ content }) => {
  return (
    <>
      {content.map((item: any) => (
        <div className="hero-container-services">
          <div className="left-panel">
            <h1 className="heading">
              {item?.title} <span className="mellania-span-services">{item?.span}</span>
            </h1>
            <p className="paragraph-text">
              <span className="service-span">{item?.headerSpan}: </span>
              {item?.description}
            </p>
            <br />
            <Motto />
          </div>
          <div className="right-panel">
            <Image
              src={item?.image}
              alt="main"
              width={5000}
              height={600}
              className="img-service"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroSection;
