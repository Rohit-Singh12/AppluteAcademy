import React, { useState, useEffect } from "react";

const slides = [
  "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVsbCUyMHN0YWNrJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1bGwlMjBzdGFjayUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/2149124402/photo/web-developer-coding-on-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=0gRM7_yuflqeveB1ONWLBkmzvO4TVaRIlIOn7R1QF4o=",
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mt-16">
      <img
        src={slides[index]}
        alt="slider"
        className="w-full h-[70vh] object-cover transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold">
          Empower Your Tech Skills
        </h2>
        <p className="mt-3 text-lg">Learn Fullstack, React, Node, and more!</p>
      </div>
    </section>
  );
}
