import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      {/* ---------- Heading ---------- */}
      <h2 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-12">
        Get In Touch
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* ---------- LEFT SECTION ---------- */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            I'm always open to discussing new opportunities and interesting projects.
            Let's connect and create something amazing together!
          </p>

          {/* ---------- Email Box ---------- */}
          <a
            href="mailto:satendrav654@gmail.com"
            className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            <FaEnvelope className="text-blue-500 text-xl" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
              <p className="text-base font-semibold text-gray-800 dark:text-gray-100">
                satendrav654mail.com
              </p>
            </div>
          </a>

          {/* Gap */}
          <div className="h-5"></div>

          {/* ---------- Phone Box ---------- */}
          <a
            href="tel:+917252935863"
            className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:bg-green-50 dark:hover:bg-gray-700"
          >
            <FaPhoneAlt className="text-green-500 text-xl" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone</p>
              <p className="text-base font-semibold text-gray-800 dark:text-gray-100">
                +91 7252935863
              </p>
            </div>
          </a>

          {/* ---------- Social Icons ---------- */}
          <div className="flex gap-6 text-2xl mt-10">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>

        {/* ---------- RIGHT SECTION (FORM) ---------- */}
        <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="Tell me about your project..."
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
