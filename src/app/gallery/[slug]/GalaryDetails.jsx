'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Image } from 'antd';
import NotFound from '../../../components/common/NotFound'
function GalaryDetails({ galleryDetails }) {
    const router = useRouter()


    return (
        <main className="bg-[--primary-cl] bg-cover bg-no-repeat galary-inner-bg"
        >
            <section className='containers py-[30px] md:py-[60px]'>
                <div className='font-[general-sans-medium] flex flex-row justify-between'>
                    <p className='text-[16px] lg:text-[24px] leading-[21px] lg:leading-[32px] text-[--secondary-cl] w-full lg:w-[450px]'>{galleryDetails?.title}</p>
                    <button className='h-[40px] w-[100px] bg-[--secondary-cl] text-white text-[14px] font-bold rounded-[6px] hidden lg:block' onClick={() => router.push('/gallery')}>Back</button>
                </div>
                <p className='text-[--secondary-cl] text-[10px] bg-[#EBEBEB] flex justify-center items-center rounded-[6px] w-[73px] h-[24px] mt-[15px]'>{galleryDetails?.date_added}</p>
                <Image.PreviewGroup>
                    {galleryDetails?.images.length > 0 ? (
                        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px] py-[25px] md:py-[50px]'>
                            {galleryDetails?.images?.map((image, index) => (
                                <div key={index} className='p-[5px] bg-white rounded-[8px]'
                                >
                                    <div className='overflow-hidden rounded-[8px] w-full h-[200px]'>
                                        {/* <div className='w-full h-full  bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110' style={{ backgroundImage: `url(${image?.image})` }} /> */}
                                        <Image
                                            className="h-full w-full"
                                            src={image?.image}
                                            alt={image?.title}
                                            preview={{
                                                src: image?.image,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <NotFound />
                    )}
                </Image.PreviewGroup>
                <div className='flex justify-end'>
                    <button className='h-[40px] w-[100px] bg-[--secondary-cl] text-white text-[14px]  font-bold rounded-[6px] lg:hidden block' onClick={() => router.push('/gallery')}>Back</button>
                </div>
            </section>
            {/* <ImageModal open={open} handleOpen={handleOpen} data={selected} /> */}
        </main>
    )
}

export default GalaryDetails