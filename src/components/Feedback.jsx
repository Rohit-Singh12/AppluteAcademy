import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
  { name: "Rohan", text: "Great experience! The trainers are amazing." },
  { name: "Priya", text: "I got placed after completing Fullstack training." },
  { name: "Arjun", text: "Real projects made me confident for interviews." },
  {
    name: "Sneha",
    text: "The learning environment was supportive and motivating.",
  },
  {
    name: "Vikram",
    text: "Hands-on projects helped me understand concepts better.",
  },
];

export default function Feedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="feedback"
      className="py-16 px-6"
      style={{ backgroundColor: "#f5f8ff" }} // match Contact section bg
    >
      <h2
        className="text-3xl sm:text-4xl font-bold text-center"
        style={{ color: "#0043ce" }}
      >
        Student Feedback
      </h2>

      <div className="mt-10 max-w-6xl mx-auto">
        <Slider {...settings}>
          {feedbacks.map((f, idx) => (
            <div key={idx} className="px-3">
              <div
                className="p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[180px] flex flex-col justify-between"
                style={{
                  backgroundColor: "#ffffff", // card bg
                  border: "1px solid #e8f0ff", // subtle border
                }}
              >
                <p className="text-gray-700 italic text-lg">{`"${f.text}"`}</p>
                <h4
                  className="mt-5 font-semibold text-right"
                  style={{ color: "#0043ce" }}
                >
                  - {f.name}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
