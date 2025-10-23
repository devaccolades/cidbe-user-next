"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// HeroSection Component
function HeroSection({ data, images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Settings for the carousel
  const settings = {
    lazyLoad: "ondemand",
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={`custom-dot ${i === activeIndex ? "active" : ""}`}>
        <span className="dot-line"></span>
      </div>
    ),
  };

  return (
    <div className="relative h-[690px] md:h-[768px] lg:h-screen -mt-[80px] lg:-mt-[95px] -mb-[75px] sticky top-0 z-[-10]">
      {/* Carousel Component */}
      <div className="absolute inset-0">
        <Slider {...settings}>
          {images.length > 0
            ? images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[690px] md:h-[768px] lg:h-screen bg-cover bg-no-repeat"
                >
                  <Image
                    unoptimized
                    src={image?.images}
                    alt="Premium Flats in Thrissur"
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                    priority
                  />
                  <div className="absolute inset-0 opacity-[30%]"></div>
                </div>
              ))
            : ""}
        </Slider>
      </div>
      {/* <div className="absolute top-[20%] left-[16%]">
        <img src={data?.logo} alt="logo" />
      </div> */}
      {/* Text Content */}
      <div className="p-[20px] h-full flex flex-col justify-end containers relative z-20">
        <div className="text-white mb-[100px]">
          {data?.logo && (
            <Image
              src={data?.logo}
              width={100}
              height={100}
              alt="Premium Apartments in Thrissur"
              className="w-[100px] md:w-[140px]"
            />
          )}
          <h1 className="text-[24px] font-[clash-display-medium]">
            {data?.name}
          </h1>
          <p className="text-[16px] font-[clash-display-medium]">
            {data?.sub_name}
          </p>
          <p className="text-[16px] font-[clash-display-medium]">
            {data?.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
