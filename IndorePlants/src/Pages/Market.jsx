import { FaTruck, FaHeadset, FaLeaf, FaDollarSign } from "react-icons/fa";

const Market = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Fast Delivery */}
          <div className="bg-green-950 text-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center mb-4">
              <FaTruck className="text-5xl text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold">Fastest Delivery</h3>
            </div>
            <p className="text-cyan-200 text-sm sm:text-base">
              We deliver your plants quickly and safely, ensuring they arrive
              fresh and healthy.
            </p>
          </div>

          {/* Card 2: Rapid Customer Service */}
          <div className="bg-green-950 text-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center mb-4">
              <FaHeadset className="text-5xl text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold">Customer Service</h3>
            </div>
            <p className="text-cyan-200 text-sm sm:text-base">
              Our support team is available 24/7 to assist you with any
              questions or concerns.
            </p>
          </div>

          {/* Card 3: Original Plants */}
          <div className="bg-green-950 text-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center mb-4">
              <FaLeaf className="text-5xl text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold">Original Plants</h3>
            </div>
            <p className="text-cyan-200 text-sm sm:text-base">
              We provide 100% original and high-quality plants sourced from
              trusted growers.
            </p>
          </div>

          {/* Card 4: Affordable Price */}
          <div className="bg-green-950 text-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center mb-4">
              <FaDollarSign className="text-5xl text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold">Affordable Price</h3>
            </div>
            <p className="text-cyan-200 text-sm sm:text-base">
              Enjoy premium plants at affordable prices without compromising on
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
