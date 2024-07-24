"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import First from '../../../public/images/csr/First.svg';
import Second from '../../../public/images/csr/Second.svg';
import Third from '../../../public/images/csr/Third.svg';
import Fourth from '../../../public/images/csr/Fourth.svg';

import csrFirst from '../../../public/images/csr/csrOne.png'
import csrTwo from '../../../public/images/csr/csrTwo.png'
import csrThird from '../../../public/images/csr/csrThird.png'
import csrFourth from '../../../public/images/csr/csrFourth.png'
import csrFive from '../../../public/images/csr/csrFive.png'
import csrSix from '../../../public/images/csr/csrSix.png'

function FocusAreas() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6); // Large screens
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4); // Medium screens
      } else {
        setItemsPerPage(3); // Small screens
      }
    }

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    setIsLoading(false);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const focusAreas = [
    { icon: Third, title: 'Environmental Sustainability' },
    { icon: Fourth, title: 'Employee Well-being' },
    { icon: First, title: 'Community Engagement' },
    { icon: Second, title: 'Education' },
  ];

  const community = [
    {image: csrFirst, date: "1/1/2001", title: 'Yathish Chandra Ips, Visited Our School', description: 'Small description about the event. Small description about the event. Small description about the event. Small description about the event. Small description about the event.'},
    {image: csrFirst, date: "1/1/2001", title: 'Yathish Chandra Ips, Visited Our School', description: 'Small description about the event. Small description about the event. Small description about the event. Small description about the event. Small description about the event.'},
    {image: csrThird, date: "1/1/2001", title: 'Yathish Chandra Ips, Visited Our School', description: 'Small description about the event. Small description about the event. Small description about the event. Small description about the event. Small description about the event.'},
    {image: csrFourth, date: "1/1/2001", title: 'Yathish Chandra Ips, Visited Our School', description: 'Small description about the event. Small description about the event. Small description about the event. Small description about the event. Small description about the event.'},
    {image: csrFive, date: "1/1/2001", title: 'Yathish Chandra Ips, Visited Our School', description: 'Small description about the event. Small description about the event. Small description about the event. Small description about the event. Small description about the event.'},
    {image: csrSix, date: "1/1/2001", title: 'Yathish Chandra Ips, Visited Our School', description: 'Small description about the event. Small description about the event. Small description about the event. Small description about the event. Small description about the event.'},
    {image: csrSix, date: "1/1/2001", title: 'Yathish Chandra Ips, Visited Our School', description: 'Small description about the event. Small description about the event. Small description about the event. Small description about the event. Small description about the event.'},
    {image: csrSix, date: "1/1/2001", title: 'Yathish Chandra Ips, Visited Our School', description: 'Small description about the event. Small description about the event. Small description about the event. Small description about the event. Small description about the event.'},
    {image: csrSix, date: "1/1/2001", title: 'Yathish Chandra Ips, Visited Our School', description: 'Small description about the event. Small description about the event. Small description about the event. Small description about the event. Small description about the event.'},
  ];

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = community.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className='md:bg-[url(/images/csr/csrbackground.svg)] min-h-screen'>
      {/* our focus areas */}
      <div className='containers px-5 py-12'>
        <h1 className='text-center font-[clash-display-medium] text-2xl sm:text-3xl lg:text-4xl mb-8'>Our Focus Areas</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:flex lg:justify-between'>
          {focusAreas.map((area, index) => (
            <div key={index} className='flex flex-row sm:flex-col lg:flex-row items-center space-x-4 sm:space-x-0 sm:space-y-4 lg:space-y-0 lg:space-x-4'>
              <div className='bg-[#BFD8BD] w-[60px] h-[52px] flex items-center justify-center border border-black rounded-lg flex-shrink-0'>
                <Image src={area.icon} alt={`${area.title} Icon`} width={24} height={24} />
              </div>
              <p className='text-base  sm:text-[14px] lg-[text-18px]  font-[clash-display-medium] whitespace-nowrap'>{area.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* csr video section */}
      <div className="containers sm:px-5 md:px-[100px] l:px-[150px] py-12">
        <div className="relative w-full rounded-[20px] overflow-hidden" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Cf8NcIiIZeU" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* community impact */}
      <div className='containers py-12'> 
        <h1 className='text-center font-[clash-display-medium] text-2xl sm:text-3xl lg:text-4xl mb-8'>Community impact</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[40px]'>
            {currentItems.map((item, index) => (
              <div key={index} className='overflow-hidden border-white'>
                <div className='w-full overflow-hidden rounded-[20px]'>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={400} 
                    height={300} 
                    layout="responsive"
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-[20px]"
                  />
                </div>
                <div className='pt-4'>
                  <h3 className='font-[clash-display-medium] sm:text-[16px] lg:text-[24px] mb-2'>{item.title}</h3>
                  <div className='inline-block bg-[#EBEBEB] px-3 py-1 mb-2' style={{borderRadius:'20px'}}>
                    <p className='font-[general-sans-light] text-[#616161] text-[12px]'>{item.date}</p>
                  </div>
                  <p className='font-[general-sans-light] sm:text-[14px] lg:text-[18px]'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
            >
              Previous
            </button>
            {Array.from({ length: Math.ceil(community.length / itemsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === index + 1 ? 'z-10 bg-gray-100 text-gray-900 cursor-default' : 'hover:text-gray-500'}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(community.length / itemsPerPage)}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === Math.ceil(community.length / itemsPerPage) ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;