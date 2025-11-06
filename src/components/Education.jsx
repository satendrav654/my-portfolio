// src/components/Education.jsx
import React from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-10 tracking-wide">
          Education
        </h2>

        {/* Education Content */}
        <div className="space-y-10">
          {/* MCA */}
          <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-blue-500 dark:text-blue-300 text-3xl">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                JSS Academy of Technical Education, Noida
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Oct 2023 – June 2025
              </p>
            </div>
          </div>

          {/* BCA */}
          <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-blue-500 dark:text-blue-300 text-3xl">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 ">
                MJP Rohilkhand University, Bareilly
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                July 2019 – Aug 2022
              </p>
            </div>
          </div>

          {/* Relevant Courses */}
          <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-blue-500 dark:text-blue-300 text-3xl">
              <FaBookOpen />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Relevant Courses
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>Data Structures</li>
                <li>Operating Systems</li>
                <li>Database Management</li>
                <li>OOPs</li>
                <li>Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
