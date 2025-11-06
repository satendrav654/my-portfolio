// src/components/Blog.jsx
import React from "react";
import { FaRegClock, FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";

const posts = [
  {
    title: "Mastering React UI Design",
    time: "5 min read",
    excerpt:
      "Discover the key principles and real-world techniques to design stunning, user-friendly React interfaces.",
    date: "Oct 22, 2025",
    tag: "React",
    color: "blue",
  },
  {
    title: "Node.js for Modern Developers",
    time: "7 min read",
    excerpt:
      "Understand event-driven architecture and learn how to build scalable backend systems using Node.js.",
    date: "Oct 10, 2025",
    tag: "Node.js",
    color: "green",
  },
  {
    title: "Next-Level CSS Animations",
    time: "4 min read",
    excerpt:
      "Learn how to use CSS transitions and keyframes to create smooth, engaging web animations easily.",
    date: "Sep 30, 2025",
    tag: "CSS",
    color: "pink",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-600 dark:text-blue-400 tracking-wide">
          Latest Blog Posts
        </h2>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Top Row: Tag (left) and Time (right) */}
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`text-sm px-3 py-1 rounded-full font-medium border border-${post.color}-500 text-${post.color}-600 dark:text-${post.color}-400 bg-${post.color}-50 dark:bg-${post.color}-900/20`}
                >
                  {post.tag}
                </span>
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                  <FaRegClock className="inline" /> {post.time}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-bold mb-3 text-gray-900 dark:text-white leading-snug transition-colors duration-300 cursor-pointer hover:text-${post.color}-500 dark:hover:text-${post.color}-400`}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              {/* Bottom Row: Date + Arrow */}
              <div className="flex justify-between items-center mt-auto">
                <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <FaRegCalendarAlt className="inline" /> {post.date}
                </span>

                {/* Simple Arrow Icon */}
                <span
                  className={`p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-${post.color}-500 hover:text-white transition`}
                >
                  <FaArrowRight className="text-lg" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg transition text-lg font-semibold"
          >
            <span>View All Posts</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
