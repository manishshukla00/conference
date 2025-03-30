// Carousel.js
import React from "react";

const Carousel = () => {
  return (
    <div
      className="relative overflow-hidden h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://gyaanarth.com/wp-content/uploads/2022/05/United-University-Cover-Page-7.jpg)",
      }}
    >
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered Text */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">
          1st International Conference On
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-blue-300">
          Advances in Intelligent Computing and Communication Technology
          (AICCT-2025)
        </h2>
        <p className="text-lg md:text-2xl font-medium mb-4 text-green-300">
          12-13 September, Organized by
        </p>
        <p className="text-lg md:text-2xl font-medium text-pink-300">
          Department of Computer Science & Engineering
        </p>
        <p className="text-lg md:text-2xl font-medium text-purple-300">
          United University, Prayagraj, India
        </p>
      </div>
    </div>
  );
};

export default Carousel;
