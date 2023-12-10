import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logoBayucaraka from "../assets/bayucarakaLogoDark.svg";
import logoBayucarakawhite from "../assets/bayucarakaLogo.svg";

const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full px-14 flex justify-between items-center fixed z-20 top-0 ${
        isScrolled
          ? "bg-white text-gray-700 transition-all duration-2000 ease-in-out fill-white"
          : "text-white"
      }`}
    >
      <div className="left">
        <Link to="/">
          <img
            src={isScrolled ? logoBayucaraka : logoBayucarakawhite}
            alt=""
            className="w-14"
          />
        </Link>
      </div>
      <div className="right flex gap-8">
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
          className={`font-medium text-md ${location.pathname.includes("/")}`}
          activeClassName={`font-semibold text-base ${
            location.pathname.includes("/divison") && "text-gray-100"
          }`}
          to="/divison"
        >
          Divison
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
