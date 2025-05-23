import { features } from "../constants";
import { LoaderCircle } from "lucide-react";
const FeatureSection = () => {
  return (
    <div className="realtive mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-purple-700 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-purple-800 to-purple-950 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.length > 0 ? features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-purple-800 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        )) :  <p className="mt-5 p-3 text-gray-950 flex justify-center items-center">
        <LoaderCircle size={36} />
      </p>}
      </div>
    </div>
  );
};

export default FeatureSection;
