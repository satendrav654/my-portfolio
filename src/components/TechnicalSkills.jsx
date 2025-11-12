import React from "react";

const TechnicalSkills = () => {
  return (
    <section id ="skills" className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center  text-blue-600 dark:text-blue-400">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-500">
              Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["C++", "C", "JavaScript", "SQL", "HTML/CSS"].map((lang) => (
                <span
                  key={lang}
                  className="bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-teal-500">
              Frameworks
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "GraphQL",
                "Redis",
                "Cloudinary",
              ].map((fw) => (
                <span
                  key={fw}
                  className="bg-teal-100 dark:bg-teal-900 dark:text-teal-200 text-teal-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-rose-500">Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "VS Code",
                "GitHub",
                "Vercel",
                "Render",
                "MongoDB Atlas",
              ].map((tool) => (
                <span
                  key={tool}
                  className="bg-rose-100 dark:bg-rose-900 dark:text-rose-200 text-rose-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
