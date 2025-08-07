"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel1 from "../../../../public/1.webp";
import Carousel2 from "../../../../public/2.webp";
import carousel3 from "../../../../public/3.webp";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="relative  overflow-hidden">
      {/* Carousel as Background */}
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={false}
        showIndicators={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            className={`inline-block z-50 w-12 h-1 mx-1 rounded-full transition-all cursor-pointer ${
              isSelected ? "bg-yellow-400" : "bg-gray-400"
            }`}
            aria-label={label}
          />
        )}
        className="absolute inset-0 z-0"
      >
        <div className="relative w-full h-screen">
          <Image
            src={Carousel1}
            alt="Carousel Image 1"
            fill
          
          />
          {/* No black overlay here */}
        </div>
        <div className="relative w-full h-screen">
          <Image
            src={Carousel2}
            alt="Carousel Image 2"
            fill
            
          />
          {/* Black overlay only on this image */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
        <div className="relative w-full h-screen">
          <Image
            src={carousel3}
            alt="Carousel Image 3"
            fill
            
          />
          {/* Black overlay only on this image */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
      </Carousel>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30 z-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-red-400 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 border-2 border-yellow-400 transform rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-1 bg-orange-400 transform rotate-12"></div>

        {/* Sparkle effects */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-ping animation-delay-400"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex items-center min-h-screen">
        <div>
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-semibold leading-tight tracking-tight">
              The Best Bagels in Manhattan <br />
              Freshly Baked Daily
              <br />
              <span className="text-yellow-400"></span>
            </h1>

            <div className="flex items-center space-x-2 text-xl">
              <span>🔥 Hand-Rolled. Kettle-Boiled. NYC-Approved.</span>
            </div>

            <p className="text-lg text-gray-300 max-w-md">
              Stop in for a classic New York bagel done right — or order online
              and skip the line.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-[#ebb050] text-black px-5 py-3 rounded-xl font-bold text-sm hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg">
                Order Now
              </button>
              <button className="border-2 border-yellow-500 bg-white text-yellow-500 px-5 py-3 rounded-xl font-bold text-sm hover:bg-yellow-500 hover:text-white transition-all">
                Find Us
              </button>
            </div>

            {/* Carousel Indicators (Positioned Below Buttons) */}
            <div className="flex justify-center mt-4">
              <div className="carousel-indicators"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
