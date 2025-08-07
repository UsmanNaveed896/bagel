import React from "react";
import { FaFlower, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Img2 from "../../../../public/10.png";
import Img3 from "../../../../public/17.png";
import Img4 from "../../../../public/18.png";

import Image from "next/image";
const Section5 = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${Img3.src})`,
      }}
    >
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-12 gap-4">
          <Image className=" object-cover" src={Img2} alt="abc" />
          <h1 className="text-white text-3xl md:text-3xl font-bold">
            Visit Us
          </h1>
          <Image className=" object-cover" src={Img2} alt="abc" />
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Location Info Card */}
          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-8">
              Manhattan Bagel Co.
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-white text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-lg md:text-xl">
                    247 West 46th Street
                  </p>
                  <p className="text-white/90 text-lg md:text-xl">
                    Manhattan, NY 10036
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhone className="text-white text-xl flex-shrink-0" />
                <p className="text-white text-lg md:text-xl">(212) 555-6789</p>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-4">
                <FaClock className="text-white text-xl flex-shrink-0" />
                <p className="text-white text-lg md:text-xl">
                  Open Daily: 7AM – 3PM
                </p>
              </div>
            </div>

            {/* Get Directions Button */}
            <button className="mt-8 bg-[#EBB050] hover:bg-orange-500 text-black font-semibold px-6 py-4 rounded-2xl flex  space-x-2 items-center transition-all duration-300 text-sm">
              <span>Get Directions</span>
              <HiArrowRight className="text-xl" />
            </button>
          </div>

          {/* Map Card */}
          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-4 border border-white/20 overflow-hidden">
            <div className="w-full h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden flex justify-center items-center">
              {/* Embedded Map */}
              <Image className=" object-cover" src={Img4} alt="abc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
