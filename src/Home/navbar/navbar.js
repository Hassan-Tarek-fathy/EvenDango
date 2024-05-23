// src/components/NavbarPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:gap-8">
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="EvenDango" className="block h-10 w-auto" />
            </Link>
            <span className="font-semibold mt-2 text-lg text-gray-900">
              ven<span className="text-red-600">D</span>ango
            </span>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleDropdown}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              ☰
            </button>
          </div>
          <ul
            className={`md:flex flex-col md:flex-row md:space-x-2 p-4 space-x-0 md:space-y-0 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <Link
                to="/home"
                className="text-gray-700 hover:text-orange-600 m-2 font-semibold text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-gray-700 hover:text-orange-600 m-2 font-semibold text-lg"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-600 m-2 font-semibold text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-600 m-2 font-semibold text-lg"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-gray-700 hover:text-orange-600 m-2 font-semibold text-lg"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavbarPage;
