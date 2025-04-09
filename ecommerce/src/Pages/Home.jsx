import React from "react";
import Cards from "../Components/Cards";
import Carousel from "../Components/Carousel";

export const Home = () => {

  const categories = [
    {name: "Electronics" , image: "/assets/categories/electronics.jpg"},
    {name: "Fashion" , image: "/assets/categories/fashion.jpg"},
    {name: "Home & Kitchen" , image: "/assets/categories/home.jpg"},
    {name: "Beauty" , image: "/assets/categories/beauty.jpg"},
  ]

  // Promtional Banners:
  const promotion = [
    {
      title: "Summer Sale",
      subtitle: "Up to 50% off",
      image: "/asssets/promos/summer-sale.jpg",
      cta: "Shop Now",
    },

    {
      title: "Summer Sale",
      subtitle: "Up to 50% off",
      image: "/asssets/promos/summer-sale.jpg",
      cta: "Shop Now",
    },

    {
      title: "Summer Sale",
      subtitle: "Up to 50% off",
      image: "/asssets/promos/summer-sale.jpg",
      cta: "Shop Now",
    },

    {
      title: "Summer Sale",
      subtitle: "Up to 50% off",
      image: "/asssets/promos/summer-sale.jpg",
      cta: "Shop Now",
    },
  ]
  return (
    <>

      <div className="bg-gradient-to-r from-blue-200 to bg-blue-300">
        <div>
          <Carousel />
        </div>


        

        <div>
          <Cards />
        </div>
      </div>
    </>
  );
};
