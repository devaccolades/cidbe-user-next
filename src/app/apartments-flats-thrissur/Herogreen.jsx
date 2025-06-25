import Image from "next/image";
import React from "react";
import green from "../../../public/images/aprtments_thrissur/Vector.png";

const Herogreen = () => {
  return (
    <div className="relative -mt-[128px] sm:-mt-[182px] w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={green}
        alt="Green background"
        fill
        className="object-cover "
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-center pt-24">
        <h1 className="text-[#BFD8BD] font-[general-sans-regular] text-[32px] leading-[32px] font-medium xs:max-w-xs md:text-[48px] md:leading-[48px] md:max-w-md xl:text-[64px] xl:leading-[64px] xl:max-w-2xl  ">
          Apartments & Flats for Sale in Thrissur
        </h1>
      </div>
    </div>
  );
};

export default Herogreen;
