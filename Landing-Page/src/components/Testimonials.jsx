import { testimonials } from "../constants";
import { LoaderCircle } from "lucide-react";
const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.length > 0 ? ( testimonials.map((testimonials, index) => {
          return(
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutraal rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonials.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  src={testimonials.image}
                  alt={testimonials.user}
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                />
              </div>
              <h6>{testimonials.user}</h6>
              <span className="text-sm font-normal italic text-neutral-600">
                {testimonials.company}
              </span>
            </div>
          </div>)
        })) :  <p className="mt-5 p-3 text-gray-950 flex justify-center items-center">
        <LoaderCircle size={36} />
      </p>}
      </div>
    </div>
  );
};

export default Testimonials;
