"use client";

import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const customers = [
  "/images/home/ic1.svg",
  "/images/home/ic2.svg",
  "/images/home/ic3.svg",
  "/images/home/ic4.svg",
  "/images/home/ic5.svg",
];

const projects = [
  {
    image: "/images/home/s1.svg",
    title: "CHEMBAKA",
    location: "Punkunnam",
    active: true,
    badge: "New Launch",
  },
  {
    image: "/images/home/s2.svg",
    title: "CASSIA",
    location: "Near Daya Hospital",
    active: false,
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/home/herobg.svg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative z-10 flex h-full items-end justify-between px-6 md:px-16 pb-12">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-white">
          {/* Customers */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex">
              {customers.map((img, index) => (
                <div
                  key={index}
                  className={`relative h-12 w-12 rounded-full border-2 border-white overflow-hidden ${
                    index !== 0 ? "-ml-4" : ""
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>

            <span className="text-xl font-semibold">1000+ Happy Customers</span>
          </div>
 
          <h1 className="text-5xl md:text-6xl font-light">
            തൃശ്ശൂരിൻ്റെ
            <br />
            സ്വന്തം ബിൽഡർ
          </h1>

          <p className="mt-5 max-w-lg text-white/80">
            You are choosing a builder having the best apartments and flats with more than 35 years of experience in the construction industry
          </p>
        </div>

        {/* RIGHT PROPERTY SLIDER */}
        <div className="hidden md:block w-[420px]">
          <div className="flex justify-end gap-6">
            {projects.map((item, index) => (
              <div
                key={index}
                className={`relative w-[170px] transition ${
                  item.active ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="relative h-[110px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  {item.badge && (
                    <span className="absolute top-0 left-0 bg-red-600 text-white text-[10px] px-2 py-1">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 font-semibold text-white">{item.title}</h3>

                <p className="text-sm text-white/70">{item.location}</p>

                {/* Progress */}
                <div className="mt-4 h-[3px] bg-white/30">
                  <div
                    className={`h-full ${
                      item.active ? "w-full bg-white" : "w-1/3 bg-white"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex justify-end items-center gap-4">
            <button className="cursor-pointer">
              <Image
                src="/images/home/lft.svg"
                alt="Previous"
                width={24}
                height={24}
              />
            </button>

            <button className="cursor-pointer">
              <Image
                src="/images/home/right.svg"
                alt="Next"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
