import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import heroBgImg from "../assets/images/hero-bg-1.webp";
import heroImg1 from "../assets/images/hero-1-1.webp";

export const Carousel = () => {
  const divStyle = {
    backgroundImage: `url(${heroBgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full" style={divStyle}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[700px]"
      >
        <SwiperSlide>
          <div className="flex h-full max-w-screen-xl mx-auto">
            <div className="text-white w-1/2 flex flex-col gap-10 justify-center">
              <span className="text-xl font-medium">Welcome to Hmart</span>
              <span className="text-7xl font-medium">
                Your Home <br />
                Smart Devices &amp; <br />
                Best Solution
              </span>
              <button
                type="button"
                className="text-xl font-bold text-white hover:text-white border-2 border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Default
              </button>
            </div>
            <div className="w-1/2 p-10 flex justify-center">
              <img src={heroImg1} alt="hero image 1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};
