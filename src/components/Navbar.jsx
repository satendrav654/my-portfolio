import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "TechnicalSkills", to: "skills" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className=" text-center text-2xl md:text-3xl font-bold text-blue-500 cursor-pointer tracking-wider">
          SATENDRA VERMA
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200 font-medium text-lg">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Theme Toggle */}
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-blue-500 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-6 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 font-medium text-sm">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Mobile Theme Toggle */}
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
