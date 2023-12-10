import React from "react";
import roboticLogo from "../../assets/robotic-logo.png";
import itsLogo from "../../assets/its-logo.png";
import bkpcepuLogo from "../../assets/bkpcepu-logo.png";
import pertaminacepuLogo from "../../assets/pertaminacepu-logo.png";
import pertaminaLogo from "../../assets/pertamina-logo.png";
import skkmigasLogo from "../../assets/skkmigas-logo.png";
import sigLogo from "../../assets/sig-logo.png";
import iogLogo from "../../assets/iog-logo.png";
import exxonmobileLogo from "../../assets/exxonmobil-logo.png";

export default function SponsorsSection() {
  const sponsors = [
    roboticLogo,
    itsLogo,
    bkpcepuLogo,
    pertaminacepuLogo,
    pertaminaLogo,
    skkmigasLogo,
    sigLogo,
    iogLogo,
    exxonmobileLogo,
  ];

  return (
    <div className="flex flex-col  bg-slate-50 py-16 px-16 gap-5 justify-center items-center">
      <div className="text-black font-bold text-3xl w-fit h-fit py-3 relative ">
        <div className="w-4/5 h-full bg-yellow-500 absolute m-auto inset-0" />
        <p className="z-10 relative">BAYUCARAKA TEAM</p>
      </div>
      <div className="w-full grid-cols-3 grid gap-5">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="px-5 py-5 border-2 w-[371px] flex justify-center"
          >
            <img
              src={sponsor}
              alt={`Sponsor ${index + 1}`}
              className="scale-75"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
