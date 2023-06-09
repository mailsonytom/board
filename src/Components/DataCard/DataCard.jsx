import React from "react";
import "./DataCard.css";

function DataCard(props) {
  return (
    <div className="card grid grid-rows-3">
      <div className="icon">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="heading">
        <p>{props.heading}</p>
      </div>
      <div className="value">
        <p>{props.value}</p>
      </div>
    </div>
  );
}

export default DataCard;
