import { Disclosure } from "@headlessui/react";
import chevron from "../../assets/chevron.svg";
import questionIcon from "../../assets/question-icon.svg";
import { useState } from "react";

export default function DisclosureQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const clickRecent = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="mx-auto w-3/4 shadow-md py-5 px-4 bg-white p-2"
        >
          <Disclosure open={openIndex === index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="w-full flex justify-between bg-white"
                  onClick={() => clickRecent(index)}
                >
                  <div className="flex gap-2">
                    <img src={questionIcon} alt="" />
                    <span
                      className={`${
                        open ? "text-yellow-500" : "text-black"
                      } font-medium`}
                    >
                      What is the focus of Bayucaraka research?
                    </span>
                  </div>
                  <img
                    src={chevron}
                    className={`h-5 w-5 ${
                      open ? "rotate-180 fill-yellow-500" : "fill-black"
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm font-light text-gray-500">
                  Bayucarakas research focuses on autonomous aerial systems and
                  advanced technologies for drones. The team has participated in
                  national and international competitions, such as Kontes Robot
                  Terbang Indonesia, FIRA Air, and Tubitak Teknofest.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
}
