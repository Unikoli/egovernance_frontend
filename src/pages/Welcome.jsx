// src/pages/WelcomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 text-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg text-center">
        Welcome to Govease
      </h1>
      <button
        onClick={() => navigate("/Verification")}
        className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-700 font-semibold text-base sm:text-lg md:text-xl rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
