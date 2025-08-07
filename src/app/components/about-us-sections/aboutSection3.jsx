import Image from "next/image";
import Img from "../../../../public/8.png";
import Img2 from "../../../../public/10.png";
import Img1 from "../../../../public/9.png";
import Img7 from "../../../../public/15.png";
import Img8 from "../../../../public/16.png";
import { SlBadge } from "react-icons/sl";
import { CiForkAndKnife } from "react-icons/ci";
import { GoLaw } from "react-icons/go";
import { RiBuilding2Line } from "react-icons/ri";
const AboutSection3 = () => {
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
          <h1 className="text-white text-3xl md:text-3xl font-bold">
            Why We're a Favorite
          </h1>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mb-12">
          {/* Card1 */}
          <div className="bg-[#fc8474] backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div>
                <SlBadge className="text-white text-2xl mt-1" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Perfect Texture
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Our bagels are thick, chewy, and have that perfect golden
                  crust—exactly what a New York-style bagel should be.
                  Hand-rolled and kettle-boiled using traditional methods. ​
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#fc8474] backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div>
                <CiForkAndKnife className="text-white text-2xl mt-1" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Endless Options
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Choose from a wide variety of bagel flavors—everything,
                  sesame, pumpernickel, whole wheat, and more. Pair them with
                  house-made cream cheese spreads or fresh deli meats. ​
                </p>
              </div>
            </div>
          </div>

          {/* CARD3 */}
          <div className="bg-[#fc8474] backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div>
                <GoLaw className="text-white text-2xl mt-1" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Generous Portions
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Our sandwiches are huge—we don't skimp on fillings. Every bite
                  is packed with quality ingredients and authentic New York
                  flavors that satisfy. ​
                </p>
              </div>
            </div>
          </div>

          {/* CARD4 */}
          <div className="bg-[#fc8474] backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div>
                <RiBuilding2Line className="text-white text-2xl mt-1" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Old-School Charm
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Despite our popularity, Ess-a-Bagel retains a no-frills,
                  authentic New York vibe that captures the essence of
                  traditional deli culture. ​
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
