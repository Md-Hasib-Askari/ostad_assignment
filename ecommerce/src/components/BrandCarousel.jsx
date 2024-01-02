// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import brand1 from "../assets/images/brands/1.webp";
import brand2 from "../assets/images/brands/2.webp";
import brand3 from "../assets/images/brands/3.webp";
import brand4 from "../assets/images/brands/4.webp";

export default function BrandCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
          enabled: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={brand1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={brand2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={brand3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={brand4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
