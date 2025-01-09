import React, { useEffect, useState } from "react";
import BlogPostCard from "./BolgPostCard";
import axios from "axios";
import { backend } from "../constant.js";

const BlogPosts = () => {
  const posts = [
    {
      title: "React Native Developer",
      description:
        "Hiring for App developers with deep knowledge in Mobile Application development using React Native.",
      file:
        "https://media.licdn.com/dms/image/D4D12AQGoJSJydWownA/article-cover_image-shrink_720_1280/0/1717158328384?e=2147483647&v=beta&t=BS3ByCcWBLGyGohrA7qRrdM0EmgPkMo2iRPOsfdRzuo",
      author: "Jane Doe",
      updatedAt: "Dec 23, 2024",
    },
    {
      title: "Fullstack Developer",
      description:
        "Hiring for FullStack developers with deep knowledge in Web Application development using MERN Tech Stack",
      file:
        "https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-MERN-Stack-Developers-from-us.png",
      author: "John Smith",
      updatedAt: "Dec 21, 2024",
    }
  ];

  const [contents, setContents] = useState([])

  const fetchContents = async () => {
    try {
      const response = await axios.get(`${backend}/api/get-posts`);
      setContents(response.data.contents)
    } catch (error) {
        console.log(error)
    }
  }


  useEffect(() => {
    fetchContents()
  }, [contents])

  return (
    <div className="container max-w-5xl mx-auto grid grid-cols-1  gap-6 p-6">
      {posts.map((post, index) => (
        <BlogPostCard key={index} {...post} />
      ))}
      {contents.length > 0 && contents.map((content, index) => (
        <BlogPostCard key={index} {...content} />
      ))}
    </div>
  );
};

export default BlogPosts;
