import React from "react";
import Carousel from "./carousel";

export default function DivisionSection() {
  return (
    <div className="flex flex-col justify-center items-center py-16 gap-14">
      <div className="title text-black w-96 py-4 h-fit bg-yellow-500 text-center font-extrabold text-4xl">
        Division
      </div>
      <Carousel />
    </div>
  );
}
