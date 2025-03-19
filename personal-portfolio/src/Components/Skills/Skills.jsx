import React from "react"
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import next from "../../assets/next.png";
import bootstrap from "../../assets/bootstrap.svg";
import tailwindcss from "../../assets/tailwindcss.png";


const Skills = () => {
  return (
    <section
      id="skills"
      className="relative oveflow-hidden flex flex-col text-white body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400">
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white">
            Skills
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="leading-relaxed text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus sunt a fugiat iusto sint tempore quod reiciendis earum
            molestias voluptate quos quisquam, suscipit omnis praesentium totam
            dolorum ipsum exercitationem vitae beatae cum ullam vero hic? Nobis
            tempore nisi unde accusamus eveniet esse fugit temporibus vero
            praesentium commodi illum, expedita facilis.
          </p>
        </div>
        <div 
        data-aos="fade-left"
        data-aos-delay="500"
        className="flex flex-col md:w-1/2 md:pl-12">
        <nav className="flex flex-wrap list-none -mb-1">
        
        <li className="lg:w-1/3 mb-4 w-1/2">
         <img src={html} alt="" className="rounded-full w-24 h-24 object-cover"/>
        </li>

        <li className="lg:w-1/3 mb-4 w-1/2">
         <img src={css} alt="" className="rounded-full w-24 h-24 object-cover"/>
        </li>

        <li className="lg:w-1/3 mb-4 w-1/2">
         <img src={javascript} alt="" className="rounded-full w-24 h-24 object-cover"/>
        </li>
       
        <li className="lg:w-1/3 mb-4 w-1/2">
         <img src={react} alt="" className="rounded-full w-24 h-24 object-cover"/>
        </li>

        <li className="lg:w-1/3 mb-4 w-1/2">
         <img src={next} alt="" className="rounded-full w-24 h-24 object-cover"/>
        </li>

        <li className="lg:w-1/3 mb-4 w-1/2">
         <img src={bootstrap} alt="" className="rounded-full w-24 h-24 object-cover"/>
        </li>

        <li className="lg:w-1/3 mb-4 w-1/2">
         <img src={tailwindcss} alt="" className="rounded-full w-24 h-24 object-cover"/>
        </li>


        </nav>
        </div>
      </div>
    </section>
  );
};

export default Skills;
