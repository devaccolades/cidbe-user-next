"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getFeaturedProject } from "../../services/services";

const customers = [
  "/images/home/ic1.svg",
  "/images/home/ic2.svg",
  "/images/home/ic3.svg",
  "/images/home/ic4.svg",
  "/images/home/ic5.svg",
];

const defaultProjects = [
  {
    image: "/images/home/s2.svg",
    banner: "/images/home/s10.png",
    title: "CHEMBAKA",
    location: "Punkunnam",
    badge: "New Launch",
  },
  {
    image: "/images/home/s1.svg",
    banner: "/images/home/s11.webp",
    title: "CASSIA",
    location: "Near Daya Hospital",
  },
];

const resolveImageSrc = (src) => {
  if (!src) return "";
  if (typeof src === "object") {
    if (src.url) return resolveImageSrc(src.url);
    if (src.data?.attributes?.url) return resolveImageSrc(src.data.attributes.url);
    return "";
  }
  if (src.startsWith("http")) return src;
  if (src.startsWith("//")) return `https:${src}`;
  if (src.startsWith("/images/") || src.startsWith("/icons/")) return src;
  if (src.startsWith("/")) return `https://backend.cidbi.com${src}`;
  return `https://backend.cidbi.com/${src}`;
};

const normalizeHeroProject = (project) => {
  const title = project.title || project.name || project.slug || "";
  return {
    title,
    location: project.location || project.address || "",
    badge: title.toLowerCase().includes("chembaka") ? "New Launch" : project.badge || project.tag || project.status || "",
    banner: resolveImageSrc(
      project.background_image || project.banner || project.hero_banner || project.banner_image || project.featured_image || project.image,
    ),
    image: resolveImageSrc(
      project.thumbnail || project.image || project.gallery_image || project.hero_image || project.banner || project.featured_image,
    ),
  };
};

const AUTO_ROTATE_MS = 6000;

export default function HeroSection() {
  const [projects, setProjects] = useState(defaultProjects);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % projects.length);
    }, AUTO_ROTATE_MS);
  };

  useEffect(() => {
    const fetchHeroProjects = async () => {
      try {
        const res = await getFeaturedProject(1, 4);
        console.log("Hero Section Projects Response:", res?.data);
        const { StatusCode, data } = res?.data || {};
        if (StatusCode === 6000 && Array.isArray(data) && data.length > 0) {
          setProjects(data.map(normalizeHeroProject));
          setActiveIndex(0);
        }
      } catch (error) {
        console.error("Failed to fetch hero section projects:", error);
      }
    };

    fetchHeroProjects();
  }, []);

  useEffect(() => {
    if (!projects.length) return;
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [projects]);

  const goTo = (index) => {
    setActiveIndex(index);
    startTimer(); // restart the countdown so it doesn't jump right after a manual click
  };

  const goPrev = () =>
    goTo((activeIndex - 1 + projects.length) % projects.length);
  const goNext = () => goTo((activeIndex + 1) % projects.length);

  // Whichever project is currently showing in the background always appears
  // first (leftmost) in the slider on the right.
  const orderedProjects = [
    ...projects.slice(activeIndex),
    ...projects.slice(0, activeIndex),
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden -mt-[95px]">
      {/* Background - crossfades to match the active project */}
      {projects.map((project, index) => (
        <Image
          key={project.title}
          src={project.banner}
          alt={project.title}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="relative px-4 md:px-8 z-10 flex h-full flex-col justify-end gap-5 pb-6 sm:pb-8 md:flex-row md:items-end md:justify-between md:gap-0 md:pb-12">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-white">
          {/* Customers */}
          <div className="flex items-center gap-4 mb-3 md:mb-5">
            <div className="flex">
              {customers.map((img, index) => (
                <div
                  key={index}
                  className={`relative h-8 w-8 md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12 rounded-full border-white overflow-hidden ${
                    index !== 0 ? "-ml-4" : ""
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>

            <span className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-[inter-medium] ">1000+ Happy Customers</span>
          </div>

          <h1 className="text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[60px] font-[inter-normal]">
            തൃശ്ശൂരിൻ്റെ
            <br />
            സ്വന്തം ബിൽഡർ
          </h1>

          <p className="mt-2 md:mt-5 max-w-lg text-white/80 text-[13px] md:text-[14px] lg:text-[16px] leading-[20px] font-[general-sans-regular] ">
            You are choosing a builder having the best apartments and flats with more than 35 years of experience in the construction industry
          </p>
        </div>

        {/* RIGHT PROPERTY SLIDER - stacked below on mobile, side-by-side from md up */}
        <div className="w-full md:w-[420px]">
          <div className="flex gap-4 md:justify-end md:gap-6">
            {orderedProjects.map((item) => {
              const originalIndex = projects.indexOf(item);
              const isActive = originalIndex === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => goTo(originalIndex)}
                  className={`relative flex-1 md:w-[170px] md:flex-none text-left bg-transparent border-0 p-0 transition-opacity duration-500 cursor-pointer ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="relative h-[80px] sm:h-[95px] md:h-[110px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {item.badge && (
                      <span className="absolute top-0 left-0 bg-red-600 text-white text-[9px] md:text-[10px] px-2 py-1">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 md:mt-3 text-sm md:text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-white/70">
                    {item.location}
                  </p>

                  {/* Progress - fills over the same duration as the auto-rotate timer */}
                  <div className="mt-3 md:mt-4 h-[3px] bg-white/30 overflow-hidden">
                    <div
                      key={isActive ? `${item.title}-${activeIndex}` : item.title}
                      className={`h-full bg-[linear-gradient(90deg,#FFFFFF_0%,#185D41_51.92%,#F8F8F8_100%)] ${
                        isActive ? "cidbi-progress" : "w-1/3"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="mt-4 md:mt-6 flex justify-end items-center gap-4">
            <button type="button" onClick={goPrev} className="cursor-pointer">
              <Image
                src="/images/home/lft.svg"
                alt="Previous"
                width={20}
                height={20}
                className="md:w-6 md:h-6"
              />
            </button>

            <button type="button" onClick={goNext} className="cursor-pointer">
              <Image
                src="/images/home/right.svg"
                alt="Next"
                width={20}
                height={20}
                className="md:w-6 md:h-6"
              />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cidbi-progress-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .cidbi-progress {
          animation: cidbi-progress-fill ${AUTO_ROTATE_MS}ms linear;
        }
      `}</style>
    </section>
  );
}