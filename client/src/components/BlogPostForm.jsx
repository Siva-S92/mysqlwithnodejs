import React, { useState } from "react";
import { backend } from "../constant.js";
import axios from "axios";
import { message } from "antd";

const BlogPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null, // Change to handle file input
    author: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    setFormData({ ...formData, file: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data is going to be Submitted:", formData);
    const response = await axios.post(`${backend}/api/create-post`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = await response.data;
    if (!data.success) {
      message.error(data.error);
    } else {
      // Handle form submission logic here (e.g., API call)
      message.success(data.message);
      setFormData({
        title: "",
        description: "",
        file: null, // Change to handle file input
        author: "",
        email: "",
      });
      document.getElementById("image").value = "";
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create a New Blog Post
        </h2>

        {/* Title Field */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter the blog post title"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter a short description"
            rows="4"
          />
        </div>

        {/* Author Field */}
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-medium mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter the author's name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your Email"
          />
        </div>

        {/* Image Field */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-2"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            accept="image/*"
          />
        </div>

        {formData.image && (
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Image Preview:</p>
            <img
              src={URL.createObjectURL(formData.file)}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
