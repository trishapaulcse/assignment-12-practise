import React from "react";
import treatment from "../assets/images/treatment.png";
import PrimaryButton from "./PrimaryButton";
const BabyBanner = () => {
  return (
    <section className="shadow-xl flex">
      <div className="card-body mx-10 mb-20 ">
        <figure className="w-60 h-96 rounded">
          <img src={treatment} alt="Album" />
        </figure>
      </div>
      <div className="text-center my-10">
        <h2 className="font-bold text-2xl pr-60">
          Exceptional dental care on your terms
        </h2>
        <p className="px-10 pt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex justify-start pl-10 pt-10">
          <PrimaryButton>Get started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default BabyBanner;
