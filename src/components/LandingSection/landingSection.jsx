import React from "react";
import backgroundVideo from "../../assets/videoplayback.mp4";
import arrowDown from "../../assets/arrow-down.svg";
import { Link } from "react-router-dom";
import playIcon from "../../assets/play-icon.svg";

const LandingSection = () => {
  return (
    <div className="flex items-center text-center w-full h-screen px-16">
      <video
        autoPlay
        loop
        muted
        className="absolute -z-10 left-0 -top-13 w-full"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="content w-full flex flex-col">
        <div className="capt flex flex-col text-left gap-2">
          <div className="text-6xl text-white font-extrabold">BAYUCARAKA</div>
          <div className="text-5xl text-white font-semibold">
            Garudaku Jaya Selalu!
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <Link className="relative inline-block animate-custom-bounce">
            <img
              src={arrowDown}
              alt=""
              className="opacity-100 transition-opacity duration-500 w-14"
            />
          </Link>
          <button className="flex items-center gap-4 px-8 h-fit py-3 border-2 hover:bg-yellow-500 hover:transition-all hover:duration-300">
            <p className="font-semibold text-lg">Play Video</p>
            <img src={playIcon} alt="" className="w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
