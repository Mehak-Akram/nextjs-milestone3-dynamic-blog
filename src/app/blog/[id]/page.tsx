"use client";

import React from "react";
import CommentSection from "@/components/Comments";

interface Pageprops {
  id: string;
}

const posts = [
  {
    id: "1",
    title:
      "The Evolution of Artificial Intelligence: Past, Present, and Future",
    description:
      "Artificial intelligence (AI) has come a long way since its inception. Let’s take a closer look at its journey:/n Past /n The concept of AI was born in the 1950s, marked by foundational work like Alan Turing’s “Turing Test” and the development of early rule-based systems. These systems could perform specific tasks, like playing chess, but lacked adaptability.The 1980s saw the rise of expert systems, which used large databases of rules to make decisions, though they required extensive manual input and lacked learning capabilities.In the 1990s and early 2000s, machine learning emerged as a paradigm shift, allowing computers to learn patterns from data rather than relying solely on programmed rules./npresent/n Today, AI is deeply embedded in our lives, from virtual assistants like Alexa and Siri to complex machine learning models powering medical diagnoses and autonomous vehicles.Neural networks and deep learning have been game-changers, enabling applications like image recognition, natural language processing, and predictive analytics.AI is transforming industries: in finance, it detects fraud and predicts market trends; in healthcare, it analyzes medical images and aids in early disease detection; in retail, it personalizes customer experiences and optimizes inventory management.Recent advancements include generative AI models like GPT and DALL-E, which are capable of creating human-like text, images, and even music, expanding the creative and operational boundaries of technology./nFuture/nThe future of AI lies in ethical advancements, explainable AI, and general artificial intelligence (AGI). AGI would enable machines to perform any intellectual task a human can do, posing immense potential and ethical challenges.Collaborative AI systems will enhance human-machine synergy, enabling robots and AI tools to work seamlessly alongside humans in industries like manufacturing and healthcare.Emerging technologies such as neuromorphic computing, which mimics the human brain’s neural architecture, promise to make AI systems more efficient and adaptable.AI is also expected to play a crucial role in addressing global challenges, such as climate change, through better predictive models and resource optimization.However, as AI grows more powerful, ensuring fairness, transparency, and accountability will become critical. Governments and organizations are likely to focus on creating regulatory frameworks to manage AI’s impact responsibly. ",
    image: "../images/blog-1.jpeg",
  },
  {
    id: "2",
    title: "5G Technology and Its Impact on Everyday Life ",
    description:
      "5G is the latest standard for cellular networks, offering data transmission speeds up to 100 times faster than 4G. It operates on three bands: low, mid, and high-frequency spectrums. These bands collectively provide enhanced coverage, low latency, and the ability to connect a massive number of devices simultaneously. The core characteristics of 5G include:Ultra-Low Latency: Response times are reduced to as little as one millisecond, enabling real-time interactions.Enhanced Connectivity: The ability to connect billions of devices seamlessly.High-Speed Data: Download and upload speeds reaching up to 10 Gbps.Energy Efficiency: Designed to consume less power, making it more sustainable for connected devices./nUltra-Low Latency: Response times are reduced to as little as one millisecond, enabling real-time interactions. /nEnhanced Connectivity: The ability to connect billions of devices seamlessly./nHigh-Speed Data: Download and upload speeds reaching up to 10 Gbps./nEnergy Efficiency: Designed to consume less power, making it more sustainable for connected devices.",
    image: "../images/internet.webp",
  },
  {
    id: "3",
    title:
      "The Benefits of Web Development: Why It’s Crucial for Businesses and Individuals",
    description:
      " In todays fast-paced, technology-driven world, web development has become a vital component of success for businesses and individuals alike. Whether you're a startup, a small business, or an established corporation, having a professional website or web application can make a significant impact. In this blog post, we will explore the many benefits of web development, illustrating why investing in web development can be a game changer for anyone looking to build a digital presence./n1. Cost-Effective Marketing/nWeb development offers a cost-effective way to market your business. Traditional marketing methods such as TV ads, print media, and radio spots can be expensive and often have limited reach. In contrast, a well-developed website can serve as the foundation for a variety of online marketing strategies, such as:Search Engine Optimization (SEO): By optimizing your website for search engines, you can attract organic traffic, meaning you don’t have to pay for each click.Content Marketing: A blog or articles section on your website can drive traffic by providing valuable content that engages and educates visitors.Social Media Integration: With a website, you can integrate social media buttons and encourage sharing, helping you reach a wider audience without additional cost./n2. Reach a Global Audience/nOne of the most significant benefits of web development is the ability to reach a global audience. Unlike traditional brick-and-mortar businesses, websites can be accessed by anyone with an internet connection, 24/7, from anywhere in the world. This opens up incredible opportunities for businesses to expand their reach, attract international customers, and grow their brand awareness.For example, if you’re a small business in a local market, a website can expose your products or services to customers beyond your geographic location. With the proper search engine optimization (SEO) techniques, you can even rank highly on search engines, increasing your visibility to a broader audience./n 3. Enhanced User Experience/nA well-developed website offers an improved user experience, which can lead to higher customer satisfaction and retention rates. In web development, ensuring that your site is intuitive, easy to navigate, and responsive across devices is paramount.",
    image: "../images/blog-2.jpeg",
  },
  {
    id: "4",
    title: "Exploring Next.js 15 What's New and How to Get Started",
    description:
      "Exploring Next.js 15 What's New and How to Get Started /n 1. Enhanced Server Actions /n  Server Actions, initially introduced in version 14, have received significant improvements in Next.js 15. These allow developers to call server-side functions directly from client components without setting up dedicated API endpoints. Key upgrades include:Improved TypeScript Support: Full type safety for server actions.Error Boundary Integration: Better error handling with boundary components./n2. Edge Runtime Enhancements/nNext.js 15 pushes the boundaries of the edge runtime, enabling ultra-low latency for server-rendered pages. Updates include:Expanded Middleware Capabilities: Middleware now supports more use cases, including streaming responses.Faster Edge Caching: Enhanced caching strategies for edge-rendered content/n3. Native Image CDN Improvements/nThe next/image component now boasts better integration with modern image formats like AVIF and WebP. Additional updates include:Dynamic resizing capabilities.Improved performance for images served from remote sources./n4. File-Based Metadata API/nThe new file-based metadata API simplifies adding metadata like Open Graph and Twitter card tags. Simply include metadata files (e.g., metadata.ts) in your page directories./n5. Turbo Module Integration/nNext.js 15 includes support for TurboPack, a blazing-fast bundler and build tool developed by Vercel. Key features:Near-instantaneous builds for large projects.Better support for monorepos and code-splitting.",
    image: "../images/blog-4.jpeg",
  },
  {
    id: "5",
    title:
      "The Complete Guide to Tailwind CSS: Revolutionizing Modern Web Design",
    description:
      "The Complete Guide to Tailwind CSS: Revolutionizing Modern Web Design /n What is Tailwind CSS?/n Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed utility classes for building custom designsdirectly in your HTML. Unlike traditional CSS frameworks like Bootstrap or Foundation, Tailwind does not come with pre-built components. Instead, it gives you the building blocks to create your own unique designs with complete control over styling./nWhy Choose Tailwind CSS?/nUtility-First Approach:Tailwind provides utility classes such as text-center, bg-blue-500, and flex, enabling developers to style elements directly in the markup without writing custom CSS./nCustomizability:Tailwind's configuration file allows you to customize every aspect of the framework, from colors and spacing to breakpoints and more./nConsistency:Using pre-defined utility classes ensures a consistent design language across your project./nResponsive Design:Built-in responsive utilities like sm:, md:, and lg: make creating adaptive designs simple and intuitive./nPerformance Optimization:Tailwind includes a purge utility that removes unused CSS classes in production builds, significantly reducing the file size.",
    image: "../images/blog-5.jpeg",
  },
  {
    id: "6",
    title: " An Introduction to TypeScript: A Comprehensive Guide ",
    description:
      "An Introduction to TypeScript: A Comprehensive Guide/nWhy Use TypeScript?/nWhile JavaScript is a versatile and widely used programming language, it has its limitations, particularly when managing complex or large-scale projects. TypeScript addresses these challenges by providing Static Typing: Catch errors at compile time rather than runtime, improving code reliability.Improved IDE Support: Autocomplete, refactoring, and inline documentation are more robust.Advanced Features: Interfaces, enums, generics, and more allow for better structuring of code.Scalability: Simplifies the development and maintenance of large projects.Backward Compatibility: Seamlessly integrates with existing JavaScript code. /n Advantages of TypeScript/nEarly Error Detection: Reduces runtime errors by catching issues during development./nBetter Collaboration: Clear type definitions improve team productivity./n Tooling and Editor Support: Enhanced features in IDEs like Visual Studio Code./n Future-Proofing: TypeScript aligns closely with upcoming JavaScript features./nChallenges of TypeScript/nLearning Curve: Developers familiar only with JavaScript might find TypeScript challenging initially. /nCompilation Step: TypeScript requires compilation to JavaScript, adding a build step. /nConfiguration Overhead: Larger projects may need complex configurations. ",
    image: "../images/blog-6.jpeg",
  },
];

const Post = ({ params }: { params: Promise<Pageprops> }) => {
  const [unwrappedParams, setUnwrappedParams] =
    React.useState<Pageprops | null>(null);

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setUnwrappedParams(resolvedParams);
    });
  }, [params]);

  if (!unwrappedParams) {
    return (
      <div>
        <h1 className="text-5xl font-bold text-accent text-center mt-24">
          Loading Post...
        </h1>
      </div>
    );
  }

  const { id } = unwrappedParams;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div>
        <h1 className="text-5xl font-bold text-red-600 text-center mt-24">
          Post Not Found!!
        </h1>
      </div>
    );
  }

  const renderPragraph = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="text-justify mt-4">
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className="max-w-3xl mx-auto p-5 border-[2px] border-accent my-6 rounded-xl bg-custom">
      <h1 className="sm:text-3xl text-3xl text-accent text-center font-bold mt-3">
        {post.title}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto sm:h-[400px] mt-6 rounded-t-xl"
        />
      )}
      <div className="mt-6 text-lg text-white font-medium">
        {renderPragraph(post.description)}
      </div>
      <CommentSection postId={post.id} />
    </div>
  );
};

export default Post;
