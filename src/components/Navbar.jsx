// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="w-full bg-black bg-opacity-20 backdrop-blur-md absolute top-0 left-0 z-50">
      <nav className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center relative h-16">
          <Link to="/">
            <div className="absolute w-24 h-24 p-1 rounded-full shadow-md hover:scale-110 transition-transform -top-4">
              <img
                src="/images/logo.png"
                alt="AICCT Logo"
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-bold relative">
          <Link
            to="/"
            className="relative text-white transition-transform transform hover:scale-105 group"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Home
            </span>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="relative text-white transition-transform transform hover:scale-105 group"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              About
            </span>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            to="/committee-member"
            className="relative text-white transition-transform transform hover:scale-105 group"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Committee
            </span>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>

          {/* Call for Papers with Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("callforpapers")}
              className="flex items-center text-white transition-transform transform hover:scale-105 group focus:outline-none"
            >
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                Call For Papers
              </span>
              <svg
                className={`w-4 h-4 ml-2 transform ${
                  openDropdown === "callforpapers" ? "rotate-180" : "rotate-0"
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "callforpapers" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                <Link
                  to="/callforpapers"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white rounded-lg transition-colors"
                >
                  Call for Papers
                </Link>
                <Link
                  to="/author-guidelines"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white rounded-lg transition-colors"
                >
                  Submission
                </Link>
                <Link
                  to="/publication-ethics"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white rounded-lg transition-colors"
                >
                  Publication Ethics
                </Link>
              </div>
            )}
          </div>

          {/* Speakers with Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("speakers")}
              className="flex items-center text-white transition-transform transform hover:scale-105 group focus:outline-none"
            >
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                Speakers
              </span>
              <svg
                className={`w-4 h-4 ml-2 transform ${
                  openDropdown === "speakers" ? "rotate-180" : "rotate-0"
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "speakers" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <Link
                  to="/speakers"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white rounded-lg transition-colors"
                >
                  Speaker
                </Link>
                <Link
                  to="/keynotespeakers"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white rounded-lg transition-colors"
                >
                  Keynote Speaker
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="relative text-white transition-transform transform hover:scale-105 group"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Contact
            </span>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-80 text-white flex flex-col items-center justify-center space-y-6 z-40 transition-all duration-300 ease-in-out">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 text-3xl text-white hover:text-blue-400 transition-colors"
          >
            ✖
          </button>

          {/* Menu Links */}
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="/committee-member"
            onClick={toggleMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            Committee
          </Link>
          <Link
            to="/callforpapers"
            onClick={toggleMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            Call For Papers
          </Link>
          <Link
            to="/author-guidelines"
            onClick={toggleMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            Author Guidelines
          </Link>
          <Link
            to="/publication-ethics"
            onClick={toggleMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            Publication Ethics
          </Link>
          <Link
            to="/registration"
            onClick={toggleMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            Registration
          </Link>
          {/* Speakers Dropdown for Mobile */}
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">Speakers</span>
            <Link
              to="/speakers"
              onClick={toggleMenu}
              className="text-xl font-medium hover:text-blue-300 transition-colors transform hover:scale-105 mb-1"
            >
              Speaker
            </Link>
            <Link
              to="/keynotespeakers"
              onClick={toggleMenu}
              className="text-xl font-medium hover:text-blue-300 transition-colors transform hover:scale-105"
            >
              Keynote Speaker
            </Link>
          </div>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
