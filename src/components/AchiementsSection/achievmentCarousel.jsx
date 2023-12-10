import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the Autoplay CSS

import CardAchievement from "./cardAchievment";

const AchievementsCarousel = () => {
  return (
    <Swiper
      slidesPerView={3}
      direction="vertical"
      loop
      speed={1000}
      grabCursor
      className="w-fit h-full flex flex-col gap-6"
      autoplay={{
        delay: -1, // Set a delay value in milliseconds
        disableOnInteraction: false,
      }}
      modules={[Autoplay]} // Pass Autoplay as a module
    >
      <SwiperSlide>
        <div className="flex w-fit gap-6">
          <CardAchievement />
          <CardAchievement />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-fit  gap-6 ml-12">
          <CardAchievement />
          <CardAchievement />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-fit gap-6">
          <CardAchievement />
          <CardAchievement />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-fit  gap-6 ml-12">
          <CardAchievement />
          <CardAchievement />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AchievementsCarousel;
