import React, { useState } from "react";
import TeamCard from "./cardTeam";
import generalManager from "../../assets/galih-image.jpg";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/swiper-bundle.css";

export default function Team() {
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
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col py-16 items-center gap-12">
      <div className="text-black font-bold text-3xl w-fit h-fit py-3 relative ">
        <div className="w-4/5 h-full bg-yellow-500 absolute m-auto inset-0" />
        <p className="z-10 relative">BAYUCARAKA TEAM</p>
      </div>
      <div className="carousel-container w-full items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          onSlideChange={handleSlideChange}
          spaceBetween={500}
          slidesPerView={1}
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
            <SwiperSlide key={index} className="mb-10 mx-auto">
              <TeamCard
                gambar={item.gambar}
                nama={item.nama}
                jabatan={item.jabatan}
                pesan={item.pesan}
              />
            </SwiperSlide>
          ))}
          <div className="slider-controler w-11/12 absolute m-auto inset-0">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
          <div className="swiper-pagination mt-10"></div>
        </Swiper>
      </div>
    </div>
  );
}
