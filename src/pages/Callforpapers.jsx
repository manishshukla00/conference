import React from "react";

const Callforpapers = () => {
  const tracks = [
    {
      title: "Track-1: Advances in Machine Learning and Deep Learning",
      topics: [
        "General Machine Learning, Active Machine Learning",
        "Fuzzy Learning",
        "Kernel Based Learning",
        "Genetic Learning",
        "Bayesian Estimation Approaches",
        "Recurrent Neural Networks",
        "Machine Learning over the Cloud",
        "Learning Paradigms",
        "Clustering, Classification and Regression Methods",
        "Supervised, Semi-Supervised and Unsupervised Learning",
      ],
    },
    {
      title: "Track-2: Advances in Data Science",
      topics: [
        "Mathematical, Probabilistic and Statistical Models and Theories",
        "Data Mining, Exploratory Data Analysis and Predictive Modelling",
        "Machine Learning Theories, Models and Systems",
        "Knowledge Discovery Theories, Models and Systems",
        "Manifold and Metric Learning",
      ],
    },
    {
      title:
        "Track-3: Applications of Artificial Intelligence in Interdisciplinary Areas",
      topics: [
        "Applications of AI in Manufacturing Industry",
        "Applications of AI in Insurance and Banking",
        "Applications of AI in Cybersecurity",
        "Applications of AI in Robotics and Automation",
        "Applications of AI in Cloud Computing and Cloud Infrastructure",
      ],
    },
    {
      title: "Track-4: High Performance Computing",
      topics: [
        "Autonomic Computing",
        "Cluster, Cloud and Grid Computing",
        "Distributed Computing",
        "Parallel and Distributed Algorithms/Systems",
        "Quantum Computing",
      ],
    },
    {
      title: "Track-5: Advances in Communication and Networks",
      topics: [
        "Ad-hoc Networks",
        "Computer Networks",
        "Cyber Crime",
        "Network Security and Privacy",
        "Wireless Communication",
      ],
    },
    {
      title: "Track-6: Computer Technologies Trends",
      topics: [
        "Big Data",
        "Internet of Things",
        "Blockchain",
        "Cyber-Physical Systems",
        "Smart Cities",
        "Machine to Machine",
        "Digital Transformation",
        "Social Computing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-8">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-6 pt-4">
          Call for Papers
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center">
          AICCT-2025 is soliciting original, previously unpublished, and
          high-quality research papers addressing research challenges and
          advances in the tracks mentioned below. The topics of the conference
          include, but are not limited to:
        </p>

        {/* Responsive Cards for Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="bg-white rounded-lg p-4 h-full">
                <h2 className="text-xl font-bold text-purple-700 text-left mb-4">
                  {track.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {track.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Author Guidelines Section */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-lg shadow-lg">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-3xl font-extrabold text-purple-800 mb-6 text-center">
              Author Guidelines
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              The authors are instructed to follow the{" "}
              <a
                href="#"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Taylor and Francis template
              </a>{" "}
              for typesetting and content formatting. The templates can be found
              here:
            </p>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Criteria:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>
                <span className="font-bold">Maximum Pages Allowed:</span> 6
                (Six)
              </li>
              <li>
                <span className="font-bold">Maximum Number of Authors:</span> 6
                (Six)
              </li>
              <li>
                <span className="font-bold">Maximum Text Plagiarism:</span> 10%
              </li>
              <li>
                <span className="font-bold">Maximum AI Plagiarism:</span> 5%
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Formatting Requirements:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>
                Ensure your paper follows the formatting guidelines as per the
                provided template.
              </li>
              <li>
                <span className="font-bold">Title and Abstract:</span> Craft a
                clear and descriptive title. Write an informative abstract that
                summarizes the main objectives, methods, results, and
                conclusions of your research.
              </li>
              <li>
                <span className="font-bold">Keywords:</span> Include a list of
                keywords that accurately represent the content of your paper.
              </li>
              <li>
                <span className="font-bold">Introduction:</span> Provide a
                comprehensive introduction outlining the background,
                significance, and objectives of your research.
              </li>
              <li>
                <span className="font-bold">Methods:</span> Describe the
                methodology and techniques used in your study in sufficient
                detail to allow replication.
              </li>
              <li>
                <span className="font-bold">Results:</span> Present your
                findings clearly and concisely. Use tables, figures, and graphs
                where appropriate.
              </li>
              <li>
                <span className="font-bold">Discussion:</span> Interpret your
                results and discuss their implications.
              </li>
              <li>
                <span className="font-bold">Conclusion:</span> Summarize the
                main findings of your study and restate the importance of your
                research.
              </li>
              <li>
                <span className="font-bold">References:</span> Cite all sources
                used in your paper accurately.
              </li>
              <li>
                <span className="font-bold">Proofreading:</span> Proofread your
                paper carefully for grammar, spelling, and formatting errors.
              </li>
            </ul>

            {/* Submit Article Button */}
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                Submit Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callforpapers;
