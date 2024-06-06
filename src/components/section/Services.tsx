import React from "react";
import "./styles.scss";
import Testimonial from "../testimonial/Testmonial";

interface ServicesProps {
  content: any[];
}

const CoachingServices: React.FC<ServicesProps> = ({ content }) => {
  const imageSize = { width: "200px", height: "150px", objectFit: "cover" };

  return (
    <div className="services-section-container">
      {content.map((item: any) => (
        <div className="section-text" key={item.title}>
          <h2 className="header-title">
            {item.title} <span className="mellania-span">{item.span}</span>
          </h2>
          <p className="section-text">{item.text}</p>
          <Testimonial />
          <h4 className="list-title">
            {item.listTitle} <span className="mellania-span">{item?.listSpan}</span>
          </h4>
          <div className="services-cards">
            {item.list.map((listItem: any, index: number) => (
              <div key={index} className="service-card">
                <img
                  src={listItem.image}
                  alt={listItem.text}
                  className="service-image"
                  style={imageSize}
                />
                <p className="service-title">{listItem.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoachingServices;
