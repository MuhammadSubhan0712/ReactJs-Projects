import React, { useState } from "react";
import Cards from "./Cards";
import SaltnPepper from "../assets/HTMLCSS1.PNG";
import BloggingApp from "../assets/javascript1.PNG";
import EcommerceApp from "../assets/react1.PNG";
import Icebar from "../assets/next1.JPG";
import ChatApp from "../assets/chat-app.JPG";
import { Code2 } from "lucide-react";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectJson = [
    {
      title: "Salt'n Pepper",
      desc: "Salt'n Pepper Clone",
      image: SaltnPepper,
      live: "https://saltn-pepper-by-subhan.netlify.app/",
      github: "https://github.com/rohitsingh93300/portfolio",
    },
    {
      title: "Blogging App",
      desc: "This is personal blogging crud application",
      image: BloggingApp,
      live: "https://muhammadsubhan0712.github.io/Personal-Blog-App/",
      github: "https://github.com/rohitsingh93300/YtSpicyBites",
    },
    {
      title: "Ecommerce App",
      desc: "Ecommerce App for different products",
      image: EcommerceApp,
      live: "https://khansubhans-ecommerce.netlify.app/",
      github: "https://github.com/rohitsingh93300/YouTube-clone",
    },
    {
      title: "Ice-Bar",
      desc: "A modern e-commerce platform for discovering and purchasing icecreams.",
      image: Icebar,
      live: "https://ice-bar-next-js.vercel.app",
      github: "https://github.com/MuhammadSubhan0712/Ice-Bar-NextJs",
    },
    {
      title: "Quick Chat",
      desc: "A modern application that enables real-time communication between users via text and images/-",
      image: ChatApp,
      live: "https://chat-app-frontend-nine-blush.vercel.app",
      github:
        "https://github.com/MuhammadSubhan0712/MERN-stack-Projects/tree/main/QuickChat",
    },
  ];

  const otherProjects = [
    {
      title: "Bookhaven",
      desc: "Online Library",
      image: SaltnPepper,
      live: "https://saltn-pepper-by-subhan.netlify.app/",
      github: "https://github.com/rohitsingh93300/portfolio",
    },
    {
      title: "Quiz App",
      desc: "General knowledge quiz",
      image: BloggingApp,
      live: "https://muhammadsubhan0712.github.io/Personal-Blog-App/",
      github: "https://github.com/rohitsingh93300/YtSpicyBites",
    },
    {
      title: "Indore Plants",
      desc: "Ecommerce App for plants",
      image: EcommerceApp,
      live: "https://khansubhans-ecommerce.netlify.app/",
      github: "https://github.com/rohitsingh93300/YouTube-clone",
    },
    {
      title: "Online Admission App",
      desc: "A modern ",
      image: Icebar,
      live: "https://ice-bar-next-js.vercel.app",
      github: "https://github.com/MuhammadSubhan0712/Ice-Bar-NextJs",
    },
    {
      title: "Quick Chat",
      desc: "A modern application that enables real-time communication between users via text and images/-",
      image: ChatApp,
      live: "https://chat-app-frontend-nine-blush.vercel.app",
      github:
        "https://github.com/MuhammadSubhan0712/MERN-stack-Projects/tree/main/QuickChat",
    },
  ];

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };
  return (
    <>
      <section
        id="projects"
        className="relative bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.03] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-cyan-400/10 rounded-full border border-cyan-400/30 mb-6">
              <Code2 className="w-6 h-6 text-cyan-400" />
              <span className="text-sm font-bold tracking-widest text-cyan-400 uppercase">
                Projects
              </span>
            </div>
            <h2 className="py-2 text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              My Creations
            </h2>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto"></div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectJson.map((item, index) => (
              <Cards key={index} item={item} />
            ))}

            {/* To show all projects when button is clicked */}
            {showAllProjects &&
              otherProjects.map((item, index) => {
                <Cards key={`other-${index}`} item={item} />;
              })}
          </div>

          {/* View more button */}
          <div className="mt-16 text-center">
            <button
              onClick={toggleShowAllProjects}
              className="relative group px-8 py-4 rounded-full border-2 border-cyan-400/50 text-cyan-400 font-bold tracking-wider hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-white transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                {showAllProjects ? "SHOW LESS" : "VIEW ALL PROJECTS"}
                <svg
                  className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
