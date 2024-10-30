'use client'
import BlogCard from '../../components/BlogCard'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import NotFound from '../../components/common/NotFound'
import { getBlogsApi } from '../../services/services'
import Skelten from '../../components/skeletoneffect/Skelten'
import { throttle } from 'lodash';

function Blogs() {
  const router = useRouter()
  const [numItems, setNumItems] = useState(4);
  const [Blogs, setBlogs] = useState(null)

  useEffect(() => {
    const determineNumItems = () => {
      const width = window.innerWidth;
      if (width < 768) return 1;
      if (width >= 1400 && width <= 1750) return 3;
      if (width >= 768 && width <= 1399) return 2;
      return 4;
    };

    setNumItems(determineNumItems());

    const handleResize = throttle(() => {
      setNumItems(determineNumItems());
    }, 200); // Throttle resize to fire every 200ms

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBlogsApi(1, numItems);
        const { StatusCode, data } = res.data;
        setBlogs(StatusCode === 6000 ? data : []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      }
    };

    fetchData();
  }, [numItems]);

  return (
    <section className='h-[651px] bg-[--primary-cl]'>
      <div className='containers py-[40px]'>
        <h4 className='text-[30px] text-center font-[general-sans-regular]'>BLOGS</h4>
        {Blogs === null ? (
          <Skelten />
        ) :
          Blogs.length > 0 ? (
            <div className='flex flex-row gap-[20px] justify-center py-[10px]'>
              {Blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          ) : (
            <NotFound />
          )}
          <p className='py-[20px] text-center underline text-[16px] font-[general-sans-regular] cursor-pointer' onClick={() => router.push('/blogs')}>View all</p>
      </div>
    </section>
  )
}

export default Blogs