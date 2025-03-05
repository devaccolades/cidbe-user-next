'use client'
import React, { useState } from 'react'
import homeIcon from '../../../public/icons/home.svg'
import phoneIcon from '../../../public/icons/phone.svg'
import whatsappIcon from '../../../public/icons/whatsapp.svg'
import emailIcon from '../../../public/icons/email.svg'
import Image from 'next/image'
function AddressInfo() {
    return (
        <div className='w-full containers font-[general-sans-medium] flex flex-row flex-wrap justify-center gap-[10px] lg:gap-[60px] pt-[20px] lg:pt-[110px]'>
            <div className='h-[180px] w-[284px] rounded-[60px_20px_60px_20px] flex flex-col justify-center items-center p-[30px] gap-[20px] bg-[--secondary-cl]'>
                <div className='flex flex-row items-center gap-[20px]'>
                    <Image src={homeIcon} alt='home-icon' />
                    <p className='text-[16px] lg:text-[20px] text-[--primary-cl] '>Address</p>
                </div>
                <div>
                    <p className='text-[14px] lg:text-[16px] leading-[18px] lg:leading-[21px] text-white'>CIDBI, Cordial Court, High Road,Thrissur 680 001, Kerala, India.</p>
                </div>
            </div>
            <div className='h-[180px] w-[284px] rounded-[60px_20px_60px_20px] flex flex-col justify-center px-[60px] gap-[20px] bg-[#98C9A3]'>
                <div className='flex flex-row items-center gap-[20px]'>
                    <Image src={phoneIcon} alt='home-icon' />
                    <p className='text-[16px] lg:text-[20px] '>Phone No</p>
                </div>
                <div>
                    <p className='text-[14px] lg:text-[16px] leading-[18px] lg:leading-[21px] '><span>+91 94969 33000</span> <br /><span>+91 4872423475</span></p>
                </div>
            </div>
            <div className='h-[180px] w-[284px] rounded-[60px_20px_60px_20px] flex flex-col justify-center px-[60px] gap-[20px] bg-[--primary-cl]'>
                <div className='flex flex-row items-center gap-[20px]'>
                    <Image src={whatsappIcon} alt='home-icon' />
                    <p className='text-[16px] lg:text-[20px] '>WhatsApp</p>
                </div>
                <div>
                    <p className='text-[14px] lg:text-[16px] leading-[18px] lg:leading-[21px] '><span>+91 94969 33000 </span> <br /><span>+91 9495982655</span></p>
                </div>
            </div>
            <div className='h-[180px] w-[284px] rounded-[60px_20px_60px_20px] flex flex-col justify-center px-[60px] gap-[20px] bg-[#E3EFE2]'>
                <div className='flex flex-row items-center gap-[20px]'>
                    <Image src={emailIcon} alt='home-icon' />
                    <p className='text-[16px] lg:text-[20px] '>Email</p>
                </div>
                <div>
                    <p className='text-[14px] lg:text-[16px] leading-[18px] lg:leading-[21px] '>
                        <span className='und'>
                            <a href="mailto:salescidbi@gmail.com">salescidbi@gmail.com</a> </span> <br />
                        <span className='und'>
                            <a href="mailto:salescidbi@gmail.com">info@cidbi.com</a>
                        </span></p>
                </div>
            </div>
        </div>
    )
}

export default AddressInfo