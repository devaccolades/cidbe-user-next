import React from 'react'
import './Blogs.css'
import BlogCard from '../../components/BlogCard'
import blogimg1 from '../../../public/images/home/blogimg1.jpeg'
import blogimg2 from '../../../public/images/home/blogimg2.png'
import blogimg3 from '../../../public/images/home/blogimg3.png'

function BlogListing() {
    const Blogs = [
        { id: 1, thumbnail: blogimg1, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Luxury Living: The Importance of Location in Choosing Premium Flats" },
        { id: 2, thumbnail: blogimg2, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Advantages of Buying a Home Over Renting" },
        { id: 3, thumbnail: blogimg3, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Furnished vs. Unfurnished: Making the Right Choice for Your 3 BHK Flats in Thrissur" },
        { id: 4, thumbnail: blogimg3, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Furnished vs. Unfurnished: Making the Right Choice for Your 3 BHK Flats in Thrissur" },
        { id: 5, thumbnail: blogimg1, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Luxury Living: The Importance of Location in Choosing Premium Flats" },
        { id: 6, thumbnail: blogimg2, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Advantages of Buying a Home Over Renting" },
        { id: 7, thumbnail: blogimg3, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Furnished vs. Unfurnished: Making the Right Choice for Your 3 BHK Flats in Thrissur" },
        { id: 8, thumbnail: blogimg3, time_to_read: "2 Min read", date_added: "28/03/2024", thumbnail_alt: "", title: "Furnished vs. Unfurnished: Making the Right Choice for Your 3 BHK Flats in Thrissur" },
    ]
    return (
        <main className="bg-[var(--primary-cl)] -mt-[80px] lg:-mt-[95px] flex flex-col md:bg-[url('/images/blogs/blog-bg.svg')] bg-cover">
            <h4 className='text-[16px] lg:text-[32px] text-center font-[clash-display-medium] pt-[80px] lg:pt-[130px] text-[--secondary-cl]'>BLOGS</h4>
            <section className='blog-listing containers gap-y-[40px] gap-x-[20px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-[20px] lg:py-[52px] '>
                {Blogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </section>
            <p className='pb-[40px] text-center underline text-[16px] font-[general-sans-regular]'>View all</p>
        </main>
    )
}

export default BlogListing