import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">Contact Us</h2>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg border"
          ></textarea>
          <button className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
