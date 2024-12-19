import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IncomeFromSalary from './pages/IncomeFromSalary';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IncomeFromBusiness from "./pages/IncomeFromBusiness";
import IncomeFromProperty from "./pages/IncomeFromProperty";
import IncomeFromCapitalGain from "./pages/IncomeFromCapitalGain";
import IncomeFromOtherSources from "./pages/IncomeFromOtherSources";
import InfoPage from "./pages/InfoPage";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define unique paths for each route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/incomefromsalary" element={<IncomeFromSalary />} />
        <Route path="/incomefrombusiness" element={<IncomeFromBusiness />} />
        <Route path="/income-property" element={<IncomeFromProperty />} />
        <Route path="/income-gain" element={<IncomeFromCapitalGain />} />
        <Route path="/income-othersources" element={<IncomeFromOtherSources />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Contact page should have its own route */}
        <Route path="/info/:infoType" element={<InfoPage />} />
        <Route path="/about" element={<AboutUs />} />
        
        {/* Dynamic InfoPage Route */}
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
