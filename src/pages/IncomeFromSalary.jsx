import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const IncomeFromSalary = () => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [annualIncome, setAnnualIncome] = useState(null);
  const [tax, setTax] = useState(null);
  const [monthlyTax, setMonthlyTax] = useState(null);
  const [incomeBracket, setIncomeBracket] = useState("");

  const navigate = useNavigate();

  const calculateTax = () => {
    const annual = monthlyIncome * 12;
    setAnnualIncome(annual);

    let calculatedTax = 0;
    let bracket = "";

    if (annual <= 600000) {
      calculatedTax = 0;
      bracket = "Below 600,000";
    } else if (annual <= 1200000) {
      calculatedTax = (annual - 600000) * 0.05;
      bracket = "600,000 to 1,200,000";
    } else if (annual <= 2200000) {
      calculatedTax = 30000 + (annual - 1200000) * 0.15;
      bracket = "1,200,000 to 2,200,000";
    } else if (annual <= 3200000) {
      calculatedTax = 180000 + (annual - 2200000) * 0.25;
      bracket = "2,200,000 to 3,200,000";
    } else if (annual <= 4100000) {
      calculatedTax = 430000 + (annual - 3200000) * 0.30;
      bracket = "3,200,000 to 4,100,000";
    } else {
      calculatedTax = 700000 + (annual - 4100000) * 0.35;
      bracket = "Exceeding 4,100,000";
    }

    setTax(calculatedTax);
    setMonthlyTax(calculatedTax / 12);
    setIncomeBracket(bracket);
  };

  const resetCalculator = () => {
    setMonthlyIncome("");
    setAnnualIncome(null);
    setTax(null);
    setMonthlyTax(null);
    setIncomeBracket("");
  };

  return (
    <div className="py-28 min-h-screen bg-base-200 text-black flex flex-col">
      <div className="flex justify-start p-4">
        <button
          className="text-blue-5s00 hover:text-blue-600 font-bold flex items-center"
          onClick={() => navigate("/")}
        >
          &#8592; Back
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="w-96 bg-white shadow-lg rounded-lg p-6 border border-blue-700">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Income from Salary</h2>
          <input
            type="number"
            placeholder="Enter your monthly income"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            className="w-full p-2 border border-blue-300 rounded mb-4 "
          />
          <button
            onClick={calculateTax}
            className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-1/2 mb-2 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Submit
          </button>
          <br/>

          
          {annualIncome !== null && (
            <div className="mt-4">
              <p className="text-gray-700">
                  <strong>Annual Income:   </strong> 
                
                {annualIncome}
              </p>
              <p className="text-gray-700">
                <strong>Income Bracket:   </strong>{incomeBracket}
              </p>
              <p className="text-gray-700">
                <strong>Monthly Tax:   </strong> {monthlyTax.toFixed(2)}
              </p>
              <p className="text-gray-700">
                <strong>Total Annual Tax:</strong> <br/>{tax.toFixed(2)}
              </p>
             
             
              <br/>
              <button
            onClick={resetCalculator}
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-full w-1/2 mb-4 transition-transform duration-300 ease-in-out hover:scale-105 left-36"
          >
            Reset
          </button>
            </div>
            
          )}
        
        </div>
      </div>
    </div>
  );
};

export default IncomeFromSalary;

