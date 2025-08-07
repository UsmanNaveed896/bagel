import React from "react";
import { FaStar } from "react-icons/fa";
import Img from "../../../../public/35.png";
import Image from "next/image";
export default function AboutSection4() {
  return (
    <div className="min-h-screen bg-[#E3B791] p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="bg-[#D39E79] backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <h1 className="text-sm sm:text-sm lg:text-2xl xl:text-2xl font-bold text-white mb-2 sm:mb-6">
                  Fan Favorite Combo
                </h1>

                <h2 className="text-white text-lg font-semibold">
                  The Classic Everything
                </h2>

                <p className="text-white/90 text-base  leading-relaxed">
                  An everything bagel with nova lox, scallion cream cheese,
                  tomato, and red onion—it's a classic NYC breakfast you won't
                  forget. This combination perfectly balances the savory
                  everything seasoning with the richness of lox and the
                  freshness of vegetables.
                </p>

                <div className="flex items-center gap-2 text-white">
                  <FaStar className="w-5 h-5 fill-current" />
                  <span className="font-medium">
                    Customer Favorite Since 1976
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative h-64 lg:h-auto min-h-[400px] flex justify-end">
              <Image src={Img} alt="abc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
