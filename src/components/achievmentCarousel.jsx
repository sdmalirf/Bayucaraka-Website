import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the Autoplay CSS

import CardAchievement from "./ui/cardAchievment";

const generateCardGroup = () => (
  <div className="max-lg:flex max-lg:flex-col">
    <div className="flex w-fit gap-6 mb-4">
      <CardAchievement />
      <CardAchievement />
    </div>
    <div className="flex w-fit gap-6 mb-4 -ml-10">
      <CardAchievement />
      <CardAchievement />
    </div>
  </div>
);

const AchievementsCarousel = () => {
  return (
    <div className="flex -mr-10 max-lg:w-full max-lg:h-full max-lg:overflow-hidden max-lg:-mr-0 lg:flex-col max-lg:gap-6">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="inline-block max-lg:flex max-lg:gap-6"
          style={{ animation: "10s slide infinite linear" }}
        >
          <style>
            {`
            @keyframes slide {
              from {
                transform: translateY(0);
              }
              to {
                transform: translateY(-100%);
              }
            }

            @media (max-width: 1023px) {
              @keyframes slide {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-100%);
                }
              }
            }
          `}
          </style>
          {generateCardGroup()}
          {generateCardGroup()}
          {generateCardGroup()}
        </div>
      ))}
    </div>
  );
};

export default AchievementsCarousel;
