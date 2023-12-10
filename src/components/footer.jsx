import React from "react";
import { Link } from "react-router-dom";
import icon2 from "../assets/vector-1.svg";
import icon3 from "../assets/vector-2.svg";
import icon4 from "../assets/vector-3.svg";

export default function Footer() {
  return (
    <div className="flex flex-col py-8 px-8 gap-8 text-black bg-white">
      <div className="flex justify-between">
        <div className="flex-col flex gap-6">
          <h3 className="text-2xl font-bold">BAYUCARAKA</h3>
          <p className="font-normal text-gray-500">
            ITS Robotics Center 60111, Jalan ITS Raya,
            <br /> Keputih,
            <br />
            Kec. Sukolilo, <br />
            Kota Surabaya, Jawa Timur
            <br /> Indonesia
          </p>
          <p className="font-light">
            <span className="font-semibold">Phone:</span> +6281250108776
            <br />
            <span className="font-semibold">Email:</span>{" "}
            official.bayucaraka@gmail.com
          </p>
        </div>
        <div className="right flex flex-col gap-8">
          <Link
            className={`font-bold text-md ${location.pathname.includes("/")}`}
            activeClassName={`font-semibold text-base ${
              location.pathname.includes("/aboutUs") && "text-gray-100"
            }`}
            to="/aboutUs"
          >
            About Us
          </Link>

          <Link
            className={`font-bold text-md ${location.pathname.includes("/")}`}
            activeClassName={`font-semibold text-base ${
              location.pathname.includes("/aboutUs") && "text-gray-100"
            }`}
            to="/aboutUs"
          >
            Team
          </Link>
          <Link
            className={`font-bold text-md ${location.pathname.includes("/")}`}
            activeClassName={`font-semibold text-base ${
              location.pathname.includes("/aboutUs") && "text-gray-100"
            }`}
            to="/aboutUs"
          >
            Achievements
          </Link>
          <Link
            className={`font-bold text-md ${location.pathname.includes("/")}`}
            activeClassName={`font-semibold text-base ${
              location.pathname.includes("/aboutUs") && "text-gray-100"
            }`}
            to="/aboutUs"
          >
            FAQ
          </Link>
          <Link
            className={`font-bold text-md ${location.pathname.includes("/")}`}
            activeClassName={`font-semibold text-base ${
              location.pathname.includes("/aboutUs") && "text-gray-100"
            }`}
            to="/aboutUs"
          >
            Contact
          </Link>
        </div>
        <div className="right flex flex-col gap-3">
          <Link
            className={`font-bold text-md ${location.pathname.includes("/")}`}
            to="/aboutUs"
          >
            Our Division
          </Link>
          <Link
            className={`font-    text-sm ${location.pathname.includes("/")}`}
            to="/aboutUs"
          >
            Racing Plane
          </Link>
          <Link
            className={`font-    text-sm ${location.pathname.includes("/")}`}
            to="/aboutUs"
          >
            Vertical Take Off Landing
          </Link>
          <Link
            className={`font-    text-sm ${location.pathname.includes("/")}`}
            to="/aboutUs"
          >
            Fixed Wing
          </Link>
          <Link
            className={`font-    text-sm ${location.pathname.includes("/")}`}
            to="/aboutUs"
          >
            Technical Development
          </Link>
          <Link
            className={`font-    text-sm ${location.pathname.includes("/")}`}
            to="/aboutUs"
          >
            Official
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h6 className="font-semibold">Our Social Network</h6>
          <p>Follow us for latest update</p>
          <div className="flex justify-center space-x-5">
            <a
              href="#"
              className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-blue-500"
            >
              <img src={icon2} alt="" />
            </a>
            <a
              href="#"
              className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-blue-500"
            >
              <img src={icon2} alt="" />
            </a>
            <a
              href="#"
              className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-blue-500"
            >
              <img src={icon3} alt="" />
            </a>
            <a
              href="#"
              className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-blue-500"
            >
              <img src={icon4} alt="" />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-1 border-black w-full font-normal text-sm" />
      <p>
        © Copyright Official <span className="font-semibold">BAYUCARAKA</span>{" "}
        2022. All Rights Reserved
      </p>
    </div>
  );
}
