import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core"; // Update this import

// Import Swiper styles
import "swiper/css"; // Update this import
import "swiper/css/pagination";
function Sponser() {
  return (
    <div>
      <div className="sponser-section">
        <div className="container">
          <div className="sponser-slider">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className="slider-item-details">
                  <img src="assets/img/sponser1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item-details">
                  <img src="assets/img/sponser1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item-details">
                  <img src="assets/img/sponser1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item-details">
                  <img src="assets/img/sponser1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item-details">
                  <img src="assets/img/sponser1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item-details">
                  <img src="assets/img/sponser1.png" alt="" />
                </div>
              </SwiperSlide>
              {/* Add more slides as needed */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponser;
