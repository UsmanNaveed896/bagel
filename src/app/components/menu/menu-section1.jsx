import React from "react";
import Img from "../../../../public/21.png";
import { FiSearch } from "react-icons/fi";
import CategoryA from "./categories/category-A";
import CategoryB from "./categories/category-B";
const MenuSection1 = () => {
  return (
    <>
      <div
        className=" bg-no-repeat bg-cover bg-center min-h-[400px]"
        style={{
          backgroundImage: `url(${Img.src})`,
        }}
      >
        <div className="flex justify-center">
          <div className="container max-w-[1150px] pt-28">
            <h1 className="text-xl md:text-start text-center md:text-3xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6 text-white">
              Our Full Menu
            </h1>

            <div className="flex items-center space-x-2 text-xl px-6 md:px-0 text-white md:text-start text-center">
              <span>
                Explore our complete selection of hand-rolled, kettle-boiled{" "}
                <br className="md:block hidden "></br>bagels, signature sandwiches, and more.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* NAV BAR */}
      <div className="bg-[#e57053] w-full">
        {/* Search and Filter Section */}
        <div className="px-4 py-6 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search menu items..."
                className="w-full pl-10 pr-4 py-2.5 bg-white rounded-lg border-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-[#ebb050] text-black rounded-full text-sm font-medium hover:bg-yellow-300 transition-colors">
                All
              </button>
              <button className="px-4 py-2 bg-transparent border border-white/30 text-white rounded-full text-sm font-medium hover:bg-orange-300 transition-colors">
                Vegetarian
              </button>
              <button className="px-4 py-2 bg-transparent border border-white/30 text-white rounded-full text-sm font-medium hover:bg-orange-300 transition-colors">
                Vegan
              </button>
              <button className="px-4 py-2 bg-transparent border border-white/30 text-white rounded-full text-sm font-medium hover:bg-orange-300 transition-colors">
                Gluten-Free
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="px-4 py-4 md:px-0 bg-white/15 border-white/15 border">
          <div className="flex justify-center">
            <nav className="flex flex-wrap gap-12 text-white justify-center">
              <a
                href="#"
                className="text-sm font-medium hover:text-yellow-200 transition-colors whitespace-nowrap"
              >
                Bagels & Spreads
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-yellow-200 transition-colors whitespace-nowrap"
              >
                Signature Sandwiches
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-yellow-200 transition-colors whitespace-nowrap"
              >
                Breakfast Specials
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-yellow-200 transition-colors whitespace-nowrap"
              >
                Beverages
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-yellow-200 transition-colors whitespace-nowrap"
              >
                Gift Baskets
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-yellow-200 transition-colors whitespace-nowrap"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-yellow-200 transition-colors whitespace-nowrap"
              >
                Coffee & Tea
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-yellow-200 transition-colors whitespace-nowrap"
              >
                Smoked Fish
              </a>
            </nav>
          </div>
        </div>

        <CategoryA />
        <CategoryB/>
      </div>
    </>
  );
};

export default MenuSection1;
