import React from "react";

const About = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Logos */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4">
          <img
            src="/images/Headlogo.jpg"
            alt="United University Logo"
            className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src="https://icicct.in/images/tandf.png"
            alt="Taylor & Francis Logo"
            className="w-40 h-20 object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
          <img
            src="https://icicct.in/images/scopus.png"
            alt="Scopus Logo"
            className="w-40 h-40 object-contain transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">About The ICICCT</h2>
          <p className="text-gray-600 text-justify">
            AICCT-2025 is a non-profit conference and the objective is to
            provide a platform for academicians, researchers, scholars, and
            students from various institutions, universities, and industries in
            India and abroad to exchange their research and innovative ideas in
            the field of Cloud, Communication, and Internet of Things.
          </p>
          <p className="text-gray-600 text-justify">
            We invite all students, research scholars, academicians, engineers,
            scientists, and industrialists working in the field of Intelligent
            Computing, Communications, and Techniques from all over the world.
            We warmly welcome all the authors to submit their original research
            in the upcoming conference AICCT-2025 to share their knowledge and
            experience among each other in collaboration with JNU and EVedant
            Foundation.
          </p>
          <p className="text-blue-800 font-bold text-justify text-lg">
            Papers submitted to AICCT-2025 will undergo a strict double-blind
            review process. All accepted and presented papers will be published
            in the AICCT-2025 Conference Proceedings, which will be indexed in
            Scopus.
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center justify-center flex-wrap gap-4">
          <button className="px-6 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-800">
            SUBMIT ARTICLE
          </button>
          <button className="px-6 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-800">
            DOC TEMPLATE
          </button>
          <button className="px-6 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-800">
            LATEX TEMPLATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
