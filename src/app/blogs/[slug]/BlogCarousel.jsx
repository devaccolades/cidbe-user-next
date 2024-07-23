'use client'
import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Icnos
import clockIcon from '../../../../public/icons/clock.svg'
import image1 from '../../../../public/images/home/carorcel1.jpeg'
import '../Blogs.css'
import Image from "next/image";
function BlogCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { image: image1 },
    { image: image1 },
    { image: image1 },
    { image: image1 },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,

  };
  return (
    <section className='h-[690px] overflow-hidden  md:h-[768px] lg:h-screen sticky top-0 -mt-[80px] lg:-mt-[95px] -z-50 '>
        <div className="absolute z-10 top-[50%] flex flex-col gap-[20px] left-0 right-0 transform -translate-y-1/2 text-center ">
          <p className="font-[clash-display-medium] text-white text-[32px] lg:text-[64px] leading-[39px] w-[90%] md:w-[40%] mx-auto lg:leading-[78px]  uppercase text-center">the Legal Process of Buying a Flat in Thrissur, Kerala</p>
          <div className="flex flex-row gap-[10px] mx-auto w-full justify-center text-[10px] lg:text-[12px]">
            <p className="py-[2px] px-[10px] bg-white font-[general-sans-semibold] rounded-[6px]">28/03/2024</p>
            <p className="py-[2px] px-[10px] bg-white font-[general-sans-semibold] rounded-[6px] flex flex-row justify-center items-center gap-[1px]"><Image src={clockIcon} alt="" />2 Min read</p>
          </div>
        </div>
        <Slider {...settings}>
          {data.map((image, index) => (
            <div className="relative  h-screen bg-cover bg-no-repeat bg-[url(/images/home/carorcel1.jpeg)]">
              <div className="absolute inset-0 bg-black opacity-[30%]"></div>
            </div>
          ))}
        </Slider>
    </section>
  )
}

export default BlogCarousel