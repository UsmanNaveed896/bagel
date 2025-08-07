"use client";
import Image from "next/image";
import React from "react";
import Img from "../../../../public/8.png";
import Img1 from "../../../../public/9.png";
import Img2 from "../../../../public/10.png";
import Img3 from "../../../../public/11.png";
import Img4 from "../../../../public/12.png";
import Img5 from "../../../../public/13.png";
import Img6 from "../../../../public/14.png";
import Img7 from "../../../../public/15.png";
import Img8 from "../../../../public/16.png";

import {
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaFilePowerpoint,
} from "react-icons/fa";
const Section4 = () => {
  return (
    <div className="relative  bg-[#E46654] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left decorative elements */}
        <div className="absolute top-[15%] left-[24%]">
          <div className="w-6 h-6 border-2 border-white/30 rotate-45 mb-4"></div>
          <div className="w-6 h-6 bg-yellow-300 rounded-full ml-8"></div>
        </div>

        {/* Bottom right decorative elements */}
        <div className="absolute bottom-16 right-16">
          <div className="w-6 h-6 border-2 border-white/30 rotate-45 mb-4"></div>
          <div className="w-6 h-6 bg-yellow-300 rounded-full ml-8"></div>
        </div>

        {/* Large curved background shapes */}
        <Image className="absolute object-cover" src={Img} alt="abc" />
        <Image
          className="absolute object-cover right-0 "
          src={Img1}
          alt="abc"
        />

        {/* Diagonal lines pattern */}
        <div className="absolute bottom-0 left-40">
          <Image className=" object-cover  " src={Img7} alt="abc" />
        </div>
        <div className="absolute top-0 right-130">
          <Image className=" object-cover  " src={Img8} alt="abc" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center  px-4 py-20">
        {/* Header */}
        <div className="flex items-center justify-center mb-12 gap-4">
          <Image className=" object-cover" src={Img2} alt="abc" />
          <h1 className="text-white text-3xl md:text-3xl font-bold">
            Fan Favorites
          </h1>
          <Image className=" object-cover" src={Img2} alt="abc" />
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mb-12">
          {/* The Manhattan Classic */}
          <div className="bg-[#FC8474] rounded-3xl p-6 flex items-center space-x-4 hover:bg-white/25 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden">
                <Image className=" object-cover" src={Img3} alt="abc" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                The Manhattan Classic
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-3">
                Lox, capers, red onion, and cream cheese on an everything bagel
              </p>
              <p className="text-white text-xl md:text-2xl font-semibold mb-2">
                $12.95
              </p>
            </div>
          </div>

          {/* The Uptown Egg & Cheese */}
          <div className="bg-[#FC8474] rounded-3xl p-6 flex items-center space-x-4 hover:bg-white/25 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden">
                <Image className=" object-cover" src={Img4} alt="abc" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                The Uptown Egg & Cheese
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-3">
                Cage-free eggs, melted cheddar, optional bacon
              </p>
              <p className="text-white text-lg md:text-xl font-semibold mb-2">
                $9.95
              </p>
            </div>
          </div>

          {/* The Vegan */}
          <div className="bg-[#FC8474] rounded-3xl p-6 flex items-center space-x-4 hover:bg-white/25 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden">
                <Image className=" object-cover" src={Img5} alt="abc" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                The Vegan
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-3">
                Cashew cream cheese, avocado, tomato, and sprouts
              </p>
              <p className="text-white text-lg md:text-xl font-semibold mb-2">
                $10.95
              </p>
            </div>
          </div>

          {/* Build Your Own */}
          <div className="bg-[#FC8474] rounded-3xl p-6 flex items-center space-x-4 hover:bg-white/25 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden">
                <Image className=" object-cover" src={Img6} alt="abc" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                Build Your Own
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-3">
                Choose your bagel, spread, and toppings
              </p>
              <p className="text-white text-lg md:text-xl font-semibold mb-2">
                From $5.95
              </p>
            </div>
          </div>
        </div>

        {/* View Full Menu button */}
        <button className="flex items-center space-x-2 text-white text-lg md:text-xl font-semibold hover:text-white/80 transition-colors duration-300 group">
          <span>View Full Menu</span>
          <FaArrowAltCircleRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Section4;
