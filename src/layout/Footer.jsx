'use client'
import React, { useState } from 'react'
import "./Style.css"
import Image from 'next/image'
import logo from '../../public/images/logo/logo.svg'
import instagram from '../../public/images/footer/instagram.webp'
import facebook from '../../public/images/footer/facebook.webp'
import youtube from '../../public/images/footer/youtube.webp'
import isologo from '../../public/images/footer/isologo.webp'
import sbilogo from '../../public/images/footer/sbilogo.webp'
import bailogo from '../../public/images/footer/bailogo.webp'
import credailogo from '../../public/images/footer/credailogo.webp'
import accoldesLogo from '../../public/images/footer/accoldes-logo.svg'
import { useRouter } from 'next/navigation'
import callIcon from '../../public/images/footer/call.svg'
import watsappIcon from '../../public/images/footer/watsapp.svg'
import EnquiryModal from '../components/EnquiryForm/EnquiryModal'
import Script from 'next/script';
import Link from 'next/link'


function Footer({ backGround = "--primary-cl" }) {
  const [open, setOpen] = useState(false)
  const currentYear = new Date().getFullYear();

  const handleOpen = () => {
    setOpen(!open)
  }
  const router = useRouter()
  return (
    <>
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5e51034ea89cda5a18876532/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
      <div className='quick-enquiry' onClick={handleOpen}>
        <p className='content'>Enquire Now</p>
      </div>
      <EnquiryModal open={open} handleOpen={handleOpen} />
      {/* Whatsapp and phone start */}
      <div className='fixed z-50 bottom-[50px] right-0'>
        <div className="flex flex-col space-y-[10px] mr-[20px] md:space-y-5 md:mr-[40px] mb-[30px]">
          <a className='w-[45px] lg:w-full' href="https://wa.me/+918137873330?text=I'm%20interested%20in%20your%20Property" target="_blank" rel="noopener noreferrer">
            <Image src={watsappIcon} alt="WhatsApp Icon" />
          </a>
          <a className='w-[45px] lg:w-full' href="tel:+919496933000">
            <Image src={callIcon} alt="Call Icon" target="_blank" />
          </a>
        </div>
      </div>
      {/* Whatsapp and phone end */}
      {/* Foote pc */}
      <section className={`hidden md:block font-[general-sans-medium] text-[--secondary-cl] bg-[${backGround}] px-[40px] xl:px-[120px] py-[40px] flex flex-col`}>
        <div className='w-full flex flex-row h-full flex-wrap lg:flex-nowrap'>
          <div className='flex flex-col w-full md:w-[60%] logo-div lg:w-[30vw] gap-[20px]'>
            <p className='md:w-7/12 lg:w-9/12 text-[16px] leading-[21px] uppercase'>Your trusted building partner in Thrissur, shaping the future of luxury living with quality construction.</p>
            <Link href='/'><Image src={logo} className='w-[118px] h-[74px]' alt='logo' /></Link>
            <div className='flex flex-row gap-[20px] items-center'>
              <a href="https://www.instagram.com/cidbithrissur/" target="_blank"> <Image src={instagram} className='w-[20] h-[20]' alt='instagram-logo' /></a>
              <a href="https://www.facebook.com/cidbitsr/" target="_blank">  <Image src={facebook} alt='facebook-logo' /></a>
              <a href="https://www.youtube.com/channel/UCyRwiMStzuHNzaRzEGb__jQ" target="_blank"><Image src={youtube} className='w-[22px] h-[15px]' alt='youtube-logo' /></a>
            </div>
          </div>
          <div className='text-[14px] leading-[21px] w-[50%] md:w-[18%] lg:w-[11vw] flex flex-col gap-[20px] mt-[40px] md:mt-0'>
            <p className='font-[general-sans-semibold]'>ABOUT US</p>
            <Link href='/about-us'>
              <p className='cursor-pointer'>Who We Are</p>
            </Link>
            <Link href='/csr'>
              <p className='cursor-pointer'>CSR</p>
            </Link>
          </div>
          <div className='text-[14px] leading-[21px] flex flex-col w-[50%] md:w-[18%] project-div lg:w-[13vw] gap-[20px] mt-[40px] md:mt-0'>
            <p className='font-[general-sans-semibold]'>PROJECTS</p>
            <Link href="/completed-projects">
              <p className="cursor-pointer">Completed Projects</p>
            </Link>
            <Link href="/upcoming-projects">
              <p className="cursor-pointer">Upcoming Projects</p>
            </Link>
            <Link href="/ready-to-occupy">
              <p className="cursor-pointer">Ready To Occupy</p>
            </Link>
            <Link href="/ongoing-projects">
              <p className="cursor-pointer">Ongoing Projects</p>
            </Link>

          </div>
          <div className='font-[general-sans-semibold] text-[14px] w-full md:w-[20vw] lg:mt-0 mt-[30px] other-links lg:w-[13vw] flex flex-col gap-[20px]'>
            <Link href="/gallery" className="cursor-pointer">
              <p>GALLERY</p>
            </Link>
            <Link href="/blogs" className="cursor-pointer">
              <p>BLOG</p>
            </Link>
            <Link href="/achievements" className="cursor-pointer">
              <p>ACHIEVEMENTS</p>
            </Link>
            <Link href="/contact-us" className="cursor-pointer">
              <p>CONTACT US</p>
            </Link>
            <Link href="/careers" className="cursor-pointer">
              <p>CAREERS</p>
            </Link>

          </div>
          <div className='flex flex-col md:flex-row lg:flex-col justify-between lg:mt-0 mt-[30px]'>
            <div className='flex flex-col gap-[8px] text-[14px] w-full md:w-[40%] lg:w-auto'>
              <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Whatsapp</span> <span>-</span><span>+91 8137873330</span></p>
              <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Email</span> <span>-</span><span>salescidbi@gmail.com</span></p>
              <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Call</span> <span>-</span><span>+91 94969 33000</span></p>
            </div>
            <div className='mt-[35px] md:mt-0 lg:mt-[35px] font-[general-sans-medium] w-full md:w-[50%] lg:w-auto'>
              <p className='text-[14px]'>Certifications</p>
              <div className='flex flex-row flex-wrap  items-center gap-[10px] lg:gap-[20px]'>
                <Image src={isologo} className='w-[50px] h-[50px]' alt='iso-logo' />
                <Image src={sbilogo} className='w-[70px] md:w-[75px] h-[75px]' alt='sbi-logo' />
                <Image src={credailogo} className='w-[80px] md:w-[90px] h-[90px]' alt='creatai-logo' />
                <Image src={bailogo} className='w-[50px] h-[50px]' alt='bai-logo' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap mt-[10px] md:mt-[10px] ld:mt-0 md:gap-[10px] justify-center items-center w-full'>
          <p className='text-center text-[10px] lg:text-[14px] font-[general-sans-regular] text-[#4C956C] capitalize'>All Rights reserved by <span className='font-bold'>CIDBI</span> Thrissur. {currentYear}  </p>
          <p className='text-center text-[10px] lg:text-[14px] font-[general-sans-regular] text-[#4C956C] flex justify-center items-center gap-[10px]'><span>Powered by Accolades Integrated</span> <a href="https://accoladesintegrated.com/" target='_blank'> <Image width={10} height={10} className='w-[20px]' alt='accolades-logo' src={accoldesLogo} /></a> </p>
        </div>
      </section>

      {/* Foote Mobile */}
      <section className={`block md:hidden font-[general-sans-medium] text-[--secondary-cl] bg-[${backGround}] px-[20px] xl:px-[120px] py-[40px] flex flex-col`}>
        <div className='w-full flex flex-row h-full flex-wrap lg:flex-nowrap'>
          <div className='flex flex-col w-full md:w-[60%] lg:w-[30vw] gap-[20px]'>
            <p className='md:w-7/12 lg:w-9/12 text-[16px] leading-[21px] uppercase'>Your trusted building partner in Thrissur, shaping the future of luxury living with quality construction.</p>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col w-full gap-[20px]'>
                <Image src={logo} onClick={() => router.push('/')} className='w-[118px] h-[74px]' alt='logo' />
                <div className='flex flex-row gap-[20px] items-center'>
                  <a href="https://www.instagram.com/cidbithrissur/" target="_blank"> <Image src={instagram} className='w-[20] h-[20]' alt='instagram-logo' /></a>
                  <a href="https://www.facebook.com/cidbitsr/" target="_blank">  <Image src={facebook} alt='facebook-logo' /></a>
                  <a href="https://www.youtube.com/channel/UCyRwiMStzuHNzaRzEGb__jQ" target="_blank"><Image src={youtube} className='w-[22px] h-[15px]' alt='youtube-logo' /></a>
                </div>
              </div>
              <div className='text-[14px] leading-[21px] w-[50%] flex flex-col gap-[20px]'>
                <p className='font-[general-sans-semibold]'>ABOUT US</p>
                <Link href="/about-us" className="cursor-pointer">
                  <p>Who We Are</p>
                </Link>
                <Link href="/csr" className="cursor-pointer">
                  <p>CSR</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-ro w-full justify-between mt-[40px]'>
            <div className='text-[14px] leading-[21px] flex flex-col w-full gap-[20px]'>
              <p className='font-[general-sans-semibold]'>PROJECTS</p>
              <Link href="/completed-projects" className="cursor-pointer">
                <p>Completed Projects</p>
              </Link>
              <Link href="/upcoming-projects" className="cursor-pointer">
                <p>Upcoming Projects</p>
              </Link>
              <Link href="/ready-to-occupy" className="cursor-pointer">
                <p>Ready To Occupy</p>
              </Link>
              <Link href="/ongoing-projects" className="cursor-pointer">
                <p>Ongoing Projects</p>
              </Link>

            </div>
            <div className='font-[general-sans-semibold] text-[14px] w-[50%] flex flex-col gap-[20px]'>
              <Link href="/gallery" className="cursor-pointer">
                <p>GALLERY</p>
              </Link>
              <Link href="/blogs" className="cursor-pointer">
                <p>BLOG</p>
              </Link>
              <Link href="/achievements" className="cursor-pointer">
                <p>ACHIEVEMENTS</p>
              </Link>
              <Link href="/contact-us" className="cursor-pointer">
                <p>CONTACT US</p>
              </Link>
              <Link href="/careers" className="cursor-pointer">
                <p>CAREERS</p>
              </Link>

            </div>
          </div>
          <div className='flex flex-col justify-between w-full  mt-[30px] '>
            <div className='flex flex-col gap-[8px] text-[14px] w-full md:w-[40%] lg:w-auto'>
              <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Whatsapp</span> <span>-</span><span>+91 8137873330</span></p>
              <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Email</span> <span>-</span><span>salescidbi@gmail.com</span></p>
              <p className='flex flex-row gap-[10px]'><span className='w-[67px]'>Call</span> <span>-</span><span>+91 94969 33000</span></p>
            </div>
            <div className='mt-[35px] md:mt-0 lg:mt-[35px] font-[general-sans-medium] w-full'>
              <p className='text-[14px]'>Certifications</p>
              <div className='flex flex-row items-center justify-between w-full'>
                <Image src={isologo} className='w-[50px] h-[50px]' alt='iso-logo' />
                <Image src={sbilogo} className='w-[70px] md:w-[75px] h-[75px]' alt='sbi-logo' />
                <Image src={credailogo} className='w-[80px] md:w-[90px] h-[90px]' alt='creatai-logo' />
                <Image src={bailogo} className='w-[50px] h-[50px]' alt='bai-logo' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap mt-[10px] md:mt-0 md:gap-[10px] justify-center items-center w-full'>
          <p className='text-center text-[10px] lg:text-[14px] font-[general-sans-regular] text-[#4C956C] capitalize'>All Rights reserved by <span className='font-bold'>CIDBI</span> Thrissur. {currentYear}  </p>
          <p className='text-center text-[10px] lg:text-[14px] font-[general-sans-regular] text-[#4C956C] flex justify-center items-center gap-[10px]'><span>Powered by Accolades Integrated</span> <a href="https://accoladesintegrated.com/" target='_blank'> <Image width={10} height={10} className='w-[20px]' alt='accolades-logo' src={accoldesLogo} /></a> </p>
        </div>
      </section>
    </>

  )
}

export default Footer