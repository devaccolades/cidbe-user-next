import Image from "next/image";
import React from "react";
import Herogreen from "./Herogreen";
import Herobottom from "./Herobottom";

export default function Herosection() {
  return (
    <section id="hero" className="relative -mt-[78px] lg:-mt-[95px] text-white w-full h-full">
      {/* Aspect ratio wrapper */}
      <div className="relative w-full sm:aspect-[12/16] aspect-[16/9] h-[85vh] xs:hidden">
        <video
          src="/video/tsr/CIDBI_r.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
       <div className="hidden xs:block relative w-full ">
        <video
          src="/video/tsr/CIDBI_l.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover object-center w-full"
        />
      </div>
      <div className="hidden">
        <video
          src="/video/tsr/CIDBI_l.mp4"
          autoPlay
          volume={0.5}
          loop
          playsInline
          className="object-cover object-center w-full"
        />
      </div>

      <Herogreen />
      <Herobottom />
    </section>
  );
}
