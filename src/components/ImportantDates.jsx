import React from "react";

const ImportantDates = () => {
  const dates = [
    { event: "Paper Submission Deadline:", date: "July 30, 2025" },
    { event: "Notification of Acceptance:", date: "August 10, 2025" },
    { event: "Final Paper Submission:", date: "August 20, 2025" },
    { event: "Early Bird Registration:", date: "August 25, 2025" },
    { event: "Conference Date", date: "September 13-14, 2025" },
    {
      event: "Paper Submission Guidelines",
      date: (
        <a
          href="/files/Word_Sample_template_8.25 x11_column.docx"
          download
          className="text-purple-600 underline hover:text-purple-800"
        >
          MS Template Download{" "}
        </a>
      ),
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-6 pt-4">
        Important{" "}
        <span className="text-orange-500 font-serif font-thin"> Dates </span>
      </h2>
      {/* Card Section */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg shadow-lg py-6">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-lg shadow-lg">
          <table className="w-full bg-white text-gray-800 rounded-lg overflow-hidden">
            <tbody>
              {dates.map((item, index) => (
                <tr
                  key={index}
                  className="text-xl font-thin border-b-2 border-gray-300 hover:bg-gray-100 transition-colors"
                >
                  <td className="py-3 px-6 text-left">{item.event}</td>
                  <td className="py-3 px-6 text-right">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
