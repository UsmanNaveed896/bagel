import Image from "next/image";
import React from "react";
import Img from "../../../../public/8.png";
import Img1 from "../../../../public/9.png";
import Img7 from "../../../../public/15.png";
import Img8 from "../../../../public/16.png";
const AboutSection2 = () => {
  return (
    <div className="relative bg-[#e3b792] overflow-hidden">
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
        <div className="absolute top-0 right-130 z-[1]">
          <Image className="object-cover" src={Img8} alt="abc" />
        </div>
      </div>

      <div className=" px-4 py-20 flex items-center justify-center relative z-10">
        <div className="text-center space-y-6">
          <h2 className="text-sm sm:text-sm lg:text-2xl xl:text-2xl font-bold text-white mb-2 sm:mb-6">
            A New York Institution
          </h2>
          <p className="text-lg  text-white max-w-2xl mx-auto mb-4">
            When it comes to classic New York bagels, Ess-a-Bagel stands out as
            a long-time favorite among locals and visitors alike. Located in
            Midtown Manhattan with additional locations throughout the city,
            this legendary bagel shop has been serving up hand-rolled,
            kettle-boiled bagels since 1976. ​
          </p>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Our commitment to traditional bagel-making techniques and authentic
            New York flavors has made us a beloved destination for anyone
            seeking the perfect bagel experience in the heart of the city. ​
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
