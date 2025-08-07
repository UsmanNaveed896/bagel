import React from "react";
import Img from "../../../../public/6.png";
import Img1 from "../../../../public/5.png";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="relative pb-12 bg-[#E3B792] overflow-hidden">
      {/* Decorative sprinkles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top sprinkles */}
        <div className="absolute top-8 left-12 w-1 h-4 bg-blue-300 rounded-full rotate-45"></div>
        <div className="absolute top-16 left-32 w-1 h-4 bg-yellow-300 rounded-full rotate-12"></div>
        <div className="absolute top-12 left-48 w-1 h-4 bg-pink-300 rounded-full -rotate-45"></div>
        <div className="absolute top-6 right-24 w-1 h-4 bg-purple-300 rounded-full rotate-45"></div>
        <div className="absolute top-20 right-48 w-1 h-4 bg-green-300 rounded-full -rotate-12"></div>
        <div className="absolute top-4 right-12 w-1 h-4 bg-blue-300 rounded-full rotate-90"></div>
        <div className="absolute top-14 right-64 w-1 h-4 bg-yellow-300 rounded-full -rotate-30"></div>
        <div className="absolute top-24 right-80 w-1 h-4 bg-pink-300 rounded-full rotate-60"></div>

        {/* Bottom sprinkles */}
        <div className="absolute bottom-8 left-16 w-1 h-4 bg-purple-300 rounded-full rotate-45"></div>
        <div className="absolute bottom-16 left-40 w-1 h-4 bg-green-300 rounded-full -rotate-45"></div>
        <div className="absolute bottom-12 left-64 w-1 h-4 bg-blue-300 rounded-full rotate-12"></div>
        <div className="absolute bottom-6 right-20 w-1 h-4 bg-yellow-300 rounded-full -rotate-45"></div>
        <div className="absolute bottom-20 right-44 w-1 h-4 bg-pink-300 rounded-full rotate-30"></div>
        <div className="absolute bottom-4 right-8 w-1 h-4 bg-purple-300 rounded-full rotate-90"></div>

        {/* Side sprinkles */}
        <div className="absolute top-1/3 left-8 w-1 h-4 bg-green-300 rounded-full rotate-45"></div>
        <div className="absolute top-1/2 left-4 w-1 h-4 bg-blue-300 rounded-full -rotate-30"></div>
        <div className="absolute top-2/3 left-12 w-1 h-4 bg-yellow-300 rounded-full rotate-60"></div>
        <div className="absolute top-1/3 right-8 w-1 h-4 bg-pink-300 rounded-full -rotate-45"></div>
        <div className="absolute top-1/2 right-4 w-1 h-4 bg-purple-300 rounded-full rotate-30"></div>
        <div className="absolute top-2/3 right-12 w-1 h-4 bg-green-300 rounded-full -rotate-60"></div>
      </div>

      {/* Large decorative bagel shapes */}
      <Image className="absolute object-cover" src={Img1} alt="abc" />
      <Image className="absolute right-0 " src={Img} alt="abc" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* Donut icon */}
            <div className="w-12 h-12 bg-pink-400 rounded-full relative flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute top-2 left-3 w-1 h-1 bg-yellow-300 rounded-full"></div>
              <div className="absolute top-3 right-2 w-1 h-1 bg-green-300 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-300 rounded-full"></div>
              <div className="absolute bottom-3 right-3 w-1 h-1 bg-blue-300 rounded-full"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-pink-400">
              What Makes Us Different
            </h2>

            {/* Donut icon */}
            <div className="w-12 h-12 bg-pink-400 rounded-full relative flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute top-2 left-3 w-1 h-1 bg-yellow-300 rounded-full"></div>
              <div className="absolute top-3 right-2 w-1 h-1 bg-green-300 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-300 rounded-full"></div>
              <div className="absolute bottom-3 right-3 w-1 h-1 bg-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#D39E79] backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Authentic NYC Bagels
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Crispy on the outside, chewy on the inside — the perfect
                  texture that only comes from traditional methods.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#D39E79] backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 text-white text-sm font-bold flex items-center justify-center">
                  🥯
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Locally Sourced Ingredients
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Fresh produce, premium spreads, and house-cured lox from the
                  best local suppliers in New York.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#D39E79] backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 text-white text-sm font-bold flex items-center justify-center">
                  ☕
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Coffee That Hits Just Right
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Locally roasted, perfectly brewed coffee that complements our
                  bagels and starts your day right.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#D39E79] backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Fast, Friendly Service
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  No attitude, just good vibes and great food from a team that
                  loves what they do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
