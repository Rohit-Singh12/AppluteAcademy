import React from "react";

export default function WhyUs() {
  return (
    <section id="whyus" className="py-16 px-6 text-center bg-orange-50">
      <h2 className="text-3xl font-bold text-orange-600">Why We Are Better</h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        At Applute Academy, we focus on practical and project-based learning to
        ensure you’re job-ready from day one.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          "Live Project Training",
          "Industry Expert Mentors",
          "Internship & Placement Assistance",
        ].map((item) => (
          <div
            key={item}
            className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-black">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
