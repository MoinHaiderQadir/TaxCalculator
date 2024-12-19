import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open state

  // Handle the theme toggle between light and dark
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav className="bg-base-300 dark:bg-gray-900 fixed w-full top-0 z-50 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            <NavLink to="/" className="flex items-center text-blue-950 font-extrabold">
              <span>Tax Calculator</span>
            </NavLink>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-700 font-bold" : "text-gray-700"
                } hover:text-blue-700`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-700 font-bold" : "text-gray-700"
                } hover:text-blue-700`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-blue-700 font-bold" : "text-gray-700"
                } hover:text-blue-700`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-900 dark:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 transition-transform transform w-full z-40">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 text-blue-900 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-900 w-full text-center transition duration-200 ${
                isActive ? "text-blue-700 font-bold" : "text-gray-700"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-4 py-2 text-blue-900 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-black w-full text-center transition duration-200 ${
                isActive ? "text-blue-700 font-bold" : "text-gray-700"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-4 py-2 text-blue-900 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 hover:text-black w-full text-center transition duration-200 ${
                isActive ? "text-blue-700 font-bold" : "text-gray-700"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
