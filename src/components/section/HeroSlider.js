import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroFrom from "./HeroFrom";
const HeroSlider = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-form">
            <HeroFrom />
          </div>
        </div>
      </section>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
