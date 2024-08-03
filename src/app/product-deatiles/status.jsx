'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import statuSliderImg from '../../../public/images/product-view/statusImg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import arrowIcon from '../../../public/images/product-view/slideArrow.svg';
import yearIcon from '../../../public/images/product-view/yearicon.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

function Status() {
  const [activeYear, setActiveYear] = useState(2021);
  const swiperRef = useRef(null);

  // Array of image objects grouped by year
  const imagesByYear = {
    2021: [
      { id: 1, src: statuSliderImg, alt: 'Status Image 2021 January', description: 'January' },
      { id: 2, src: statuSliderImg, alt: 'Status Image 2021 March', description: 'March' },
      { id: 3, src: statuSliderImg, alt: 'Status Image 2021 July', description: 'July' },
      { id: 4, src: statuSliderImg, alt: 'Status Image 2021 August', description: 'August' },
      { id: 5, src: statuSliderImg, alt: 'Status Image 2021 October', description: 'October' },
      { id: 6, src: statuSliderImg, alt: 'Status Image 2021 December', description: 'December' }
    ],
    2022: [
      { id: 1, src: statuSliderImg, alt: 'Status Image 2022 January', description: 'January' },
      { id: 2, src: statuSliderImg, alt: 'Status Image 2022 March', description: 'March' },
      { id: 3, src: statuSliderImg, alt: 'Status Image 2022 July', description: 'July' },
      { id: 4, src: statuSliderImg, alt: 'Status Image 2022 August', description: 'August' },
      { id: 5, src: statuSliderImg, alt: 'Status Image 2022 October', description: 'October' },
      { id: 6, src: statuSliderImg, alt: 'Status Image 2022 December', description: 'December' }
    ],
    2023: [
      { id: 1, src: statuSliderImg, alt: 'Status Image 2023 January', description: 'January' },
      { id: 2, src: statuSliderImg, alt: 'Status Image 2023 March', description: 'March' },
      { id: 3, src: statuSliderImg, alt: 'Status Image 2023 July', description: 'July' },
      { id: 4, src: statuSliderImg, alt: 'Status Image 2023 August', description: 'August' },
      { id: 5, src: statuSliderImg, alt: 'Status Image 2023 October', description: 'October' },
      { id: 6, src: statuSliderImg, alt: 'Status Image 2023 December', description: 'December' }
    ],
  };

  const allImages = [...imagesByYear[2021], ...imagesByYear[2022], ...imagesByYear[2023]];

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    if (currentIndex < 6) {
      setActiveYear(2021);
    } else if (currentIndex < 12) {
      setActiveYear(2022);
    } else {
      setActiveYear(2023);
    }
  };

  const handleYearChange = (year) => {
    setActiveYear(year);
    const indexStart = Object.keys(imagesByYear).indexOf(year.toString()) * 6;
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(indexStart);
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
            {[2021, 2022, 2023].map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`w-[80px] h-[40px] font-medium rounded-[6px] flex items-center justify-center border-[1px] border-black transition-colors duration-300 ${
                  activeYear === year ? 'bg-[#052D23] text-white' : 'bg-white text-black hover:bg-[#052D23] hover:text-white'
                }`}
              >
                {year}
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
            {allImages.map((image, index) => (
              <SwiperSlide key={`${image.id}-${index}`} className='relative'>
                <div className='w-full'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                    width={1600}
                    height={1200}
                    className='w-full'
                  />
                </div>
                <div className='relative mt-[5px] rounded-[5px] bottom-0 left-0 right-0 flex items-center justify-between bg-[#BFD8BD] p-[10px] rounded-b-[6px]' >
                  <div className='flex items-center'>
                    <Image src={yearIcon} alt="Year Icon" className='mr-[5px]' />
                    <p className='text-sm'>{image.description}</p>
                  </div>
                  {index < allImages.length - 1 && (
                    <div className='flex items-center'>
                      <Image src={arrowIcon} alt="Arrow Icon" />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
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
    </section>
  );
}

export default Status;
