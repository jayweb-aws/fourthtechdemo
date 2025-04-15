import React from "react";
import heroStyle from "../../../styles/BootcampHero.module.css";

const HeroCover = ({ title, desc }: { title: String; desc: String }) => {
  return (
    <div className={` w-full bg-blend-darken my-16 h-96 ${heroStyle.bgImg}`}>
      <div className="flex justify-center items-center">
        <div className="">
          <h1 className="font-bold text-white text-4xl mt-[11rem] text-center">
            {title}
          </h1>
          <p className="text-center text-white font-light mt-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCover;
