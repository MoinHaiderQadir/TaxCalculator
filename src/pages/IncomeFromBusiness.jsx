import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IncomeFromBusiness = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [annualIncome, setAnnualIncome] = useState(null);
  const [tax, setTax] = useState(null);
  const [monthlyTax, setMonthlyTax] = useState(null);
  const [incomeBracket, setIncomeBracket] = useState('');
  const navigate = useNavigate();

  const calculateTax = () => {
    const annual = monthlyIncome * 12;
    setAnnualIncome(annual);
    let calculatedTax = 0;
    let bracket = '';

    if (annual <= 600000) {
      calculatedTax = 0;
      bracket = 'Below 600,000';
    } else if (annual <= 1200000) {
      calculatedTax = (annual - 600000) * 0.15;
      bracket = '600,000 to 1,200,000';
    } else if (annual <= 1600000) {
      calculatedTax = 90000 + (annual - 1200000) * 0.20;
      bracket = '1,200,000 to 1,600,000';
    } else if (annual <= 3200000) {
      calculatedTax = 170000 + (annual - 1600000) * 0.30;
      bracket = '1,600,000 to 3,200,000';
    } else if (annual <= 5600000) {
      calculatedTax = 650000 + (annual - 3200000) * 0.40;
      bracket = '3,200,000 to 5,600,000';
    } else {
      calculatedTax = 650000 + (annual - 3200000) * 0.40;
      bracket = 'Exceeding 5,600,000';
    }

    setTax(calculatedTax);
    setMonthlyTax(calculatedTax / 12);
    setIncomeBracket(bracket);
  };

  const resetCalculator = () => {
    setMonthlyIncome('');
    setAnnualIncome(null);
    setTax(null);
    setMonthlyTax(null);
    setIncomeBracket('');
  };

  return (
    <div className=" py-28 min-h-screen flex flex-col bg-base-200 text-black">
      <div className="flex justify-start p-4">
      <button
          className="text-blue-5s00 hover:text-blue-600 font-bold flex items-center"
          onClick={() => navigate("/")}
        >
          &#8592; Back
        </button>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <div className="w-96 bg-white shadow-lg rounded-lg p-6 border border-blue-700">
          <h2 className="text-2xl text-blue-600 font-semibold mb-4">Income from Business</h2>
          <input
            type="number"
            placeholder="Enter your monthly income"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            className="w-full mb-4 p-2 border border-blue-300 rounded"
          />
          <button
            onClick={calculateTax}
            className="w-1/2 bg-blue-400 hover:bg-blue-600 text-white py-2 px-4 rounded-full  mb-4 font-semibold"
          >
            Submit
          </button>
          

          {annualIncome !== null && (
            <div>
              <p><strong>Annual Income:        </strong> {annualIncome}</p>
              <p><strong>Income Bracket:   </strong> {incomeBracket}</p>
              <p><strong>Monthly Tax:   </strong> {monthlyTax?.toFixed(2)}</p>
              <p><strong>Total Annual Tax:   </strong><br/> {tax?.toFixed(2)}</p>
              <br/>
              <button
            onClick={resetCalculator}
            className="w-1/2 bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded-full  mb-4"
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

export default IncomeFromBusiness;
