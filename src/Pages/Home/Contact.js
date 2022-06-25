import React from "react";
import appointment from "../assets/images/appointment.png";
import PrimaryButton from "./PrimaryButton";
const Contact = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className=" flex justify-center w-100 my-28"
    >
      <div className="flex-wrap h-100 w-96 pl-10 ">
        <div className="my-6">
          <h2 className="text-primary text-xl font-bold flex justify-center ">
            contact us
          </h2>
          <p className="text-white text-3xl">Stay connected with us</p>
        </div>
        <div className="space-y-4 mb-10">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-md w-full max-w-xs "
          />

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-md w-full max-w-xs"
          />

          <input
            type="text"
            placeholder="your message"
            className="input input-bordered input-lg w-full max-w-xs h-28"
          />
        </div>
        <div className="flex justify-center mb-4">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
