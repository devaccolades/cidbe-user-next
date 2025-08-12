"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import image1 from '../../../public/images/interiors/new img/1.svg';
import image2 from '../../../public/images/interiors/new img/2.webp';
import image3 from '../../../public/images/interiors/new img/3.svg';
import image4 from '../../../public/images/interiors/new img/4.svg';
import image5 from '../../../public/images/interiors/new img/5.svg';
import image6 from '../../../public/images/interiors/new img/6.svg';
import image7 from '../../../public/images/interiors/new img/7.svg';
import image8 from '../../../public/images/interiors/new img/8.webp';
import image9 from '../../../public/images/interiors/new img/9.webp';
import image10 from '../../../public/images/interiors/new img/10.webp';
import image11 from '../../../public/images/interiors/new img/11.jpg';
import image12 from '../../../public/images/interiors/new img/12.jpg';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const portfolioRef = useRef(null);

  const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image12, image11
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
                <Image 
                  src={image1} 
                  alt="Apartments in Thrissur" 
                  className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
                />
              </div>
              <div className="relative overflow-hidden flex justify-end">
                <Image 
                  src={image2} 
                  alt="Apartments in Thrissur" 
                  className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
                />
              </div>
            </div>
            <div className='flex justify-end'>
              <div className="relative overflow-hidden">
                <Image 
                  src={image5} 
                  alt="Apartments in Thrissur" 
                  className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
                />
              </div>
            </div>
            <div className='flex justify-end'>
              <div className="relative overflow-hidden">
                <Image 
                  src={image7} 
                  alt="flats in Thrissur" 
                  className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
                />
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center justify-around gap-8">
            <div className="relative overflow-hidden">
              <Image 
                src={image3} 
                alt="flats in Thrissur" 
                className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
              />
            </div>
            <div className="text-center">
              <h2 className="font-[clash-display-medium] sm:text-[16px] md:text-[26px] lg:text-[36px] text-center text-[--secondary-cl]">Our Portfolio</h2>
            </div>
            <div className="relative overflow-hidden">
              <Image 
                src={image8} 
                alt="flats in Thrissur" 
                className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-4 pt-[100px]">
            <div className="relative overflow-hidden">
              <Image 
                src={image4} 
                alt="flat for sale in Thrissur" 
                className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
              />
            </div>
            <div className="relative overflow-hidden">
              <Image 
                src={image6} 
                alt="flat for sale in Thrissur" 
                className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden">
                <Image 
                  src={image9} 
                  alt="flat for sale in Thrissur" 
                  className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
                />
              </div>
              <div className="relative overflow-hidden">
                <Image 
                  src={image10} 
                  alt="Apartments in Thrissur" 
                  className="transition-transform duration-300 hover:scale-110 w-full h-auto" 
                />
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
              <Image 
                src={image} 
                alt="Apartments in Thrissur"
                className="w-full h-auto object-cover" 
              />
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



 