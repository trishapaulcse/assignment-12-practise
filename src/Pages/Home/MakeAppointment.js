import React from "react";
import doctor from "../assets/images/doctor.png";
import appointment from "../assets/images/appointment.png";
import PrimaryButton from "./PrimaryButton";
const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center my-28"
    >
      <div className="flex-1">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>

      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an appointment today</h2>
        <p className="text-white">
          Lorem40asudhfjadsuyag dfjheagfuyqeagvfuyeargfuyeqag Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
        <div className="pt-10">
          <PrimaryButton>Get started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
