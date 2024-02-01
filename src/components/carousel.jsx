import React, { useState } from "react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import LogoDivisi1 from "../assets/division-logo-racingplane.svg";
import "swiper/swiper-bundle.css"; // Import the main CSS file

const Carousel = () => {
  const Data = [
    {
      image: image5,
      logoDivisi: LogoDivisi1,
      title: "Racing Plane",
      link: "/racingPlane",
    },
    {
      image: image1,
      logoDivisi: LogoDivisi1,
      title: "VTOL",
      link: "/vtol",
    },
    {
      image: image4,
      logoDivisi: LogoDivisi1,
      title: "Fixed Wing",
      link: "/fixedWing",
    },
    {
      image: image3,
      logoDivisi: LogoDivisi1,
      title: "Technology Development",
      link: "/TechnologyDevelopment",
    },
    {
      image: image2,
      logoDivisi: LogoDivisi1,
      title: "Official",
      link: "/official",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div className="carousel-container w-full items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        onSlideChange={handleSlideChange}
        spaceBetween={500}
        slidesPerView={window.innerWidth > 768 ? 2 : 1}
        coverflowEffect={{
          rotate: 0,
          stretch: 2,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className=""
      >
        {Data.map((item, index) => (
          <SwiperSlide key={index} className="mb-5">
            <img
              src={item.image}
              alt={`Image ${index}`}
              className={`h-96 mx-auto max-lg:h-48 ${
                index === currentSlide ? "opacity-100" : "opacity-40"
              }`}
              style={{ transition: "opacity 0.5s ease-in-out" }}
            />
          </SwiperSlide>
        ))}
        <div className="slider-controler w-1/2 absolute m-auto inset-0 max-lg:w-11/12">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
        <div className="swiper-pagination mt-0"></div>
      </Swiper>
      <div className="w-full flex flex-col items-center mt-5 gap-6">
        <div className="min-w-[17%] px-4 py-2 bg-yellow-500 text-white font-bold text-lg flex justify-center items-center gap-2 max-lg:w-3/4">
          <img src={LogoDivisi1} alt="" className="w-10" />
          <p>{Data[currentSlide].title}</p>
        </div>
        <button className="flex items-center justify-center w-1/6 max-lg:w-3/4 text-white border-yellow-500 gap-5 px-8 py-2 border-2 hover:bg-yellow-500 hover:text-white hover:transition-all hover:duration-300">
          <p className="font-regular text-md ">See Detail Division!</p>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
