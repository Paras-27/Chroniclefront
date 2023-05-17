import React from "react";
import "../css/Card.css";

const Card = ({ CardTitle1, CardTitle2, CardDescription, imgUrl }) => {
  return (
    <div className="card">
      <div className="card-pic">
        <img className="image" src={imgUrl} />
      </div>
      <div className="card-info">
        <div className="card-title">{CardTitle1}</div>
        <div className="card-title">{CardTitle2}</div>
        <div className="card-description">{CardDescription}</div>
      </div>
    </div>
  );
};

export default Card;
