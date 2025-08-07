"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Img from "../../../../../public/8.png";
import Img1 from "../../../../../public/9.png";
import Img7 from "../../../../../public/15.png";
import Img8 from "../../../../../public/16.png";

import { bagelData } from "../categoryAcardData";

import CategoryACard from "../../card-category-a/categoryAcard";

const CategoryA = () => {
  const router = useRouter();

  const handleProductClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="relative bg-[#E46654] overflow-hidden">
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
        <Image className="absolute object-cover right-0" src={Img1} alt="abc" />

        {/* Diagonal lines pattern */}
        <div className="absolute bottom-0 left-40">
          <Image className="object-cover" src={Img7} alt="abc" />
        </div>
        <div className="absolute top-0 right-130">
          <Image className="object-cover" src={Img8} alt="abc" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">
        {/* Menu grid with heading */}
        <div className="w-full max-w-6xl">
          <h1 className="text-white text-3xl md:text-3xl font-bold mb-2 text-start">
            Bagels & Spreads
          </h1>
          <h1 className="text-white text-sm md:text-sm mb-4 text-start">
            Our signature hand-rolled, kettle-boiled bagels with your choice of house-made spreads.
          </h1>
          <h1 className="text-white text-lg md:text-lg mb-6 text-start font-bold">
            Bagel Varieties
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {bagelData?.map((item) => (
              <CategoryACard
                key={item.id} // Use id for unique key
                name={item.name}
                price={item.price}
                description={item.description}
                icon={item.icon}
                vegan={item.vegan}
                glutenFree={item.glutenFree}
                onClick={() => handleProductClick(item.id)} // Add onClick handler
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryA;