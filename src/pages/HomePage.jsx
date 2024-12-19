import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-32 min-h-screen bg-base-200 text-black flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Welcome to Tax Calculator</h1>

      {/* Card Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-auto max-w-6xl justify-center">
        {/* Income From Salary Card */}
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-900 hover:text-blue-800">
          <img
            src="./Images/inspic.png"
            alt="Income from Salary"
            className="w-full h-48 object-cover border-4 border-white rounded-lg"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Income from Salary</h2>
            <p className="text-gray-900 mb-6 hover:text-blue-700 ">
              Calculate your income tax based on your salary. Click the button below to get started.
            </p>
            {/* Buttons Container */}
            <div className="flex gap-4">
              <button
                className="bg-neutral text-neutral-content w-14 h-10 border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-800 rounded-full flex items-center justify-center text-sm font-semibold"
                onClick={() => navigate("/info/salary")}
              >
                Info
              </button>
              <button
                className="bg-white border-2 hover:bg-blue-500 hover:text-white hover:border-blue-800 text-black font-semibold py-2 px-3 rounded-full w-full transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => navigate("/incomefromsalary")}
              >
                Explore your Salary Tax
              </button>
            </div>
          </div>
        </div>

        {/* Income From Business Card */}
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-900 hover:text-blue-800">
          <img
            src="./Images/business.png"
            alt="Income from Business"
            className="w-full h-48 object-cover border-4 border-white rounded-lg"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Income from Business</h2>
            <p className="text-gray-900 mb-6 hover:text-blue-700 text-justify">
              Calculate your income tax based on your business. Click the button below to get started.
            </p>
            <div className="flex gap-4">
              <button
                className="bg-neutral text-neutral-content w-14 h-10 border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-800 rounded-full flex items-center justify-center text-sm font-semibold"
                onClick={() => navigate("/info/business")}
              >
                Info
              </button>
              <button
                className="bg-white border-2 hover:bg-blue-500 hover:text-white hover:border-blue-800 text-black font-semibold py-2 px-3 rounded-full w-full transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => navigate("/incomefrombusiness")}
              >
                Explore your Business Tax
              </button>
            </div>
          </div>
        </div>

        {/* Income From Property Card */}
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-900 hover:text-blue-800">
          <img
            src="./Images/inppic.png"
            alt="Income from Property"
            className="w-full h-48 object-cover border-4 border-white rounded-lg"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Income from Property</h2>
            <p className="text-gray-900 mb-6 hover:text-blue-700 text-justify">
              Calculate your income tax based on your property tax. Click the button below to get started.
            </p>
            <div className="flex gap-4">
              <button
                className="bg-neutral text-neutral-content w-14 h-10 border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-800 rounded-full flex items-center justify-center text-sm font-semibold"
                onClick={() => navigate("/info/property")}
              >
                Info
              </button>
              <button
                className="bg-white border-2 hover:bg-blue-500 hover:text-white hover:border-blue-800 text-black font-semibold py-2 px-3 rounded-full w-full transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => navigate("/income-property")}
              >
                Explore your Property Tax
              </button>
            </div>
          </div>
        </div>

        {/* Income From Capital Gain Card */}
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-900 hover:text-blue-800">
          <img
            src="./Images/incg.png"
            alt="Income from Capital Gain"
            className="w-full h-48 object-cover border-4 border-white rounded-lg"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Income From Capital Gain</h2>
            <p className="text-gray-900 mb-6 hover:text-blue-700 text-justify">
              Calculate your income tax based on your capital gain. Click the button below to get started.
            </p>
            <div className="flex gap-4">
              <button
                className="bg-neutral text-neutral-content w-14 h-10 border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-800 rounded-full flex items-center justify-center text-sm font-semibold"
                onClick={() => navigate("/info/capital-gain")}
              >
                Info
              </button>
              <button
                className="bg-white border-2 hover:bg-blue-500 hover:text-white hover:border-blue-800 text-black font-semibold py-2 px-3 rounded-full w-full transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => navigate("/income-gain")}
              >
                Explore your Cap. Gain Tax
              </button>
            </div>
          </div>
        </div>

        {/* Income From Other Sources Card */}
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-900 hover:text-blue-800">
          <img
            src="./Images/inss.png"
            alt="Income from Other Sources"
            className="w-full h-48 object-cover border-4 border-white rounded-lg"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Income From Other Sources</h2>
            <p className="text-gray-900 mb-6 hover:text-blue-700 text-justify">
              Calculate your income tax based on your other sources. Click the button below to get started.
            </p>
            <div className="flex gap-4">
              <button
                className="bg-neutral text-neutral-content w-14 h-10 border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-800 rounded-full flex items-center justify-center text-sm font-semibold"
                onClick={() => navigate("/info/other-sources")}
              >
                Info
              </button>
              <button
                className="bg-white border-2 hover:bg-blue-500 hover:text-white hover:border-blue-800 text-black font-semibold py-2 px-3 rounded-full w-full transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => navigate("/income-othersources")}
              >
                Explore your Other So. Tax
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
