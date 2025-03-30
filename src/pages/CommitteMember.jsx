import React from "react";

const committeeData = [
  {
    title: "Chief Patron",
    members: ["Prof. A.M. Agarwal, Vice Chancellor, Praygaraj, U.P., India"],
  },
  {
    title: "Patrons",
    members: [
      "Shri. G.G. Gulati, Chancellor, United University Prayagraj, Uttar Pradesh, India.",
      "Dr. Satpal Gulati, Vice Chairman, United Group of Institutions (UGI), Prayagraj, Uttar Pradesh, India.",
      "Dr. Jagdish Gulati, Pro Chancellor, United University, Prayagraj, Uttar Pradesh, India.",
      "Mr. Gaurav Gulati, Senior Vice President, United Group of Institutions (UGI), Prayagraj, Uttar Pradesh, India.",
    ],
  },
  {
    title: "General Chair",
    members: [
      "Dr. Prashant Shukla, HoD (CSE), United University, Prayagraj, India",
    ],
  },
  {
    title: "Technical Chair",
    members: ["Dr. Sanjeev Kumar, United University, Prayagraj, India"],
  },
  {
    title: "Program Chairs",
    members: [
      "Dr. Chetan Vyas, United University, Prayagraj, India",
      "Dr. Manoj Kumar Pal, United University, Prayagraj, India",
      "Dr. Santosh Kumar Sharma, United University, Prayagraj, India",
      "Dr. Ashutosh Kumar Tripathi, United University, Prayagraj, India",
    ],
  },
  {
    title: "Publicity Chair",
    members: ["Dr. Tulika Narang, United University, Prayagraj, India"],
  },
  {
    title: "Publicity Co-Chairs",
    members: [
      "Mr. Naveen Kumar Gupta, United University, Prayagraj, India",
      "Mr. Umakant Singh, United University, Prayagraj, India",
      "Mr. Saurabh Srivastava, United University, Prayagraj, India",
    ],
  },
  {
    title: "Finance Chair",
    members: ["Mrs. Archana Tandon, United University, Prayagraj, India"],
  },
  {
    title: "Finance Co-Chairs",
    members: [
      "Mr. Gaurav Dwivedi, United University, Prayagraj, India",
      "Mr. Ravindra Verma, United University, Prayagraj, India",
    ],
  },
  {
    title: "Sponsorship Chair",
    members: ["Dr. Sweta Singh, United University, Prayagraj, India"],
  },
  {
    title: "Sponsorship Co-Chairs",
    members: ["Dr. Mukesh Kumar, United University, Prayagraj, India"],
  },
  {
    title: "Local Organizing Chair",
    members: ["Mr. Rahul Vyas, United University, Prayagraj, India"],
  },
  {
    title: "Local Organizing Co-Chairs",
    members: [
      "Mr. Biju Natesan, United University, Prayagraj, India",
      "Mr. Anurag Tripathi, United University, Prayagraj, India",
      "Mrs. Vibha Tripathi, United University, Prayagraj, India",
      "Mr. Praven Kumar Srivastva, United University, Prayagraj, India",
    ],
  },
  {
    title: "Conference Secretaries",
    members: [
      "Ms. Priyanka, United University, Prayagraj, India",
      "Ms. Kumkum Dwivedi, United University, Prayagraj, India",
    ],
  },
  {
    title: "Editorial Chair",
    members: [
      "Dr. Prashant Shukla, HoD (CSE), United University, Prayagraj, India",
      "Dr. Sanjeev Kumar, United University, Prayagraj, India",
      "Dr. Manoj Kumar Pal, United University, Prayagraj, India",
      "Dr. Santosh Kumar Sharma, United University, Prayagraj, India",
      "Dr. Ashutosh Kumar Tripathi, United University, Prayagraj, India",
      "Dr. Tulika Narang, United University, Prayagraj, India",
    ],
  },
];

const CommitteMember = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-extrabold text-center mt-20 mb-8 pt-8 text-blue-800 font-serif">
        Conference Committees
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {committeeData.map((committee, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 text-blue-800 p-6 rounded-lg shadow-lg transform transition-transform hover:translate-y-2 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-center font-sans">
              {committee.title}
            </h2>
            <ul className="space-y-2">
              {committee.members.map((member, idx) => (
                <li
                  key={idx}
                  className="text-lg text-amber-950 font-medium flex items-start"
                >
                  <span className="mr-2 font-sans">👉</span>
                  {member}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteMember;
