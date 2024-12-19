import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import "@fontsource/poppins";

const IncomeFromCapitalGain = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);
  const [capitalGainOption, setCapitalGainOption] = useState('');
  const [acquisitionPeriod, setAcquisitionPeriod] = useState('');
  const [holdingPeriod, setHoldingPeriod] = useState('');
  const [userType, setUserType] = useState('');
  const [investmentType, setInvestmentType] = useState('');
  const navigate = useNavigate();

  // Static white theme styles
  const bgClass = 'bg-base-200';
  const cardBgClass = 'bg-white border-2 border-blue-700';
  const textClass = 'text-gray-800';
  const inputBgClass = 'bg-gray-100';
  const inputTextClass = 'text-gray-900';
  const buttonBgClass = 'bg-blue-500 hover:bg-blue-700 rounded-full';
  const buttonTextClass = 'text-white';

  // Function to calculate tax for capital gain income
  const calculateTax = () => {
    let taxRate = 0;

    // Tax Rate for Capital Gain Option 1 based on holding period
    if (capitalGainOption === 'Capital Gains on Disposal of Securities') {
      switch (holdingPeriod) {
        case 'Where the holding period does not exceed one year':
          taxRate = 15; // 15% for this holding period
          break;
        case 'Where the holding period exceeds one year but does not exceed two years':
          taxRate = 12.5;
          break;
        case 'Where the holding period exceeds two years but does not exceed three years':
          taxRate = 10;
          break;
        case 'Where the holding period exceeds three years but does not exceed four years':
          taxRate = 7.5;
          break;
        case 'Where the holding period exceeds four years but does not exceed five years':
          taxRate = 5;
          break;
        case 'Where the holding period exceeds five years but does not exceed six years':
          taxRate = 2.5;
          break;
        case 'Where the holding period exceeds six years':
          taxRate = 0;
          break;
        case 'Future commodity contracts entered into by members of Pakistan Mercantile Exchange':
          taxRate = 5;
          break;
        default:
          taxRate = 0;
          break;
      }
    }

    // Tax Rate for Capital Gain Option 2 based on acquisition period
    if (capitalGainOption === 'Capital Gains on Disposal of Securities (First Sch. Part I Div. VII)') {
      switch (acquisitionPeriod) {
        case 'the securities are acquired on or after the first day of July, 2013 but on or before the 30th day of June, 2022':
          taxRate = 12.5;
          break;
        case 'the securities are acquired before the first day of July, 2013':
          taxRate = 0;
          break;
        default:
          taxRate = 0;
          break;
      }
    }

    // Tax Rate for Capital Gain Option 3 based on user type and investment type
    if (capitalGainOption === 'Capital Gains on Disposal of Securities (First Sch. Part I Div. VII) - Option 3') {
      if (
        investmentType === 'mutual fund or a collective investment scheme or a REIT scheme (Stock Fund)' ||
        investmentType === 'mutual fund or a collective investment scheme or a REIT scheme (Other Fund)'
      ) {
        taxRate = 15;
      } else if (investmentType === 'if dividend receipts of the fund are less than capital gains') {
        if (userType === 'Company') {
          taxRate = 25;
        } else if (userType === 'Individual' || userType === 'AOP') {
          taxRate = 15;
        }
      }
    }

    // Calculate annual and monthly tax based on user input income and tax rate
    const annualTax = income * (taxRate / 100);
    const monthlyTax = annualTax / 12;

    // Set the calculated values for display
    setTax({ annualTax, monthlyTax, taxRate });
  };

  // Function to reset all fields
  const resetFields = () => {
    setIncome('');
    setTax(null);
    setCapitalGainOption('');
    setAcquisitionPeriod('');
    setHoldingPeriod('');
    setUserType('');
    setInvestmentType('');
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
        <div className={`card ${cardBgClass} shadow-xl w-96 p-6 ${textClass}`}>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Income from Capital Gain</h2>

          {/* Capital Gain Option Selection */}
          <select
            value={capitalGainOption}
            onChange={(e) => setCapitalGainOption(e.target.value)}
            className={`select select-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
          >
            <option value="" disabled>Select Capital Gain Option</option>
            <option value="Capital Gains on Disposal of Securities">Capital Gains on Disposal of Securities</option>
            <option value="Capital Gains on Disposal of Securities (First Sch. Part I Div. VII)">Capital Gains on Disposal of Securities (First Sch. Part I Div. VII)</option>
            <option value="Capital Gains on Disposal of Securities (First Sch. Part I Div. VII) - Option 3">Capital Gains on Disposal of Securities (First Sch. Part I Div. VII) - Option 3</option>
          </select>

          {/* Acquisition Period Selection for Option 2 */}
          {capitalGainOption === 'Capital Gains on Disposal of Securities (First Sch. Part I Div. VII)' && (
            <select
              value={acquisitionPeriod}
              onChange={(e) => setAcquisitionPeriod(e.target.value)}
              className={`select select-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
            >
              <option value="" disabled>Select Acquisition Period</option>
              <option value="the securities are acquired on or after the first day of July, 2013 but on or before the 30th day of June, 2022">
                the securities are acquired on or after the first day of July, 2013 but on or before the 30th day of June, 2022
              </option>
              <option value="the securities are acquired before the first day of July, 2013">
                the securities are acquired before the first day of July, 2013
              </option>
            </select>
          )}

          {/* Holding Period Selection for Option 1 */}
          {capitalGainOption === 'Capital Gains on Disposal of Securities' && (
            <select
              value={holdingPeriod}
              onChange={(e) => setHoldingPeriod(e.target.value)}
              className={`select select-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
            >
              <option value="" disabled>Select Holding Period</option>
              <option value="Where the holding period does not exceed one year">Where the holding period does not exceed one year</option>
              <option value="Where the holding period exceeds one year but does not exceed two years">Where the holding period exceeds one year but does not exceed two years</option>
              <option value="Where the holding period exceeds two years but does not exceed three years">Where the holding period exceeds two years but does not exceed three years</option>
              <option value="Where the holding period exceeds three years but does not exceed four years">Where the holding period exceeds three years but does not exceed four years</option>
              <option value="Where the holding period exceeds four years but does not exceed five years">Where the holding period exceeds four years but does not exceed five years</option>
              <option value="Where the holding period exceeds five years but does not exceed six years">Where the holding period exceeds five years but does not exceed six years</option>
              <option value="Where the holding period exceeds six years">Where the holding period exceeds six years</option>
              <option value="Future commodity contracts entered into by members of Pakistan Mercantile Exchange">
                Future commodity contracts entered into by members of Pakistan Mercantile Exchange
              </option>
            </select>
          )}

          {/* User Type Selection for Option 3 */}
          {capitalGainOption === 'Capital Gains on Disposal of Securities (First Sch. Part I Div. VII) - Option 3' && (
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className={`select select-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
            >
              <option value="" disabled>Select User Type</option>
              <option value="Individual">Individual</option>
              <option value="AOP">AOP</option>
              <option value="Company">Company</option>
            </select>
          )}

          {/* Investment Type Selection for Option 3 */}
          {userType && (
            <select
              value={investmentType}
              onChange={(e) => setInvestmentType(e.target.value)}
              className={`select select-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
            >
              <option value="" disabled>Select Investment Type</option>
              <option value="mutual fund or a collective investment scheme or a REIT scheme (Stock Fund)">
                mutual fund or a collective investment scheme or a REIT scheme (Stock Fund)
              </option>
              <option value="mutual fund or a collective investment scheme or a REIT scheme (Other Fund)">
                mutual fund or a collective investment scheme or a REIT scheme (Other Fund)
              </option>
              <option value="if dividend receipts of the fund are less than capital gains">
                if dividend receipts of the fund are less than capital gains
              </option>
            </select>
          )}

          {/* Income Input */}
          <input
            type="number"
            placeholder="Enter your capital gain income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={`input input-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
          />

          {/* Calculate Tax Button */}
          <button onClick={calculateTax} className={`btn ${buttonBgClass} ${buttonTextClass} w-1/2 mb-2`}>
            Submit
          </button>

         

          {/* Display Calculated Tax */}
          {tax !== null && (
            <div className="mt-4">
              <p>Annual Tax: {tax.annualTax.toFixed(2)}</p>
              <p>Monthly Tax: {tax.monthlyTax.toFixed(2)}</p>
              <p>Tax Rate: {tax.taxRate}%</p>
              <br/>
               {/* Reset Button */}
          <button onClick={resetFields} className={`btn  w-1/2 ${buttonBgClass} ${buttonTextClass}`}>
            Reset
          </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default IncomeFromCapitalGain;
