'use client'
import React from 'react';
import { Image } from 'antd';
import NotFound from '../../components/common/NotFound';
import Skelten from '../../components/skeletoneffect/Skelten';
import Link from 'next/link';

function AchievementsListing({ achievements = [], totalCount, currentPage, pageSize }) {
    const visiblePages = Array.from(
        { length: 5 },
        (_, i) => currentPage - 2 + i
    ).filter((pages) => pages > 0 && pages <= Math.ceil(totalCount / pageSize));

    return (
        <>
            <main className="bg-white -mt-[80px] lg:-mt-[95px] achievements-bg bg-cover">
                <h1 className='text-[16px] lg:text-[24px] text-center font-[clash-display-medium] pt-[90px] lg:pt-[130px] text-[--secondary-cl]'>ACHIEVEMENTS</h1>
                {achievements === null ? (
                    <Skelten />
                ) :
                    achievements.length > 0 ? (
                        <section className='containers custom-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] py-[30px] lg:py-[70px]'>
                            <Image.PreviewGroup>
                                {achievements.map((achi, index) => (
                                    <div key={index} className='rounded-[16px] card-shadow bg-white h-full w-auto cursor-pointer'>
                                        <div className='overflow-hidden rounded-t-[16px]'>
                                            <Image
                                                className="h-[350px] bg-center bg-cover bg-no-repeat rounded-t-[16px] transition-transform duration-300 ease-in-out hover:scale-110"
                                                src={achi?.image}
                                                alt="flats in Thrissur"
                                                height={300}
                                                preview={{
                                                    src: achi?.image,
                                                }}
                                            />
                                        </div>
                                        <div className='w-full p-[24px] flex flex-col gap-[12px] font-[general-sans-regular] bg-white rounded-b-[16px]'>
                                            <p className='rounded-[6px] flex justify-center items-center text-[#616161] w-[73px] h-[24px] text-[10px] bg-[#EBEBEB]'>28/03/2024</p>
                                            <p className='text-[14px] leading-[18px] text-[#483C32]'>{achi?.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </Image.PreviewGroup>
                        </section>
                    ) : (
                        <NotFound />
                    )}
                <div className="pb-[30px] flex justify-center md:justify-end containers">
                    <ul className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                        <li>
                            <Link
                                href={currentPage > 1 ? `/achievements?page=${currentPage - 1}` : '#'}
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
                                    href={`/achievements?page=${pageNumber}`}
                                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300  text-sm font-medium  ${pageNumber === currentPage ? 'z-10 bg-[var(--primary-cl)] border-white text-white hover:text-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-500'}`}>
                                    {pageNumber}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href={currentPage === Math.ceil(totalCount / pageSize) ? '#' : `/achievements?page=${currentPage + 1}`}
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
            </main>
        </>
    );
}

export default AchievementsListing;
