// src/components/Testimonials.jsx
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Satendra is a talented developer who consistently delivers high-quality solutions with creativity and precision.",
    name: "Jane Smith",
    position: "Project Manager at Digital Agency",
  },
  {
    quote:
      "Working with Satendra was an outstanding experience. He communicates effectively and always meets deadlines.",
    name: "John Doe",
    position: "Senior Developer at Tech Corp",
  },
  {
    quote:
      "Satendra’s technical knowledge and problem-solving approach made a big impact on our product’s success.",
    name: "Mike Johnson",
    position: "CTO at StartupXYZ",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-600 dark:text-blue-400">
          What People Say
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-5 left-5 text-blue-500 text-2xl opacity-80" />

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mt-8 text-sm leading-relaxed mb-8">
                {item.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Circle with Initial */}
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
