"use client";

import Link from "next/link";
import { useState } from "react";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header>
        <div className="flex items-center justify-between px-5 sm:flex sm:justify-around sm:items-center py-5 ">
          <div className="font-extrabold text-3xl text-white">
            <a href="#">
              MY{" "}
              <span className="green font-extrabold text-accent hover:drop-shadow-xl">
                BLOGS
              </span>
            </a>
          </div>
          <ul className=" hidden sm:flex sm:gap-11 sm:font-bold text-white">
            <Link href="../">
              <li className="sm:hover:text-myColor">Home</li>
            </Link>
            <Link href="./about">
              <li className="sm:hover:text-myColor">About</li>
            </Link>
            <Link href="../">
              <li className="sm:hover:text-myColor">Blogs</li>
            </Link>
          </ul>
          <div className="sun hidden sm:flex sm:text-5xl sm:text-accent sm:hover:text-yellow-500 cursor-pointer">
            <IoSunnyOutline />
          </div>
          <div className="md:hidden text-accent" onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
        </div>

        <hr className="hidden sm:flex sm:border-[2px] sm:border-accent" />
      </header>
      {isMenuOpen && (
        <ul className="felx flex-col justify-center text-base px-3 gap-8 mt-4 font-semibold md:hidden text-accent">
          <Link href={"../"} onClick={toggleMenu}>
            {" "}
            <li className="my-3">Home</li>
          </Link>{" "}
          <Link href={"/about"} onClick={toggleMenu}>
            {" "}
            <li className="my-3">About</li>
          </Link>{" "}
          <Link href={"../"} onClick={toggleMenu}>
            {" "}
            <li className="my-3">Blogs</li>
          </Link>{" "}
          <div className="flex text-5xl sm:text-myColor sm:hover:text-yellow-500 cursor-pointer">
            <IoSunnyOutline />
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
