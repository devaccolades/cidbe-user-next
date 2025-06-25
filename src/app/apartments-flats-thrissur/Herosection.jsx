import Image from "next/image";
import React from "react";
import HeroBg from "../../../public/images/aprtments_thrissur/cidbe.png";
import HeroBgS from "../../../public/images/aprtments_thrissur/smallImage.jpg";
import Herogreen from "./Herogreen";
import Herobottom from "./Herobottom";

export default function Herosection() {
  return (
    <section className="relative -mt-[78px] lg:-mt-[95px] text-white w-full ">
      {/* Aspect ratio wrapper */}
      {/* <div className="relative w-full aspect-[12/16] sm:aspect-[16/9] hidden sm:block">
        <Image
          src={HeroBg}
          alt="Hero Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="sm:hidden relative w-full height-full">
        <Image
          src={HeroBgS}
          alt="hero Background for small device "
          height={300}
          width={300}
          className="object-cover object-top h-[510px] w-full"
        />
      </div> */}
      <div className="relative w-full overflow-hidden ">
        {/* Background Video with blur */}
        <video
          src="/video/whoweare/cidbi.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover blur-lg md:blur-none z-0 "
        />

        {/* Foreground Centered Video */}
        <div className="relative z-10 sm:z-0 flex items-center justify-center h-[80vh]">
          <video
            src="/video/whoweare/cidbi.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full md:h-full -mt-[60px] xs:mt-0 object-cover"
          />
        </div>
      </div>

      <Herogreen />
      <Herobottom />
    </section>
  );
}
