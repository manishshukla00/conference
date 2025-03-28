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
      <div className="absolute top-0 left-0 w-full z-50">
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
                Committee
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
        <nav className="bg-black bg-opacity-20 text-white p-2">
          <div className="w-3/4 mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="w-25 bg-white flex items-center">
              <img
                src="/images/Headlogo.jpg"
                alt="Logo"
                className="w-20 h-20 rounded-full shadow-lg hover:scale-110 transition-transform"
              />
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
                className="hover:text-purple-300 transition-colors"
              >
                Home
              </Link>
              <Link
                to={"/"}
                className="hover:text-purple-300 transition-colors"
              >
                About
              </Link>
              <Link
                to={"/committee-member"}
                className="hover:text-purple-300 transition-colors"
              >
                Committee
              </Link>
              <Link
                to={"/"}
                className="hover:text-purple-300 transition-colors"
              >
                Registration
              </Link>
              <Link
                to={"/callforpapers"}
                className="hover:text-purple-300 transition-colors"
              >
                Call For Papers
              </Link>
              <Link
                to={"/"}
                className="hover:text-purple-300 transition-colors"
              >
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
