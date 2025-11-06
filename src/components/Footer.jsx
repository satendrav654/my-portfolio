import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-700 py-10 border-t-4 border-gradient-to-r from-blue-700 to-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright & Tech */}
        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg text-center leading-relaxed">
          © 2025 Satendra Verma. Built with{" "}
          <span className="text-blue-400 font-semibold">React.js</span> and{" "}
          <span className="text-blue-400 font-semibold">Tailwind CSS</span>.
          <br className="md:hidden" /> Made with <span className="text-red-500">❤️</span> in India
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-8 text-2xl md:text-3xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
