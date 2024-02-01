import React from "react";
import { Link } from "react-router-dom";

// Import Component
import Carousel from "../components/carousel";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TeamCard from "../components/ui/cardTeam";
import AchievementsCarousel from "../components/achievmentCarousel";

// Import Icon
import playIcon from "../assets/play-icon.svg";
import arrowDown from "../assets/arrow-down.svg";
import chevron from "../assets/chevron.svg";

//import Media
import backgroundVideo from "../assets/videoplayback.mp4";
import generalManager from "../assets/galih-image.png";
import roboticLogo from "../assets/robotic-logo.png";
import itsLogo from "../assets/its-logo.png";
import bkpcepuLogo from "../assets/bkpcepu-logo.png";
import pertaminacepuLogo from "../assets/pertaminacepu-logo.png";
import pertaminaLogo from "../assets/pertamina-logo.png";
import skkmigasLogo from "../assets/skkmigas-logo.png";
import sigLogo from "../assets/sig-logo.png";
import iogLogo from "../assets/iog-logo.png";
import exxonmobileLogo from "../assets/exxonmobil-logo.png";
import imageAbout1 from "../assets/about-image-1.png";
import imageAbout2 from "../assets/about-image-2.png";
import imageAbout3 from "../assets/about-image-3.png";
import imageAbout4 from "../assets/about-image-4.png";
import newsImage1 from "../assets/news-image-1.png";
import newsImage2 from "../assets/news-image-2.png";
import newsImage3 from "../assets/news-image-3.png";
import sponsorImage from "../assets/image-sponsor.jpg";
import supportImage from "../assets/image-support.jpg";

export default function LandingPage() {
  const Data = [
    {
      gambar: generalManager,
      nama: "Galih Sukma Adjie",
      jabatan: "general Manager Bayucaraka",
      pesan:
        "“I am the general manager in charge of important matters at Bayucaraka. Nice to meet you”",
    },
    {
      gambar: generalManager,
      nama: "Galih Sukma Adjie",
      jabatan: "general Manager Bayucaraka",
      pesan:
        "“I am the general manager in charge of important matters at Bayucaraka. Nice to meet you”",
    },
    {
      gambar: generalManager,
      nama: "Galih Sukma Adjie",
      jabatan: "general Manager Bayucaraka",
      pesan:
        "“I am the general manager in charge of important matters at Bayucaraka. Nice to meet you”",
    },
    {
      gambar: generalManager,
      nama: "Galih Sukma Adjie",
      jabatan: "general Manager Bayucaraka",
      pesan:
        "“I am the general manager in charge of important matters at Bayucaraka. Nice to meet you”",
    },
  ];

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
    <>
      <Navbar />
      {/* First Section */}
      <div className="flex items-center text-center w-full h-screen px-16 max-lg:items-end max-lg:mb-16">
        <div className="absolute -z-10 left-0 -top-14 w-full overflow-hidden max-lg:-top-14 ">
          <video
            autoPlay
            loop
            muted
            className="w-full scale-105 max-lg:h-[1040px] object-cover"
          >
            <source
              src={backgroundVideo}
              type="video/mp4"
              className="max-lg:w-full"
            />
          </video>
        </div>
        <div className="content w-full flex flex-col max-lg:gap-6 max-lg:justify-start">
          <div className="capt flex flex-col text-left gap-2">
            <div className="text-6xl text-white font-extrabold max-lg:text-4xl">
              BAYUCARAKA
            </div>
            <div className="text-5xl text-white font-semibold max-lg:text-xl">
              Garudaku Jaya Selalu!
            </div>
          </div>
          <div className="flex w-full items-center justify-between max-lg:flex-col-reverse max-lg:w-fit">
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

      {/* About Section */}
      <div className="py-32 bg-white w-full flex gap-2 items-center px-9 max-lg:flex-col max-lg:py-10">
        <div className="w=1/4 flex flex-wrap gap-6 max-lg:w-full max-lg:gap-10 max-lg:justify-center max-lg:mb-4">
          <div className="border-yellow-400  h-fit border-4 -rotate-6 hover:rotate-0 transition-transform  ">
            <img src={imageAbout1} alt="" />
          </div>
          <div className="border-yellow-400 w-fit h-fit border-4 rotate-3 hover:rotate-0 transition-transform ">
            <img src={imageAbout2} alt="" />
          </div>
          <div className="border-yellow-400 w-fit h-fit border-4 -rotate-3 hover:rotate-0 transition-transform ">
            <img src={imageAbout3} alt="" />
          </div>
          <div className="border-yellow-400 w-fit h-fit border-4 rotate-6 hover:rotate-0 transition-transform ">
            <img src={imageAbout4} alt="" />
          </div>
        </div>
        <div className=" w-full flex flex-col gap-6">
          <h2 className="text-black font-bold text-4xl">
            We’re UAV Team Research,{" "}
            <span className="text-yellow-500">Bayucaraka</span> ITS Team
          </h2>
          <p className="text-black text-md">
            The name of Bayucaraka comes from two words, namely Bayu which means
            the great god of wind and Caraka which means messenger. So
            Bayucaraka means is messenger of the wind god. <br /> <br /> The ITS
            Bayucaraka Team is a team that operates under the auspices of the
            Sepuluh Nopember Institute of Technology. It was founded in 2015.
            This team focuses on developing UAVs or unmanned aircraft research
            which is divided into four technical divisions with different
            missions, namely fixed wing, Vertical Take Off & Landing , Racing
            Plane,and Technologynn Development
          </p>
          <button className="flex items-center w-fit text-black border-yellow-500 gap-5 px-8 py-2 border-2 hover:bg-yellow-500 hover:text-white hover:transition-all hover:duration-300">
            <p className="font-regular text-lg ">See Full</p>
          </button>
        </div>
      </div>

      {/* News Section */}
      <div className="flex flex-col bg-white pb-16 px-9 gap-6">
        <h2 className="text-black font-bold text-4xl">
          <span className="text-yellow-500">Bayucaraka</span> It’s on Media
          News!
        </h2>
        <div className="flex gap-8 w-full  justify-between max-lg:flex-col">
          <a href="" className="flex items-center justify-center w-full h-full">
            <div className="border-yellow-400 w-full h-fit border-4 relative overflow-hidden">
              <div className="relative">
                <img
                  src={newsImage1}
                  alt=""
                  className="w-full transition-transform transform scale-100 hover:scale-110"
                />
              </div>
              <div className="w-full absolute bottom-6">
                <div className="bg-white py-4 px-2 w-[300px] mx-auto border-2 border-yellow-500">
                  <h2 className="text-black font-medium text-md">
                    <span className="text-yellow-500">Bayucaraka</span> Upload
                    on Direktorat Jenderal Pendidika Indonesia
                  </h2>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="flex items-center justify-center w-full h-full">
            <div className="border-yellow-400 w-full h-fit border-4 relative overflow-hidden">
              <div className="relative">
                <img
                  src={newsImage2}
                  alt=""
                  className="w-full transition-transform transform scale-100 hover:scale-110"
                />
              </div>
              <div className="w-full absolute bottom-6">
                <div className="bg-white py-4 px-2 w-[300px] mx-auto border-2 border-yellow-500">
                  <h2 className="text-black font-medium text-md">
                    <span className="text-yellow-500">Bayucaraka</span> Upload
                    on Direktorat Jenderal Pendidika Indonesia
                  </h2>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="flex items-center justify-center w-full h-full">
            <div className="border-yellow-400 w-full h-fit border-4 relative overflow-hidden">
              <div className="relative">
                <img
                  src={newsImage3}
                  alt=""
                  className="w-full transition-transform transform scale-100 hover:scale-110"
                />
              </div>
              <div className="w-full absolute bottom-6">
                <div className="bg-white py-4 px-2 w-[300px] mx-auto border-2 border-yellow-500">
                  <h2 className="text-black font-medium text-md">
                    <span className="text-yellow-500">Bayucaraka</span> Upload
                    on Direktorat Jenderal Pendidika Indonesia
                  </h2>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="flex items-center justify-center w-full h-full">
            <div className="border-yellow-400 w-full h-fit border-4 relative overflow-hidden">
              <div className="relative">
                <img
                  src={newsImage1}
                  alt=""
                  className="w-full transition-transform transform scale-100 hover:scale-110"
                />
              </div>
              <div className="w-full absolute bottom-6">
                <div className="bg-white py-4 px-2 w-[300px] mx-auto border-2 border-yellow-500">
                  <h2 className="text-black font-medium text-md">
                    <span className="text-yellow-500">Bayucaraka</span> Upload
                    on Direktorat Jenderal Pendidika Indonesia
                  </h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-16 gap-14 bg-slate-950">
        <div className="text-white font-bold text-3xl w-fit h-fit py-3 relative ">
          <div className="w-4/5 h-full bg-yellow-500 absolute m-auto inset-0" />
          <p className="z-10 relative">Let’se All Division</p>
        </div>
        <Carousel />
      </div>

      {/* Team Section */}
      <div className="w-full h-screen justify-center bg-white flex flex-col py-16 items-center gap-12 max-lg:h-full">
        <div className="text-black font-bold text-3xl w-fit h-fit py-3 relative ">
          <div className="w-4/5 h-full bg-yellow-500 absolute m-auto inset-0" />
          <p className="z-10 relative">This Is Our Team</p>
        </div>
        <div className="flex w-full items-center gap-8 px-8 max-lg:flex-col h-fit">
          {Data.map((item, index) => (
            <TeamCard
              key={index}
              gambar={item.gambar}
              nama={item.nama}
              jabatan={item.jabatan}
              pesan={item.pesan}
            />
          ))}
        </div>
      </div>

      {/* Achievment Section */}
      <div className="flex gap-16 pl-12 h-[517px] justify-center items-center overflow-hidden bg-slate-950 max-lg:flex-col max-lg:h-full max-lg:pl-0">
        <div className="flex flex-col gap-6 w-1/2 px-4 max-lg:w-full max-lg:px-10 max-lg:py-8">
          <h1 className="font-bold text-5xl">
            Our journey to become world-class
          </h1>
          <p className="font-light text-md">
            Our team participated from national competition to international
            ones. We participated in Kontes Robot Terbang Indonesia, FIRA Air,
            and Tubitak Teknofest. We gained many achievements from 2015 until
            present
          </p>
          <button className="flex items-center justify-center w-fit text-white border-yellow-500 gap-2 px-5 py-3 border-2 hover:bg-yellow-500 hover:text-white hover:transition-all hover:duration-300">
            <p className="font-regular text-md ">See All Achievments</p>
            <img src={chevron} alt="" className="-rotate-90" />
          </button>
        </div>
        <AchievementsCarousel />
      </div>

      {/* Sponsor Section */}
      <div className="flex flex-col  bg-white py-16 px-16 gap-5 justify-center items-center">
        <div className="text-black font-bold text-3xl w-fit h-fit py-3 relative ">
          <div className="w-4/5 h-full bg-yellow-500 absolute m-auto inset-0" />
          <p className="z-10 relative">Our Patron</p>
        </div>
        <div className="w-full grid-cols-3 grid gap-5 max-lg:grid-cols-1">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="px-5 py-5 border-2 w-full flex justify-center"
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

      {/* Support Section */}
      <div className="flex flex-col  bg-white py-16 items-center justify-center gap-5 ">
        <div className="text-black font-bold text-3xl w-fit h-fit py-3 relative ">
          <p className="z-10 relative">Do You Want To Support?</p>
        </div>
        <div className="flex gap-24 w-full overflow-hidden  max-lg:flex-col max-lg:gap-10 max-lg:px-8">
          <a
            href=""
            className="flex items-center justify-center w-full h-full scale-110"
          >
            <div className="w-fit h-fit  transition-transform relative group overflow-hidden">
              <div className="w-full h-full flex justify-center items-center z-10 absolute bottom-0">
                <p className=" text-white  text-5xl font-semibold max-lg:text-xl">
                  Sponsor Us
                </p>
              </div>
              <img
                src={sponsorImage}
                alt=""
                className="group-hover:scale-105"
              />
              <div className="absolute w-full h-full bg-slate-950 opacity-30 bottom-0" />
            </div>
          </a>
          <a
            href=""
            className="flex items-center justify-center w-full h-full scale-110"
          >
            <div className=" w-fit h-fit  transition-transform relative group overflow-hidden">
              <div className="w-full h-full flex justify-center items-center z-10 absolute bottom-0">
                <p className=" text-white  text-5xl font-semibold max-lg:text-xl">
                  Technichal Support
                </p>
              </div>
              <img
                src={supportImage}
                alt=""
                className="group-hover:scale-105"
              />
              <div className="absolute w-full h-full bg-slate-950 opacity-30 bottom-0" />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
