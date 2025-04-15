import React from "react";
import CardSlider from "../../../common/cardSlider/CardSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../styles/testimonialsSwiperStyles.module.css";
import cardImg from "../../../../assets/instructors.png";
import { FaQuoteRight } from "react-icons/fa";
import {
  Pagination,
  Navigation,
  Autoplay,
  Grid,
  Controller,
  A11y,
  EffectFade,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import "./styles.css";

// import required modules
import Image from "next/image";

const TestimonialsSwiper = () => {
  const cards = [
    {
      name: "Jhon Doe",
      desig: "CEO",
      src: cardImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse corrupti? Fuga, explicabo sed? Minus fuga perferendis consectetur excepturi maxime!",
    },
    {
      name: "Smith Noel",
      desig: "CRO",
      src: cardImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse corrupti? Fuga, explicabo sed? Minus fuga perferendis consectetur excepturi maxime!",
    },
    {
      name: "Dayana Koyal",
      desig: "Manger",
      src: cardImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse corrupti? Fuga, explicabo sed? Minus fuga perferendis consectetur excepturi maxime!",
    },
    {
      name: "Harsh Bhogle",
      desig: "Tech Lead",
      src: cardImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse corrupti? Fuga, explicabo sed? Minus fuga perferendis consectetur excepturi maxime!",
    },
    {
      name: "Harsh Bhogle",
      desig: "Tech Lead",
      src: cardImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse corrupti? Fuga, explicabo sed? Minus fuga perferendis consectetur excepturi maxime!",
    },
    {
      name: "Harsh Bhogle",
      desig: "Tech Lead",
      src: cardImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse corrupti? Fuga, explicabo sed? Minus fuga perferendis consectetur excepturi maxime!",
    },
    {
      name: "Harsh Bhogle",
      desig: "Tech Lead",
      src: cardImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse corrupti? Fuga, explicabo sed? Minus fuga perferendis consectetur excepturi maxime!",
    },
    {
      name: "Harsh Bhogle",
      desig: "Tech Lead",
      src: cardImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse corrupti? Fuga, explicabo sed? Minus fuga perferendis consectetur excepturi maxime!",
    },
    {
      name: "Harsh Bhogle",
      desig: "Tech Lead",
      src: cardImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, esse corrupti? Fuga, explicabo sed? Minus fuga perferendis consectetur excepturi maxime!",
    },
  ];
  return (
    <div className=" mx-12  my-10 md:my-5 sm:my-1">
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        grid={{
          rows: 3,
        }}
        breakpoints={{
          600: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          // 851: {
          //   slidesPerView: 3,
          //   spaceBetween: 20,
          // },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
        modules={[Grid, Navigation, Autoplay, A11y, EffectFade, Controller]}
        className="lg:h-[1200px] h-[1100px] md:h-[1100px] "
      >
        {Array.from({ length: 100 }).map((_, idx) => (
          <SwiperSlide key={idx} className="swiperjs-slide ">
            <div
              key={idx}
              className="max-w-[450px] max-h-[320px] bg-cyan-100 rounded-lg  shadow-slate-200  shadow-xl font-nunito"
            >
              <div className="flex ">
                <div className="flex flex-col items-center justify-center lg:py-8 lg:px-4 px-3 py-5 ">
                  <FaQuoteRight className=" xl:my-3 lg:my-3 sm:my-1 md:my-1 xsm:my-1 text-3xl" />
                  <p className="text-center xl:my-3 lg:my-3 md:my-1 sm:my-1 xsm:my-1 font-nunito">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, esse corrupti? Fuga, explicabo sed?
                  </p>

                  <Image
                    width={50}
                    height={50}
                    className=" w-50 h-50 rounded-full shadow-lg xl:my-3 lg:my-3 md:my-1 sm:my-1 xsm:my-1"
                    src={cardImg}
                    alt="Bonnie image"
                  />
                  <p className=" text-3xl font-medium text-gray-900 font-nunito xl:my-3 md:my-1 lg:my-3 sm:my-1 xsm:my-1">
                    Jhon Doe
                  </p>
                  <span className="text-xl text-gray-500  ">Tech Lead</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TestimonialsSwiper;
