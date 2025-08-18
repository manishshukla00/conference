import { Link } from "react-router-dom";

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
            <p className="text-gray-700 text-lg">August 25, 2025</p>
          </div>

          {/* Registration Fees */}
          <div>
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Registration Fees
            </h2>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>
                <span className="font-bold">Student/ Research Scholar:</span>
                INR 7000
              </li>
              <li>
                <span className="font-bold">Academician</span>
                INR 8000
              </li>
              <li>
                <span className="font-bold">Industry Person:</span> INR 10000
              </li>
              <li>
                <span className="font-bold">
                  Foreign Student/ Research Scholar:
                </span>
                USD 200
              </li>
              <li>
                <span className="font-bold">Foreign Academics:</span> USD 200
              </li>
              {/* <li>
                <span className="font-bold">Foreign Industry:</span> USD 300
              </li> */}
            </ul>
            {/* Terms and Conditions Note */}
            <div className="mt-4 text-sm text-gray-700 bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
              <span className="font-semibold text-orange-700">Note:</span> The
              fees mentioned above apply to a standard article of up to 5 pages.
              Additional pages, up to a maximum of 7 pages, will incur an extra
              charge of <span className="font-bold">₹1000 per page</span> for
              Indian authors and <span className="font-bold">$15 per page</span>
              for international authors.
            </div>
          </div>

          {/* Account Details */}
          <div>
            <h2 className="text-xl font-bold text-purple-700 mb-2">
              Account Details
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Account Details:
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>
                <span className="font-bold">Account Holder Name:</span> United
                University
              </li>
              <li>
                <span className="font-bold">Account Number:</span>
                50100366340061
              </li>
              <li>
                <span className="font-bold">IFSC Code:</span> HDFC0006735
              </li>
              <li>
                <span className="font-bold">SWIFT Code:</span>HDFCINBBNRI
              </li>
              <li>
                <span className="font-bold">Branch:</span>
                HDFC,Rawatpur,Prayagraj
              </li>
              <li>
                <span className="font-bold">Account Type:</span> Current Account
              </li>
            </ul>
          </div>

          {/* Registration Link */}
          <div className="text-center">
            <Link
              to="https://uniteduniversity.edu.in/RegForms/Form1021.aspx"
              className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 transform transition-transform"
              target="_blank"
            >
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
