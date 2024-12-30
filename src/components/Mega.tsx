import React from "react";
import BlogCard from "../components/Cardblog";



const Mega = () => {
  const posts  = [
    {
      id: "1",
      title: "Artificial Intelligence",
      description:
        "The Evolution of Artificial Intelligence: Past, Present, and Future Artificial intelligence (AI) has come a long way since its inception. Let’s take a closer look at its journey.....",
      image: "../images/blog-1.jpeg",
    },
    {
      id: "2",
      title: "5G Technology",
      description:
        "5G Technology and Its Impact Its Impact on  Everyday Life 5G is the latest standard for cellular networks, offering data transmission speeds up to 100 times faster than 4G....",
      image: "../images/internet.webp",
    },
    {
      id: "3",
      title: "Web Development",
      description:
        "The Benefits of Web Development: Why It’s Crucial for Businesses and Individuals In today’s fast-paced, technology-driven world, web development has become a.....",
      image: "../images/blog-2.jpeg",
    },
    {
      id: "4",
      title: "Next.js 15",
      description:
        "Exploring Next.js 15: What's New and How to Get Started Enhanced Server Actions Server Actions, initially introduced in version 14, have received significant improvements.....",
      image: "../images/blog-4.jpeg",
    },
    {
      id: "5",
      title: "Tailwind CSS",
      description:
        "The Complete Guide to Tailwind CSS: Revolutionizing Modern Web Design What is Tailwind CSS? Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed......",
      image: "../images/blog-5.jpeg",
    },
    {
      id: "6",
      title: "TypeScript",
      description:
        "An Introduction to TypeScript: A Comprehensive Guide While JavaScript is a versatile and widely used programming language, it has its limitations,particularly.....",
      image: "../images/blog-6.jpeg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className=" my-8 text-accent animate-color-change py-14 text-center text-4xl sm:text-6xl font-semibold sm:py-10">
        Explore Our Blogs
      </h1>
      <div className=" flex flex-col gap-12 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-20">
        {posts.map((post,) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mega;
