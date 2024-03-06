import React from "react"; // Don't forget to import React
import firaWinnerImage from "../../assets/firaWinner.jpg";

const CardAchievement = () => {
  return (
    <div className="relative w-[339px] h-[134px]  items-center flex">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <img
          src={firaWinnerImage}
          alt="tidak ada"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-r from-white via-white"></div>
      <h4 className="relative text-yellow-500 z-10 font-semibold italic text-base w-[152px] ml-6">
        1st Winner Fira Air Competition
      </h4>
    </div>
  );
};

export default CardAchievement;
