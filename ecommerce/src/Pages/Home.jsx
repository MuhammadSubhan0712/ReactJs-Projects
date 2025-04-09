import React from "react";
import Cards from "../Components/Cards";
import Carousel from "../Components/Carousel";
import { Tag, Truck, Shield, Star } from "lucide-react";

export const Home = () => {
  // Featured Categories Data:
  const categories = [
    { name: "Electronics", image: "/assets/categories/electronics.jpg" },
    { name: "Fashion", image: "/assets/categories/fashion.jpg" },
    { name: "Home & Kitchen", image: "/assets/categories/home.jpg" },
    { name: "Beauty", image: "/assets/categories/beauty.jpg" },
  ];

  // Promtional Banners:
  const promotion = [
    {
      title: "Summer Sale",
      subtitle: "Up to 50% off",
      image: "/asssets/promos/summer-sale.jpg",
      cta: "Shop Now",
    },
    {
      title: "New Arrivals",
      subtitle: "Trending This Season",
      image: "/asssets/promos/new-arrivals.jpg",
      cta: "Explore",
    },
  ];

  // Testimonials:
  const testimonials = [
    {
      quote: "Fast delivery and great quality products!",
      author: "Sarah J.",
      rating: 5,
    },
    {
      quote: "Excellent customer service. Will shop again!",
      author: "Micahel T.",
      rating: 5,
    },
    {
      quote: "Best prices I've found online for these items.",
      author: "Priya K.",
      rating: 4,
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-blue-200 to bg-blue-300">
        <div>
          <Carousel />
        </div>

        {/* Value Prepositions */}
        <iv className="contianer mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <Truck className="text-blue-600 mr-3" size={24} />
            <div>
              <h3 className="font-medium">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
          </div>

          <div className="bg-white p-4 roudned-lg shadow-sm flex items-center">
            <Shield className="text-blue-600 mr-3" size={24} />
            <div>
              <h3 className="font-medium">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% protected</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <Tag className="text-blue-600 mr-3" size={24} />
            <div>
              <h3 className="font-medium">Daily Deals</h3>
              <p className="text-sm text-gray-600">Save up to 70%</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <Star className="text-blue-600 mr-3" size={24} />
            <div>
              <h3 className="font-medium">5-Star Reviews</h3>
              <p className="text-sm text-gray-600">Trusted by thousands</p>
            </div>
          </div>
        </iv>

        {/* Featured Categories */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transition-transform duartion-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </div>;
            })}
          </div>
        </div>

        {/* Promotional Banners */}
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotion.map((promo, index) => {
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-64">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center pl-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {" "}
                    {promo.title}
                  </h3>
                  <p className="text-white mb-4">{promo.subtitle}</p>
                  <button
                    className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium 
            hover:bg-blue-600 hover:text-white transition-colors">
                    {promo.cta}
                  </button>
                </div>
              </div>
            </div>;
          })}
        </div>

        {/* Testimonials */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              {" "}
              What Our Customer Say{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="italic mb-4">{testimonial.quote}</p>
                  <p className="font-medium text-blue-600">
                    — {testimonial.author}
                  </p>
                </div>
              })}
            </div>
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <Cards />
        </div>
      </div>
    </>
  );
};
