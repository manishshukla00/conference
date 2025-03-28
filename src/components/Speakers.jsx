import React, { useState } from "react";

const Speakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: "images/a.k.sing.jpeg",
      text: [
        "Prof. A.K. Singh",
        "Line 2 of text",
        "Line 3 of text",
        "Line 4 of text",
      ],
    },
    {
      image: "images/sanjay-misra.png",
      text: [
        "Prof. Sanjay Misra",
        "Another Line 2",
        "Another Line 3",
        "Another Line 4",
      ],
    },
    {
      image: "images/sverma.jpg",
      text: [
        "prof.Sekhar Verma",
        "MNNIT Prayagraj",
        "More Line 3",
        "More Line 4",
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
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="w-full flex-shrink-0 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <img
                src={card.image}
                alt="Card"
                className="w-40 h-40 mx-auto rounded-full mb-4"
              />
              <div className="text-center">
                {card.text.map((line, i) => (
                  <p key={i} className="text-gray-700">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Speakers;
