'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import First from '../../../public/images/csr/First.svg';
import Second from '../../../public/images/csr/Second.svg';
import Third from '../../../public/images/csr/Third.svg';
import Fourth from '../../../public/images/csr/Fourth.svg';

import NotFound from '../../components/common/NotFound';
import { getCommunityImpactApi } from '../../services/services';

function FocusAreas() {
  const [page, setPage] = useState(1)
  const [page_limit, setPage_limit] = useState(3);
  const [total_count, setTotal] = useState(0)
  const [communityData, setCommunityData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
 
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

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };



  return (
    <section className='csr-bg min-h-screen'>
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
                      className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-[20px]"
                    />
                  </div>
                  <div className='pt-4'>
                    <h3 className='font-[clash-display-medium] sm:text-[16px] lg:text-[24px] mb-2'>{item.title}</h3>
                    <div className='inline-block bg-[#EBEBEB] px-3 py-1 mb-2' style={{ borderRadius: '20px' }}>
                      <p className='font-[general-sans-light] text-[#616161] text-[12px]'>{item.date_added}</p>
                    </div>
                    <p className='font-[general-sans-light] sm:text-[14px] lg:text-[18px]'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <NotFound />
        )}

        {/* Pagination */}
        <div className="pb-[30px] flex justify-center containers pt-[30px]">
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
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === Math.ceil(10 / 3) ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </section >
  );
}

export default FocusAreas;