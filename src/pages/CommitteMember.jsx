import React from "react";

const committeeData = [
  {
    title: "Chief Patron",
    members: ["Dr. Jagdish Gulati, Pro Chancellor, United University, Prayagraj, Uttar Pradesh, India"]
  },
  {
    title: "Patron",
    members: ["Prof. A.M. Agarwal, Vice Chancellor, Prayagraj, U.P., India"
    ]
  },
  {
    title: "General Chair",
    members: ["Prof. (Dr.) Siddhartha Bhattacharya,VSBTU, Ostrava, Czech Republic AUC, Zagreb, Croatia",
      "Prof. (Dr.) Jyoti Sekhar Banerjee, Bengal Institute of Technology, Kolkata, India ",
      "Dr. Prashant Shukla, HoD (Faculty of Engg. and Technology), United University, Prayagraj, India",
    ],
  },
  {
    title: "Technical Chair",
    members: ["Dr. Sanjeev Kumar, United University, Prayagraj, India",
      "Dr. Manoj Kumar Pal, United University, Prayagraj, India",
    ]
  },
  {
    title: "Program Chairs",
    members: [
      "Dr. Chetan Vyas, United University, Prayagraj, India",      
      "Dr. Santosh Kumar Sharma, United University, Prayagraj, India",
      "Dr. Ashutosh Kumar Tripathi, United University, Prayagraj, India",
    ],
  },
  {
    title: "Editorial Chair",
    members: [
      "Dr. Dac-Nhuong Le,Haiphong University, Vietnam",
      "Prof. Ravi Shukla, Saudi Electronic University, Saudi Arabia",
      
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
    members: ["Mr. Rahul Vyas, United University, Prayagraj, India","Mr. Praven Kumar Srivastva, United University, Prayagraj, India",],
    
  },
  {
    title: "Local Organizing Co-Chairs",
    members: [
      "Mr. Biju Natesan, United University, Prayagraj, India",
      "Mr. Anurag Tripathi, United University, Prayagraj, India",
      "Mrs. Vibha Tripathi, United University, Prayagraj, India",
      
    ],
  },
  {
    title: "Conference Secretaries",
    members: [
      "Ms. Priyanka, United University, Prayagraj, India",
      "Ms. Kumkum Dwivedi, United University, Prayagraj, India",
    ],
  },
  
];

const CommitteMember = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-8">
      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-6 pt-4">
          Conference Committees
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center">
          Meet the esteemed members of the conference committees who are
          contributing to the success of AICCT-2025.
        </p>

        {/* Responsive Cards for Committee Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {committeeData.map((committee, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="bg-white rounded-lg p-4 h-full">
                <h2 className="text-xl font-bold text-purple-700 mb-4 text-center">
                  {committee.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm text-justify text-gray-700">
                  {committee.members.map((member, idx) => (
                    <li key={idx}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteMember;
