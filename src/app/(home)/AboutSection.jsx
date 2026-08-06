import React from "react";
import Image from "next/image";

export default function AboutSection() {
  const images = [
    "/images/p1.webp",
    "/images/p2.webp",
    "/images/p3.webp",
    "/images/p4.webp",
    "/images/p5.webp",
    "/images/p6.webp",
    "/images/p7.webp",
    "/images/p8.webp",
    "/images/p9.webp",
  ];
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Curved Images */}
        {/* <div className="relative mx-auto h-[330px] w-[1400px]">

      {images.map((image, index) => {
        const total = images.length;
        const angle = -70 + (10 / (total - 1)) * index;
        const radius = 360;

        return (
          <div
            key={index}
            className="absolute left-1/2 top-full"
            style={{
              transform: `
                rotate(${angle}deg)
                translateY(-${radius}px)
                rotate(${-angle}deg)
              `,
              transformOrigin: "center bottom",
            }}
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-2 text-center text-xs text-gray-400">
              2018
            </p>
          </div>
        );
      })}
    </div> */}

        {/* Content */}

        <div className="mx-auto -mt-16 max-w-2xl text-center">
          <p className="text-sm text-[#14532d]">About us</p>

          <h2 className="mt-3 text-5xl font-semibold leading-tight">
            Flats and Apartments in
            <br />
            Thrissur by Trusted Builder
          </h2>

          <p className="mt-6 text-gray-500">
            We, Creations India Developers Builders Infrastructures (CIDBI), an
            ISO 9001-2015 certified builder in Thrissur, was established in 2005
            in response to the growing need of quality housings. Since then, we
            have grown to be one of the best builders in Thrissur. CIDBI is a
            professionally managed company under the leadership of Mr. A A Abdul
            Lathif, run by well experienced management. We have more than 35
            years of experience in the construction field.
          </p>

          <button className="flex mx-auto mt-8 rounded-lg bg-[#0E5A44] px-8 py-3 text-white transition hover:bg-[#0a4735]">
            
            Know More <Image src="/images/home/right.svg" alt="Arrow" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Bottom Stats */}

      <div className="mt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-4">
          {[
            ["20+", "PROJECTS COMPLETED"],
            ["11M+", "SQUARE FEET COMPLETED"],
            ["1000+", "HAPPY CUSTOMERS"],
            ["40+", "YEARS OF EXPERIENCE"],
          ].map(([number, label], index) => (
            <div
              key={index}
              className="py-10 text-center border-r last:border-r-0"
            >
              <h3 className="text-5xl font-semibold text-[#0E5A44]">
                {number}
              </h3>

              <p className="mt-3 text-xs tracking-widest text-gray-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Blur Lights */}

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-lime-200 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white blur-[120px]" />
    </section>
  );
}
