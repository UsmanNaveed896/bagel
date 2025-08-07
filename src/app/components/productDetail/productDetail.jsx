"use client";
import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "../../context/cartContext"; // import your cart context

export default function ProductDetailsPage({ product }) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { addToCart } = useCart();

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    router.push("/cart"); 
  };

  const handleNavigate = () => {
    router.push(`/menu`);
  };

  return (
    <div className="min-h-screen bg-[#d4a574] px-4 py-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            className="flex cursor-pointer items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity"
            onClick={handleNavigate}
          >
            <IoChevronBack className="w-5 h-5" />
            <span className="text-base font-medium">Back</span>
          </button>

          <div className="mb-2">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
              Product Details
            </h1>
            <p className="text-white/90 text-base">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
            <Image
              className="object-cover h-[300px] w-[300px] rounded-full"
              src={product?.icon}
              alt={product.name}
              width={300}
              height={300}
            />
          </div>

          {/* Product Info */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <div className="space-y-6">
              {/* Product Title */}
              <div>
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
                  {product.name}
                </h2>
                <hr className="border-white/30 mb-4" />
                <p className="text-white/90 text-base">{product.description}</p>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Quantity
                </h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 bg-white/30 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <HiMinus className="w-5 h-5" />
                  </button>
                  <span className="bg-white px-4 py-2 rounded-lg text-gray-800 font-medium min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 bg-white/30 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <HiPlus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                className="w-full cursor-pointer bg-white/90 hover:bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              {/* Description */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Description
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}