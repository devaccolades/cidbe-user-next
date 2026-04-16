import Image from "next/image";
import React from "react";
import green from "../../../public/images/aprtments_thrissur/Vector.webp";

const Herogreen = () => {
  return (
    <div className="relative -mt-[128px] sm:-mt-[182px] w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={green}
        alt="Flat for sale in Thrissur"
        fill
        className="object-cover "
        priority
      />

      {/* Content */}
      <div className="relative w-full  text-center flex justify-center z-20 pt-24">
        <h1 className="text-[#BFD8BD] font-[general-sans-regular] text-[28px] mb-3  leading-[100%] font-medium xs:max-w-xs md:text-[48px] md:leading-[48px] md:max-w-xl  xl:text-[64px] xl:leading-[64px] xl:max-w-3xl  ">
          {/* Apartments & Flats for Sale in Thrissur */}
          Buy 2 BHK / 3 BHK / 4 BHK Apartments And Flats in Thrissur
        </h1>
      </div>
    </div>
  );
};

export default Herogreen;
