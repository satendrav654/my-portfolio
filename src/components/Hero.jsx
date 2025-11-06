import React from "react";
import myPhoto from "../assets/image.jpg"; // apna image path
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 pt-15"
    >
      {/* Profile Photo */}
      <img
        src={myPhoto}
        alt="Satendra Verma"
        className="w-40 h-40 rounded-full mb-6 shadow-lg object-cover border-4 border-blue-500"
      />

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
        Hi, I'm <span className="text-blue-400">Satendra Verma</span>
      </h1>

      {/* Location */}
      <p className="text-gray-300 mb-4 text-lg md:text-xl flex items-center gap-2 justify-center">
        <FaMapMarkerAlt className="text-blue-400" /> Noida, Uttar Pradesh, India
      </p>

      {/* Scrolling Intro */}
      <div className="w-full overflow-hidden mb-6">
        <p className="text-gray-600 dark:text-gray-300 whitespace-nowrap flex justify-center">
          <span className="inline-block animate-marquee">
            I’m a passionate Full Stack Developer who loves creating modern, responsive, and beautiful web applications using React, Node.js, and Tailwind CSS.
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <a
          href="#contact"
          className="border border-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-full font-semibold transition"
        >
          Let's Connect
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-full font-semibold transition"
        >
          Download Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-2xl md:text-3xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Marquee CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 40s linear infinite; /* slower speed */
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
