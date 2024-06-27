import React from 'react'
import "./Style.css"
import Image from 'next/image'
import logo from '../../public/images/logo/logo.svg'
import instagram from '../../public/images/footer/instagram.png'
import facebook from '../../public/images/footer/facebook.png'
import youtube from '../../public/images/footer/youtube.png'
import isologo from '../../public/images/footer/isologo.png'
import sbilogo from '../../public/images/footer/sbilogo.png'
import bailogo from '../../public/images/footer/bailogo.png'
import credailogo from '../../public/images/footer/credailogo.png'


function Footer() {
  return (
    <section className='font-[general-sans-medium] text-[--secondary-cl] bg-[--primary-cl] px-[40px] lg:px-[120px] py-[40px] flex flex-col'>
      <div className='w-full flex flex-row h-full  justify-between'>
        <div className='flex flex-col gap-[20px]'>
          <p className='lg:w-9/12 text-[16px] leading-[21px]'>NO PROJECT IS TOO BIG OR TOO SMALL, HIT US UP AND LET’S BUILD</p>
          <Image src={logo} className='w-[118px] h-[74px]' alt='logo' />
          <div className='flex flex-row gap-[20px] items-center'>
            <Image src={instagram} className='w-[20] h-[20]' alt='instagram-logo' />
            <Image src={facebook} alt='facebook-logo' />
            <Image src={youtube} className='w-[22px] h-[15px]' alt='youtube-logo' />
          </div>
        </div>
        <div className='text-[14px] leading-[21px] flex flex-col gap-[20px]'>
          <p className='font-[general-sans-semibold]'>ABOUT US</p>
          <p>Who we are</p>
          <p>CSR</p>
        </div>
        <div className='text-[14px] leading-[21px] flex flex-col gap-[20px]'>
          <p className='font-[general-sans-semibold]'>PROJECTS</p>
          <p>Completed projects</p>
          <p>Upcoming projects </p>
          <p>Ready to occupy</p>
          <p>Ongoing projects</p>
        </div>
        <div className='font-[general-sans-semibold] text-[14px] flex flex-col gap-[20px]'>
          <p>Gallery</p>
          <p>BLOG</p>
          <p>ACHIEVEMENTS</p>
          <p>CONTACT US</p>
          <p>CAREERS</p>
        </div>
        <div>
          <div className='flex flex-col gap-[8px] text-[14px]'>
            <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Whatsapp</span> <span>-</span><span>+91 8137873330</span></p>
            <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Email</span> <span>-</span><span>salescidbi@gmail.com</span></p>
            <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Call</span> <span>-</span><span>+91 94969 33000</span></p>
          </div>
          <div className='mt-[35px] font-[general-sans-medium]'>
            <p className='text-[14px]'>Certifications</p>
            <div className='flex flex-row justify-center items-center gap-[20px]'>
              <Image src={isologo} className='w-[50px] h-[50px]' alt='iso-logo' />
              <Image src={sbilogo} className='w-[75px] h-[75px]' alt='sbi-logo' />
              <Image src={bailogo} className='w-[50px] h-[50px]' alt='bai-logo' />
              <Image src={credailogo} className='w-[90px] h-[90px]' alt='creatai-logo' />
            </div>
          </div>
        </div>
      </div>
      <p className='text-center text-[14px] font-[general-sans-regular] text-[#4C956C]'>All Rights reserved by CIDBI Thrissur. 2024 Powered by Example</p>
    </section>
  )
}

export default Footer