import React from "react";

const infoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side ${bgClass}`}>
      <figure className="pl-5 pt-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{cardTitle}</h2>
        <p className="text-white">
          Click the button to listen on Spotiwhy app.
        </p>
      </div>
    </div>
  );
};

export default infoCard;
