import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-orange-500">Applute Academy</h1>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <a href="#whyus" className="hover:text-orange-400">
              Why Us
            </a>
          </li>
          <li>
            <a href="#courses" className="hover:text-orange-400">
              Courses
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-400">
              About
            </a>
          </li>
          <li>
            <a href="#feedback" className="hover:text-orange-400">
              Feedback
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
