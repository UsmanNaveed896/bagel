import React from "react";
import { FaFlower, FaHeart, FaStar } from "react-icons/fa";
import Img2 from "../../../../public/10.png";
import Image from "next/image";

const Section7 = () => {
  return (
    <div className="bg-[#E3B792]  py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-12 gap-4">
          <Image className=" object-cover" src={Img2} alt="abc" />
          
          <h1 className="text-[#E46654] text-3xl md:text-3xl font-bold">
           ❤️ What New Yorkers Are Saying
          </h1>
          <Image className=" object-cover" src={Img2} alt="abc" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* First Testimonial */}
          <div className="bg-[#D39E79] rounded-3xl p-8 backdrop-blur-sm">
            {/* Stars */}
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm mr-1" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white text-sm md:text-lg leading-relaxed mb-6 font-medium">
              "Best bagel I've had in the city — hands down. The perfect chew,
              and the cream cheese is freshly made in-house. Worth the wait
              every time."
            </p>

            {/* Attribution */}
            <p className="text-[#795033] text-base md:text-lg font-semibold">
              — Emily Richardson, Upper West Side
            </p>
          </div>

          {/* Second Testimonial */}
          <div className="bg-[#D39E79] rounded-3xl p-8 backdrop-blur-sm">
            {/* Stars */}
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm mr-1" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white text-sm md:text-lg leading-relaxed mb-6 font-medium">
              "Crispy, chewy perfection. This place is the real deal. I've tried
              bagels all over Manhattan and these are consistently the best. The
              staff is super friendly too."
            </p>

            {/* Attribution */}
            <p className="text-[#795033] text-base md:text-lg font-semibold">
              — Michael Thompson, Midtown
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
