import React from "react";
import { FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-10 flex items-center justify-center gap-3">
          <FaUserGraduate className="text-4xl" />
          About Me
        </h2>

        {/* About Content */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 md:p-10 text-left hover:shadow-xl transition">
          <p className="text-lg leading-relaxed mb-5">
            I'm a passionate{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Full-Stack Developer
            </span>{" "}
            skilled in building responsive, scalable, and user-friendly web
            applications. I love turning complex problems into simple, elegant
            digital solutions.
          </p>

          <p className="text-lg leading-relaxed mb-5">
            I specialize in{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              JavaScript, React.js, Node.js, Express.js, and MongoDB
            </span>
            . My focus is on writing clean code and creating impactful web
            experiences.
          </p>

          <p className="text-lg leading-relaxed mb-5">
            I’ve completed my{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Master of Computer Applications (MCA)
            </span>{" "}
            and have worked on multiple real-world projects to strengthen my
            technical and problem-solving skills.
          </p>

          {/* Icons Row */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex flex-col items-center">
              <FaCode className="text-3xl text-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Clean Code
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaLaptopCode className="text-3xl text-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Problem Solving
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaUserGraduate className="text-3xl text-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Continuous Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
