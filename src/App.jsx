import React from "react";
import Navbar from "./components/Navabar";
import Slider from "./components/Slider";
import WhyUs from "./components/WhyUs";
import Courses from "./components/Courses";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* Horizontal fixed container */}
      <div className="max-w-[1440px] mx-auto w-full">
        <Navbar />
        <Slider />
        <WhyUs />
        <Courses />
        <About />
        <Feedback />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
