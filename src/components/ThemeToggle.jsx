import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  // 1. Initialize state from localStorage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // 2. Apply theme on mount and whenever it changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // persist theme
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-5 right-5 bg-gray-800 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-full shadow-md transition-colors duration-300"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
