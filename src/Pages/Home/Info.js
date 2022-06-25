import React from "react";
import InfoCard from "./InfoCard";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";
const info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        bgClass="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact us"
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default info;
