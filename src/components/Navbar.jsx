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
            className="text-white hover:text-purple-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-purple-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/committee-member"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Committee
          </Link>
          <Link
            to="/callforpapers"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Call For Papers
          </Link>
          <Link
            to="/speakers"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Speakers
          </Link>
          <Link
            to="/"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Contact
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
        <div className="absolute top-0 left-0 w-full h-screen bg-purple-800 text-white flex flex-col items-center justify-center space-y-6 z-40">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-xl hover:text-purple-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-xl hover:text-purple-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/committee-member"
            onClick={toggleMenu}
            className="text-xl hover:text-purple-300 transition-colors"
          >
            Committee
          </Link>
          <Link
            to="/callforpapers"
            onClick={toggleMenu}
            className="text-xl hover:text-purple-300 transition-colors"
          >
            Call For Papers
          </Link>
          <Link
            to="/speakers"
            onClick={toggleMenu}
            className="text-xl hover:text-purple-300 transition-colors"
          >
            Speakers
          </Link>
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-xl hover:text-purple-300 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
