// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ProductCard } from "../ProductCard.jsx";

export default function ProductCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={5}
        centeredSlides={false}
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
        className="mySwiper w-full"
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides on small screens
          },
          768: {
            slidesPerView: 3, // 3 slides on medium screens
          },
          1024: {
            slidesPerView: 4, // 4 slides on large screens
          },
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
