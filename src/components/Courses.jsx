import React from "react";

const courses = [
  {
    name: "Fullstack Development (MERN)",
    img: "https://wallpapercave.com/wp/wp8903890.jpg",
  },
  {
    name: "Frontend Development (React)",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Backend Development (Node.js)",
    img: "https://wallpaperbat.com/img/818850-nodejs-hd-wallpaper-and-background.png",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-orange-600">
        Our Courses
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((c) => (
          <div
            key={c.name}
            className="bg-orange-50 shadow-md rounded-2xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={c.img}
              alt={c.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
