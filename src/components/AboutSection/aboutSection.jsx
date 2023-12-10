import React from "react";
import imageAbout from "../../assets/aboutImage.png";

export default function AboutSection() {
  return (
    <div className="py-16 bg-white flex gap-16 items-center">
      <img src={imageAbout} alt="" />
      <div className="px-12 w-2/5 flex flex-col gap-6">
        <h2 className="text-black font-bold text-4xl">ABOUT US</h2>
        <p className="text-black text-md">
          The name of Bayucaraka comes from two words, namely Bayu which means
          the great god of wind and Caraka which means messenger. So Bayucaraka
          means is messenger of the wind god. <br /> <br /> The ITS Bayucaraka
          Team is a team that operates under the auspices of the Sepuluh
          Nopember Institute of Technology. It was founded in 2015. This team
          focuses on developing UAVs or unmanned aircraft research which is
          divided into four technical divisions with different missions, namely
          fixed wing, Vertical Take Off & Landing , Racing Plane,and
          Technologynn Development
        </p>
        <button className="flex items-center w-fit text-black border-yellow-500 gap-5 px-8 py-2 border-2 hover:bg-yellow-500 hover:text-white hover:transition-all hover:duration-300">
          <p className="font-regular text-lg ">Selengkapnya</p>
        </button>
      </div>
    </div>
  );
}
