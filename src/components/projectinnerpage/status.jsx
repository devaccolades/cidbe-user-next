'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import arrowIcon from '../../../public/images/product-view/slideArrow.svg';
import yearIcon from '../../../public/images/product-view/yearicon.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import ImageModal from '../imagemodal/ImageModal';

function Status({ status }) {
  const [selected, setSelected] = useState('')
  const [open, setOpen] = useState(false)
  const handleOpen = (data) => {
    setSelected(data)
    setOpen(!open)
  }
  const [activeYear, setActiveYear] = useState("");
  const swiperRef = useRef(null);

  useEffect(() => {
    setActiveYear(status[0]?.year)
  }, [status]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    const slidesPerYear = status.map(yearData => yearData.statuses.length);
    let yearIndex = 0;
    let slideCount = 0;

    while (currentIndex >= slideCount + slidesPerYear[yearIndex]) {
      slideCount += slidesPerYear[yearIndex];
      yearIndex++;
    }
    setActiveYear(status[yearIndex]?.year);
  };

  const handleYearChange = (year) => {
    setActiveYear(year);
    const indexStart = status.findIndex(item => item.year === year);
    const slideStart = status.slice(0, indexStart).reduce((sum, item) => sum + item.statuses.length, 0);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(slideStart);
    }
  };

  return (
    <section className='bg-[#ffff]'>
      <div className='containers custom-res py-[20px]'>
        <div className='flex flex-col md:flex-row md:items-start gap-[1px] lg:gap-[20px]'>
          <h1 className='text-[24px] font-[clash-display-medium] mb-[20px] md:mb-[0] md:mr-[40px]'>
            Current Status
          </h1>
          <div className='flex gap-[10px] flex-wrap'>
            {status.map((yearData, index) => (
              <button
                key={index}
                onClick={() => handleYearChange(yearData.year)}
                className={`w-[80px] h-[40px] font-medium rounded-[6px] flex items-center justify-center border-[1px] border-black transition-colors duration-300 ${
                  activeYear === yearData.year ? 'bg-[#052D23] text-white' : 'bg-white text-black hover:bg-[#052D23] hover:text-white'
                }`}
              >
                {yearData.year}
              </button>
            ))}
          </div>
        </div>

        <div className='mt-[40px]'>
          <Swiper
            ref={swiperRef}
            modules={[Scrollbar]}
            spaceBetween={20}
            slidesPerView={5}
            scrollbar={{
              hide: false,
              draggable: true
            }}
            onSlideChange={handleSlideChange}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20
              }
            }}
          >
            {status.flatMap((yearData) =>
              yearData.statuses.map((item, index) => (
                <SwiperSlide key={`${item.id}-${index}`} className='relative'>
                  <div className='w-full h-[200px] bg-cover bg-center rounded-[8px]' 
                      style={{ backgroundImage: `url(${item?.image})` }} onClick={()=>handleOpen(item?.image)}/>
                  <div className='relative mt-[5px] rounded-[5px] bottom-0 left-0 right-0 flex items-center justify-between bg-[#BFD8BD] p-[10px] rounded-b-[6px]' >
                    <div className='flex items-center'>
                      <Image src={yearIcon} alt="Year Icon" className='mr-[5px]' />
                      <p className='text-sm'>{item.month}</p>
                    </div>
                    {/* {index < yearData.statuses.length - 1 && ( */}
                      <div className='flex items-center'>
                        <Image src={arrowIcon} alt="Arrow Icon" />
                      </div>
                    {/* )} */}
                  </div>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>

      {/* Custom styles for the scrollbar */}
      <style jsx global>{`
        .swiper-scrollbar {
          opacity: 1 !important;
          height: 3px !important;
          background-color: #e0e0e0 !important;
          bottom: 0 !important;
          width: 50% !important;
          left: 25% !important;
          position: relative !important;
          margin-top: 20px !important;
        }

        .swiper-scrollbar-drag {
          background-color: black !important;
        }

        .swiper-wrapper {
          padding-bottom: 30px !important;
        }
      `}</style>
       <ImageModal open={open} handleOpen={handleOpen} data={selected} />
    </section>
  );
}

export default Status;
