import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-lg font-semibold">
              My Portfolio
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/projects"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
