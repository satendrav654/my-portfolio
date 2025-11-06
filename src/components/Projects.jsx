import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DevTinder",
    date: "May 2025",
    description:
      "Real-time developer matchmaking & chat platform with JWT/OTP authentication, profile management, and MongoDB Atlas backend.",
    tech: ["React.js", "Node.js", "WebSockets", "MongoDB", "JWT"],
    github: "https://github.com/yourusername/devtinder",
    demo: "https://devtinder-demo.vercel.app",
  },
  {
    title: "E-Commerce Platform",
    date: "Feb 2025",
    description:
      "Full e-commerce system with secure authentication and admin dashboard for comprehensive product and order management.",
    tech: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "AI Resume Builder",
    date: "Aug 2024",
    description:
      "AI-powered resume generator that helps users create professional resumes instantly using OpenAI API and Tailwind UI.",
    tech: ["Next.js", "OpenAI API", "TailwindCSS", "MongoDB"],
    github: "https://github.com/yourusername/ai-resume-builder",
    demo: "https://airesume.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center  text-blue-600 dark:text-blue-400">
          Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-start flex-wrap gap-3">
                <h3 className="text-2xl font-semibold text-indigo-500">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.date}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Icons */}
              <div className="absolute bottom-6 right-6 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
