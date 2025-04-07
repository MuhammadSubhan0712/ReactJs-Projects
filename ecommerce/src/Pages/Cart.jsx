import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../Config/reducer/cartSlice";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty</h2>
            <p className="mt-2 text-gray-500">Start adding some products!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
                >
                  <img
                    className="w-full sm:w-48 h-48 object-cover"
                    src={item.images?.[0] || "/placeholder-product.jpg"}
                    alt={item.title}
                  />
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <p className="mt-2 text-gray-600">${item.price.toFixed(2)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="mt-4 flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-4 text-lg font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="mt-4 text-lg font-semibold">
                      Subtotal: <span className="text-blue-600">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <p className="text-gray-500 text-sm">
                  or{" "}
                  <a href="/products" className="text-blue-500 hover:underline">
                    Continue Shopping
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;