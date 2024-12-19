import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const IncomeFromProperty = ({ theme }) => {
  const [option, setOption] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [income, setIncome] = useState('');
  const [monthlyTax, setMonthlyTax] = useState(null);
  const [yearlyTax, setYearlyTax] = useState(null);
  const [taxBracket, setTaxBracket] = useState('');
  const [taxYear, setTaxYear] = useState('');
  const [incomeBracket, setIncomeBracket] = useState('');
  const [immovableCategory, setImmovableCategory] = useState('');
  const [gainAcquisitionDate, setGainAcquisitionDate] = useState('');
  const [holdingPeriod, setHoldingPeriod] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const navigate = useNavigate();

  // Define dynamic classes based on the theme for adaptive styling
  const bgClass = theme === 'bg-base-200' ;
  const cardBgClass = theme === 'bg-red-800';
  const textClass = theme === 'text-gray-800';
  const inputBgClass = theme === 'bg-gray-100' ;
  const inputTextClass = theme ===  'text-gray-900';
  const buttonBgClass = theme === 'light' ? 'bg-teal-500 hover:bg-teal-700' : 'bg-blue-500 hover:bg-blue-700 rounded-full ';
  const buttonTextClass = 'text-white';

  // Function to handle tax calculation
  const calculateTax = () => {
    let calculatedYearlyTax = 0;

    if (option === 'Companies-General') {
      const taxRates = {
        'Small Company': 0.20,
        'Banking Company': 0.39,
        'All other Companies': 0.29,
        'Alternate Corporate Tax (ACT)': 0.17,
        'Sui Northern Gas, & SNGPL, Pakistan Airlines, Poultry Industries': 0.0075,
        'Oil Refineries, Motorcycle Dealers, and Oil Marketing Companies': 0.005,
        'Petroleum Agents, Distributors of Pharmaceutical products, FMCG': 0.0025,
        'In All Other Cases': 0.0125,
      };
      const selectedTaxRate = taxRates[companyType] || 0;
      calculatedYearlyTax = income * selectedTaxRate;
      setTaxBracket(`The selected company type falls under a ${selectedTaxRate * 100}% tax rate.`);
    }

    else if (option === 'Rental Income') {
      if (filterStatus === 'Filer') {
        if (income <= 300000) {
          calculatedYearlyTax = 0;
          setTaxBracket('Up to Rs. 300,000: 0% tax');
        } else if (income <= 600000) {
          calculatedYearlyTax = (income - 300000) * 0.05;
          setTaxBracket('Rs. 300,001 to Rs. 600,000: 5% of the amount exceeding Rs. 300,000');
        } else if (income <= 2000000) {
          calculatedYearlyTax = 15000 + (income - 600000) * 0.10;
          setTaxBracket('Rs. 600,001 to Rs. 2,000,000: Rs. 15,000 + 10% of the amount exceeding Rs. 600,000');
        } else {
          calculatedYearlyTax = 155000 + (income - 2000000) * 0.25;
          setTaxBracket('Above Rs. 2,000,000: Rs. 155,000 + 25% of the amount exceeding Rs. 2,000,000');
        }
      } else if (filterStatus === 'Non-Filer') {
        if (income <= 300000) {
          calculatedYearlyTax = 0;
          setTaxBracket('Up to Rs. 300,000: 0% tax');
        } else if (income <= 600000) {
          calculatedYearlyTax = income - 300000;
          setTaxBracket('Rs. 300,001 to Rs. 600,000: 100% of the amount exceeding Rs. 300,000');
        } else if (income <= 2000000) {
          calculatedYearlyTax = income;
          setTaxBracket('Rs. 600,001 to Rs. 2,000,000: 100% of the amount calculated from previous slabs');
        } else {
          calculatedYearlyTax = income * 0.30;
          setTaxBracket('Above Rs. 2,000,000: 30% of the amount exceeding Rs. 2,000,000');
        }
      }
    }
    
    else if (option === 'Super Tax') {
        const taxRates2022 = {
          'Up to Rs. 150 million': 0,
          'Rs. 150 million - Rs. 200 million': 0.01,
          'Rs. 200 million - Rs. 250 million': 0.02,
          'Rs. 250 million - Rs. 300 million': 0.03,
          'Rs. 300 million - Rs. 350 million': 0.04,
          'Rs. 350 million - Rs. 400 million': 0.04,
          'Rs. 400 million - Rs. 500 million': 0.04,
          'Above Rs. 500 million': 0.04,
        };
        const taxRates2023 = {
          'Up to Rs. 150 million': 0,
          'Rs. 150 million - Rs. 200 million': 0.02,
          'Rs. 200 million - Rs. 250 million': 0.03,
          'Rs. 250 million - Rs. 300 million': 0.04,
          'Rs. 300 million - Rs. 350 million': 0.06,
          'Rs. 350 million - Rs. 400 million': 0.08,
          'Rs. 400 million - Rs. 500 million': 0.10,
          'Above Rs. 500 million': 0.10,
        };
  
        const selectedTaxRates = taxYear === '2022' ? taxRates2022 : taxRates2023;
        const selectedRate = selectedTaxRates[incomeBracket] || 0;
  
        calculatedYearlyTax = income * selectedRate;
        setTaxBracket(`The selected bracket falls under a ${selectedRate * 100}% tax rate for ${taxYear}.`);
      }
  
      else if (option === 'Immovable Property') {
        const sellerRates = {
          'Filer': { 'below_50': 0.03, '50_to_100': 0.035, 'above_100': 0.04 },
          'Non-Filer': { 'below_50': 0.03, '50_to_100': 0.035, 'above_100': 0.04 },
          'Late Filer': { 'below_50': 0.06, '50_to_100': 0.07, 'above_100': 0.08 },
        };
        const buyerRates = { 'below_50': 0.12, '50_to_100': 0.16, 'above_100': 0.20 };
  
        if (immovableCategory === 'Advance tax on Seller') {
          const selectedRate =
            income <= 50000000
              ? sellerRates[filterStatus]['below_50']
              : income <= 100000000
              ? sellerRates[filterStatus]['50_to_100']
              : sellerRates[filterStatus]['above_100'];
          calculatedYearlyTax = income * selectedRate;
          setTaxBracket(
            `For ${filterStatus}, the selected bracket falls under a ${selectedRate * 100}% tax rate for sellers.`
          );
        } else if (immovableCategory === 'Advance tax on Buyer') {
          const selectedRate =
            income <= 50000000
              ? buyerRates['below_50']
              : income <= 100000000
              ? buyerRates['50_to_100']
              : buyerRates['above_100'];
          calculatedYearlyTax = income * selectedRate;
          setTaxBracket(
            `The selected bracket falls under a ${selectedRate * 100}% tax rate for buyers.`
          );
        }
      }
  
      else if (option === 'Gain on Immovable Property') {
        const ratesBefore2024 = {
          'Open Plots': [0.15, 0.125, 0.10, 0.075, 0.05, 0.025, 0],
          'Constructed': [0.15, 0.125, 0.10, 0.075, 0.05, 0.025, 0],
          'Flats': [0.15, 0.10, 0.075, 0.05, 0, 0, 0],
        };
  
        const holdingPeriods = {
          'Where the holding period does not exceed one year': 0,
          'Where the holding period exceeds one year but does not exceed two years': 1,
          'Where the holding period exceeds two years but does not exceed three years': 2,
          'Where the holding period exceeds three years but does not exceed four years': 3,
          'Where the holding period exceeds four years but does not exceed five years': 4,
          'Where the holding period exceeds five years but does not exceed six years': 5,
          'Where the holding period exceeds six years': 6,
        };
  
        const periodIndex = holdingPeriods[holdingPeriod];
  
        if (gainAcquisitionDate === 'Rate of Tax on properties acquired on or before 30th day of June, 2024') {
          const rate = ratesBefore2024[propertyType][periodIndex];
          calculatedYearlyTax = income * rate;
          setTaxBracket(`The selected holding period has a tax rate of ${rate * 100}% for ${propertyType}.`);
        } else if (gainAcquisitionDate === 'acquired on or after 1st day of July, 2024') {
          const rate = filterStatus === 'Filer' ? 0.15 : Math.max(income * 0.15, calculatedYearlyTax);
          calculatedYearlyTax = income * rate;
          setTaxBracket(`The selected holding period has a tax rate of ${rate * 100}% for ${propertyType}.`);
        }
      }

    
    // Divide by 12 for monthly tax calculation
    const calculatedMonthlyTax = calculatedYearlyTax / 12;
    setYearlyTax(calculatedYearlyTax);
    setMonthlyTax(calculatedMonthlyTax);
  };

  const resetForm = () => {
    setOption('');
    setCompanyType('');
    setFilterStatus('');
    setIncome('');
    setMonthlyTax(null);
    setYearlyTax(null);
    setTaxBracket('');
    setTaxYear('');
    setIncomeBracket('');
    setImmovableCategory('');
    setGainAcquisitionDate('');
    setHoldingPeriod('');
    setPropertyType('');
  };

  return (
    <div className={` py-28 min-h-screen flex flex-col ${bgClass}`}>
      <div className="flex justify-start p-4">
      <button
          className="text-blue-5s00 hover:text-blue-600 font-bold flex items-center"
          onClick={() => navigate("/")}
        >
          &#8592; Back
        </button>
      </div>

      

      <main className="flex-grow flex items-center justify-center">
        <div className={`card ${cardBgClass} shadow-xl w-96 p-6 rounded-lg border-2 border-blue-600`}>
          <h2 className={`text-2xl font-bold mb-4 text-blue-800 ${textClass}`}>Property Tax</h2>

          <div className="mb-4 border-blue-400">
            <select className={`select select-bordered w-full border-blue-400 ${inputBgClass} ${inputTextClass} border-blue-500`} value={option} onChange={(e) => setOption(e.target.value)}>
              <option value=""
              >Select Income Type</option>
              <option value="Rental Income">Rental Income</option>
              <option value="Companies-General">Companies-General</option>
              <option value="Super Tax">Super Tax</option>
              <option value="Immovable Property">Immovable Property</option>
              <option value="Gain on Immovable Property">Gain on Immovable Property</option>
            </select>
          </div>

          {option === 'Rental Income' && (
            <>
              <div className="mb-4 border-blue-800">
                <select className={`select select-bordered w-full ${inputBgClass} ${inputTextClass} border-blue-500`} value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                  <option value="">Select Filer Status</option>
                  <option value="Filer">Filer</option>
                  <option value="Non-Filer">Non-Filer</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Enter your rental income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className={`input input-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
              />

              <button onClick={calculateTax} className={`btn w-1/2 mb-2 ${buttonBgClass} ${buttonTextClass} font-semibold py-2 rounded`}>
                Submit
              </button>

              {monthlyTax !== null && yearlyTax !== null && (
                <div className={`mt-4 ${textClass}`}>
                  <p>Monthly Tax: {monthlyTax.toFixed(2)}</p>
                  <p>Yearly Tax: {yearlyTax.toFixed(2)}</p>
                  <p>{taxBracket}</p>
                  <br/>
                  <button onClick={resetForm} className="btn bg-gray-400 hover:bg-gray-600 text-white font-semibold py-2 rounded">
              Reset
            </button>
                </div>
              )}
            </>
          )}
 {option === 'Companies-General' && (
            <>
              <div className="mb-4 border-blue-500">
                <select className={`select select-bordered w-full border-blue-500 ${inputBgClass} ${inputTextClass}`} value={companyType} onChange={(e) => setCompanyType(e.target.value)}>
                  <option value="">Select Company Type</option>
                  <option value="Small Company">Small Company</option>
                  <option value="Banking Company">Banking Company</option>
                  <option value="All other Companies">All other Companies</option>
                  <option value="Alternate Corporate Tax (ACT)">Alternate Corporate Tax (ACT)</option>
                  <option value="Sui Northern Gas, & SNGPL, Pakistan Airlines, Poultry Industries">Sui Northern Gas, & SNGPL, Pakistan Airlines, Poultry Industries</option>
                  <option value="Oil Refineries, Motorcycle Dealers, and Oil Marketing Companies">Oil Refineries, Motorcycle Dealers, and Oil Marketing Companies</option>
                  <option value="Petroleum Agents, Distributors of Pharmaceutical products, FMCG">Petroleum Agents, Distributors of Pharmaceutical products, FMCG</option>
                  <option value="In All Other Cases">In All Other Cases</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Enter your company income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className={`input input-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
              />

              <button onClick={calculateTax} className={`btn w-1/2 mb-2 ${buttonBgClass} ${buttonTextClass} font-semibold py-2 rounded`}>
                Submit
              </button>

              {monthlyTax !== null && yearlyTax !== null && (
                <div className={`mt-4 ${textClass}`}>
                  <p>Monthly Tax: {monthlyTax.toFixed(2)}</p>
                  <p>Yearly Tax: {yearlyTax.toFixed(2)}</p>
                  <p>{taxBracket}</p>
                  <br/>
                  <button onClick={resetForm} className="btn bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded">
              Reset
            </button>
                </div>
              )}
            </>
          )}

          {option === 'Super Tax' && (
            <>
              <div className="mb-4 border-blue-500">
                <select className={`select select-bordered w-full border-blue-500 ${inputBgClass} ${inputTextClass}`} value={taxYear} onChange={(e) => setTaxYear(e.target.value)}>
                  <option value="">Select Tax Year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>

              <div className="mb-4 border-blue-500">
                <select className={`select select-bordered w-full border-blue-500 ${inputBgClass} ${inputTextClass}`} value={incomeBracket} onChange={(e) => setIncomeBracket(e.target.value)}>
                  <option value="">Select Income Bracket</option>
                  <option value="Up to Rs. 150 million">Up to Rs. 150 million</option>
                  <option value="Rs. 150 million - Rs. 200 million">Rs. 150 million - Rs. 200 million</option>
                  <option value="Rs. 200 million - Rs. 250 million">Rs. 200 million - Rs. 250 million</option>
                  <option value="Rs. 250 million - Rs. 300 million">Rs. 250 million - Rs. 300 million</option>
                  <option value="Rs. 300 million - Rs. 350 million">Rs. 300 million - Rs. 350 million</option>
                  <option value="Rs. 350 million - Rs. 400 million">Rs. 350 million - Rs. 400 million</option>
                  <option value="Rs. 400 million - Rs. 500 million">Rs. 400 million - Rs. 500 million</option>
                  <option value="Above Rs. 500 million">Above Rs. 500 million</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Enter your income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className={`input input-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
              />

              <button onClick={calculateTax} className={`btn w-1/2 mb-2 ${buttonBgClass} ${buttonTextClass} font-semibold py-2 rounded`}>
                Submit
              </button>

              {monthlyTax !== null && yearlyTax !== null && (
                <div className={`mt-4 ${textClass}`}>
                  <p>Monthly Tax: {monthlyTax.toFixed(2)}</p>
                  <p>Yearly Tax: {yearlyTax.toFixed(2)}</p>
                  <p>{taxBracket}</p>
                  <br/>
                  <button onClick={resetForm} className="btn bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded">
              Reset
            </button>
                </div>
              )}
            </>
          )}

          {option === 'Immovable Property' && (
            <>
              <div className="mb-4 border-blue-500">
                <select className={`select select-bordered w-full border-blue-500 ${inputBgClass} ${inputTextClass}`} value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                  <option value="">Select Filer Status</option>
                  <option value="Filer">Filer</option>
                  <option value="Non-Filer">Non-Filer</option>
                  <option value="Late Filer">Late Filer</option>
                </select>
              </div>

              <div className="mb-4 border-blue-500">
                <select className={`select select-bordered w-full border-blue-500  ${inputBgClass} ${inputTextClass}`} value={immovableCategory} onChange={(e) => setImmovableCategory(e.target.value)}>
                  <option value="">Select Tax Type</option>
                  <option value="Advance tax on Seller">Advance tax on Seller</option>
                  <option value="Advance tax on Buyer">Advance tax on Buyer</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Enter the gross/fair market value"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className={`input input-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
              />

              <button onClick={calculateTax} className={`btn w-1/2 border-blue-500 mb-2 ${buttonBgClass} ${buttonTextClass} font-semibold py-2 rounded`}>
                Submit
              </button>

              {monthlyTax !== null && yearlyTax !== null && (
                <div className={`mt-4 ${textClass}`}>
                  <p>Monthly Tax: {monthlyTax.toFixed(2)}</p>
                  <p>Yearly Tax: {yearlyTax.toFixed(2)}</p>
                  <p>{taxBracket}</p>
                  <br/>
                  <button onClick={resetForm} className="btn bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded">
              Reset
            </button>
                </div>
              )}
            </>
          )}

          {option === 'Gain on Immovable Property' && (
            <>
              <div className="mb-4 border-blue-500">
                <select className={`select select-bordered w-full border-blue-500 ${inputBgClass} ${inputTextClass}`} value={gainAcquisitionDate} onChange={(e) => setGainAcquisitionDate(e.target.value)}>
                  <option value="">Select Acquisition Date</option>
                  <option value="Rate of Tax on properties acquired on or before 30th day of June, 2024">On or before 30th June 2024</option>
                  <option value="acquired on or after 1st day of July, 2024">On or after 1st July 2024</option>
                </select>
              </div>

              <div className="mb-4 border-blue-500">
                <select className={`select select-bordered w-full border-blue-500 ${inputBgClass} ${inputTextClass}`} value={holdingPeriod} onChange={(e) => setHoldingPeriod(e.target.value)}>
                  <option value="">Select Holding Period</option>
                  <option value="Where the holding period does not exceed one year">Does not exceed one year</option>
                  <option value="Where the holding period exceeds one year but does not exceed two years">Exceeds one year but does not exceed two years</option>
                  <option value="Where the holding period exceeds two years but does not exceed three years">Exceeds two years but does not exceed three years</option>
                  <option value="Where the holding period exceeds three years but does not exceed four years">Exceeds three years but does not exceed four years</option>
                  <option value="Where the holding period exceeds four years but does not exceed five years">Exceeds four years but does not exceed five years</option>
                  <option value="Where the holding period exceeds five years but does not exceed six years">Exceeds five years but does not exceed six years</option>
                  <option value="Where the holding period exceeds six years">Exceeds six years</option>
                </select>
              </div>

              <div className="mb-4 border-blue-500">
                <select className={`select select-bordered w-full  border-blue-500 ${inputBgClass} ${inputTextClass}`} value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                  <option value="">Select Property Type</option>
                  <option value="Open Plots">Open Plots</option>
                  <option value="Constructed">Constructed</option>
                  <option value="Flats">Flats</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Enter the gain amount"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className={`input input-bordered w-full mb-4 border-blue-500 ${inputBgClass} ${inputTextClass}`}
              />

              <button onClick={calculateTax} className={`btn w-1/2 border-blue-500 mb-2 ${buttonBgClass} ${buttonTextClass} font-semibold py-2 rounded`}>
                Submit
              </button>

              {monthlyTax !== null && yearlyTax !== null && (
                <div className={`mt-4 ${textClass}`}>
                  <p>Monthly Tax: {monthlyTax.toFixed(2)}</p>
                  <p>Yearly Tax: {yearlyTax.toFixed(2)}</p>
                  <p>{taxBracket}</p>
                  <br/>
                  <button onClick={resetForm} className="btn w-1/2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded">
              Reset
            </button>
                </div>
              )}
            </>
          )}

          {/* Submit and Reset Buttons */}
          <div className="flex justify-between mt-4">
            
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default IncomeFromProperty;
