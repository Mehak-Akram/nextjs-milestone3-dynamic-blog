"use client";

import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";

interface IBlogCardProps {
  post: { id: string; title: string; description: string; image: string };
}

const BlogCard = ({ post }: IBlogCardProps) => {
  const usingRount = useRouter();

  return (
    <div className="flex justify-center">
      <div className="flex justify-center bg-custom gap-0 w-[330px] sm:w-[450px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Card
          className={` p-4  blog sm:w-[450px] sm:h-[500px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-[2px] border-accent`}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-40 w-[330px] sm:w-[450px] sm:h-[240px] object-cover rounded-t-lg"
          />

          <CardTitle className="text-3xl text-accent font-semibold mt-1 text-center">
            {post.title}
          </CardTitle>
          <br />
          <CardContent className="text-center text-white font-medium">
            <p>{post.description}</p>
          </CardContent>
          <div className="flex  justify-between items-center">
            <button
              className={`w-[130px] h-[40px] px-6 text-black font-semibold  bg-accent rounded-md hover:bg-black hover:text-white border-[1px] border-accent `}
              onClick={() => usingRount.push(`/blog/${post.id}`)}
            >
              Read More
            </button>
            <div className="text-myColor text-3xl flex justify-center items-center   rounded-full w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] active:bg-white border-[2px] border-accent">
              <FaHeart className="cursor-pointer text-accent active:text-red-600" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlogCard;
