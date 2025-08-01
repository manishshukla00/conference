import React from "react";

const Keynotespeakers = () => {
  const speakers = [
    {
      name: "Murali Natti",
      image: "/images/1.jpg",
      designation: "Apple Inc., USA",
    },
    {
      name: "Wazahat Ahmed Chowdhury",
      image: "/images/2.jpg",
      designation: "Matrix Medical Health– Phoenix, USA",
    },
    {
      name: "Sagar Kesarpu",
      image: "/images/3.jpg",
      designation: "McLean, United States",
    },
    {
      name: "Reena Chandra",
      image: "/images/4.jpg",
      designation: "Amazon Inc, USA ",
    },
    {
      name: "Swati Karni",
      image: "/images/5.jpg",
      designation: "SAIC/Department of Veteran Affairs, USA",
    },
    {
      name: "Vishal Sharma",
      image: "/images/6.jpg",
      designation: "Broadridge Financial Services, USA",
    },
    {
      name: "Ajay Prasad",
      image: "/images/7.jpg",
      designation: "Apple, USA",
    },
    {
      name: "Shilpi Yadav",
      image: "/images/8.jpg",
      designation: "IBM, United States",
    },
    {
      name: "Savi Grover",
      image: "/images/9.jpg",
      designation: "NBCUniversal, USA",
    },
    {
      name: "Naga Sai Mrunal",
      image: "/images/10.jpg",
      designation: "Humana Inc., United States",
    },
    {
      name: "Swapnil Joijode",
      image: "/images/11.jpg",
      designation: "PowerBI Developer, United States",
    },
    {
      name: "Deepak Pai",
      image: "/images/12.jpg",
      designation: "IBM, United States",
    },
    {
      name: "Sheeba Bromia Amalraj",
      image: "/images/13.jpg",
      designation: "TBC Corporation, United States",
    },
    {
      name: "Vasudevan Senathi Ramdoss",
      image: "/images/14.jpg",
      designation: "Financial investment sector, United States",
    },
    {
      name: "Kishore Bandela",
      image: "/images/15.jpg",
      designation: "MassDOT, United States",
    },
    {
      name: "Karthik Sirigiri",
      image: "/images/16.jpg",
      designation: "RedMane Technology LLC, USA ",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-4">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-6 pt-8">
          Meet Our{" "}
          <span className="text-pink-500">Keynote Speakers/Session Chair</span>
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center">
          Our conference features distinguished speakers who are experts in
          their respective fields. Learn from their insights and experiences.
        </p>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="bg-white rounded-lg p-4 h-full flex flex-col items-center">
                {/* Speaker Image */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mb-4 border-4 border-gray-300 shadow-md"
                />
                {/* Speaker Name */}
                <h2 className="text-lg font-bold text-purple-700 mb-2 text-center">
                  {speaker.name}
                </h2>
                {/* Speaker Designation */}
                <p className="text-gray-600 text-center text-sm">
                  {speaker.designation}
                </p>
                {/* Speaker Department */}
                {/* <p className="text-sm text-gray-500 text-center mt-2">
                  {speaker.department}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keynotespeakers;
