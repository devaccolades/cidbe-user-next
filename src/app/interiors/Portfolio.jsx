"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import imageFirst from '../../../public/images/interiors/portfolio/int1.svg';
import imageSecond from '../../../public/images/interiors/portfolio/int2.svg';
import imageThird from '../../../public/images/interiors/portfolio/int3.svg';
import imageFourth from '../../../public/images/interiors/portfolio/int4.svg';
import imageFifth from '../../../public/images/interiors/portfolio/int5.svg';
import imageSixth from '../../../public/images/interiors/portfolio/int6.svg';
import imageSeventh from '../../../public/images/interiors/portfolio/int7.svg';
import imageEighth from '../../../public/images/interiors/portfolio/int8.svg';
import imageNinth from '../../../public/images/interiors/portfolio/int9.svg';
import imageTenth from '../../../public/images/interiors/portfolio/int10.svg';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const portfolioRef = useRef(null);

  const images = [
    imageFirst, imageSecond, imageThird, imageFourth, imageFifth,
    imageSixth, imageSeventh, imageEighth, imageNinth, imageTenth
  ];

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (portfolioRef.current) {
      window.scrollTo({
        top: portfolioRef.current.offsetTop - 100, 
        behavior: 'smooth',
      });
    }
  };
  

  const paginatedImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section>
      <div className="containers px-5 py-12 hidden sm:block">
        <div className="grid grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="grid gap-4 pb-[100px]">
            <div className="grid grid-cols-2 gap-4 items-end">
              <div className="relative overflow-hidden">
                <Image src={imageFirst} alt="Interior 1" className="transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="relative overflow-hidden flex justify-end">
                <Image src={imageSecond} alt="Interior 2" className="transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
            <div className='flex justify-end'>
              <div className="relative overflow-hidden">
                <Image src={imageThird} alt="Interior 3" className="transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
            <div className='flex justify-end'>
              <div className="relative overflow-hidden">
                <Image src={imageFourth} alt="Interior 4" className="transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center justify-around gap-8">
            <div className="relative overflow-hidden">
              <Image src={imageFifth} alt="Interior 5" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <div className="text-center">
              <h2 className="font-[clash-display-medium] sm:text-[16px] md:text-[26px] lg:text-[36px] text-center text-[--secondary-cl]">Our Portfolio</h2>
            </div>
            <div className="relative overflow-hidden">
              <Image src={imageSixth} alt="Interior 6" className="transition-transform duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-4 pt-[100px]">
            <div className="relative overflow-hidden">
              <Image src={imageSeventh} alt="Interior 7" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <div className="relative overflow-hidden">
              <Image src={imageEighth} alt="Interior 8" className="transition-transform duration-300 hover:scale-110" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden">
                <Image src={imageNinth} alt="Interior 9" className="transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="relative overflow-hidden">
                <Image src={imageTenth} alt="Interior 10" className="transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='containers pb-12 sm:hidden block'>
        <div ref={portfolioRef} className="mt-4">
          <h2 className="text-[16px] font-[clash-display-medium] mb-4">Our Portfolio</h2>
          {paginatedImages.map((image, index) => (
            <div key={index} className="w-full ">
              <Image src={image} alt={`Interior ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-[20px]">
          <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => handleClick(currentPage - 1)}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === index + 1 ? 'z-10 bg-gray-100 text-gray-900 cursor-default' : 'hover:text-gray-500'}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handleClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
