import React from "react";

const Plustwocard = ({details}) => {
  return (
    <div>
        {details.map((item)=>(
            <div className="max-w-2xl mx-auto mt-10 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
            <div className="bg-blue-500 text-white p-6 rounded-t-lg">
              <h1 className="text-2xl font-bold text-center">Plus Two Certificate</h1>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <img
                  src="../emblem.webp"
                  alt="Nepal Emblem"
                  className="w-16 mx-auto"
                />
                <h2 className="text-lg font-semibold mt-4">Government of Nepal</h2>
                <h3 className="text-md font-medium text-gray-600">
                  National Examination Board
                </h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Symbol Number:</strong> {item.symbol_number || "SYM-XXXX"}
                </p>
                <p>
                  <strong>Full Name:</strong> {item.name || "John Doe"}
                </p>
                <p>
                  <strong>Passed Year:</strong> {item.passed_year || "YYYY"}
                </p>
                <p>
                  <strong>GPA:</strong> {item.gpa || "4.00"}
                </p>
                <p>
                  <strong>College:</strong> {item.college || "ABC Higher Secondary School"}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-6">
              <div className="text-gray-500">
                <p>Authorized Signature</p>
                <p className="mt-4">______________</p>
              </div>
              <div className="text-gray-500">
                <p>Date Issued</p>
                <p className="mt-4">______________</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Plustwocard;
