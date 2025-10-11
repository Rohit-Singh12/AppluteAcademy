import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-[#f5f8ff] via-white to-[#e8f0ff]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/aalogo2.png"
            alt="About Applute Academy"
            className="w-4/5 max-w-md rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl font-extrabold text-[#0043ce] mb-5">
            About <span className="text-[#007bff]">Applute Academy</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Applute Academy is a leading technology training institute focused
            on transforming aspiring learners into skilled professionals.
            Through our{" "}
            <span className="font-semibold text-[#0043ce]">
              hands-on training
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#0043ce]">
              real-world projects
            </span>
            , we prepare you for industry challenges with the confidence and
            skills needed to excel in your tech career.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            We believe in learning by doing — ensuring every student works on
            live projects under expert mentorship to gain{" "}
            <span className="font-semibold text-[#007bff]">
              practical, job-ready experience.
            </span>
          </p>

          <button className="mt-8 bg-gradient-to-r from-[#0043ce] to-[#007bff] text-white px-6 py-3 rounded-xl shadow-md font-semibold hover:from-[#003bb0] hover:to-[#0060e0] transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
