'use client'
import React, { useEffect, useState } from 'react'
import BlogCard from '../../components/BlogCard'
import NotFound from '../../components/common/NotFound'
import { getBlogsApi } from '../../services/services'

function BlogListing() {
    const [page, setPage] = useState(1)
    const [page_limit, setPage_limit] = useState(window.innerWidth < 768 ? 6 : 8)
    const [total_count, setTotal] = useState(0)

    const [Blogs, setBlogs] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getBlogsApi(page, page_limit)
                const { StatusCode, data } = res.data
                if (StatusCode === 6000) {
                    setBlogs(data)
                    setTotal(res.data.total_count)
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                } else {
                    setBlogs([])
                }
            } catch (error) {
                console.log(error);
                setBlogs([])
            }
        }
        fetchData()
    }, [page])
    const handleClick = (pageNumber) => {
        setPage(pageNumber);
    };
    return (
        <main className="bg-[var(--primary-cl)] -mt-[80px] lg:-mt-[95px] flex flex-col blog-bg bg-cover">
            <h1 className='text-[16px] lg:text-[32px] text-center font-[clash-display-medium] pt-[80px] lg:pt-[130px] text-[--secondary-cl]'>BLOGS</h1>
            {Blogs.length > 0 ? (
                <section className='blog-listing containers gap-y-[40px] gap-x-[20px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-[20px] lg:py-[52px]'>
                    {Blogs.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))}
                </section>
            ) : (
                <NotFound />
            )}
            <div className="pb-[30px] flex justify-end containers">
                <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                        onClick={() => handleClick(page - 1)}
                        disabled={page === 1}
                        className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
                    >
                        Previous
                    </button>
                    {/* {Array.from({ length: Math.ceil(total_count / page_limit) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index + 1)}
                            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${page === index + 1 ? 'z-10 bg-gray-100 text-gray-900 cursor-default' : 'hover:text-gray-500'}`}
                        >
                            {index + 1}
                        </button>
                    ))} */}
                    <button
                        onClick={() => handleClick(page + 1)}
                        disabled={page === Math.ceil(total_count / page_limit)}
                        className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === Math.ceil(total_count / page_limit) ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
                    >
                        Next
                    </button>
                </nav>
            </div>
            {/* <p className='pb-[40px] text-center underline text-[16px] font-[general-sans-regular]'>View all</p> */}
        </main>
    )
}

export default BlogListing