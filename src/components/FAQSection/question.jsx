import React from "react";
import DisclosureQuestions from "./disclosure";

export default function Question() {
  return (
    <div className="w-full h-fit bg-slate-100 flex flex-col py-16 items-center gap-12">
      <div className="text-black font-bold text-3xl w-fit h-fit py-3 relative ">
        <div className="w-4/5 h-full bg-yellow-500 absolute m-auto inset-0" />
        <p className="z-10 relative">FREQUENTLY ASKED QUESTIONS</p>
      </div>
      <DisclosureQuestions />
    </div>
  );
}
