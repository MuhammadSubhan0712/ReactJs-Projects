import React, { useState } from "react";
import HeroImage from "../assets/Hero.png";
import { Facebook, Twitter, Linkedin, Download, Github } from "lucide-react";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import ParticlesBackground from "./Particles";

const Hero = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <>
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden pt-18 pb-32">
      
      <ParticlesBackground/>

      {/* For Floating tech logos: */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <img
          src={reactLogo}
          alt="React"
          className="absolute w-24 top-1/4 left-10 opacity-20 animate-float-vertical"
          style={{ animationDuration: "15s" }}
        />
        <img
          src={reduxLogo}
          alt="Redux"
          className="absolute w-24 top-1/3 right-20 opacity-20 animate-float-horizontal"
          style={{ animationDuration: "18s" }}
        />
        <img
          src={tailwind}
          alt="Tailwind"
          className="absolute w-24 bottom-1/4 left-1/3 opacity-20 animate-float-diagonal"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content with style: */}
          <div className="md:w-1/2 space-y-8 relative z-10">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="text-gray-300">HI THERE,</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-purple-600">
                I'M <span className="text-white">MUHAMMAD</span>
              </span>
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-900 to-white animate-text-shimmer tracking-tighter animate-gradient-x">
                 SUBHAN KHAN
              </span>
            </h1>

            <div className="space-y-6">
              <p className="text-2xl font-medium text-cyan-300 tracking-wide">
               GRADUATED STUDENT
              </p>

              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                I craft immersive digital experiences using cutting-edge
                technologies. Specializing in{" "}
                <span className="text-cyan-400">React</span>,{" "}
                <span className="text-purple-400">Next.js</span>, and{" "}
                <span className="text-teal-400">modern web stacks</span> to
                build solutions that push boundaries.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing"
                  download
                  target="_blank"
                  className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="relative px-8 py-3 bg-gray-900 rounded-lg text-white font-bold tracking-wider flex items-center gap-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 transition-all duration-300">
                    <Download className="w-5 h-5" />
                    DOWNLOAD CV
                  </button>
                </a>

                <button className="relative px-8 py-3 border-2 border-cyan-400/50 text-cyan-400 font-bold tracking-wider rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-white transition-all duration-300 group">
                  <a href="#contact" className="relative z-10">CONTACT ME</a>
                  <span className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Hero image - 3D HOLOGRAPHIC EFFECT */}
          <div className="md:w-1/2 relative flex justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-cyan-400/20">
                <img
                  src={HeroImage}
                  alt="Muhammad Subhan Khan"
                  className="w-full h-auto max-h-[70vh] object-contain grayscale-0 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating tech badges - INTERACTIVE */}
              {[
                {
                  src: reactLogo,
                  alt: "React",
                  pos: "top-16 left-8",
                  color: "bg-cyan-500/20",
                },
                {
                  src: reduxLogo,
                  alt: "Redux",
                  pos: "top-8 right-12",
                  color: "bg-purple-500/20",
                },
                {
                  src: tailwind,
                  alt: "Tailwind",
                  pos: "bottom-20 right-8",
                  color: "bg-teal-500/20",
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`absolute ${tech.pos} w-14 h-14 rounded-full ${
                    tech.color
                  } backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center transition-all duration-500 ${
                    hoveredTech === index
                      ? "scale-125 shadow-lg shadow-cyan-400/30"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}>
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social links - CYBERPUNK STYLE */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 hidden md:flex flex-col gap-6 z-10">
        {[
          {
            icon: <Facebook className="w-6 h-6" />,
            color: "bg-blue-500/20",
            hover: "hover:bg-blue-500/40",
          },
          {
            icon: <Github className="w-6 h-6" />,
            color: "bg-pink-500/20",
            hover: "hover:bg-pink-500/40",
          },
          {
            icon: <Twitter className="w-6 h-6" />,
            color: "bg-cyan-500/20",
            hover: "hover:bg-cyan-500/40",
          },
          {
            icon: <Linkedin className="w-6 h-6" />,
            color: "bg-blue-400/20",
            hover: "hover:bg-blue-400/40",
          },
        ].map((social, index) => (
          <a
            key={index}
            href="#"
            className={`w-12 h-12 rounded-full ${social.color} ${social.hover} border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20`}>
            {social.icon}
          </a>
        ))}
      </div>

      {/* grid background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      </div>
    </section>
    </>
  );
};

export default Hero;
