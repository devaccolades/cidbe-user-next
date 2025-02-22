'use client'
import React from 'react'
import BlogCard from '../../components/BlogCard'
import NotFound from '../../components/common/NotFound'
import { Fade } from "react-reveal";
import Skelten from '../../components/skeletoneffect/Skelten'
import Link from 'next/link'

function BlogListing({ data = [], totalCount, currentPage, pageSize }) {

    const visiblePages = Array.from(
        { length: 5 },
        (_, i) => currentPage - 2 + i
    ).filter((pages) => pages > 0 && pages <= Math.ceil(totalCount / pageSize));


    return (
        <main className="bg-[var(--primary-cl)] -mt-[80px] lg:-mt-[95px] flex flex-col blog-bg bg-cover">
            <h1 className='text-[16px] lg:text-[32px] text-center font-[clash-display-medium] pt-[80px] lg:pt-[130px] text-[--secondary-cl]'>BLOGS</h1>
            {data === null ? (
                <Skelten />
            ) :
                data.length > 0 ? (
                    <section className='blog-listing containers gap-y-[40px] gap-x-[20px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-[20px] lg:py-[52px]'>
                        {data.map((blog, index) => (
                            <Fade bottom delay={index * 50} key={blog.id}>
                                <BlogCard blog={blog} />
                            </Fade>
                        ))}
                    </section>
                ) : (
                    <NotFound />
                )}
            <div className="pb-[30px] flex justify-center md:justify-end containers">
                <ul className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                    <li>
                        <Link
                            href={currentPage > 1 ? `/blogs?page=${currentPage - 1}` : '#'}
                            onClick={(e) => {
                                if (currentPage === 1) {
                                    e.preventDefault();
                                }
                            }}
                            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'
                                }`}
                        >
                            Previous
                        </Link>
                    </li>

                    {visiblePages.map((pageNumber) => (
                        <li key={pageNumber}>
                            <Link
                                href={`/blogs?page=${pageNumber}`}
                                className={`relative inline-flex items-center px-4 py-2 border border-gray-300  text-sm font-medium  ${pageNumber === currentPage ? 'z-10 bg-[var(--primary-cl)] border-white text-white hover:text-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-500'}`}
                            >
                                {pageNumber}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href={currentPage === Math.ceil(totalCount / pageSize) ? '#' : `/blogs?page=${currentPage + 1}`}
                            onClick={(e) => {
                                if (currentPage === Math.ceil(totalCount / pageSize)) {
                                    e.preventDefault();
                                }
                            }}
                            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === Math.ceil(totalCount / pageSize) ? 'cursor-not-allowed' : 'hover:text-gray-700'
                                }`}
                        >
                            Next
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <p className='pb-[40px] text-center underline text-[16px] font-[general-sans-regular]'>View all</p> */}
        </main>
    )
}

export default BlogListing