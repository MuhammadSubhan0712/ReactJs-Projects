import React, { useState } from "react";
import MernStack from "../assets/mernstack.png";
import { Code, Youtube, MonitorSmartphone, BrainCircuit } from "lucide-react";
import "../index.css";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";

const techStack = [
  {
    name: "HTML",
    icon: Html,
    color: "bg-orange-500/20",
    border: "border-orange-500/40",
  },
  {
    name: "CSS",
    icon: Css,
    color: "bg-blue-500/20",
    border: "border-blue-500/40",
  },
  {
    name: "JavaScript",
    icon: Javascript,
    color: "bg-yellow-500/20",
    border: "border-yellow-500/40",
  },
  {
    name: "React",
    icon: ReactLogo,
    color: "bg-cyan-500/20",
    border: "border-cyan-500/40",
  },
  {
    name: "Redux",
    icon: ReduxLogo,
    color: "bg-purple-500/20",
    border: "border-purple-500/40",
  },
  {
    name: "Tailwind",
    icon: Tailwind,
    color: "bg-teal-500/20",
    border: "border-teal-500/40",
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
    color: "bg-violet-500/20",
    border: "border-violet-500/40",
  },
  {
    name: "Node.js",
    icon: NodeLogo,
    color: "bg-green-500/20",
    border: "border-green-500/40",
  },
  {
    name: "MongoDB",
    icon: Mongodb,
    color: "bg-emerald-500/20",
    border: "border-emerald-500/40",
  },
  {
    name: "Express",
    icon: Express,
    color: "bg-gray-500/20",
    border: "border-gray-500/40",
  },
  {
    name: "Next.js",
    icon: NextJs,
    color: "bg-black/20",
    border: "border-black/40",
  },
];

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 py-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {techStack.map((tech, index) => (
          <img
            key={index}
            src={tech.icon}
            alt=""
            className={`absolute w-16 opacity-5 ${
              index % 2 === 0
                ? "animate-float-vertical"
                : "animate-float-horizontal"
            }`}
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-500/10 text-red-400 text-sm font-bold tracking-wider rounded-full border border-red-500/30 mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Hi, I'm Muhammad Subhan Khan
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            An{" "}
            <span className="text-cyan-400 font-medium">
              IT graduate and web application developer
            </span>{" "}
            focused on delivering value. I aim to drive progress through hard
            work, integrity, and a sincere commitment to my organization's
            success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-400/10 rounded-lg border border-cyan-400/30">
                  <BrainCircuit className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I started my journey in web development with a passion for
                creating intuitive and scalable applications. With expertise in
                the <span className="text-cyan-400">MERN stack</span>, I've
                built projects like full-stack food ordering systems, job
                portals, and even a LinkedIn clone. My work showcases seamless
                backend integration with sleek, user-friendly frontends.
              </p>
              <div className="flex justify-center">
                <img
                  src={MernStack}
                  alt="MERN Stack"
                  className="w-48 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-pink-600/30 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-red-400/20 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                  <Code className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Skills & Expertise
                </h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`relative p-3 rounded-lg border ${tech.border} ${
                      tech.color
                    } backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 ${
                      hoveredSkill === index
                        ? "transform scale-110 shadow-lg shadow-cyan-400/20 z-10"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 object-contain mb-2"
                    />
                    <span className="text-xs font-medium text-white text-center">
                      {tech.name}
                    </span>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 rounded-lg opacity-0 transition-opacity duration-300 ${
                        hoveredSkill === index ? "opacity-100" : ""
                      }`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-400/20 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-purple-400/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
                <Youtube className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Beyond Coding</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              When I'm not crafting digital experiences, I'm passionate about
              sharing knowledge. I run a YouTube channel teaching{" "}
              <span className="text-cyan-400">JavaScript</span>,{" "}
              <span className="text-purple-400">MERN Stack</span>,{" "}
              <span className="text-pink-400">WordPress</span>, and{" "}
              <span className="text-red-400">Digital Marketing</span>. I believe
              in continuous learning and staying ahead of the curve in this
              rapidly evolving tech landscape.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-cyan-400/10 rounded-full border border-cyan-400/30">
                <MonitorSmartphone className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-medium text-white">
                  Tech Enthusiast
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-purple-400/10 rounded-full border border-purple-400/30">
                <Youtube className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-white">
                  Content Creator
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-pink-400/10 rounded-full border border-pink-400/30">
                <BrainCircuit className="w-5 h-5 text-pink-400" />
                <span className="text-sm font-medium text-white">
                  Continuous Learner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
