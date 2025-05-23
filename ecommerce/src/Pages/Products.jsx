import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Config/reducer/cartSlice";
import { Loader } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {products ? (
        <div className="bg-gradient-to-r from-blue-200 to bg-blue-300 my-15 grid grid-cols-1 md:grid-cols-3 gap-8 p-7">
          {products.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src={item.images[0]}
                  alt={item.title}
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "text-yellow-300" : "text-gray-200"
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                    4.5
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${item.price}
                  </span>
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform duration-300 ease-in-out">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-2xl font-bold text-center text-gray-800">
          <Loader size={40} strokeWidth={1.5} />
        </h1>
      )}
    </>
  );
};

export default Products;
