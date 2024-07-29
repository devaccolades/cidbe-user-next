'use client'
import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

// HeroSection Component
function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // You can enable arrows if needed
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    appendDots: dots => (
      <div>
        <ul className="custom-dots"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`custom-dot ${i === activeIndex ? 'active' : ''}`}>
        <span className="dot-line"></span>
      </div>
    ),
  };

  // Array of images for the carousel
  const images = [
    '/images/product-view/banner.jpeg',
    '/images/product-view/banner.jpeg',
    '/images/product-view/banner.jpeg' // Banner image
    // Add other images here if needed
  ];

  return (
    <div className='relative h-screen -mt-[80px] lg:-mt-[95px] -mb-[75px] sticky top-0 z-[-10]'>
      {/* Carousel Component */}
      <div className="absolute inset-0">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative h-screen bg-cover bg-no-repeat">
              <Image src={image} alt={`Slide ${index}`} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 opacity-[30%]"></div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Text Content */}
      <div className="p-[20px] h-full flex flex-col justify-end containers relative z-20">
        <div className="text-white mb-[100px]">
          <h1 className='text-[24px] font-[clash-display-medium]'>CIDBI CASSIA</h1>
          <h1 className='text-[16px] font-[clash-display-medium]'>PREMIUM SMART HOMES</h1>
          <h1 className='text-[16px] font-[clash-display-medium]'>NEAR DAYA HOSPITAL</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
