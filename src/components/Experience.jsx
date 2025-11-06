// src/components/Experience.jsx
import React from "react";

const experiences = [
  {
    role: "Full-Stack Developer (Freelance)",
    company: "CodeNova Technologies (Remote)",
    period: "June 2025 – Present",
    details: [
      "Developed scalable web applications using React.js, Node.js, and MongoDB.",
      "Built internal admin dashboards and RESTful APIs to automate business workflows.",
      "Optimized app performance and implemented JWT-based authentication.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "NextVision Labs (Remote)",
    period: "March 2025 – May 2025",
    details: [
      "Created responsive landing pages and UI components using React + Tailwind CSS.",
      "Collaborated with design team to enhance UX and improve accessibility.",
      "Integrated APIs and deployed project via Vercel and GitHub Actions.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400 mb-10 tracking-wide">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-blue-500 dark:text-blue-300 mb-3">
                {exp.company}
              </h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
