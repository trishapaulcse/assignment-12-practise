import React from "react";
import quote from "../assets/icons/quote.svg";
import people1 from "../assets/images/people1.png";
import people2 from "../assets/images/people2.png";
import people3 from "../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "wilson",
      review: "",
      location: "california",
      img: people1,
    },
    {
      _id: 2,
      name: "wilson",
      review: "",
      location: "california",
      img: people2,
    },
    {
      _id: 3,
      name: "wilson",
      review: "",
      location: "california",
      img: people3,
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our patients say</h2>
        </div>
        <div>
          <img src={quote} className="w-28 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
