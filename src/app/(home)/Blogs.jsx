'use client'
import BlogCard from '../../components/BlogCard'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import NotFound from '../../components/common/NotFound'
import { getBlogsApi } from '../../services/services'
import Skelten from '../../components/skeletoneffect/Skelten'

function Blogs() {
  const router = useRouter()
  const [numItems, setNumItems] = useState(window.innerWidth < 768 ? 1 : window.innerWidth >= 1400 && window.innerWidth <= 1750 ? 3 : window.innerWidth >= 768 && window.innerWidth <= 1399 ? 2 : 4);
  const [Blogs, setBlogs] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumItems(1);
      } else if (window.innerWidth >= 1400 && window.innerWidth <= 1750) {
        setNumItems(3);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1399) {
        setNumItems(2);
      }
      else {
        setNumItems(4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBlogsApi(1, numItems)
        const { StatusCode, data } = res.data
        if (StatusCode === 6000) {
          setBlogs(data)
        } else {
          setBlogs([])
        }
      } catch (error) {
        setBlogs([])
        console.log(error);
      }
    }
    fetchData()
  }, [numItems])

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