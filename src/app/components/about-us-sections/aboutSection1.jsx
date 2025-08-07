import React from "react";
import Img from "../../../../public/34.png";
const AboutSection1 = () => {
  return (
    <div
      className=" bg-no-repeat bg-cover bg-center min-h-[400px]"
      style={{
        backgroundImage: `url(${Img.src})`,
      }}
    >
      <div className="flex justify-center">
        <div className="container max-w-[1150px] pt-28">
          <h1 className="text-xl md:text-3xl md:text-start text-center lg:text-5xl font-semibold leading-tight tracking-tight mb-6 text-white">
            About Ess-a-Bagel
          </h1>

          <div className=" md:text-start text-center space-x-2 text-xl text-white">
            <span className="md:text-start text-center">
              Authentic New York Bagels
              <br></br>Since 1976
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
