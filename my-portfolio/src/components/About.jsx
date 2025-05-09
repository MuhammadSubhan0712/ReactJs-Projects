import React from "react";
import MernStack from "../assets/mernstack.png";
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

const About = () => {
  return (
    <>
      <div className="relative" id="about">
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
                About Me
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hi, I'm Muhammad Subhan Khan
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                A Full-Stack Developer with expertise in web development,
                WordPress, SEO, and the MERN stack.
              </p>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    My Journey
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    I started my journey in web development with a passion for
                    creating intuitive and scalable applications. With
                    proficiency in the MERN stack (MongoDB, Express.js, React,
                    and Node.js), I have built Projects such as a full-stack
                    food ordering website , ajob portal, and even a LinkedIn
                    clone. My projects demonstrate my ability to integrate
                    poweful backend solutions with sleek, user-friendly frontend
                    designs.
                  </p>
                  <img
                    src={MernStack}
                    alt=""
                    className="p-2 rounded-lg w-52 mt-4"
                  />
                </div>
                <div className="border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                  <h3 className="text-2xl font-semibold text-red-600">
                    Skills & Expertise
                  </h3>
                  <div className="flex items-center justify-center flex-wrap gap-3">
                    <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                      <img src={Html} alt="" className="w-10" />
                      <span className="font-semibold">HTML</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
