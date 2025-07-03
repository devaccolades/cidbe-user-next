'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

import plusIcon from '../../../public/icons/plus.svg'
import minusIcon from '../../../public/icons/minus.svg'

const faqs = [
  {
    question: 'Where can I find a flat for sale in Thrissur with immediate possession?',
    answer: 'CIDBI has ongoing and ready-to-move flats in Thrissur. Candor is fully completed and ready to occupy. Its location is Punkunnam, a sought after residentian area in Thrissur. These homes are RERA approved and legally clear.',
  },
  {
    question: 'What kinds of apartments does CIDBI offer in Thrissur?',
    answer: 'CIDBI offer 2 BHK, 3 BHK and 4 BHK apartments in Thrissur. Each designed to give you more space, natural light and comfort. Whether you’re a first-time buyer or upgrading, there’s something for every family size and budget.',
  },
  {
    question: 'Do CIDBI’s flats in Thrissur come with smart home features?',
    answer: 'Yes. Projects like Cassia are designed as premium smart homes with automation features, modern amenities, and energy-efficient layouts. These flats in Thrissur combine daily convenience with long-term value.',
  },
  {
    question: 'Which locations in Thrissur have CIDBI’s flats available?',
    answer: 'In Thrissur, CIDBI has projects in Punkunnam and Peringavu. CIDBI Cassia is strategically located near Daya Hospital on Shoranur Road / Viyyur Bridge corridor in Peringavu. CIDBI Candor, situated opposite Government Higher Secondary School, Punkunnam, a prominent central Thrissur neighbourhood',
  },
  {
    question: 'What makes CIDBI’s apartments in Thrissur stand out from other builders?',
    answer: 'CIDBI is known for on time handovers, transparent pricing, and solid construction. Their apartments in Thrissur are built to last combining thoughtful architecture with practical amenities plus, they deliver when they promise.',
  },
   {
    question: 'Is a premium apartment available for sale in Thrissur under ₹1 crore?',
    answer: 'Yes, at CIDBI Candor you can find 2 BHK with study starting at ₹81.5 lakhs and 3 BHK flats at ₹1.02 crore. These are limited in number and located in developed residential zones, ready for immediate move-in.',
  },
   {
    question: 'Are CIDBI’s apartments in Thrissur equipped with premium lifestyle amenities?',
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
                                <p className={`${'font-[general-sans-regular]'} font-bold text-[12px] lg:text-[16px] py-[14px] w-[90%] `} onClick={() => setOpen(isOpend === index ? null : index)}>{faq.question || ""}</p>
                                {/* <button className='cursor-pointer' >
                                    <Image src={minusIcon}  alt='toggle-icon' />
                                </button> */}
                            </div>
                            <AnimatePresence>
                              
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className='overflow-hidden'
                                    >
                                        <p className='font-[general-sans-regular] text-[12px] lg:text-[16px] py-[8px] leading-[18px] lg:leading-[24px]'>{faq.answer || ""}</p>
                                    </motion.div>
                            </AnimatePresence>
                            <hr className='border-t-[1px] border-t-[--secondary-cl]' />
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}


