'use client'
import React, { useState } from 'react'
import Image from 'next/image'

// icons
import quatsIcon from '../../../public/icons/quats.svg'
import plusIcon from '../../../public/icons/plus.svg'
import minusIcon from '../../../public/icons/minus.svg'

import customerReviewbg from '../../../public/images/home/customer-reviewsbg.svg'
// Images after connect backend should be remove
import customerreview from '../../../public/images/home/testimoials.png'

function CustomerReviewsAndFaq() {
    const [isOpend, setOpen] = useState(null)
    const faqs = [
        { question: "How to choose the right builder in Thrissur?", answer: "When selecting a builder in Thrissur, consider factors such as their experience, reputation, portfolio of completed projects, licenses and certifications, quality of materials used, adherence to timelines, and customer reviews. It is also advisable to request quotations and compare them to ensure competitive pricing." },
        { question: "What amenities can I expect in apartments in Thrissur?", answer: "Apartments in Thrissur typically offer amenities such as 24/7 security, power backup, ample parking, gymnasiums, swimming pools, children's play areas, and landscaped gardens. Some premium apartments might also include clubhouses, indoor game facilities, and more." },
        { question: "What are some popular residential areas in Thrissur for apartments?", answer: "Popular residential areas in Thrissur for apartments include Punkunnam, Ayyanthole, Viyyur, and East Fort. These areas are well-connected and offer a range of amenities and facilities, making them attractive for residential purposes." },
        { question: "What are ready to occupy flats in Thrissur?", answer: "Ready to occupy flats in Thrissur are fully constructed and available for immediate possession. These flats come with completed interiors and necessary utilities, allowing buyers to move in without any waiting period." },
        { question: "What is the advantage of buying a ready to occupy flat in Thrissur?", answer: "The primary advantage of buying a ready to occupy flat is the immediate possession, which eliminates the waiting period typically associated with under-construction properties. Buyers can also inspect the property before purchase, ensuring it meets their expectations." },
        { question: "Are budget flats in Thrissur of good quality?", answer: "Budget flats in Thrissur can vary in quality. It's important to research the builder's reputation and check for reviews and completed projects. Visiting the site and inspecting the construction quality can also provide assurance regarding the quality of budget flats." },
        { question: "Can I visit and inspect the flat before making a purchase?", answer: "Yes, most builders and developers allow potential buyers to visit and inspect the flats before making a purchase decision. This helps buyers assess the quality, layout, and other aspects of the property." },
    ]
    
    return (
        <section className='relative text-[--secondary-cl] overflow-hidden -z-20 reviews-bg-gradient py-[90px] flex flex-col gap-[130px]'>
            <Image src={customerReviewbg} className='absolute right-0 hidden lg:block -z-10 top-[-30px]' alt='Customer Review Background' />

            {/* Customer reviews */}
            <div className='containers '>
                <h6 className='font-[general-sans-semibold] text-[29px]'>Customer Reviews</h6>
                <div className='flex flex-row mt-[44px] justify-between'>
                    <div className='w-[387px] bg-white h-[478px] rounded-[12px] py-[30px] grid grid-rows-[110px,1fr,110px]'>
                        <div className='px-[20px]'>
                            <Image src={quatsIcon} alt='quats-icon' />
                        </div>
                        <p className='px-[30px] font-[general-sans-medium] text-[16px] leading-[24px]'>CIDBI Builders exceeded our expectations with their exceptional craftsmanship and professionalism. Their attention to detail, commitment to quality, and open communication made the process seamless. We highly recommend CIDBI Builders for their reliable and top-notch construction services.</p>
                        <div className='px-[30px] flex flex-row gap-[20px] items-center'>
                            <Image className='w-[60px] h-[60px] rounded-full' alt='customer-reviews' src={customerreview} />
                            <div className='flex flex-col'>
                                <p className='text-[15px] font-[inter-medium]'>Jeeva</p>
                                <p className='text-[14px] font-[inter-regular]'>Thrissur, Kerala</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[387px] bg-white h-[478px] rounded-[12px] py-[30px] grid grid-rows-[110px,1fr,110px]'>
                        <div className='px-[20px]'>
                            <Image src={quatsIcon} alt='quats-icon' />
                        </div>
                        <p className='px-[30px] font-[general-sans-medium] text-[16px] leading-[24px]'>CIDBI Builders exceeded our expectations with their exceptional craftsmanship and professionalism. Their attention to detail, commitment to quality, and open communication made the process seamless. We highly recommend CIDBI Builders for their reliable and top-notch construction services.</p>
                        <div className='px-[30px] flex flex-row gap-[20px] items-center'>
                            <Image className='w-[60px] h-[60px] rounded-full' alt='customer-reviews' src={customerreview} />
                            <div className='flex flex-col'>
                                <p className='text-[15px] font-[inter-medium]'>Jeeva</p>
                                <p className='text-[14px] font-[inter-regular]'>Thrissur, Kerala</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[387px] bg-white h-[478px] rounded-[12px] py-[30px] grid grid-rows-[110px,1fr,110px]'>
                        <div className='px-[20px]'>
                            <Image src={quatsIcon} alt='quats-icon' />
                        </div>
                        <p className='px-[30px] font-[general-sans-medium] text-[16px] leading-[24px]'>CIDBI Builders exceeded our expectations with their exceptional craftsmanship and professionalism. Their attention to detail, commitment to quality, and open communication made the process seamless. We highly recommend CIDBI Builders for their reliable and top-notch construction services.</p>
                        <div className='px-[30px] flex flex-row gap-[20px] items-center'>
                            <Image className='w-[60px] h-[60px] rounded-full' alt='customer-reviews' src={customerreview} />
                            <div className='flex flex-col'>
                                <p className='text-[15px] font-[inter-medium]'>Jeeva</p>
                                <p className='text-[14px] font-[inter-regular]'>Thrissur, Kerala</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Faq */}
            <div className='containers'>
                <h6 className='font-[clash-display-medium] text-[32px]'>FAQ</h6>
                <div className='text-black'>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div className='flex justify-between flex-row'>
                                <p className={`${isOpend === index ? 'font-[general-sans-medium]' : 'font-[general-sans-regular]'} text-[16px] py-[14px] w-1/3 cursor-auto`}>{faq.question || ""}</p>
                                <button className='cursor-pointer' onClick={() => setOpen(isOpend === index ? null : index)}>
                                    <Image src={isOpend === index ? minusIcon : plusIcon} alt='toggle-icon' />
                                </button>
                            </div>
                            {isOpend === index && <p className='font-[general-sans-regular] text-[16px] py-[8px] leading-[24px]'>{faq.answer || ""}</p>}
                            <hr className='border-t-[1px] border-t-[--secondary-cl]' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CustomerReviewsAndFaq
