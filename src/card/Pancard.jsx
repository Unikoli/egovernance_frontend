import React from "react";

const Pancard = ({ details}) => {
  return (
    <div>
        {details.map((item)=>(
            <div className="max-w-lg mx-auto mt-10 border-2 border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-300">
            <div className="flex">
              <div className="p-6 w-2/3">
                <h1 className="text-white text-xl font-bold">PAN Card</h1>
                <p className="mt-4 text-white">
                  <strong>PAN Number:</strong> {item.pan_number || "XXXX-XXXX-XXXX"}
                </p>
                <p className="mt-2 text-white">
                  <strong>Name:</strong> {item.name || "John Doe"}
                </p>
                <p className="mt-2 text-white">
                  <strong>Issue Date:</strong> {item.issue_date || "YYYY-MM-DD"}
                </p>
                <p className="mt-2 text-white">
                  <strong>Address:</strong> {item.address || "Kathmandu, Nepal"}
                </p>
              </div>
              <div className="w-1/3 flex flex-col items-center justify-center p-4">
                <img
                  src="../emblem.webp"
                  alt="Nepal Emblem"
                  className="w-16 mb-4"
                />
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                  <img
                    src="../user_avatar.webp"
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
    
  );
};

export default Pancard;
