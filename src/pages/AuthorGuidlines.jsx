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
              We are excited to welcome authors to submit their technical papers
              for the International Conference on Advances in Intelligent
              Computing and Communication Technology (AICCT), 2K25 using
              Microsoft CMT. Please cohere to the instructions outlined below to
              ensure a smooth submission process:
            </p>

            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Accessing the Submission System:
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              To submit your paper, access the Conference Management Toolkit
              (Microsoft CMT) via the provided submission link.
            </p>

            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Paper Preparation:
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              Prepare your paper in accordance with the conference paper
              template below and the guidelines available on the conference
              website.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>
                <span className="font-bold">Template in Microsoft Word:</span>
                <a
                  href="/files/Word_Sample_template_8.25 x11_column.docx"
                  download
                  className="text-purple-600 underline hover:text-purple-800"
                >
                  Click here to download
                </a>
              </li>
              <li>
                <span className="font-bold">
                  To download Conference Brochure:
                </span>
                <span className="text-gray-500">Link coming soon...</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Agreements:
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              After getting the acceptance e-mail of the paper, the author needs
              to submit the following agreement to the conference email:
              <a
                href="mailto:sanjeev.kumar@uniteduniversity.edu.in"
                className="text-purple-600 underline hover:text-purple-800"
              >
                sanjeev.kumar@uniteduniversity.edu.in
              </a>
              . Otherwise, the accepted paper will not be published in the
              conference proceedings.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>
                <span className="font-bold">
                  Publishing Agreement Form (Copyright Form):
                </span>
                <span className="text-gray-500">Link coming soon...</span>
              </li>
              <li>
                <span className="font-bold">Permission Guideline:</span>
                <span className="text-gray-500">Link coming soon...</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Author's Guidelines:
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              Each paper must be original and unpublished work, not submitted
              for publication elsewhere. Papers must be written in good English
              and follow the provided guidelines.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>
                Regular papers: between 4 to 5 pages maximum (2 additional pages
                allowed at extra charges).
              </li>
              <li>Maximum 5 authors allowed in the manuscript.</li>
              <li>
                Submitted papers must be in PDF format and submitted
                electronically via Microsoft CMT.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Review Process:
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              All submissions will be screened for plagiarism and undergo a
              strict double-blind review process. Names and affiliations of the
              authors must NOT be included anywhere in the paper during the
              initial submission.
            </p>

            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Mode of Presentation:
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              AICCT 2K25 will be held in hybrid mode, where authors can present
              their papers either in physical mode at the conference venue or
              online as per their preference.
            </p>
            <p className="text-lg text-gray-800 mb-4">
              <span className="font-bold">PPT Template for AICCT:</span>
              <a
                href="/files/ppt-template.pptx"
                download
                className="text-purple-600 underline hover:text-purple-800"
              >
                Click here to download
              </a>
            </p>

            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Contact Us:
            </h3>
            <p className="text-lg text-gray-800">
              For any queries, feel free to
              <a
                href="/"
                className="text-purple-600 underline hover:text-purple-800"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorGuidlines;
