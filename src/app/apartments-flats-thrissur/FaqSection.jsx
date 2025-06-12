'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

import plusIcon from '../../../public/icons/plus.svg'
import minusIcon from '../../../public/icons/minus.svg'

const faqs = [
  {
    question: 'Are these apartments ready to occupy?',
    answer: 'Some units are ready-to-move, while others are under construction. Contact us for the latest updates.',
  },
  {
    question: 'Do you offer home loan assistance?',
    answer: 'Yes, we have tie-ups with leading banks for housing loan support.',
  },
  {
    question: 'Is car parking included in the price?',
    answer: 'Covered car parking is provided and included in the overall cost.',
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
                                <p className={`${isOpend === index ? 'font-[general-sans-medium]' : 'font-[general-sans-regular]'} text-[12px] lg:text-[16px] py-[14px] w-[90%] md:w-5/12 lg:w-1/3 cursor-pointer `} onClick={() => setOpen(isOpend === index ? null : index)}>{faq.question || ""}</p>
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


