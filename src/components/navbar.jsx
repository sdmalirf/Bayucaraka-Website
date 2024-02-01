import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import chevron from "../assets/chevron.svg";
import logoBayucarakawhite from "../assets/bayucarakaLogo.svg";

const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 660);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full px-14 py-2 flex justify-between items-center fixed z-20 top-0 max-lg:px-6 ${
        isScrolled
          ? "bg-slate-950 text-white transition-all duration-2000 ease-in-out fill-white"
          : "text-white max-lg:bg-slate-950"
      }`}
    >
      <div className="left">
        <Link to="/">
          <img src={logoBayucarakawhite} alt="" className="w-14" />
        </Link>
      </div>
      <div className="right flex gap-8 items-center max-lg:hidden">
        <NavLink
          className={`font-medium text-md ${location.pathname.includes("/")}`}
          activeClassName={`font-semibold text-base ${
            location.pathname.includes("/aboutUs") && "text-gray-100"
          }`}
          to="/#aboutSection"
        >
          About Us
        </NavLink>
        <NavLink
          className={`font-medium text-md flex items-center ${location.pathname.includes(
            "/"
          )}`}
          activeClassName={`font-semibold text-base ${
            location.pathname.includes("/divison") && "text-gray-100"
          }`}
          to="/divison"
        >
          Divison
          <img src={chevron} alt="" className="fill-white" />
        </NavLink>
        <NavLink
          className={`font-medium text-md ${location.pathname.includes("/")}`}
          activeClassName={`font-semibold text-base ${
            location.pathname.includes("/aboutUs") && "text-gray-100"
          }`}
          to="/aboutUs"
        >
          Team
        </NavLink>
        <NavLink
          className={`font-medium text-md ${location.pathname.includes("/")}`}
          activeClassName={`font-semibold text-base ${
            location.pathname.includes("/aboutUs") && "text-gray-100"
          }`}
          to="/aboutUs"
        >
          Achievements
        </NavLink>
        <NavLink
          className={`font-medium text-md ${location.pathname.includes("/")}`}
          activeClassName={`font-semibold text-base ${
            location.pathname.includes("/aboutUs") && "text-gray-100"
          }`}
          to="/aboutUs"
        >
          FAQ
        </NavLink>
        <NavLink
          className={`font-medium text-md ${location.pathname.includes("/")}`}
          activeClassName={`font-semibold text-base ${
            location.pathname.includes("/aboutUs") && "text-gray-100"
          }`}
          to="/aboutUs"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
