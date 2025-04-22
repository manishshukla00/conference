import React from "react";

const AuthorGuidlines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-8">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Author Guidelines Section */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-lg shadow-lg">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-3xl font-extrabold text-purple-800 mb-6 text-center">
              Submission
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
                {" "}
                sanjeev.kumar@uniteduniversity.edu.in{" "}
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
            <br></br>
            <p>
              Regular Papers: between 4 to 5 pages maximum (2 additional pages
              allowed but at an extra charges). Regular papers should present
              novel perspectives within the general scope of the conference. A
              very limited number of short papers (between 2 to 3 pages) can be
              accepted based on the review and conference chair’s decision
            </p>

            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Author's Guidelines:
            </h3>
            <p className="text-lg text-gray-800 mb-4"></p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>
                Each paper must be original and unpublished work, not submitted
                for publication elsewhere. Papers must be written in good
                English and follow the provided guidelines.
              </li>
              <li>
                It should begin with a title, a short abstract, and a list of
                keywords, and its introduction should summarize the
                contributions of the paper. The similarity index for a submitted
                paper should be as per stipulation of publication house. It may
                vary over time to time.{" "}
              </li>
              <li>
                Regular papers: between 4 to 5 pages maximum (2 additional pages
                allowed at extra charges).
              </li>
              <li>
                The length of the paper should be minimum 4 pages and maximum 5
                pages including metadata. The metadata should be in the first
                page of the paper.{" "}
              </li>
              <li>
                The authors are encouraged to prepare their papers as per the
                given guidelines.{" "}
              </li>
              <li>
                Submitted papers must be in PDF format and submitted
                electronically via Microsoft CMT.
              </li>
              <li>Maximum 5 authors allowed in the manuscript.</li>
            </ul>
            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Paper Submission:
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              Log in to Microsoft CMT using your credentials and click the
              “Create New Submission” link. Fill in the required details,
              including the paper title, abstract, and author information.
              Upload your paper in PDF format as per the provided submission
              instructions. Assign appropriate keywords to your submission.
            </p>
            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Review Process:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li>
                There is a call for paper with the firm deadline in terms of
                submission, acceptance, review of the revised submission and
                camera-ready submission. The Editorial Board has decided to
                implement desk review and rejection by the editorial board. On
                scrutinizing the papers by the editorial board, if the papers
                are rejected in the process of desk review, that will not assign
                any review further. All submissions will be screened for
                plagiarism by iThenticateR or Turnitin, and when identified, the
                submissions by the same author will be rejected at any stage of
                the conference even after the conference and after the
                publication of the proceedings online from the CRC. The question
                of reimbursement of registration fees will not be applicable
                here.
              </li>
              <li>
                Names and Affiliations of the authors must NOT be included
                anywhere in the paper during the initial submission. For the
                peer review purpose, self-references are NOT permitted. If the
                author needs to refer to his/her own paper, the reference MUST
                be made in the third person in the text description of the
                submitted article. Any attempt to reveal author details and
                affiliation at the time of initial submission will lead to
                rejection summarily of the paper without further processing. The
                review will be fully Double- Blind in nature.{" "}
              </li>
              <li>
                {" "}
                All papers that conform to submission guidelines will be
                evaluated based on originality, technical and/or research
                content/depth, correctness, relevance to conference,
                contributions, and readability. Acceptance of papers will be
                communicated to authors by the submission portal. The authors of
                the accepted papers will be allowed to make corrections in
                accordance with the suggestions of the reviewers and submit
                final camera-ready papers within the stipulated deadline. All
                camera-ready papers must be prepared in conformance with the
                reviewer's report. The Editorial Board is responsible for the
                correctness of the manuscript, including formal presentation and
                completeness. Editorial Board is also responsible for ensuring
                that the content of each contribution meets the designated
                requirements of the publisher. Editorial Board or the
                Publisher's decision would be final in this regard. Acceptance
                based on the recommendation of reviewers will be at the sole
                discretion of the editors.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Mode of Presentation:
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              AICCT 2K25 will be held in hybrid mode, where authors shall
              present their papers either in physical mode at the conference
              venue or online as per their preference and convenience. The
              proceedings and certificates will be sent to the email ids of the
              corresponding authors. However, all matters related to publication
              and indexing will remain unchanged.
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
              Revisions and Camera-Ready Submission:
            </h3>
            <p className="text-lg text-gray-800">
              If your paper is accepted with revisions, carefully address the
              reviewers’ comments and revise your paper accordingly. Submit the
              final camera-ready version of your paper by the specified
              deadline. .
            </p>
            <h3 className="text-2xl font-bold text-purple-700 mt-6 mb-4">
              Microsoft CMT for Review:
            </h3>
            <p className="text-lg text-gray-800">
              The{" "}
              <a
                href="/"
                className="text-purple-600 underline hover:text-purple-800"
              >
                Microsoft CMT service{" "}
              </a>
              will be used for managing the peer-reviewing process for this
              conference. This service is provided for free by Microsoft and
              they bore all expenses, including costs for Azure cloud services
              as well as for software development and support. .
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
                {" "}
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
