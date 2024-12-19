import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const IncomeFromOtherSources = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);
  const navigate = useNavigate();

  // Pure white theme styles
  const bgClass = 'bg-base-200'; // White background for the entire page
  const cardBgClass = 'bg-white border-blue-700'; // White card with light border
  const textClass = 'text-gray-800'; // Dark text for readability
  const inputBgClass = 'bg-gray-100'; // Light input field background
  const inputTextClass = 'text-gray-900'; // Dark text inside input field
  const buttonBgClass = 'bg-blue-500 hover:bg-blue-700 rounded-full'; // Teal colored button
  const buttonTextClass = 'text-white'; // White text on buttons

  // Function to calculate tax for other sources of income
  const calculateTax = () => {
    const calculatedTax = income * 0.18; // Assuming an 18% tax rate for demonstration
    setTax(calculatedTax);
  };

  return (
    <div className={`py-28 min-h-screen flex flex-col ${bgClass}`}>
      {/* Home Icon */}
      <div className="flex justify-start p-4">
      <button
          className="text-blue-5s00 hover:text-blue-600 font-bold flex items-center"
          onClick={() => navigate("/")}
        >
          &#8592; Back
        </button>
      </div>

     

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center">
        <div className={`card ${cardBgClass} shadow-xl w-96 p-6 border-2 border-blue-700 ${textClass}`}>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Income from Other Sources</h2>

          {/* Income Input */}
          <input
            type="number"
            placeholder="Enter your income from other sources"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={`input input-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
          />

          {/* Calculate Tax Button */}
          <button
            onClick={calculateTax}
            className={`btn ${buttonBgClass} ${buttonTextClass} w-1/2 mb-2`}
          >
            Submit
          </button>

          {/* Display Calculated Tax */}
          {tax !== null && (
            <p className={`mt-4 ${textClass}`}>Your calculated tax is: {tax}</p>
            
          )}
          

        </div>
      </main>
    </div>
  );
};

export default IncomeFromOtherSources;
