'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import First from '../../../public/images/csr/First.svg';
import Second from '../../../public/images/csr/Second.svg';
import Third from '../../../public/images/csr/Third.svg';
import Fourth from '../../../public/images/csr/Fourth.svg';

import NotFound from '../../components/common/NotFound';
import { getCommunityImpactApi } from '../../services/services';

function FocusAreas() {
  const [page, setPage] = useState(1);
  const [page_limit, setPage_limit] = useState(6);
  const [total_count, setTotal] = useState(0);
  const [communityData, setCommunityData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const communityImpactRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setPage_limit(6);
      } else if (window.innerWidth >= 640) {
        setPage_limit(4);
      } else {
        setPage_limit(3);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const focusAreas = [
    { icon: Third, title: 'Environmental Sustainability' },
    { icon: Fourth, title: 'Employee Well-being' },
    { icon: First, title: 'Community Engagement' },
    { icon: Second, title: 'Education' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await getCommunityImpactApi(page, page_limit);
        const { StatusCode, data } = res.data;
        if (StatusCode === 6000) {
          setCommunityData(data);
          setTotal(res.data.total_count);
        } else {
          setCommunityData([]);
        }
      } catch (error) {
        console.log(error);
        setCommunityData([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, page_limit]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    if (communityImpactRef.current) {
      communityImpactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='csr-bg min-h-screen'>
      {/* our focus areas */}
      <div className='containers px-5 py-8 sm:py-10 lg:py-12'>
        <h2 className='text-center font-[clash-display-medium] text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8'>Our Focus Areas</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 lg:flex lg:justify-between'>
          {focusAreas.map((area, index) => (
            <div key={index} className='flex flex-row sm:flex-col lg:flex-row items-center space-x-3 sm:space-x-0 sm:space-y-3 lg:space-y-0 lg:space-x-3'>
              <div className='bg-[#BFD8BD] w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[52px] lg:h-[52px] flex items-center justify-center border border-black rounded-lg flex-shrink-0'>
                <Image src={area.icon} alt={`${area.title} Icon`} width={20} height={20} className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]" />
              </div>
              <p className='text-[14px] xl:text-[16px] font-[general-sans-medium] whitespace-normal sm:whitespace-nowrap'>{area.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* csr video section */}
      <div className="containers sm:px-5 md:px-[100px] lg:px-[150px] py-1 sm:py-6 md:py-12">
        <div className="relative w-full rounded-[20px] overflow-hidden" style={{ paddingTop: '56.25%' }}>
          {/* <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Cf8NcIiIZeU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <iframe width="560" height="315" 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/aRgv7Ntt7QA?si=BLXCcrxijpMaQkRT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      {/* community impact */}
      <div className='containers py-12' ref={communityImpactRef}>
        <h2 className='text-center font-[clash-display-medium] text-2xl sm:text-3xl lg:text-4xl mb-8 capitalize'>Community impact</h2>
        {communityData.length > 0 ? (
          isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[40px]'>
              {communityData.map((item, index) => (
                <div key={index} className='overflow-hidden border-white'>
                  <div className='w-full overflow-hidden rounded-[20px]'>
                    <Image
                      src={item?.image}
                      alt={item?.image_alt}
                      width={400}
                      height={300}
                      layout="responsive"
                      unoptimized
                      className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-[20px]"
                    />
                  </div>
                  <div className='pt-4'>
                    <h3 className='font-[general-sans-medium] text-[16px] lg:text-[24px] text-[#483C32] mb-2'>{item.title}</h3>
                    <div className='inline-block bg-[#EBEBEB] px-3 py-1 mb-2' style={{ borderRadius: '5px' }}>
                      <p className='font-[general-sans-regular] text-[#616161] text-[12px]'>{item.date_added}</p>
                    </div>
                    <p className='font-[general-sans-light] text-[#483C32] text-[14px] lg:text-[18px] leading-[21px] lg:leading-[30px]'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <NotFound />
        )}

        {/* Pagination */}
        <div className="flex justify-center containers pt-[30px]">
          <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => handleClick(page - 1)}
              disabled={page === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
            >
              Previous
            </button>
            {Array.from({ length: Math.ceil(total_count / page_limit) }, (_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${page === index + 1 ? 'z-10 bg-gray-100 text-gray-900 cursor-default' : 'hover:text-gray-500'}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handleClick(page + 1)}
              disabled={page === Math.ceil(total_count / page_limit)}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === Math.ceil(total_count / page_limit) ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
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