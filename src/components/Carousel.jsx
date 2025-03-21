// Carousel.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const slides = [
  {
    heading: "4th ICICCT 2025",
    subheadings: [
      "300+ PARTICIPANTS",
      "12+ SPEAKERS",
      "United University, Prayagraj",
    ],
  },
  {
    heading: "4th ICICCT 2025",
    subheadings: [
      "300+ PARTICIPANTS",
      "12+ SPEAKERS",
      "United University, Prayagraj",
    ],
  },
  {
    heading: "4th ICICCT 2025",
    subheadings: [
      "300+ PARTICIPANTS",
      "12+ SPEAKERS",
      "United University, Prayagraj",
    ],
  },
  {
    heading: "4th ICICCT 2025",
    subheadings: [
      "300+ PARTICIPANTS",
      "12+ SPEAKERS",
      "United University, Prayagraj",
    ],
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative overflow-hidden h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://gyaanarth.com/wp-content/uploads/2022/05/United-University-Cover-Page-7.jpg)",
      }}
    >
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <AnimatePresence
        initial={false}
        exit={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full flex justify-center items-center text-white text-center"
        >
          <div>
            <h2 className="text-2xl md:text-4xl text-[#faaC1D]">Welcome to</h2>
            <h1 className="text-4xl md:text-[80px] font-bold my-8">
              {slides[currentSlide].heading}
            </h1>
            <div className="text-sm md:text-lg my-8 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8">
              {slides[currentSlide].subheadings.map((subheading, index) => (
                <p
                  key={index}
                  className="md:text-lg text-gray-200 my-8 font-semibold"
                >
                  {subheading}
                </p>
              ))}
            </div>
            <button className="bg-[#faaC1D] text-white py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
