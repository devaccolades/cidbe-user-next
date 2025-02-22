'use client'
import React from 'react'
import BlogCard from '../../../components/BlogCard'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function MoreBlogs({ related_blogs }) {

  return (
    <main className='bg-[--primary-cl]'>
      <section className='containers w-full py-[25px] md:py-[50px]'>
        <h4 className='text-[20px] lg:text-[30px] text-[--secondary-cl] font-[general-sans-regular]'>RELATED BLOGS</h4>
        <div className='flex flex-row gap-[20px] justify-center py-[10px]'>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                  320: {
                    slidesPerView: 1, // width < 768
                    spaceBetween: 10
                  },
                  768: {
                    slidesPerView: 2, // width >= 768 && width <= 1399
                    spaceBetween: 20
                  },
                  1400: {
                    slidesPerView: 3, // width >= 1400 && width <= 1750
                    spaceBetween: 20
                  },
                  1750: {
                    slidesPerView: 4, // Default for larger screens
                    spaceBetween: 20
                  },
                }}
                className="relative"
              >
                {related_blogs && related_blogs.length > 0 && related_blogs.map((blog, index) => (
                  <SwiperSlide key={index}>
                    <BlogCard key={index} blog={blog} />
                  </SwiperSlide>
                ))}
              </Swiper>
        </div>
        <div className='flex justify-center items-center'>
          <Link className='pt-[20px] cursor-pointer text-center underline text-[16px] font-[general-sans-regular]' href="/blogs">View all</Link>
        </div>
      </section>
    </main>
  )
}

export default MoreBlogs
