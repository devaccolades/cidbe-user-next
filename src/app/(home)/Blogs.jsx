'use client'
import BlogCard from '../../components/BlogCard'
import React, { useEffect, useState } from 'react'
import NotFound from '../../components/common/NotFound'
import { getBlogsApi } from '../../services/services'
import Skelten from '../../components/skeletoneffect/Skelten'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link'
function Blogs() {
  const [Blogs, setBlogs] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBlogsApi(1, 4);
        const { StatusCode, data } = res.data;
        setBlogs(StatusCode === 6000 ? data : []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='h-[651px] bg-[--primary-cl]'>
      <div className='containers py-[40px]'>
        <h2 className='text-[30px] text-center font-[general-sans-regular]'>BLOGS</h2>
        {Blogs === null ? (
          <Skelten />
        ) :
          Blogs.length > 0 ? (
            <div className='w-full py-[10px]'>
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
                {Blogs.map((blog, index) => (
                  <SwiperSlide key={index}>
                    <BlogCard key={index} blog={blog} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <NotFound />
          )}
        <div className='flex justify-center items-center'>
          <Link href='/blogs' className='py-[20px] text-center underline text-[16px] font-[general-sans-regular] cursor-pointer' >View all</Link>
        </div>
      </div>

    </section>
  )
}

export default Blogs