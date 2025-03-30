import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      {/* Left Side - Logos */}
      <div className="flex flex-col items-center md:w-1/3 space-y-4">
        <img src="/images/Headlogo.jpg" alt="Logo 1" className="w-35 h-35" />
        <img
          src="https://icicct.in/images/tandf.png"
          alt="Logo 1"
          className="w-40 h-20"
        />
        <img
          src="https://icicct.in/images/scopus.png"
          alt="Logo 2"
          className="w-40 h-40"
        />
      </div>

      {/* Right Side - Text and Buttons */}
      <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left p-6">
        <h2 className="text-2xl font-bold text-gray-800">About The ICICCT</h2>
        <p className="text-gray-600 mt-4">
          AICCT-2025 is a non-profit conference and the objective is to provide
          a platform for academicians, researchers, scholars, and students from
          various institutions, universities, and industries in India and abroad
          to exchange their research and innovative ideas in the field of Cloud,
          Communication, and Internet of Things.
        </p>
        <p className="text-gray-600 text-xl mt-4">
          We invite all students, research scholars, academicians, engineers,
          scientists, and industrialists working in the field of Intelligent
          Computing, Communications, and Techniques from all over the world. We
          warmly welcome all the authors to submit their original research in
          the upcoming conference AICCT-2025 to share their knowledge and
          experience among each other in collaboration with JNU and EVedant
          Foundation.
        </p>
        <p className="text-blue-800 font-bold text-2xl mt-4">
          Papers submitted to AICCT-2025 will undergo a strict double-blind
          review process. All accepted and presented papers will be published in
          the AICCT-2025 Conference Proceedings, which will be indexed in
          Scopus.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
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
