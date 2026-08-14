"use client";
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

  // Visibility rules (index is 1-based, matches curve-image-N):
  // 1 & 9 (outermost)  -> desktop only (lg+)
  // 2 & 8              -> tablet + desktop (md+)
  // 3,4,5,6,7 (middle)  -> always visible (mobile, tablet, desktop)
  const getVisibilityClass = (position) => {
    if (position === 1 || position === 9) return "hidden lg:block";
    if (position === 2 || position === 8) return "hidden md:block";
    return "block";
  };

  return (
    <section className="relative overflow-hidden bg-white py-6 md:py-16 lg:py-24">
      <div className="containers">
        {/* =========================
            CURVED PROJECT IMAGES
        ========================== */}
        <div className="about-curve-container">
          {images.map((item, index) => {
            const position = index + 1;
            return (
              <div
                key={`${item.year}-${index}`}
                className={`curve-image curve-image-${position} ${getVisibilityClass(
                  position
                )}`}
              >
                <div
                  className="
                    relative
                    h-12 w-12
                    md:h-20 md:w-20
                    lg:h-24 lg:w-24
                    overflow-hidden
                    rounded-2xl
                    shadow-xl
                  "
                >
                  <Image
                    src={item.src}
                    alt={`CIDBI ${item.year}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mt-2 text-center text-[10px] text-gray-400 sm:text-xs">
                  {item.year}
                </p>
              </div>
            );
          })}
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <div className="mx-auto mt-2 max-w-2xl text-center sm:mt-0 md:-mt-28 lg:-mt-80 xl:-mt-96">
          <p className="text-sm text-[#14532d]">About us</p>

          <h2 className="mt-3 font-[general-sans-medium] text-[20px] leading-[120%] md:text-[28px] lg:text-[36px]">
            Flats and Apartments in
            <br />
            Thrissur by Trusted Builder
          </h2>

          <p className="mt-3 font-[general-sans-regular] text-[13px] md:mt-6 md:text-[14px]">
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
              mx-auto
              mt-4
              flex
              w-fit
              items-center
              gap-1
              rounded-[10px]
              bg-[#0B5740]
              px-4
              py-2
              font-[general-sans-regular]
              text-[12px]
              text-white
              transition
              md:mt-8
              md:px-8
              md:py-3
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

      {/* =========================
          BOTTOM STATS
      ========================== */}
      <div className="mt-6 md:mt-12 lg:mt-16 xl:mt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[
            ["20+", "PROJECTS COMPLETED"],
            ["11M+", "SQUARE FEET COMPLETED"],
            ["1000+", "HAPPY CUSTOMERS"],
            ["40+", "YEARS OF EXPERIENCE"],
          ].map(([number, label], index) => (
            <div
              key={index}
              className="border-r py-4 text-center last:border-r-0 md:py-8 lg:py-10"
            >
              <h3 className="font-[general-sans-medium] text-[30px] font-bold text-[#185D41] md:text-[38px] lg:text-[44px] xl:text-[50px]">
                {number}
              </h3>

              <p className="mt-3 font-[general-sans-regular] text-[12px] text-[#464646] md:text-[15px] lg:text-[18px] xl:text-[21px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          BLUR LIGHTS
      ========================== */}
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-lime-200 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white blur-[120px]" />

      {/* =========================
          CURVED IMAGE CSS
      ========================== */}
      <style jsx>{`
        .about-curve-container {
          position: relative;
          width: 100%;
          height: 140px;
          margin: 0 auto;
          transform-origin: center bottom;
          animation: curveMotion 8s linear infinite;
          --curve-sway: 18px;
        }

        .curve-image {
          position: absolute;
          left: 50%;
          top: 100%;
          transform-origin: center bottom;
          transform: translateX(-50%) rotate(var(--curve-rotate, 0deg))
            translateY(var(--curve-y, -125px));
          transition:
            transform 1.1s ease-in-out,
            opacity 1.1s ease-in-out;
        }

        .curve-image-1 {
          --curve-rotate: -45deg;
          --curve-y: -125px;
        }
        .curve-image-2 {
          --curve-rotate: -30deg;
          --curve-y: -125px;
        }
        .curve-image-3 {
          --curve-rotate: -22.5deg;
          --curve-y: -125px;
        }
        .curve-image-4 {
          --curve-rotate: -10deg;
          --curve-y: -125px;
        }
        .curve-image-5 {
          --curve-rotate: 0deg;
          --curve-y: -125px;
        }
        .curve-image-6 {
          --curve-rotate: 10deg;
          --curve-y: -125px;
        }
        .curve-image-7 {
          --curve-rotate: 22.5deg;
          --curve-y: -125px;
        }
        .curve-image-8 {
          --curve-rotate: 30deg;
          --curve-y: -125px;
        }
        .curve-image-9 {
          --curve-rotate: 45deg;
          --curve-y: -125px;
        }

        @media (min-width: 768px) {
          .about-curve-container {
            height: 280px;
            --curve-sway: 26px;
          }

          .curve-image-1,
          .curve-image-2,
          .curve-image-3,
          .curve-image-4,
          .curve-image-6,
          .curve-image-8,
          .curve-image-9 {
            --curve-y: -300px;
          }
        }

        @media (min-width: 1024px) {
          .about-curve-container {
            height: 450px;
            --curve-sway: 40px;
          }

          .curve-image-1 {
            --curve-rotate: -45deg;
            --curve-y: -520px;
          }
          .curve-image-2 {
            --curve-rotate: -33.75deg;
            --curve-y: -520px;
          }
          .curve-image-3 {
            --curve-rotate: -22.5deg;
            --curve-y: -520px;
          }
          .curve-image-4 {
            --curve-rotate: -11.25deg;
            --curve-y: -520px;
          }
          .curve-image-5 {
            --curve-rotate: 0deg;
            --curve-y: -520px;
          }
          .curve-image-6 {
            --curve-rotate: 11.25deg;
            --curve-y: -520px;
          }
          .curve-image-7 {
            --curve-rotate: 22.5deg;
            --curve-y: -520px;
          }
          .curve-image-8 {
            --curve-rotate: 33.75deg;
            --curve-y: -520px;
          }
          .curve-image-9 {
            --curve-rotate: 45deg;
            --curve-y: -520px;
          }
        }

        @media (min-width: 1280px) {
          .about-curve-container {
            height: 550px;
            --curve-sway: 46px;
          }

          .curve-image-1 {
            --curve-rotate: -45deg;
            --curve-y: -560px;
          }
          .curve-image-2 {
            --curve-rotate: -33.75deg;
            --curve-y: -560px;
          }
          .curve-image-3 {
            --curve-rotate: -22.5deg;
            --curve-y: -560px;
          }
          .curve-image-4 {
            --curve-rotate: -11.25deg;
            --curve-y: -560px;
          }
          .curve-image-5 {
            --curve-rotate: 0deg;
            --curve-y: -560px;
          }
          .curve-image-6 {
            --curve-rotate: 11.25deg;
            --curve-y: -560px;
          }
          .curve-image-7 {
            --curve-rotate: 22.5deg;
            --curve-y: -560px;
          }
          .curve-image-8 {
            --curve-rotate: 33.75deg;
            --curve-y: -560px;
          }
          .curve-image-9 {
            --curve-rotate: 45deg;
            --curve-y: -560px;
          }
        }

        @media (min-width: 1536px) {
          .about-curve-container {
            height: 620px;
            --curve-sway: 52px;
          }

          .curve-image-1 {
            --curve-rotate: -45deg;
            --curve-y: -600px;
          }
          .curve-image-2 {
            --curve-rotate: -33.75deg;
            --curve-y: -600px;
          }
          .curve-image-3 {
            --curve-rotate: -22.5deg;
            --curve-y: -600px;
          }
          .curve-image-4 {
            --curve-rotate: -11.25deg;
            --curve-y: -600px;
          }
          .curve-image-5 {
            --curve-rotate: 0deg;
            --curve-y: -600px;
          }
          .curve-image-6 {
            --curve-rotate: 11.25deg;
            --curve-y: -600px;
          }
          .curve-image-7 {
            --curve-rotate: 22.5deg;
            --curve-y: -600px;
          }
          .curve-image-8 {
            --curve-rotate: 33.75deg;
            --curve-y: -600px;
          }
          .curve-image-9 {
            --curve-rotate: 45deg;
            --curve-y: -600px;
          }
        }

        /* Seamless looping sway — starts and ends at the same transform
           so there is no jump-cut when the animation restarts. */
        @keyframes curveMotion {
          0% {
            transform: rotate(0deg) translateX(0);
          }

          25% {
            transform: rotate(-10deg) translateX(calc(var(--curve-sway) * -1));
          }

          50% {
            transform: rotate(0deg) translateX(calc(var(--curve-sway) * -2));
          }

          75% {
            transform: rotate(10deg) translateX(calc(var(--curve-sway) * -1));
          }

          100% {
            transform: rotate(0deg) translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-curve-container {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}