import React from "react";
import instagramIcon from "../../assets/instagram.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import emailIcon from "../../assets/Email.svg";
import youtubeIcon from "../../assets/youtube.svg";
import MapGoogle from "./map";

export default function ContactSection() {
  return (
    <div className="flex bg-white pl-11 py-16 w-full gap-20 overflow-hidden ">
      <div className="flex flex-col gap-10 w-2/3">
        <div className="title text-black w-fit px-8 py-4 h-fit bg-yellow-500 text-center font-extrabold text-2xl">
          CONTACT
        </div>
        <div className="flex gap-4">
          <img src={emailIcon} alt="" />
          <p className="text-blue-950 font-medium text-sm">
            official.bayucaraka@gmail.com
          </p>
        </div>
        <div className="flex gap-4">
          <img src={instagramIcon} alt="" />
          <p className="text-blue-950 font-medium text-sm">bayucaraka.its</p>
        </div>
        <div className="flex gap-4">
          <img src={youtubeIcon} alt="" />
          <p className="text-blue-950 font-medium text-sm">
            Bayucaraka ITS UAV Research Team
          </p>
        </div>
        <div className="flex gap-4">
          <img src={linkedinIcon} alt="" />
          <p className="text-blue-950 font-medium text-sm">
            Bayucaraka ITS UAV Research Team
          </p>
        </div>
        <h6 className="font-sm font-semibold text-black">
          Do You Want To Sponsor Us Or Need Technical Support?
        </h6>
        <div className="w-full flex gap-6">
          <button className="flex items-center justify-center w-full text-black border-gray-500 gap-5 px-5 py-3 border-2 hover:bg-yellow-500 hover:text-white hover:transition-all hover:duration-300">
            <p className="font-regular text-md ">Sponso Us</p>
          </button>
          <button className="flex items-center justify-center w-full text-black border-gray-500 gap-5 px-5 py-3 border-2 hover:bg-yellow-500 hover:text-white hover:transition-all hover:duration-300">
            <p className="font-regular text-md ">Technical Support</p>
          </button>
        </div>
      </div>
      <div className="w-full relative">
        <div className="absolute bg-yellow-500 w-[717px] h-[490px] -top-3 -left-3"></div>
        <MapGoogle />
      </div>
    </div>
  );
}
