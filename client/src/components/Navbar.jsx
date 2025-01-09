import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container px-4 py-4 block md:flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-blue-500">
            BlogsMaker
          </a>

          {/* Hamburger Menu / Close Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-500 md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Close Icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger Icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
          <a
            href="#home"
            className="block text-gray-700 hover:text-blue-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-blue-500 transition"
          >
            About
          </a>
          <a
            href="#blog"
            className="block text-gray-700 hover:text-blue-500 transition"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-blue-500 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
