import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/image (8).png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const Projects = () => {
  const HTMLCSSProjects = [
    {
      id: 1,
      image: image,
      title: "Project 1",
      description: "Photo description for prject",
    },
    {
      id: 2,
      image: image2,
      title: "Project 1",
      description: "Photo description for prject",
    },
    {
      id: 3,
      image: image3,
      title: "Project 1",
      description: "Photo description for prject",
    },
    {
      id: 4,
      image: image4,
      title: "Project 1",
      description: "Photo description for prject",
    },
  ];
  const ReactJsProjects = [
    {
      id: 1,
      image: image,
      title: "Project 1",
      description: "Photo description for prject",
    },
    {
      id: 2,
      image: image2,
      title: "Project 1",
      description: "Photo description for prject",
    },
    {
      id: 3,
      image: image3,
      title: "Project 1",
      description: "Photo description for prject",
    },
    {
      id: 4,
      image: image4,
      title: "Project 1",
      description: "Photo description for prject",
    },
  ];

  const NextJsProjects = [
    {
      id: 1,
      image: image,
      title: "Project 1",
      description: "Photo description for prject",
    },
    {
      id: 2,
      image: image2,
      title: "Project 1",
      description: "Photo description for prject",
    },
    {
      id: 3,
      image: image3,
      title: "Project 1",
      description: "Photo description for prject",
    },
    {
      id: 4,
      image: image4,
      title: "Project 1",
      description: "Photo description for prject",
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
      className="relative overflow-hidden flex flex-col text-white body-font ">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <h3 className="text-3xl text-center font-semibold text-orange-400 tracking-wide mb-2">
          HTML & CSS Projects
        </h3>

        <Slider {...settings}>
          {HTMLCSSProjects.map((project) => {
            return (
              <>
                <div
                  key={project.id}
                  className="p-2 sm:p-3 md:p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="group h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,165,0,0.9)] hover:border-orange-500">
                    <div className="relative perspective-1000">
                      <div className="w-full h-full transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover object-center rounded-t-lg"
                        />
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 bg-gray-900 transition-all duration-300 group-hover:bg-gray-800">
                      <h2 className="text-lg sm:text-xl font-medium text-orange-300 mb-1 transition-all duration-300 group-hover:text-orange-500">
                        {project.title}
                      </h2>
                      <p className="text-sm sm:text-base leading-relaxed mb-3 text-gray-400 transition-all duration-300 group-hover:text-gray-200">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>

        {/* <Slider {...settings}>
          {HTMLCSSProjects.map((project) => {
         
            return (
              <div key={project.id} className="p-4">
                <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                      {project.title}
                    </h2>
                    <p className="leading-relaxed mb-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            

            );
          })}
        </Slider> */}
      </div>
    </section>
  );
};

export default Projects;
