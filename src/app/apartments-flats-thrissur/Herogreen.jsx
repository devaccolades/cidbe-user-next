import Image from "next/image";
import React from "react";
import green from "../../../public/images/aprtments_thrissur/Vector.png";

const Herogreen = () => {
  return (
    <div className="relative -mt-[178px] lg:-mt-[265px] w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={green}
        alt="Green background"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-20 text-center pt-24">
        <h1 className="text-[#BFD8BD] font-[general-sans-regular] text-[32px] leading-[32px] font-medium md:text-[48px] md:leading-[48px] xl:text-[64px] xl:leading-[64px]  ">
          Apartments & Flats for
          <br />
          Sale in Thrissur
        </h1>
      </div>
    </div>
  );
};

export default Herogreen;
