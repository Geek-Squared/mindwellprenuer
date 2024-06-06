import React from "react";
import "./styles.scss";
import Testimonial from "../testimonial/Testmonial";

interface ServicesProps {
  content: any[];
}

const CoachingServices: React.FC<ServicesProps> = ({ content }) => {
  return (
    <div className="services-section-container">
      {content.map((item: any) => (
        <div className="section-text">
          <h2 className="header-title">
            {item.title} <span className="mellania-span">{item.span}</span>
          </h2>
          <p className="section-text">{item.text}</p>
          <Testimonial />
          <h4 className="list-title">{item.listTitle} <span className="mellania-span">{item?.listSpan}</span></h4>
          <ul>
            {item.list.map((list: any) => <li className="list-item-class">{list}</li>)}
          </ul>
          {/* <button className="cta-button">
            Book Your Session
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default CoachingServices;