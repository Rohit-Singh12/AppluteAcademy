import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 text-center">
      <p>© {new Date().getFullYear()} Applute Academy. All rights reserved.</p>
      <p className="text-orange-400 mt-1">Learn • Build • Grow</p>
    </footer>
  );
}
