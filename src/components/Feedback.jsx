import React from "react";

const feedbacks = [
  { name: "Rohan", text: "Great experience! The trainers are amazing." },
  { name: "Priya", text: "I got placed after completing Fullstack training." },
  { name: "Arjun", text: "Real projects made me confident for interviews." },
];

export default function Feedback() {
  return (
    <section id="feedback" className="py-16 px-6 bg-orange-50">
      <h2 className="text-3xl font-bold text-center text-orange-600">
        Student Feedback
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {feedbacks.map((f) => (
          <div
            key={f.name}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg"
          >
            <p className="text-gray-700 italic">"{f.text}"</p>
            <h4 className="mt-3 font-semibold text-orange-600">- {f.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
