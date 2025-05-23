import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const HTMLCSSProjects = [
    {
      id: 1,
      image: "/src/assets/HTMLCSS1.PNG",
      title: "Salt'n Pepper",
      description: "Salt'n Pepper Clone",
      link: 'https://saltn-pepper-by-subhan.netlify.app/',
    },
    {
      id: 2,
      image: "/src/assets/HTMLCSS2.PNG",
      title: "Music Website",
      description: "My tunes music website clone",
      link: 'https://melodious-pegasus-768785.netlify.app/',

    },
    {
      id: 3,
      image: "/src/assets/HTMLCSS3.jpg",
      title: "JavaScript Documentation",
      description: "JavaScript model introduction",
      link: 'https://sage-faun-3b3236.netlify.app/',

    },
    {
      id: 4,
      image: "/src/assets/HTMLCSS4.PNG",
      title: "My Restaurant",
      description: "Restaurant website clone",
      link: 'https://profound-phoenix-887061.netlify.app/',

    },
  ];

  const JavascriptProjects = [
    {
      id: 1,
      image: '/src/assets/javascript1.PNG',
      title: "Blogging App",
      description: "This is personal blogging crud application",
      link: 'https://muhammadsubhan0712.github.io/Personal-Blog-App/',

    },
    {
      id: 2,
      image: '/src/assets/javascript2.PNG',
      title: "Buy & Sell Corner",
      description: "Buy & Sell Corner of different products",
      link: '',

    },
    {
      id: 3,
      image: '/src/assets/javascript3.jpg',
      title: "Phone Store",
      description: "Online mobile selling app",
      link: '',

    },
    {
      id: 4,
      image: '/src/assets/Javascript4.PNG',
      title: "Weather App",
      description: "Weather App",
      link: 'https://muhammadsubhan0712.github.io/Weather-App/',

    },
  ];

  const ReactJsProjects = [
    {
      id: 1,
      image: '/src/assets/react1.PNG',
      title: "Ecommerce App",
      description: "Ecommerce App for different products",
      link: 'https://khansubhans-ecommerce.netlify.app/',

    },
    {
      id: 2,
      image: '/src/assets/react2.PNG',
      title: "Cryptoplace",
      description: "Cryptocurrency market place",
      link: 'https://regal-choux-739976.netlify.app/',

    },
    {
      id: 3,
      image: '/src/assets/react3.PNG',
      title: "Indore Plants",
      description: "Online Indore Plants website clone",
      link: 'https://stirring-crostata-684b59.netlify.app/',

    },
    {
      id: 4,
      image: '/src/assets/react4.PNG',
      title: "Youtube Clone",
      description: "Youtube Clone using API ",
      link: 'https://glittery-faun-50fb82.netlify.app/',

    },
    {
      id: 5,
      image: '/src/assets/react5.PNG',
      title: "Netflix Clone",
      description: "Netflix Clone using API ",
      link: 'https://lively-zuccutto-623d56.netlify.app',

    },
  ];

  const NextJsProjects = [
    {
      id: 1,
      image: '/src/assets/next1.JPG',
      title: "Ice-Bar",
      description: "A modern e-commerce platform for discovering and purchasing icecreams.",
      link: 'https://ice-bar-next-js.vercel.app',

    },
    {
      id: 2,
      image: '/src/assets/next2.JPG',
      title: "Bookhaven",
      description: "A modern e-commerce platform for discovering and purchasing books.",
      link: 'https://bookhaven-next-js-ggd3.vercel.app/',

    },
    {
      id: 3,
      image: '/src/assets/next3.JPG',
      title: "Meme Generator",
      description: "For having some fun this is meme generator use the select image and generate your meme",
      link: 'https://next-js-meme-maker-6syc.vercel.app/',

    },
    {
      id: 4,
      image: '/src/assets/next1.JPG',
      title: "Ice-Bar",
      description: "A modern e-commerce platform for discovering and purchasing icecreams.",
      link: 'https://ice-bar-next-js.vercel.app',

    },
  ];
  const settings = {
    dots: true,
    Infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidersToShow: 1,
        },
      },
    ],
  };
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className="relative overflow-hidden flex flex-col text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-orange-400 tracking-wide mb-6 sm:mb-10">
          HTML & CSS Projects
        </h3>

        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <Slider {...settings}>
            {HTMLCSSProjects.map((project) => {
              return (
                <>
                  <div key={project.id} className="px-2 sm:px-3 focus:outline">
                    <div className="group h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,165,0,0.3)] hover:border-orange-500">
                      <div className="relative overflow-hidden aspect-video perspective-1000">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full after:sm:h-48 md:h-56 lg:h-64 object-cover object-center rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 bg-gray-900 transition-all duration-300 group-hover:bg-gray-800">
                        <h2 className="text-lg md:text-xl font-medium text-orange-300 mb-2 transition-colors duration-300 group-hover:text-orange-500 mp-1">
                          {project.title}
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed mb-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-200 line-clamp-3">
                          {project.description}
                        </p>

                        <button className="text-xs sm:text-sm px-3 py-1.5 bg-orange-500 border border-orange-400/30 rounded-md hover:bg-orange-500/40 transition-colors duration-300">
                          <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full">
                          View Project
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
        {/* ----------------------------------------------- */}
        <br />
        <br />

        {/*   JavaScript Projects */}

        <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-orange-400 tracking-wide mb-6 sm:mb-10">
          JavaScript Projects
        </h3>

        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <Slider {...settings}>
            {JavascriptProjects.map((project) => {
              return (
                <>
                  <div key={project.id} className="px-2 sm:px-3 focus:outline">
                    <div className="group h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,165,0,0.3)] hover:border-orange-500">
                      <div className="relative overflow-hidden aspect-video perspective-1000">
                        {/* <div className="w-full h-full transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105"> */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full after:sm:h-48 md:h-56 lg:h-64 object-cover object-center rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* </div> */}
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 bg-gray-900 transition-all duration-300 group-hover:bg-gray-800">
                        <h2 className="text-lg md:text-xl font-medium text-orange-300 mb-2 transition-colors duration-300 group-hover:text-orange-500 mp-1">
                          {project.title}
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed mb-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-200 line-clamp-3">
                          {project.description}
                        </p>

                        <button className="text-xs sm:text-sm px-3 py-1.5 bg-orange-500 border border-orange-400/30 rounded-md hover:bg-orange-500/40 transition-colors duration-300">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full">
                          View Project
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
        {/* -------------------------------------------- */}
        <br />
        <br />

        {/* ReactJS Projects */}
        <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-orange-400 tracking-wide mb-6 sm:mb-10">
          ReactJs Projects
        </h3>

        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <Slider {...settings}>
            {ReactJsProjects.map((project) => {
              return (
                <>
                  <div key={project.id} className="px-2 sm:px-3 focus:outline">
                    <div className="group h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,165,0,0.3)] hover:border-orange-500">
                      <div className="relative overflow-hidden aspect-video perspective-1000">
                        {/* <div className="w-full h-full transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105"> */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full after:sm:h-48 md:h-56 lg:h-64 object-cover object-center rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* </div> */}
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 bg-gray-900 transition-all duration-300 group-hover:bg-gray-800">
                        <h2 className="text-lg md:text-xl font-medium text-orange-300 mb-2 transition-colors duration-300 group-hover:text-orange-500 mp-1">
                          {project.title}
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed mb-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-200 line-clamp-3">
                          {project.description}
                        </p>

                        <button className="text-xs sm:text-sm px-3 py-1.5 bg-orange-500 border border-orange-400/30 rounded-md hover:bg-orange-500/40 transition-colors duration-300">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full">
                          View Project
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
        {/* ------------------------------------------------------------- */}
        <br />
        <br />

        {/* NextJs Projects */}
        <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-orange-400 tracking-wide mb-6 sm:mb-10">
          NextJs Projects
        </h3>

        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <Slider {...settings}>
            {NextJsProjects.map((project) => {
              return (
                <>
                  <div key={project.id} className="px-2 sm:px-3 focus:outline">
                    <div className="group h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,165,0,0.3)] hover:border-orange-500">
                      <div className="relative overflow-hidden aspect-video perspective-1000">
                        {/* <div className="w-full h-full transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105"> */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full after:sm:h-48 md:h-56 lg:h-64 object-cover object-center rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* </div> */}
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 bg-gray-900 transition-all duration-300 group-hover:bg-gray-800">
                        <h2 className="text-lg md:text-xl font-medium text-orange-300 mb-2 transition-colors duration-300 group-hover:text-orange-500 mp-1">
                          {project.title}
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed mb-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-200 line-clamp-3">
                          {project.description}
                        </p>

                        <button className="text-xs sm:text-sm px-3 py-1.5 bg-orange-500 border border-orange-400/30 rounded-md hover:bg-orange-500/40 transition-colors duration-300">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full">
                          View Project
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
