// Navbar.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg- p-4 hidden md:block">
        <div className="w-3/4 mx-auto flex justify-between items-center">
          {/* Logo (image) */}
          <img
            src="/images/Headlogo.jpg"
            alt="Logo"
            className="w-100% h-16 mr-2"
          />

          {/* Heading */}
          <h1 className="w-1/2 bg-blue-500 text-white px-4 py-4 text-lg font-bold">
            4<sup>th</sup> International Conference on Computatuional methods in
            Science & Technology 2025
          </h1>
        </div>
      </nav>
      <div className="relative">
        {/* Sliding Menu */}
        <div
          className={`w-full h-full fixed top-0 right-0   bg-white transition-transform transform z-20 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-around h-full">
            <li>
              <Link to={"/"} onClick={toggleMenu} className="text-black py-4">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={toggleMenu} className="text-black py-4">
                About
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={toggleMenu} className="text-black py-4">
                Committee Members
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={toggleMenu} className="text-black py-4">
                Registration
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={toggleMenu} className="text-black py-4">
                Call For Papers
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={toggleMenu} className="text-black py-4">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar */}
        <nav className="top-28 bg-[#1e1f36] p-4 z-40">
          <div className="w-3/4 mx-auto flex justify-between items-center">
            {/* Logo and ICICCT */}
            <div className="flex items-center">
              <span className="text-white font-bold text-2xl">ICICCT</span>
            </div>

            {/* Menu icon for small screens */}
            <div className="md:hidden">
              <div className="flex items-center" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <FaTimes className="text-[#e1137b] absolute top-8 left-8 text-2xl cursor-pointer z-40" />
                ) : (
                  <FaBars className="text-[#e1137b] absolute right-8 text-2xl cursor-pointer" />
                )}
              </div>
            </div>

            {/* Navigation links */}
            <div className="md:flex items-center gap-8 text-white font-bold">
              <Link to={"/"} className="hidden md:block">
                Home
              </Link>
              <Link to={"/"} className="hidden md:block">
                Archive
              </Link>
              <Link to={"/"} className="hidden md:block">
                Committee Members
              </Link>
              <Link to={"/"} className="hidden md:block">
                Registration
              </Link>
              <Link to={"/"} className="hidden md:block">
                Call For Papers
              </Link>
              <Link to={"/"} className="hidden md:block">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
