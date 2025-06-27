'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

import plusIcon from '../../../public/icons/plus.svg'
import minusIcon from '../../../public/icons/minus.svg'

const faqs = [
  {
    question: 'Where can I find a flat for sale in Thrissur with immediate possession?',
    answer: 'CIDBI has ready-to-move flats in Thrissur across multiple projects like Candor and Cassia. These homes are fully completed, legally clear, and available for quick handover, ideal if you don’t want to wait for a project under construction.',
  },
  {
    question: 'What types of apartments in Thrissur does CIDBI offer?',
    answer: 'You’ll find 2 BHK, 3 BHK, and even 4 BHK apartments in Thrissur from CIDBI, each designed to give you more space, natural light, and comfort. Whether you’re a first-time buyer or upgrading, there’s something for every family size and budget.',
  },
  {
    question: 'Are CIDBI flats in Thrissur equipped with smart home features?',
    answer: ' Yes. Projects like Cassia are designed as smart homes with automation features, modern amenities, and energy-efficient layouts. These flats in Thrissur combine daily convenience with long-term value.',
  },
  {
    question: 'Which locations in Thrissur are CIDBI flats available?',
    answer: 'CIDBI has projects in key parts of Thrissur including Viyyoor, close to Daya Hospital. These areas offer easy access to schools, hospitals, and daily needs, making them great places to live or invest in.',
  },
  {
    question: 'Why choose a CIDBI apartment in Thrissur over other builders?',
    answer: 'CIDBI is known for precise handovers, transparent pricing, and solid construction. Their apartments in Thrissur are built to last, combining thoughtful architecture with practical amenities plus, they deliver when they promise.',
  },
   {
    question: 'Is there a premium flat for sale in Thrissur within ₹1 crore?',
    answer: 'Yes, at CIDBI Candor you can find 2 BHK with study starting at ₹81.5 lakhs and 3 BHK flats at ₹1.02 crore. These are limited in number and located in developed residential zones, ready for immediate move-in.',
  },
   {
    question: 'Do CIDBI apartments in Thrissur include lifestyle amenities?',
    answer: 'Definitely. Projects like Cassia offer 40+ amenities including landscaped gardens, indoor play areas, fitness zones, and 70% open space. These homes are designed to offer more than just a place to stay they support a better way of living.',
  },
];

export default function FaqSection  () {
    const [isOpend, setOpen] = useState(null)
    
  return (
    <div className='py-[45px] about-main-bg'>
        
      <div className='containers '>
                <h6 className='font-[clash-display-medium] text-[20px] lg:text-[32px]'>FAQ</h6>
                <div className='text-black'>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div className='flex justify-between flex-row cursor-pointer' onClick={() => setOpen(isOpend === index ? null : index)}>
                                <p className={`${isOpend === index ? 'font-[general-sans-medium]' : 'font-[general-sans-regular]'} text-[12px] lg:text-[16px] py-[14px] w-[90%]  cursor-pointer `} onClick={() => setOpen(isOpend === index ? null : index)}>{faq.question || ""}</p>
                                <button className='cursor-pointer' >
                                    <Image src={isOpend === index ? minusIcon : plusIcon} alt='toggle-icon' />
                                </button>
                            </div>
                            <AnimatePresence>
                                {isOpend === index &&
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className='overflow-hidden'
                                    >
                                        <p className='font-[general-sans-regular] text-[12px] lg:text-[16px] py-[8px] leading-[18px] lg:leading-[24px]'>{faq.answer || ""}</p>
                                    </motion.div>}
                            </AnimatePresence>
                            <hr className='border-t-[1px] border-t-[--secondary-cl]' />
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}


