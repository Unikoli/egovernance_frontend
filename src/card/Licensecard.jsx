import React, { useEffect } from "react";

const LicenseCard = ({ details }) => {
  // If details is not provided, show a loading message
  if (!details || details.length === 0) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  useEffect(() => {
    console.log("Details:", details);
  }, [details]); // Add `details` as a dependency

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {details.map((item, index) => (
        <div
          key={index}
          className="w-[500px] h-[300px] bg-gradient-to-br from-red-100 to-green-200 border border-gray-400 rounded-lg shadow-lg relative p-4 m-4"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-red-600 font-bold text-lg">GOVERNMENT OF NEPAL</h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/2560px-Flag_of_Nepal.svg.png"
              alt="Nepal Flag"
              className="w-12 h-12 object-cover"
            />
          </div>
          <p className="text-gray-700 text-sm font-semibold">Driving License</p>

          {/* Chip Section */}
          <div className="absolute top-16 left-4 bg-yellow-400 w-16 h-16 rounded-sm shadow-md"></div>

          {/* Fields */}
          <div className="grid grid-cols-2 gap-y-2 mt-4 ml-28">
            <p className="text-sm font-semibold text-gray-700">License Number</p>
            <p className="text-sm">{item.license_number}</p>
            <p className="text-sm font-semibold text-gray-700">Name:</p>
            <p className="text-sm">{item.name}</p>
            <p className="text-sm font-semibold text-gray-700">Category:</p>
            <p className="text-sm">{item.vehicle_type}</p>
            <p className="text-sm font-semibold text-gray-700">D.O.I.:</p>
            <p className="text-sm">{item.issue_date}</p>
          </div>

          {/* Footer */}
          <div className="absolute bottom-4 left-4">
            <p className="text-xs font-semibold text-gray-700">Issued By</p>
            <div className="mt-4 border-t border-gray-400 w-24"></div>
          </div>
          <div className="absolute bottom-4 right-4">
            <p className="text-xs font-semibold text-gray-700">Signature of Holder</p>
            <div className="mt-4 border-t border-gray-400 w-24"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LicenseCard;
