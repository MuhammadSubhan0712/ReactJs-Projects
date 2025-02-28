import { CheckCircle , LoaderCircle } from "lucide-react";
import { pricingOptions } from "../constants";



const Pricing = () => {

  // console.log("Araha hai saman" , pricingOptions);
  
  return (
    <>
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.length > 0 ? (pricingOptions.map((option, index) => {
          return (
          <div key={index} className="w-full p-2 sm:w-1/2 lg:w-1/3">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from from-purple-800 to-purple-950 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>

              <ul>
                {option.features.map((feature, index) => {
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle />
                    <span className="ml-2">{feature}</span>
                  </li>;
                })}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-900 border border-purple-900 rounded-lg transition duration-200">
                Subscribe
              </a>
            </div>
          </div>)
        })) :  <p className="mt-5 p-3 text-gray-950 flex justify-center items-center">
        <LoaderCircle size={36} />
      </p>
      }
      </div>
   </div>
    </>
  );
};

export default Pricing;
