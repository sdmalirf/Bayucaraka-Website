import React from "react";
import bayucarakaLogo from "../assets/bayucarakaLogoDark.svg";

export default function ComingSoon() {
  return (
    <div className="bg-white h-screen w-screen text-black font-extrabold text-7xl flex justify-center items-center flex-col">
      <div className="flex flex-col w-3/4 h-fit py-14 px-14 justify-center items-center shadow-xl rounded-3xl">
        <img src={bayucarakaLogo} alt="" className="w-48" />
        Coming Soon!
      </div>
    </div>
  );
}
