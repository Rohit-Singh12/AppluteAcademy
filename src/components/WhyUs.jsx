import React from "react";
import { Code, Users, Briefcase, Laptop, Award, Rocket } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      title: "Live Project Training",
      icon: <Code size={40} className="text-[#007BFF]" />,
    },
    {
      title: "Industry Expert Mentors",
      icon: <Users size={40} className="text-[#007BFF]" />,
    },
    {
      title: "Internship & Placement Assistance",
      icon: <Briefcase size={40} className="text-[#007BFF]" />,
    },
    {
      title: "Hands-on Practical Sessions",
      icon: <Laptop size={40} className="text-[#007BFF]" />,
    },
    {
      title: "Recognized Certification",
      icon: <Award size={40} className="text-[#007BFF]" />,
    },
    {
      title: "Career Growth & Guidance",
      icon: <Rocket size={40} className="text-[#007BFF]" />,
    },
  ];

  return (
    <section
      id="whyus"
      className="py-20 px-6 text-center bg-gradient-to-b from-[#F3F7FF] to-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#0033A0]">
        Why We Are Better
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        At <span className="font-semibold text-[#0033A0]">Applute Academy</span>
        , we bridge the gap between academic learning and real-world tech
        skills. Our approach ensures you’re **industry-ready** from day one.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[#0033A0]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
