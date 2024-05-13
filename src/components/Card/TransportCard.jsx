import React from "react";
import "./TransportCard.css";

const TransportCard = ({ frontContent, descText, backgroundImage }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="face back">
          <p className="desc">{descText}</p>
        </div>
        <div
          className="face front"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <b>{frontContent}</b>
        </div>
      </div>
    </div>
  );
};

export default TransportCard;
