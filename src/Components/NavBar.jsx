import React, { useState } from "react";
import Logo from "../assets/Images/header-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function menuToggle() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="bg-[#000000c2] fixed z-10 w-full">
      <header className="container mx-auto relative">
        <nav className="flex justify-between items-center pt-7 pb-4 px-10">
          <img src={Logo} alt="Header Logo" className="cursor-pointer" />
          <ul className="hidden md:flex space-x-10">
            <li>
              <a className="text-lg text-[#ff6452] duration-300" href="#">
                Home
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 text-lg hover:text-[#ff6452] duration-300"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 text-lg hover:text-[#ff6452] duration-300"
                href="#products"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 text-lg hover:text-[#ff6452] duration-300"
                href="#contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="hidden md:block">
            <a
              href="#"
              className=" text-lg mr-4 bg-[#ff6452] px-3 py-2 rounded-full border-2 border-[#ff6452] text-white hover:bg-transparent hover:text-[#ff6452] duration-300"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="text-gray-400 text-xl hover:text-[#ff6452] duration-300 "
            >
              Login
            </a>
          </div>
          <div
            className="text-white text-3xl cursor-pointer md:hidden"
            onClick={menuToggle}
          >
            {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </nav>
        <div
          className={`md:hidden fixed top-0 left-0 w-[250px] h-full bg-black text-white transition-transform duration-300 z-10 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-9">
            <li>
              <a
                className="text-[22px] font-semibold text-[#ff6452] duration-300"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 text-[22px] font-semibold hover:text-[#ff6452] duration-300"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 text-[22px] font-semibold hover:text-[#ff6452] duration-300"
                href="#products"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 text-[22px] font-semibold hover:text-[#ff6452] duration-300"
                href="#contact"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[22px] font-semibold bg-[#ff6452] px-4 py-2 rounded-full border-2 border-[#ff6452] text-white hover:bg-transparent hover:text-[#ff6452] duration-300"
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 text-[22px] font-semibold hover:text-[#ff6452] duration-300"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
