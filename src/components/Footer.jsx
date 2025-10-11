import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 text-center px-4">
      {/* Logo / Branding */}
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Applute Academy. All rights reserved.
      </p>
      <p className="font-semibold mt-2 text-sm text-gradient-blue">
        Learn • Build • Grow
      </p>
      <p className="text-gray-500 mt-2 text-xs">
        A product of{" "}
        <span className="font-semibold text-white">
          Applute Technologies Private Limited
        </span>
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gradient-blue transition-colors duration-300"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="https://twitter.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gradient-blue transition-colors duration-300"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="https://www.linkedin.com/company/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gradient-blue transition-colors duration-300"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://www.instagram.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gradient-blue transition-colors duration-300"
        >
          <FaInstagram size={18} />
        </a>
      </div>

      {/* Gradient Blue Styles */}
      <style jsx>{`
        .text-gradient-blue {
          background: linear-gradient(90deg, #1e3a8a, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hover\\:text-gradient-blue:hover {
          background: linear-gradient(90deg, #1e3a8a, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
}
