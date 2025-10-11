import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#f5f8ff] via-white to-[#e8f0ff]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#0043ce] mb-4"
        >
          Contact <span className="text-[#007bff]">Us</span>
        </motion.h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg">
          Have questions or want to join our programs? Get in touch with us.
          We’d love to hear from you!
        </p>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {[
            {
              icon: <Mail className="text-[#0043ce] w-6 h-6" />,
              title: "Email",
              text: "info@appluteacademy.com",
            },
            {
              icon: <Phone className="text-[#0043ce] w-6 h-6" />,
              title: "Phone",
              text: "+91 98765 43210",
            },
            {
              icon: <MapPin className="text-[#0043ce] w-6 h-6" />,
              title: "Location",
              text: "Bhubaneswar, Odisha, India",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
            >
              <div className="flex flex-col items-center">
                <div className="bg-[#e8f0ff] p-3 rounded-full mb-3">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-1">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-2xl p-8 max-w-lg mx-auto border border-blue-100"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007bff] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007bff] transition"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007bff] transition"
            ></textarea>
            <button className="bg-gradient-to-r from-[#0043ce] to-[#007bff] text-white py-3 rounded-lg font-semibold shadow-md hover:from-[#003bb0] hover:to-[#0060e0] transition-all duration-300">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
