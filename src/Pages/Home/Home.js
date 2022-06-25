import React from "react";
import BabyBanner from "./BabyBanner";
import Contact from "./Contact";
import Banner from "./Banner/Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";

import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "../../Shared/Footer";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <BabyBanner></BabyBanner>
      <MakeAppointment></MakeAppointment>
      <Contact></Contact>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
