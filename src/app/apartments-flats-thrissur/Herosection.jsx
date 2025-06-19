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
      <div className="relative w-full aspect-[12/16] sm:aspect-[16/9] hidden sm:block">
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
      </div>
      <Herogreen />
      <Herobottom />
    </section>
  );
}
