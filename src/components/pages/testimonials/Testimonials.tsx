import React from "react";
import TestimonialsSwiper from "../testimonials/testimonialsSwiper/TestimonialsSwiper";
import testimonialBG from "../../../styles/GeneralStyles.module.css";

const Testimonials = () => {
  return (
    <>
      <div
        className={` w-full font-nunito  bg-blend-darken h-[500px] ${testimonialBG.testimonialBG}`}
      ></div>
      <div>
        <h1 className="text-4xl font-nunito font-bold text-center my-4">
          Student Reviews
        </h1>
        <h1 className="text-2xl font-nunito font-bold text-center">
          What students are saying about Fourth IT Academy?
        </h1>
      </div>
      <TestimonialsSwiper></TestimonialsSwiper>
    </>
  );
};

export default Testimonials;
