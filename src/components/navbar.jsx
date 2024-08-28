import React, { useState } from 'react';
import img from './Poetry.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f3ede0] p-4 font-roboto shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container flex items-center justify-between mx-auto min-w-[320px] max-w-screen-xl">
        {/* Logo and Search Together */}
        <div className="flex items-center space-x-4 flex-grow">
          <img src={img} alt="Poetry Logo" className="h-12 w-auto" />
          <div className="flex items-center gap-2 flex-grow">
            <input
              type="text"
              placeholder="Search Poet"
              className="p-2 border-2 border-gray-300 bg-transparent rounded-full focus:outline-none focus:border-gray-300 focus:ring-0 transition-all duration-300 ease-out hover:border-gray-400 active:w-[200px]"
            />
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 active:bg-gray-900 focus:outline-none">
              Search
            </button>
          </div>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          className="block md:hidden ml-auto text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navbar Items (visible on larger screens) */}
        <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
          {/* Sign In Button */}
          <a
            href="#login"
            className="text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-700 active:bg-blue-800 focus:outline-none"
          >
            Sign In
          </a>

          {/* Create Account Button */}
          <a
            href="#signup"
            className="text-white bg-fuchsia-600 px-4 py-2 rounded-full hover:bg-fuchsia-700 active:bg-fuchsia-800 focus:outline-none"
          >
            Create Account
          </a>

          {/* Subscribe Now Button with Hover-Specific Shining Line */}
          <a
            href="#pricing"
            className="relative text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full hover:from-indigo-600 hover:to-purple-600 active:bg-purple-700 focus:outline-none overflow-hidden"
          >
            Subscribe Now
            {/* Shining Line Effect on Hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-75 rounded-full transform translate-x-[-150%] hover:translate-x-[150%] transition duration-1000 ease-out"></span>
          </a>
        </div>

        {/* Modal for Small Screens */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-60 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} flex items-center justify-center`}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-black"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="space-y-4">
              <li>
                <a
                  href="#login"
                  className="block text-blue-500 hover:text-blue-700"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#signup"
                  className="block text-fuchsia-600 hover:text-fuchsia-700"
                >
                  Create Account
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block text-indigo-500 hover:text-indigo-700"
                >
                  Subscribe Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
