import React from "react";
import Vector1 from "../../../../public/Vector.png";
import Vector2 from "../../../../public/Vector2.png";
import Vector3 from "../../../../public/Vector3.png";
import Vector4 from "../../../../public/vector4.png";
import Vector5 from "../../../../public/Vector5.png";
import Vector6 from "../../../../public/Vector6.png";
import Img from "../../../../public/19.png";
import Img1 from "../../../../public/20.png";

import Image from "next/image";
const Section6 = () => {
  return (
    <div
      className="px-4 pt-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(144deg, rgba(207, 43, 111, 1) 0%, rgba(148, 32, 104, 1) 30%, rgba(27, 20, 73, 1) 55%)",
      }}
    >
      {/* Left side decorative elements */}
      <div className="absolute inset-0 z-10">
        <Image src={Vector1} alt="vector1" />
      </div>
      <div className="absolute top-[120px] left-[10px] z-10">
        <Image src={Vector2} alt="vector2" />
      </div>
      <div className="absolute top-[90px] left-[60px] z-10">
        <Image src={Vector3} alt="vector3" />
      </div>
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center pt-12 px-8 lg:px-16">
        {/* Left side - Text content */}
        <div className="">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Order Ahead & Skip <br></br> the Line
          </h1>
          <p className="text-white/90 text-lg md:text-xl lg:text-xl mb-8 font-medium">
            Save time and get your bagel fix fast.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#E3B792] hover:bg-orange-500 text-black font-bold px-6 py-4 rounded-2xl text-sm transition-all duration-300 hover:scale-105">
              Order for Pickup
            </button>
            <button className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold px-6 py-4 rounded-2xl text-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Get Delivery
            </button>
          </div>
        </div>

        {/* Right side - Person with bagel */}
        <div className="hidden lg:flex  justify-center items-center relative">
          <div className="relative">
            {/* Person image placeholder - you'll replace this with actual image */}
            <div className=" relative overflow-hidden">
              {/* This represents the person - replace with actual image */}
              <div className="absolute z-[-1] left-44 top-10  ">
                <Image src={Img1} alt="vector6" />
              </div>
              <div className=" flex items-center justify-center">
                <Image src={Img} alt="vector3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right side decorative elements - Fixed positioning */}
      <div className="absolute top-0 right-0 z-10">
        <Image src={Vector4} alt="vector1" />
      </div>

      <div className="absolute top-[120px] right-[10px] z-10">
        <Image src={Vector2} alt="vector2" />
      </div>

      <div className="absolute top-[90px] right-[100px] z-10">
        <Image src={Vector3} alt="vector3" />
      </div>
      <div className="absolute top-[140px] right-[80px] z-10">
        <Image src={Vector5} alt="vector5" />
      </div>
    </div>
  );
};

export default Section6;
