import React from "react";

const Speakers = () => {
  const speakers = [
    {
      name: "Prof. A.K. Singh",
      image: "/images/a.k.sing.jpeg",
      designation: "Expert in Artificial Intelligence",
      department: "Department of Computer Science, University of XYZ",
    },
    {
      name: "Prof. Sanjay Mishra",
      image: "/images/sanjay-misra.png",
      designation: "Renowned Cybersecurity Specialist",
      department: "Department of IT, ABC Institute of Technology",
    },
    {
      name: "Prof. Sekhar Verma",
      image: "/images/sverma.jpg",
      designation: "Expert in Data Science",
      department: "MNNIT Prayagraj",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-4">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-6 pt-8">
          Meet Our <span className="text-pink-500">Speakers</span>
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center">
          Our conference features distinguished speakers who are experts in
          their respective fields. Learn from their insights and experiences.
        </p>

        {/* Responsive Cards for Speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="bg-white rounded-lg p-4 h-full flex flex-col items-center">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mb-4 border-4 border-gray-300 shadow-md"
                />
                <h2 className="text-xl font-bold text-purple-700 mb-2">
                  {speaker.name}
                </h2>
                <p className="text-gray-600 text-center">
                  {speaker.designation}
                </p>
                <p className="text-sm text-gray-500 text-center mt-2">
                  {speaker.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
