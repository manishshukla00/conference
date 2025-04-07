import React from "react";

const AuthorGuidlines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-8">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Author Guidelines Section */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-lg shadow-lg">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-3xl font-extrabold text-purple-800 mb-6 text-center">
              Author Guidelines
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              The authors are instructed to follow the
              here
              
                  template 
              
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
              <li>
                <span className="font-bold">
                  Strict Double-blind Paper Review Process:
                </span>
                Papers submitted to AICCT-2025 will undergo a strict
                double-blind review process. All papers that are accepted and
                presented in AICCT-2025  will be published in the AICCT-2025 
                Conference Proceeding.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Formatting Requirements:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>
                Ensure your paper follows the formatting guidelines as per the
                provided template. The Taylor and Francis conference template
                typically includes font size, margins, line spacing, and
                citation style.
              </li>
              <li>
                <span className="font-bold">Title and Abstract:</span> Craft a
                clear and descriptive title for your paper. Write an informative
                abstract that summarizes the main objectives, methods, results,
                and conclusions of your research.
              </li>
              <li>
                <span className="font-bold">Keywords:</span> Include a list of
                keywords that accurately represent the content of your paper.
                These keywords help index your paper for search engines and
                databases.
              </li>
              <li>
                <span className="font-bold">Introduction:</span> Provide a
                comprehensive introduction that outlines the background,
                significance, and objectives of your research. Clearly state the
                research questions or hypotheses.
              </li>
              <li>
                <span className="font-bold">Methods:</span> Describe the
                methodology and techniques used in your study in sufficient
                detail to allow replication. Include information on data
                collection, analysis, and any experimental procedures.
              </li>
              <li>
                <span className="font-bold">Results:</span> Present your
                findings clearly and concisely. Use tables, figures, and graphs
                where appropriate to enhance understanding.
              </li>
              <li>
                <span className="font-bold">Discussion:</span> Interpret your
                results and discuss their implications. Compare your findings
                with existing literature and explain any limitations or future
                directions for research.
              </li>
              <li>
                <span className="font-bold">Conclusion:</span> Summarize the
                main findings of your study and restate the importance of your
                research in the broader context.
              </li>
              <li>
                <span className="font-bold">References:</span> Cite all sources
                used in your paper accurately. Follow the citation style
                specified by the journal or conference guidelines.
              </li>
              <li>
                <span className="font-bold">Ethical Considerations:</span>
                Ensure your research complies with ethical standards, including
                obtaining necessary permissions for data collection and
                respecting participant confidentiality.
              </li>
              <li>
                <span className="font-bold">Proofreading:</span> Proofread your
                paper carefully for grammar, spelling, and formatting errors.
                Consider seeking feedback from colleagues or mentors before
                submission.
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

export default AuthorGuidlines;
