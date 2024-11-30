import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Slider1 from "../assets/silder1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";

const SwiSlider = () => {
  return (
    <div className="lg:w-full lg:max-w-screen-2xl lg:mx-auto my-12 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide className="mx-5">
          <img
            src={Slider1}
            alt="Slide 1"
            className="w-full rounded-lg h-[40rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider2}
            alt="Slide 2"
            className="w-full rounded-lg h-[40rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider3}
            alt="Slide 3"
            className="w-full rounded-lg h-[40rem]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiSlider;
