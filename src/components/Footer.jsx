import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white py-10">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About ICICCT</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ICICCT 2025 is an international conference that brings together
              researchers, academicians, and industry professionals to discuss
              the latest advancements in computing, communication, and
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-purple-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/committee-member"
                  className="hover:text-purple-400 transition-colors"
                >
                  Committee Members
                </Link>
              </li>
              <li>
                <Link
                  to="/callforpapers"
                  className="hover:text-purple-400 transition-colors"
                >
                  Call For Papers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Mon - Fri: 9 AM - 4 PM</li>
              <li>+91 9759111170</li>
              <li>ICICCT2025@cgc.edu.in</li>
              <li>
                United Group of Colleges, Prayagraj, Uttar Pradesh (INDIA)
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; 2025 ICICCT | Developed by Dr. Sanjeev Gupta. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
