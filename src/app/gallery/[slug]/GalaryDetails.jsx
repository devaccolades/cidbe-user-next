'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import NotFound from '../../../components/common/NotFound'

function GalaryDetails({ galleryDetails }) {
    const router = useRouter()
    return (
        <main className="bg-[--primary-cl] bg-cover bg-no-repeat md:bg-[url(/images/home/line_background.svg)]">
            <section className='containers py-[30px] md:py-[60px]'>
                <div className='font-[general-sans-medium] flex flex-row justify-between'>
                    <p className='text-[16px] lg:text-[24px] leading-[21px] lg:leading-[32px] text-[--secondary-cl] w-full lg:w-[450px]'>{galleryDetails?.title}</p>
                    <button className='h-[40px] w-[100px] bg-[--secondary-cl] text-white text-[14px] font-bold rounded-[6px] hidden lg:block' onClick={() => router.push('/gallery')}>Back</button>
                </div>
                <p className='text-[--secondary-cl] text-[10px] bg-[#EBEBEB] flex justify-center items-center rounded-[6px] w-[73px] h-[24px] mt-[15px]'>{galleryDetails?.date_added}</p>
                {galleryDetails?.images.length > 0 ? (
                    <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px] py-[25px] md:py-[50px]'>
                        {galleryDetails?.images?.map((image, index) => (
                            <div key={index} className='p-[5px] bg-white rounded-[8px]'
                            >
                                <Image src={image?.image} alt={image?.image_alt} width={315} height={200} className='w-full h-full rounded-[8px]' />
                            </div>
                        ))}
                    </div>
                ) : (
                    <NotFound />
                )}
                <div className='flex justify-end'>
                    <button className='h-[40px] w-[100px] bg-[--secondary-cl] text-white text-[14px]  font-bold rounded-[6px] lg:hidden block' onClick={() => router.push('/gallery')}>Back</button>
                </div>
            </section>
        </main>
    )
}

export default GalaryDetails