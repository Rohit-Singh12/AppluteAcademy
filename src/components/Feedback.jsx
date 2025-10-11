import React from "react";

const feedbacks = [
  {
    name: "Chandan Samantaray",
    feedback: "Great course! Learned a lot in a short time.",
    role: "Student",
    image: "/images/chandan.jpg",
    rating: 5,
  },
  {
    name: "Riya Sharma",
    feedback: "The trainers are very helpful and supportive.",
    role: "Student",
    image: "/images/riya.jpg",
    rating: 4,
  },
  {
    name: "Amit Singh",
    feedback: "Practical and easy to follow content. Highly recommended!",
    role: "Student",
    image: "/images/amit.jpg",
    rating: 5,
  },
  {
    name: "Neha Patel",
    feedback: "Loved the interactive sessions and real-world examples.",
    role: "Student",
    image: "/images/neha.jpg",
    rating: 4,
  },
];

export default function Feedback() {
  const displayFeedbacks = [...feedbacks, ...feedbacks]; // duplicate for seamless scroll

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gradient-blue mb-8">
          Student Feedback
        </h2>

        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll">
            {displayFeedbacks.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
                  {/* Profile image */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>

                  {/* Feedback text */}
                  <p className="text-gray-700 mb-4">"{item.feedback}"</p>

                  {/* Star rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < item.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.072 9.385c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.958z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TailwindCSS keyframes for smooth scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        /* Gradient blue text */
        .text-gradient-blue {
          background: linear-gradient(90deg, #1e3a8a, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
