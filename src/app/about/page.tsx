import React from "react";
import Image from "next/image";
import blogabout from "../../../public/images/blog-about.webp";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="h-[800px] sm:h-[700px] w-[1400px] flex flex-col sm:flex  sm:flex-row sm:justify-around items-center">
        <div className="text-center m-6">
          <h1 className="my-12 text-5xl sm:text-6xl font-bold text-accent animate-color-change">
            About Us
          </h1>
          <p className="sm:text-center font-semibold text-white ">
            Explore valuable insights, tutorials about web development,
            programming, and technology. Whether you're <br /> an experienced
            developer or just beginning your coding journey, you'll find helpful
            tips, comprehensive <br />
            guides, and creative inspiration. Become part of the community and
            make complex topics easier to <br /> understand while igniting your
            passion for tech.
          </p>
        </div>
        <div>
          <Image
            src={blogabout}
            alt="about-us"
            className="border-[2px] border-accent sm:rounded-sm w-[300px] sm:h-[400px] sm:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
