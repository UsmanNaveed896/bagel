"use client";
import React from "react";
import { useCart } from "../../context/cartContext";
import { FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const router = useRouter();
  const { cartItems, removeFromCart } = useCart();

  console.log(cartItems, "itemszxzx");
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = 3.99;
  const tax = 5.28;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="min-h-screen bg-[#d9a67c] p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <button
          onClick={() => router.back()}
          className="flex cursor-pointer items-center text-white mb-6 opacity-80 hover:opacity-100 transition"
        >
          <IoChevronBack size={20} />
          <span className="ml-2 text-sm">Back</span>
        </button>
        <h1 className="text-white text-3xl font-semibold mb-6">
          Shopping Cart
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items */}
          <div className="bg-[#bb8860] rounded-xl flex-1 p-6">
            <h2 className="text-white font-semibold text-lg mb-4">
              Cart Items
            </h2>
            <div className=" border-t border-[#fff]/50">
              {cartItems.length === 0 && (
                <p className="text-white opacity-80">Your cart is empty.</p>
              )}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center py-4 gap-4 md:gap-6"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-base md:text-lg truncate">
                      {item.name}
                    </h3>
                    <p className="text-white opacity-80 text-xs md:text-sm truncate">
                      {item.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-white font-semibold">
                        Quantity: {item.quantity}
                      </span>
                    </div>
                  </div>
                  <div className="text-white font-semibold text-base md:text-lg flex flex-col items-end min-w-[80px]">
                    <span>
                      ${(Number(item.price) * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-2 text-white opacity-70 hover:opacity-100 transition"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-[#bb8860] rounded-xl w-full md:w-80 p-6 flex flex-col gap-4">
            <h2 className="text-white font-semibold text-lg">Order Summary</h2>
            <div className="flex justify-between text-white opacity-80 text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white opacity-80 text-sm">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white opacity-80 text-sm">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-[#d9a67c]/50 pt-3 flex justify-between text-white font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="mt-4 bg-white text-[#bb8860] font-semibold py-3 rounded-lg hover:bg-[#f0e6d9] transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
