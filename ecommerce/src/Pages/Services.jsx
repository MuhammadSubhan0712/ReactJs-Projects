import React from "react";

const Services = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-200 to bg-blue-300 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our E-Commerce Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service Card 1 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Online Store Setup</h2>
          <p className="text-gray-700 text-base">
            Get your online store up and running with our professional setup services.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* Service Card 2 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Payment Gateway Integration</h2>
          <p className="text-gray-700 text-base">
            Secure and seamless payment solutions to enhance customer trust and convenience.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* Service Card 3 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Product Listing Optimization</h2>
          <p className="text-gray-700 text-base">
            Enhance your product visibility with optimized listings and descriptions.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* Service Card 4 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Inventory Management</h2>
          <p className="text-gray-700 text-base">
            Keep track of your stock with our smart inventory management solutions.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* Service Card 5 */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 transform hover:-translate-y-2">
          <h2 className="text-xl font-bold text-gray-900 mb-2">SEO & Digital Marketing</h2>
          <p className="text-gray-700 text-base">
            Drive traffic and sales with our expert SEO and digital marketing strategies.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
