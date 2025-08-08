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
        fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
      }}
    >
      {/* Scrolling Deadline Banner */}
      <div className="absolute top-32 left-0 w-full z-20 pointer-events-none">
        <div className="overflow-hidden w-full">
          <div
            className="whitespace-nowrap animate-marquee font-bold text-xl md:text-2xl text-red-600 bg-yellow-100 py-1 border-b-4 border-yellow-400"
            style={{
              fontFamily: "'Montserrat', Arial, sans-serif",
              letterSpacing: "1px",
              // textShadow removed
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
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-400 slide-in-left"
          style={{
            fontFamily: "'Montserrat', Arial, sans-serif",
            letterSpacing: "2px",
            lineHeight: "1.15",
            // textShadow removed
          }}
        >
          1st International Conference on
        </h1>
        <h2
          className="text-2xl md:text-4xl font-semibold mb-6 text-blue-300 slide-in-right"
          style={{
            fontFamily: "'Montserrat', Arial, sans-serif",
            letterSpacing: "1px",
            lineHeight: "1.2",
            // textShadow removed
          }}
        >
          Advances in Intelligent Computing and Communication Technology <br />
          <span className="text-pink-400 font-bold">(AICCT-2025)</span>
        </h2>
        <p
          className="text-lg md:text-2xl font-medium mb-4 text-green-300 slide-in-left"
          style={{
            fontFamily: "'Roboto', Arial, sans-serif",
            fontWeight: 500,
            letterSpacing: "0.5px",
            // textShadow removed
          }}
        >
          13-14 September, Organized by
        </p>
        <p
          className="text-lg md:text-2xl font-medium text-pink-300 slide-in-right"
          style={{
            fontFamily: "'Roboto', Arial, sans-serif",
            fontWeight: 500,
            letterSpacing: "0.5px",
            // textShadow removed
          }}
        >
          Department of Computer Science & Engineering
        </p>
        <p
          className="text-lg md:text-2xl font-medium text-purple-300 slide-in-left"
          style={{
            fontFamily: "'Roboto', Arial, sans-serif",
            fontWeight: 500,
            letterSpacing: "0.5px",
            // textShadow removed
          }}
        >
          United University, Prayagraj, India
        </p>
      </div>
    </div>
  );
};

export default Carousel;
