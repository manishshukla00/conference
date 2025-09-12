// Carousel.js
import React from "react";
import "./Carousel.css"; // Import the CSS file for animations

const Carousel = () => {
  return (
    <div
      className="relative overflow-hidden min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage:
          "url(https://gyaanarth.com/wp-content/uploads/2022/05/United-University-Cover-Page-7.jpg)",
        fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
      }}
    >
      {/* Scrolling Deadline Banner */}
      {/* <div className="absolute top-32 left-0 w-full z-20 pointer-events-none">
        <div className="overflow-hidden w-full">
          <div
            className="whitespace-nowrap animate-marquee font-bold text-xl md:text-2xl text-red-600 bg-yellow-100 py-1 border-b-4 border-yellow-400"
            style={{
              fontFamily: "'Montserrat', Arial, sans-serif",
              letterSpacing: "1px",
            }}
          >
            Paper Submission Deadline Extended: August 15, 2025
          </div>
        </div>
      </div> */}
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered Text */}
      <div className="relative z-10 text-center text-white px-4 pt-32 pb-24 flex-1 flex flex-col justify-center">
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-400 slide-in-left"
          style={{
            fontFamily: "'Montserrat', Arial, sans-serif",
            letterSpacing: "2px",
            lineHeight: "1.15",
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
          }}
        >
          United University, Prayagraj, India
        </p>
      </div>

      {/* Responsive Download Buttons at Bottom, outside overlay */}
      <div className="relative z-30 w-full flex flex-col md:flex-row gap-4 justify-center items-center px-4 pb-8 bg-transparent">
        <a
          href="files/AICCTOfflineScheduleDay1.pdf"
          download
          className="w-full md:w-auto text-center bg-gradient-to-r from-purple-600 via-pink-400 to-orange-400 text-white font-extrabold py-2 px-4 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-200 hover:from-pink-500 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-pink-300 border-2 border-white flex items-center justify-center gap-2"
          style={{
            fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
            letterSpacing: "1px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Offline Presentation Schedule Day-1
        </a>
        <a
          href="files/AICCTOnlineScheduleDay1-4.pdf"
          download
          className="w-full md:w-auto text-center bg-gradient-to-r from-blue-600 via-purple-400 to-pink-400 text-white font-extrabold py-2 px-4 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-200 hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 border-2 border-white flex items-center justify-center gap-2"
          style={{
            fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
            letterSpacing: "1px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Online Presentation Schedule Day-1
        </a>
        <a
          href="files/AICCTOnlineScheduleDay2.pdf"
          download
          className="w-full md:w-auto text-center bg-gradient-to-r from-green-600 via-yellow-400 to-orange-400 text-white font-extrabold py-2 px-4 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-200 hover:from-yellow-500 hover:to-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 border-2 border-white flex items-center justify-center gap-2"
          style={{
            fontFamily: "'Montserrat', 'Roboto', Arial, sans-serif",
            letterSpacing: "1px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Online Presentation Schedule Day-2
        </a>
      </div>
    </div>
  );
};

export default Carousel;
