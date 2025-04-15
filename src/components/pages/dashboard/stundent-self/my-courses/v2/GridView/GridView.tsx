import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";

const GridView = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
        }}
        spaceBetween={5}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        scrollbar={{
          hide: false,

          draggable: true,
        }}
        className="mySwiper relative"
        modules={[Scrollbar, Navigation]}
      >
        <SwiperSlide className="swiper-slide my-6">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-6">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-6">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-6">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-6">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-6">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-6">
          <Card />
        </SwiperSlide>

        <div className="button-prev-slide absolute top-[42%] z-10  flex w-fit cursor-pointer items-center justify-center rounded-full bg-[#ECF1F3] p-2 text-white">
          <IoIosArrowBack className="text-[20px] text-[#4849E8]" />
        </div>
        <div className="button-next-slide absolute top-[42%] right-0 z-10 flex w-fit cursor-pointer items-center justify-center rounded-full bg-[#ECF1F3] p-2 text-white">
          <IoIosArrowForward className="text-[20px] text-[#4849E8]" />
        </div>
      </Swiper>
    </div>
  );
};

export default GridView;
