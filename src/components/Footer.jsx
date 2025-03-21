import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1e1f36] text-white p-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Committee Members</Link>
              </li>
              <li>
                <Link to={"/"}>Keynote Speakers</Link>
              </li>
              <li>
                <Link to={"/"}>Registration</Link>
              </li>
              <li>
                <Link to={"/"}>Tech Partners</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to={"/"}>Call For Papers</Link>
              </li>
              <li>
                <Link to={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">About</h3>
            <ul>
              <li>
                <Link to={"/"}>About College</Link>
              </li>
              <li>
                <Link to={"/"}>About Department</Link>
              </li>
              <li>
                <Link to={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p>Mon - Fri: 9 AM - 4 PM</p>
            <p>+91 9759111170</p>
            <p>ICICCT2025@cgc.edu.in</p>
            <p>United Group of Colleges, Prayagraj, Utter Pradesh (INDIA)</p>
          </div>
        </div>
      </footer>
      <div className="w-full h-20 flex justify-center items-center text-2xl font-bold text-white bg-gray-800">
        <p className="text-sm px-2">
          All Rights Reserved &copy; ICICCT | Developed and designed By: Dr.
          Sanjeev Gupta
        </p>
      </div>
    </>
  );
};

export default Footer;
