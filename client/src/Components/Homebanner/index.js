import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Homebanner = () => {
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://www.thealaskaclub.com/hubfs/Card%20%235530%20TAC%20Free%20Friend%20Friday%20website%20banner.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://www.thealaskaclub.com/hubfs/Card%20%235530%20TAC%20Free%20Friend%20Friday%20website%20banner.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://www.thealaskaclub.com/hubfs/Card%20%235530%20TAC%20Free%20Friend%20Friday%20website%20banner.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://www.thealaskaclub.com/hubfs/Card%20%235530%20TAC%20Free%20Friend%20Friday%20website%20banner.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Homebanner;
