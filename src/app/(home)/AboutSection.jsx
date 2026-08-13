import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const images = [
    { src: "/images/home/hs9.png", year: "2018" },
    { src: "/images/home/hs6.png", year: "2019" },
    { src: "/images/home/hs7.png", year: "2020" },
    { src: "/images/home/hs4.png", year: "2021" },
    { src: "/images/home/hs5.png", year: "2022" },
    { src: "/images/home/hs3.png", year: "2023" },
    { src: "/images/home/hs2.png", year: "2024" },
    { src: "/images/home/hs1.png", year: "2025" },
    { src: "/images/home/hs8.png", year: "2026" },
  ];

  return (
    <section className="relative overflow-hidden bg-white md:py-16 lg:py-24">
      <div className="containers">
        {/* Curved Images */}
        <div className="relative mx-auto w-full h-[100px] md:h-[180px] lg:h-[300px] [--radius:100px] sm:[--radius:130px] md:[--radius:200px] lg:[--radius:340px] xl:[--radius:360px]">
          {images.map((item, index) => {
            const total = images.length;
            const angle = -70 + (140 / (total - 1)) * index;
            const isOdd = index % 2 === 1;

            return (
              <div
                key={index}
                className={`absolute left-1/2 top-full ${
                  isOdd ? "hidden lg:block" : "block"
                }`}
                style={{
                  transform: `
          translateX(-50%)
          rotate(${angle}deg)
          translateY(calc(-1 * var(--radius)))
          rotate(${-angle}deg)
        `,
                  transformOrigin: "center bottom",
                }}
              >
                <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={item.src}
                    alt={`CIDBI ${item.year}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mt-2 text-center text-[10px] sm:text-xs text-gray-400">
                  {item.year}
                </p>
              </div>
            );
          })}
        </div>

        {/* Content */}

        <div className="mx-auto mt-2 sm:mt-0 md:-mt-8 lg:-mt-16 max-w-2xl text-center">
          <p className="text-sm text-[#14532d]">About us</p>

          <h2 className="mt-3 font-[general-sans-medium] text-[20px] leading-[120%] md:text-[28px] lg:text-[36px]">
            Flats and Apartments in
            <br />
            Thrissur by Trusted Builder
          </h2>

          <p className="mt-3 md:mt-6 font-[general-sans-regular] text-[13px] md:text-[14px] ">
            We, Creations India Developers Builders Infrastructures (CIDBI), an
            ISO 9001-2015 certified builder in Thrissur, was established in 2005
            in response to the growing need of quality housings. Since then, we
            have grown to be one of the best builders in Thrissur. CIDBI is a
            professionally managed company under the leadership of Mr. A A Abdul
            Lathif, run by well experienced management. We have more than 35
            years of experience in the construction field.
          </p>

          <Link
            href="/about-us"
            className="
    flex
    w-fit
    mx-auto
    mt-4
    md:mt-8
    items-center
    gap-1
    rounded-[10px]
    bg-[#0B5740]
    px-4
    md:px-8
    py-2
    md:py-3
    text-white
    transition
    font-[general-sans-regular]
    text-[12px]
    md:text-[13px]
  "
          >
            Know More
            <Image
              src="/images/home/right.svg"
              alt="Arrow"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>

      {/* Bottom Stats */}

      <div className="mt-6 md:mt-12 lg:mt-16 xl:mt-20">
        <div className="mx-auto grid  max-w-7xl grid-cols-2 md:grid-cols-4">
          {[
            ["20+", "PROJECTS COMPLETED"],
            ["11M+", "SQUARE FEET COMPLETED"],
            ["1000+", "HAPPY CUSTOMERS"],
            ["40+", "YEARS OF EXPERIENCE"],
          ].map(([number, label], index) => (
            <div
              key={index}
              className="py-4 md:py-8 lg:py-10 text-center border-r last:border-r-0"
            >
              <h3 className="font-[general-sans-medium] font-bold text-[30px] md:text-[38px] lg:text-[44px] xl:text-[50px] text-[#185D41]">
                {number}
              </h3>

              <p className="mt-3 font-[general-sans-regular] text-[12px] md:text-[15px] lg:text-[18px] xl:text-[21px] text-[#464646]">
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
