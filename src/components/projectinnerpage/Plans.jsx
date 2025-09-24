'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Image as AntdImage } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import buildIcon from '../../../public/images/product-view/plansbuilding.webp';

function Plans({ floor_plan, blueprint_image }) {

  return (
    <section className="py-10 bg-[#ffff]">
      <div className="containers custom-res">
        <h2 className='text-3xl sm:text-2xl md:text-3xl lg:px-[20px] font-[clash-display-medium] '>Plans</h2>

        <div className='-mx-4 sm:-mx-6 lg:-mx-8'>
        <AntdImage.PreviewGroup>
          <Swiper
            modules={[Scrollbar]}
            spaceBetween={30}
            slidesPerView={3}
            scrollbar={{
              hide: false,
              draggable: true
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            className="!px-4 sm:!px-6 lg:!px-8 !py-4"
          >
            {floor_plan.map((image, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div
                  className='bg-white rounded-lg p-6 custom-shadow transition-all duration-300 hover:shadow-2xl h-full cursor-pointer'
                  // onClick={() => { openModal(), setSelectedImage(image?.image) }}
                >
                  <div className='flex items-center mb-4'>
                    <div className='w-14 h-14 rounded-full flex items-center justify-center mr-4 bg-[#BFD8BD]'>
                      <Image src={buildIcon} alt="Premium Flats in Thrissur" width={28} height={28} />
                    </div>
                    <div>
                      <h2 className='text-[16px] lg:text-[24px] font-[general-sans-medium]'>{image.plan_type}</h2>
                      <p className='text-sm sm:text-xs md:text-sm font-[general-sans-medium]'>{image?.floor_from && `${image?.floor_from} `}  {image?.floor_to && `to ${image?.floor_to}`} Floor</p>
                    </div>
                    <h2 className='text-[20px] lg:text-[30px] font-[general-sans-medium] ml-auto'>{image?.bedrooms}BHK</h2>
                  </div>
                  <div className='flex justify-between text-sm sm:text-xs md:text-sm font-[general-sans-light] text-[--secondary-cl] mb-6'>
                    <p>Area {image?.total_area} sqft</p>
                    <p>Carpet Area {image?.carpet_area} sqft</p>
                  </div>
                  {/*  <Image
                    src={image?.plan_image}
                    alt={image?.plan_alt}
                    layout="responsive"
                    width={1600}
                    height={1200}
                    unoptimized
                    className='w-full'
                  /> */}
                   <AntdImage
                      // width={1000}
                      // height={90}
                      className='h-full w-full'
                      src={image?.plan_image}
                      alt={image?.plan_alt}
                      preview={{ src: image?.image }}
                    />
                  {/* <img src={image?.plan_image}
                  className='mx-auto'
                    alt={image?.plan_alt} /> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </AntdImage.PreviewGroup>
        </div>

       {blueprint_image&& <div className='mt-16'>
          <Image unoptimized src={blueprint_image} alt="Premium Apartments in Thrissur" width={100} height={100} layout="responsive" />
        </div>}
      </div>
    </section>
  );
}

export default Plans;
