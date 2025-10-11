import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Why Us", "Courses", "About", "Feedback", "Contact"];

  return (
    <nav className="bg-white text-gray-900 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/aalogo.png"
            alt="Applute Academy Logo"
            className="h-12 w-auto object-contain hover:opacity-90 transition-opacity duration-200"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[15px] font-semibold">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="text-[#0033A0] hover:text-[#007BFF] transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0033A0]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 font-semibold text-[#0033A0]">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-[#007BFF] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
