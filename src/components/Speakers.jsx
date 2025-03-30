import React, { useState } from "react";

const Speakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: "images/a.k.sing.jpeg",
      text: [
        "Prof. A.K. Singh",
        "Expert in Artificial Intelligence",
        "Department of Computer Science",
        "University of XYZ",
      ],
    },
    {
      image: "images/sanjay-misra.png",
      text: [
        "Prof. Sanjay Misra",
        "Renowned Cybersecurity Specialist",
        "Department of IT",
        "ABC Institute of Technology",
      ],
    },
    {
      image: "images/sverma.jpg",
      text: [
        "Prof. Sekhar Verma",
        "MNNIT Prayagraj",
        "Expert in Data Science",
        "Author of 50+ Research Papers",
      ],
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-4 px-4">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-6 pt-4">
        Meet Our{" "}
        <span className="text-purple-600 font-serif font-thin">Speakers</span>
      </h2>

      {/* Card Container */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg shadow-lg py-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4">
              <div className="relative bg-white text-gray-800 rounded-full shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                <img
                  src={card.image}
                  alt={card.text[0]}
                  className="w-40 h-40 rounded-full mb-4 border-4 border-gray-300 shadow-md"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-purple-700">
                    {card.text[0]}
                  </h3>
                  {card.text.slice(1).map((line, i) => (
                    <p key={i} className="text-gray-600 p-2">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-500 shadow-lg"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full hover:bg-pink-400 shadow-lg"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Speakers;
