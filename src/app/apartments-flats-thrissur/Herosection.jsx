import Image from 'next/image';
import React from 'react';
import HeroBg from '../../../public/images/aprtments_thrissur/cidbe.png';
import Herogreen from './Herogreen'
import Herobottom from './Herobottom'
export default function Herosection() {
  return (
    <section className="relative -mt-[78px] lg:-mt-[95px] text-white w-full">
      {/* Aspect ratio wrapper */}
      <div className="relative w-full aspect-[12/16] sm:aspect-[16/9] ">
        <Image
          src={HeroBg}
          alt="Hero Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      <Herogreen />
      <Herobottom />
    </section>
  );
}
