import React from "react";
import fluoride from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description: "ashhdkhg",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description: "ashhdkhg",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description: "ashhdkhg",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center my-20">
        <h2 className="text-primary font-bold uppercase text-xl">
          Our services
        </h2>
        <h3 className="text-4xl">We Provide Services</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
