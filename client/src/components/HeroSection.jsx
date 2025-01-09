import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to Create Blog
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore insightful articles, tips, and stories on web development, tech, and more.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#latest-posts"
            className="px-6 py-3 bg-white text-blue-500 font-medium rounded-md shadow-md hover:bg-gray-100 transition"
          >
            Latest Posts
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-white font-medium rounded-md hover:bg-white hover:text-blue-500 transition"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
