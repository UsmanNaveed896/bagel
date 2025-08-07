"use client";
import React from "react";
import Img from "../../../../public/4.png";

const Section2 = () => {
  console.log(Img,"imae")
  return (
    <section
      className=" bg-no-repeat bg-cover bg-center min-h-[400px]"
      style={{
        backgroundImage: `url(${Img.src})`,
      }}
    >
      {/* Text Content */}
      <div className=" px-4 py-20 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
            Welcome to Manhattan Bagel Co.
          </h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            We’re not just another bagel spot. We’re a Manhattan original. Every
            bagel is hand-rolled, kettle-boiled, and baked fresh daily — just like
            they should be. Whether you’re a morning regular or grabbing a quick
            lunch, we’ve got something for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
