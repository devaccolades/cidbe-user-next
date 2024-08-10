'use client'
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
import accoldesLogo from '../../public/images/footer/accoldes-logo.svg'
import { useRouter } from 'next/navigation'
import  callIcon from '../../public/images/footer/call.svg'
import  watsappIcon  from '../../public/images/footer/watsapp.svg'


function Footer({backGround="--primary-cl"}) {
  const router = useRouter()
  return (
  
    <>
      <div className='fixed z-50 bottom-0 right-0'>

      <div className="hidden lg:flex flex-col space-y-5 mr-[40px] mb-[30px]">
  <a href="https://wa.me/+918137873330?text=I'm%20interested%20in%20your%20Property" target="_blank" rel="noopener noreferrer">
    <Image src={watsappIcon} alt="WhatsApp Icon" />
  </a>
  <a href="tel:+919496933000">
    <Image src={callIcon} alt="Call Icon" target="_blank" />
  </a>
</div>


    
    
    </div>
        <section className={`font-[general-sans-medium] text-[--secondary-cl] bg-[${backGround}] px-[40px] xl:px-[120px] py-[40px] flex flex-col`}>
      <div className='w-full flex flex-row h-full flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col w-full md:w-[60%] lg:w-[30vw] gap-[20px]'>
          <p className='md:w-7/12 lg:w-9/12 text-[16px] leading-[21px]'>NO PROJECT IS TOO BIG OR TOO SMALL, HIT US UP AND LET’S BUILD</p>
          <Image src={logo}  onClick={() => router.push('/')} className='w-[118px] h-[74px]' alt='logo' />
          <div className='flex flex-row gap-[20px] items-center'>
            <a href="https://www.instagram.com/cidbithrissur/" target="_blank"> <Image src={instagram} className='w-[20] h-[20]' alt='instagram-logo' /></a> 
            <a href="https://www.facebook.com/cidbitsr/" target="_blank">  <Image src={facebook} alt='facebook-logo' /></a>
           <a href="https://www.youtube.com/channel/UCyRwiMStzuHNzaRzEGb__jQ"><Image src={youtube} className='w-[22px] h-[15px]' alt='youtube-logo' /></a>
           
       
          </div>
        </div>
        <div className='text-[14px] leading-[21px] w-[50%] md:w-[18%] lg:w-[11vw] flex flex-col gap-[20px] mt-[40px] md:mt-0'>
          <p className='font-[general-sans-semibold]'>ABOUT US</p>
          <p className='cursor-pointer' onClick={() => router.push('/about-us')}>Who We Are</p>
          <p className='cursor-pointer' onClick={() => router.push('/csr')}>CSR</p>
        </div>
        <div className='text-[14px] leading-[21px] flex flex-col w-[50%] md:w-[18%] lg:w-[13vw] gap-[20px] mt-[40px] md:mt-0'>
          <p className='font-[general-sans-semibold]'>PROJECTS</p>
          <p className='cursor-pointer' onClick={() => router.push('/completed-projects')}>Completed Projects</p>
          <p className='cursor-pointer' onClick={() => router.push('/upcoming-projects')}>Upcoming Projects </p>
          <p className='cursor-pointer' onClick={() => router.push('/ready-to-occupy')}>Ready To Occupy</p>
          <p className='cursor-pointer' onClick={() => router.push('/ongoing-projects')}>Ongoing Projects</p>
        </div>
        <div className='font-[general-sans-semibold] text-[14px] w-full md:w-[20vw] lg:mt-0 mt-[30px] lg:w-[13vw] flex flex-col gap-[20px]'>
          <p className='cursor-pointer' onClick={() => router.push('/gallery')}>GALLERY</p>
          <p className='cursor-pointer' onClick={() => router.push('/blogs')}>BLOG</p>
          <p className='cursor-pointer' onClick={() => router.push('/achievements')}>ACHIEVEMENTS</p>
          <p className='cursor-pointer' onClick={() => router.push('/contact-us')}>CONTACT US</p>
          <p className='cursor-pointer' onClick={() => router.push('/careers')}>CAREERS</p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-col justify-between lg:mt-0 mt-[30px] '>
          <div className='flex flex-col gap-[8px] text-[14px] w-full md:w-[40%] lg:w-auto'>
            <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Whatsapp</span> <span>-</span><span>+91 8137873330</span></p>
            <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Email</span> <span>-</span><span>salescidbi@gmail.com</span></p>
            <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Call</span> <span>-</span><span>+91 94969 33000</span></p>
          </div>
          <div className='mt-[35px] md:mt-0 lg:mt-[35px] font-[general-sans-medium] w-full md:w-[50%] lg:w-auto'>
            <p className='text-[14px]'>Certifications</p>
            <div className='flex flex-row flex-wrap  items-center gap-[10px] lg:gap-[20px]'>
              <Image src={isologo} className='w-[50px] h-[50px]' alt='iso-logo' />
              <Image src={sbilogo} className='w-[75px] h-[75px]' alt='sbi-logo' />
              <Image src={credailogo} className='w-[90px] h-[90px]' alt='creatai-logo' />
              <Image src={bailogo} className='w-[50px] h-[50px]' alt='bai-logo' />
            </div>
          </div>
        </div>
      </div>
     <div className='flex flex-row flex-wrap mt-[10px] md:mt-0 md:gap-[10px] justify-center items-center w-full'>
     <p className='text-center text-[10px] lg:text-[14px] font-[general-sans-regular] text-[#4C956C]'>All Rights reserved by CIDBI Thrissur. 2024  </p>
     <p className='text-center text-[10px] lg:text-[14px] font-[general-sans-regular] text-[#4C956C] flex justify-center items-center gap-[10px]'><span>Powered by accolades integrated</span> <Image width={10} height={10} className='w-[20px]' alt='accolades-logo' src={accoldesLogo}/> </p>
     </div>
    </section>
    </>

  )
}

export default Footer