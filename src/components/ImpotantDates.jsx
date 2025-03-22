import React from "react";

const ImportantDates = () => {
  const dates = [
    { event: "Paper Submission Deadline:", date: "July 15, 2024" },
    { event: "Notification of Acceptance:", date: "August 10, 2024" },
    { event: "Final Paper Submission:", date: "August 25, 2024" },
    { event: "Early Bird Registration:", date: "September 5, 2024" },
    { event: "Conference Date", date: "October 10-12, 2024" },
    { event: "Paper Submission Guidelines", date: "MS Template Download" },
    { event: "LaTex Template", date: "Download" },
  ];

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      {/* <h1 className="text-center">
        Important <span>Dates</span>
      </h1> */}
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          Important{" "}
          <span className="text-orange-400 font-serif font-thin">Dates</span>
        </h2>
        <table className="w-full bg-purple-600 text-white rounded-lg overflow-hidden shadow-lg">
          {/* <thead>
            <tr className="bg-purple-700">
              <th className="py-3 px-6 text-left">Event</th>
              <th className="py-3 px-6 text-right">Date</th>
            </tr>
          </thead> */}
          <tbody>
            {dates.map((item, index) => (
              <tr
                key={index}
                className="text-xl font-thin border-b-2 border-purple-500 hover:bg-purple-500 transition-colors"
              >
                <td className="py-3 px-6 text-left">{item.event}</td>
                <td className="py-3 px-6 text-right">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;
