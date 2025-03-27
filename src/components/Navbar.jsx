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
      <div className="relative">
        {/* Sliding Menu */}
        <div
          className={`w-full h-full fixed top-0 right-0 bg-white transition-transform transform z-20 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-around h-full">
            <li>
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="text-black py-4 hover:text-purple-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="text-black py-4 hover:text-purple-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/committee-member"}
                onClick={toggleMenu}
                className="text-black py-4 hover:text-purple-600 transition-colors"
              >
                Committee Members
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="text-black py-4 hover:text-purple-600 transition-colors"
              >
                Registration
              </Link>
            </li>
            <li>
              <Link
                to={"/callforpapers"}
                onClick={toggleMenu}
                className="text-black py-4 hover:text-purple-600 transition-colors"
              >
                Call For Papers
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="text-black py-4 hover:text-purple-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Navbar */}
        <nav className="relative bg-gradient-to-r from-purple-200 via-purple-400 to-purple-500   p-4 z-40 border-l-4 border-r-4 border-transparent sparkle-border">
          <div className="w-3/4 mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="w-20 flex items-center">
              <img
                src="/images/Headlogo.jpg"
                alt="Logo"
                className="w-20 h-20 rounded-full shadow-lg hover:scale-110 transition-transform"
              />
              {/* <span className="text-white font-bold text-2xl ml-4">
                AICT-2025
              </span> */}
            </div>

            {/* Menu icon for small screens */}
            <div className="md:hidden">
              <div className="flex items-center" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <FaTimes className="text-white text-2xl cursor-pointer z-40" />
                ) : (
                  <FaBars className="text-white text-2xl cursor-pointer" />
                )}
              </div>
            </div>  

            {/* Navigation links */}
            <div className="hidden md:flex items-center gap-8 text-white font-bold">
              <Link
                to={"/"}
                className="hover:text-yellow-300 transition-colors"
              >
                Home
              </Link>
              <Link
                to={"/"}
                className="hover:text-yellow-300 transition-colors"
              >
                About
              </Link>
              <Link
                to={"/committee-member"}
                className="hover:text-yellow-300 transition-colors"
              >
                Committee Members
              </Link>
              <Link
                to={"/"}
                className="hover:text-yellow-300 transition-colors"
              >
                Registration
              </Link>
              <Link
                to={"/callforpapers"}
                className="hover:text-yellow-300 transition-colors"
              >
                Call For Papers
              </Link>
              <Link
                to={"/"}
                className="hover:text-yellow-300 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Custom CSS for Sparkling Border */}
      <style>
        {`
          .sparkle-border {
            animation: sparkle 2s infinite;
          }

          @keyframes sparkle {
            0% {
              border-color: transparent;
            }
            50% {
              border-color: #f9a8d4;
            }
            100% {
              border-color: transparent;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
