"use client";
import React, { useEffect, useRef, useState } from "react";
import Amenities from "./Amenities";
import SmartFeature from "./SmartFeature";
import Specification from "./Specification";
import ProductVideo from "./ProductVideo";
import Plans from "./Plans";
import Location from "./Location";
import Status from "./status";
import Partners from "./Partners";
import VideoSection from "../VideoSection";
import dynamic from "next/dynamic";
import { SkeletonLoader } from "../skeletoneffect/Skelten";

const Slider = dynamic(() => import("./Slider"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
});

function DeepDetails({
  amenities,
  features,
  amenities_images,
  specification,
  blueprint_image,
  floor_plan,
  videosection,
  location,
  nearby,
  status,
  bank,
  videos,
  onVideoModalOpen,
  onVideoModalClose,
  isCandorPage,
}) {
  const [isSticky, setIsSticky] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(navbarRef.current?.getBoundingClientRect().top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionRefs = {
    Amenities: useRef(null),
    "Smart Features": useRef(null),
    Specifications: useRef(null),
    Plans: useRef(null),
    VideoSection: useRef(null),
    ProductVideo: useRef(null),
    Location: useRef(null),
    "Current Status": useRef(null),
  };

  const scrollToSection = (section) => {
    const offset = 70;
    if (sectionRefs[section]?.current) {
      window.scrollTo({
        top: sectionRefs[section].current.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const hasAmenities = Array.isArray(amenities) && amenities.length > 0;
  const hasFeatures = Array.isArray(features) && features.length > 0;
  const hasSpecification =
    Array.isArray(specification) &&
    specification.some(
      (spec) =>
        (spec?.title && String(spec.title).trim() !== "") ||
        (spec?.description && String(spec.description).trim() !== "")
    );
  const hasPlans =
    (Array.isArray(floor_plan) && floor_plan.length > 0) ||
    Boolean(blueprint_image);
  const hasVideoSection = Boolean(videosection);
  const hasVideos =
    Array.isArray(videos) &&
    videos.some((v) => v?.url && String(v.url).trim() !== "");
  const hasLocation =
    (Boolean(location) && String(location).trim() !== "") ||
    (Array.isArray(nearby) && nearby.length > 0);
  const hasStatus =
    Array.isArray(status) &&
    status.some(
      (item) =>
        item?.statuses &&
        Array.isArray(item.statuses) &&
        item.statuses.length > 0
    );
  const hasBank = Array.isArray(bank) && bank.length > 0;

  const sections = [
    { name: "Amenities", hasData: hasAmenities },
    { name: "Smart Features", hasData: hasFeatures },
    { name: "Specifications", hasData: hasSpecification },
    { name: "Plans", hasData: hasPlans },
    { name: "VideoSection", hasData: hasVideoSection },
    { name: "ProductVideo", hasData: hasVideos },
    { name: "Location", hasData: hasLocation },
    { name: "Current Status", hasData: hasStatus },
  ];

  const filteredSections = sections.filter((section) => section.hasData);

  return (
    <>
      {/* Hide header when video modal is open */}
      {filteredSections.length > 0 && (
        <section
          ref={navbarRef}
          className={`lg:sticky top-0 z-50 transition-all duration-300 ease-in-out ${
            isSticky ? "bg-[--primary-cl]" : "bg-white"
          } pt-[20px] pb-[10px] ${
            isVideoModalOpen ? "hidden" : "hidden lg:block"
          }`}
        >
          <div
            className={`containers custom-res py-[20px] rounded-[12px] transition-colors duration-300`}
          >
            <ul className="flex justify-between w-full">
              {filteredSections.map((item, index) => (
                <li
                  key={index}
                  onClick={() => scrollToSection(item.name)}
                  className="font-[general-sans-regular] lg:text-[16px] xl:text-[20px] px-[10px] py-[5px] relative cursor-pointer group transition-all duration-300 ease-in-out hover:font-[general-sans-medium]"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {hasAmenities && (
        <div ref={sectionRefs.Amenities} className="pt-[30px] bg-white">
          <Amenities amenities={amenities} isCandorPage={isCandorPage} />
        </div>
      )}

      {hasFeatures && (
        <div ref={sectionRefs["Smart Features"]} className="pt-[30px] bg-white">
          <SmartFeature features={features} />
        </div>
      )}

      {amenities_images?.length > 0 && (
        <Slider amenities_images={amenities_images} />
      )}

      {hasSpecification && (
        <div ref={sectionRefs.Specifications} className="pt-[30px] bg-white">
          <Specification
            specification={specification}
            isCandorPage={isCandorPage}
          />
        </div>
      )}

      {hasPlans && (
        <div ref={sectionRefs.Plans} className="pt-[30px] bg-white">
          <Plans
            floor_plan={floor_plan}
            blueprint_image={blueprint_image}
            isCandorPage={isCandorPage}
          />
        </div>
      )}

      {/* VideoSection with modal state handlers */}
      {hasVideoSection && (
        <div ref={sectionRefs.VideoSection} className="bg-white">
          <VideoSection
            videosection={videosection}
            onVideoModalOpen={() => {
              setIsVideoModalOpen(true);
              onVideoModalOpen?.();
            }}
            onVideoModalClose={() => {
              setIsVideoModalOpen(false);
              onVideoModalClose?.();
            }}
          />
        </div>
      )}

      {hasVideos && (
        <div ref={sectionRefs.ProductVideo} className="pt-[30px] bg-white">
          <ProductVideo videos={videos} />
        </div>
      )}

      {hasLocation && (
        <div ref={sectionRefs.Location} className="pt-[30px] bg-white">
          <Location location={location} nearby={nearby} />
        </div>
      )}

      {hasStatus && (
        <div ref={sectionRefs["Current Status"]} className="pt-[30px] bg-white">
          <Status status={status} />
        </div>
      )}

      {hasBank && <Partners bank={bank} isCandorPage={isCandorPage} />}
    </>
  );
}

export default DeepDetails;
