// Carousel.js
import React from "react";
import "./Carousel.css"; // Import the CSS file for animations

const Carousel = () => {
  return (
    <div
      className="relative overflow-hidden h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://gyaanarth.com/wp-content/uploads/2022/05/United-University-Cover-Page-7.jpg)",
      }}
    >
      {/* Scrolling Deadline Banner */}
      <div className="absolute top-32 left-0 w-full z-20 pointer-events-none">
        <div className="overflow-hidden w-full">
          <div
            className="whitespace-nowrap animate-marquee font-extrabold text-2xl md:text-2xl text-red-500 bg-yellow-200 py-0.5 shadow-lg border-b-4 border-red-500"
            style={{
              textShadow: "2px 2px 8px #fff, 2px 2px 8px #fbbf24",
            }}
          >
            Paper Submission Deadline Extended: August 15, 2025
          </div>
        </div>
      </div>

      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered Text */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400 slide-in-left">
          1st International Conference on
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-blue-300 slide-in-right">
          Advances in Intelligent Computing and Communication Technology <br />
          (AICCT-2025)
        </h2>
        <p className="text-lg md:text-2xl font-medium mb-4 text-green-300 slide-in-left">
          13-14 September, Organized by
        </p>
        <p className="text-lg md:text-2xl font-medium text-pink-300 slide-in-right">
          Department of Computer Science & Engineering
        </p>
        <p className="text-lg md:text-2xl font-medium text-purple-300 slide-in-left">
          United University, Prayagraj, India
        </p>
      </div>
    </div>
  );
};

export default Carousel;
