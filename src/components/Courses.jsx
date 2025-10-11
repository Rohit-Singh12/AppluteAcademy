import React from "react";

const courses = [
  {
    name: "Fullstack Development (MERN)",
    description:
      "Master MongoDB, Express, React, and Node.js with hands-on projects to become an industry-ready fullstack developer.",
    img: "https://wallpapercave.com/wp/wp8903890.jpg",
    price: "₹14,999",
  },
  {
    name: "Frontend Development (React)",
    description:
      "Build dynamic and responsive UIs using React, Tailwind CSS, and JavaScript — crafted for real-world web apps.",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60",
    price: "₹9,999",
  },
  {
    name: "Backend Development (Node.js)",
    description:
      "Learn backend architecture, API development, and database management with Node.js and Express.",
    img: "https://wallpaperbat.com/img/818850-nodejs-hd-wallpaper-and-background.png",
    price: "₹11,999",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="py-20 px-6 bg-gradient-to-b from-[#e8f0ff] via-white to-[#f5f8ff]"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-[#0043ce] tracking-wide drop-shadow-sm">
          Our Courses
        </h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-lg">
          Learn with Applute Academy’s industry experts and boost your tech
          career with real-world skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {courses.map((c, index) => (
          <div
            key={c.name}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 border border-[#cdd9ff]"
            style={{
              animation: `fadeInUp 0.8s ease forwards`,
              animationDelay: `${index * 0.2}s`,
              opacity: 0,
            }}
          >
            <img
              src={c.img}
              alt={c.name}
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6 flex flex-col justify-between h-60">
              <div>
                <h3 className="text-xl font-bold text-[#002b7f] mb-2">
                  {c.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[#0043ce] font-bold text-lg">
                  {c.price}
                </span>
                <button className="bg-gradient-to-r from-[#0043ce] to-[#007bff] text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-[#003bb0] hover:to-[#0060e0] transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
