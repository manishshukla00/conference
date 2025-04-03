import React from "react";

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-8">
      <div className="max-w-4xl mt-20 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-center py-6">
          <h1 className="text-3xl font-extrabold">Registration Details</h1>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Last Date */}
          <div>
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Last Date of Registration:
            </h2>
            <p className="text-gray-700 text-lg">August 5, 2025</p>
          </div>

          {/* Registration Fees */}
          <div>
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Registration Fees
            </h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>
                <span className="font-bold">Student/ Research Scholar:</span>{" "}
                INR 7000
              </li>
              <li>
                <span className="font-bold">Academics:</span> INR 8000
              </li>
              <li>
                <span className="font-bold">Industry:</span> INR 10000
              </li>
              <li>
                <span className="font-bold">
                  Foreign Student/ Research Scholar:
                </span>{" "}
                USD 200
              </li>
              <li>
                <span className="font-bold">Foreign Academics:</span> USD 250
              </li>
              <li>
                <span className="font-bold">Foreign Industry:</span> USD 300
              </li>
            </ul>
          </div>

          {/* Account Details */}
          <div>
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Account Details
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Indian Account Details:
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>
                <span className="font-bold">Account Holder Name:</span> United
                University
              </li>
              <li>
                <span className="font-bold">Account Number:</span>{" "}
                50100366340061
              </li>
              <li>
                <span className="font-bold">IFSC Code:</span> HDFC0006735
              </li>
              <li>
                <span className="font-bold">SWIFT Code:</span>HDFCINBB
              </li>
              <li>
                <span className="font-bold">Branch:</span>{" "}
                HDFC,Rawatpur,Prayagraj
              </li>
              <li>
                <span className="font-bold">Account Type:</span> Current Account
              </li>
            </ul>
          </div>

          {/* Registration Link */}
          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transform transition-transform"
            >
              Register Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
