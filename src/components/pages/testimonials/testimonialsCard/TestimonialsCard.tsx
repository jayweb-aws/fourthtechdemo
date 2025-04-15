import React from "react";
import Image from "next/image";

import { FaQuoteRight } from "react-icons/fa";
import cardImg from "../../../../assets/amazon.png";

const TestimonialsCard = ({
  id,
  designation,
  name,
  imgSrc,
  desc,
}: {
  name: string;
  designation: string;
  id: number;
  imgSrc: any;
  desc: string;
}) => {
  return (
    <>
      <div className="w-full bg-lime-100 rounded-lg border shadow-slate-200 border-gray-200 shadow-lg font-nunito">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <FaQuoteRight className="my-3 text-3xl" />
            <p className="text-center my-3 font-nunito">
              {id}
              {desc}
            </p>

            <Image
              width={35}
              height={35}
              className="mb-3 rounded-full shadow-lg my-3"
              src={imgSrc}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-3xl font-medium text-gray-900  my-3 font-nunito">
              {name}
            </h5>
            <span className="text-xl text-gray-500  my-3 font-N=nunito">
              {designation}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
