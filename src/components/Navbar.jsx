// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-black bg-opacity-20 backdrop-blur-md absolute top-0 left-0 z-50">
      <nav className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <div className="w-20 h-20 bg-white p-1 rounded-full shadow-md hover:scale-110 transition-transform">
              <img
                src="/images/Headlogo.jpg"
                alt="ICICCT Logo"
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-bold">
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
          <Link
            to="/callforpapers"
            className="relative text-white transition-transform transform hover:scale-105 group"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Call For Papers
            </span>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            to="/speakers"
            className="relative text-white transition-transform transform hover:scale-105 group"
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Speakers
            </span>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            to="/"
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
            to="/speakers"
            onClick={toggleMenu}
            className="text-2xl font-bold hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            Speakers
          </Link>
          <Link
            to="/"
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
