'use client'
import React, { useEffect, useState } from 'react'


import blogimg1 from '../../../../public/images/home/blogimg1.jpeg'
import blogimg2 from '../../../../public/images/home/blogimg2.png'
import blogimg3 from '../../../../public/images/home/blogimg3.png'
import BlogCard from '../../../components/BlogCard'

function MoreBlogs() {
    const [numItems, setNumItems] = useState(1);
    const Blogs = [
        { id: 1, thumbnail: blogimg1, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Luxury Living: The Importance of Location in Choosing Premium Flats" },
        { id: 2, thumbnail: blogimg2, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Advantages of Buying a Home Over Renting" },
        { id: 3, thumbnail: blogimg3, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Furnished vs. Unfurnished: Making the Right Choice for Your 3 BHK Flats in Thrissur" },
        { id: 4, thumbnail: blogimg3, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Furnished vs. Unfurnished: Making the Right Choice for Your 3 BHK Flats in Thrissur" },
    ]

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setNumItems(1);
          } else if (window.innerWidth >= 1400 && window.innerWidth <= 1750) {
            setNumItems(3);
          }else if (window.innerWidth >= 768 && window.innerWidth <= 1399) {
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
    return (
        <main className='bg-[--primary-cl]'>
            <section className='containers  w-full py-[25px] md:py-[50px]'>
                <h4 className='text-[]20px lg:text-[30px]  font-[general-sans-regular]'>BLOGS</h4>
                <div className='flex flex-row gap-[20px] justify-center py-[10px]'>
                    {Blogs.slice(0, numItems).map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))}

                </div>
                <p className='pt-[20px] cursor-pointer text-center underline text-[16px] font-[general-sans-regular]'>View all</p>
            </section>
        </main>
    )
}

export default MoreBlogs