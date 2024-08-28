"use client"; // Required for using hooks

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu and close

const Header = ({ categories }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-dark-black font-bold text-xl">E-Commerce</h1>
        <div className="hidden md:flex space-x-4">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category}`}>
              <span className="text-light-black hover:text-dark-black transition">
                {category}
              </span>
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center z-60">
          <button onClick={handleSidebarToggle} className="text-dark-black">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-md z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold">Categories</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-dark-black"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="px-4">
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                <Link href={`/category/${category}`}>
                  <span
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-dark-black hover:text-light-black transition"
                  >
                    {category}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
