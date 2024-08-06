'use client'
import React, { useEffect, useState } from 'react'
import BlogCard from '../../../components/BlogCard'
import { getBlogsApi } from '../../../services/services'
import { useRouter } from 'next/navigation'

function MoreBlogs({blogId}) {
  const router = useRouter()
  const [numItems, setNumItems] = useState(4);
  const [Blogs, setBlogs] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setNumItems(1);
        } else if (window.innerWidth >= 1400 && window.innerWidth <= 1750) {
          setNumItems(3);
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1399) {
          setNumItems(2);
        } else {
          setNumItems(4);
        }
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBlogsApi(1, numItems,blogId)
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
    <main className='bg-[--primary-cl]'>
      <section className='containers w-full py-[25px] md:py-[50px]'>
        <h4 className='text-[20px] lg:text-[30px] text-[--secondary-cl] font-[general-sans-regular]'>RELATED BLOGS</h4>
        <div className='flex flex-row gap-[20px] justify-center py-[10px]'>
          {Blogs.slice(0, numItems).map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        <p className='pt-[20px] cursor-pointer text-center underline text-[16px] font-[general-sans-regular]' onClick={() => router.push('/blogs')}>View all</p>
      </section>
    </main>
  )
}

export default MoreBlogs
