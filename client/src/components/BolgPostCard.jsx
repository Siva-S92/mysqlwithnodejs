import React from "react";

const BlogPostCard = ({ title, description, file, author, updatedAt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Blog Image */}
      <img
        src={file}
        alt={title}
        className="w-full h-auto object-cover"
      />
      
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3">
          {description}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-3">
            <img
              src={`https://ui-avatars.com/api/?name=${author}`}
              alt={author}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-700 text-sm">{author}</span>
          </div>
          <span className="text-gray-500 text-sm">{updatedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
