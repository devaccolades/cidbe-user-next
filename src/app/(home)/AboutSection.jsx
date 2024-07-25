'use client'
import React, { useRef } from 'react'
import { motion } from "framer-motion";
// import { useFollowPointe } from './useFollowPointer'
import Image from 'next/image'
import gradientLeft from "../../../public/images/home/gradient-left.svg"
import aboutCardImage from "../../../public/images/home/about-card-vector.svg"
import aboutCardshape from "../../../public/images/home/about-shape.svg"
import aboutCardshapeMobile from "../../../public/images/home/about-shape-mobile.svg"
import arrowIcon from "../../../public/icons/arrow-outward-green.svg"
import qualityGif from "../../../public/gif/quality.gif"
import facilitiesGif from "../../../public/gif/facilities.gif"
import serviceGif from "../../../public/gif/service.gif"
import charectersImage from "../../../public/images/home/charecters.png"
import roundedImage from "../../../public/images/home/rounded.svg"
import './Home.css'
import image1 from "../../../public/images/home/image1.jpeg"
import image2 from "../../../public/images/home/image2.jpeg"
import aboutImage from "../../../public/images/home/about-image.jpg"
import { useRouter } from 'next/navigation';
// after connect the backend

function AboutSection() {
  const router  = useRouter()

  return (
    <main className='text-[--secondary-cl] w-full flex flex-col py-[45px]  lg:bg-[url(/images/home/about-section-bg.svg)]'
    >
      <div className='absolute top-[1066px] left-[-191px] lg:block hidden -z-10'>
        <Image src={gradientLeft} alt='gradient-left' />
      </div>
      {/* About Card */}
      
      <card className='relative containers shadow-2xl flex flex-col-reverse md:flex-row rounded-[12px]'>
        <div className='md:h-[433px] w-full bg-color rounded-b-[12px] md:rounded-e-none  md:rounded-s-[12px] flex items-center p-[30px] md:p-[60px] lg:p-0'>
          <Image className='absolute right-[400px] lg:block hidden bottom-[81px]' src={aboutCardImage} alt="Description-of-the-about-card-image" />
          {/* <Image className='absolute top-[46%] block md:hidden w-full left-0 right-0' src={aboutCardshapeMobile} alt="Description-of-the-about-card-image" /> */}

          <div className='w-full responsive lg:w-10/12 xl:w-7/12 lg:ms-[50px] xl:ms-[90px] flex flex-col gap-[10px] text-center md:text-start'>
            <h3 className='text-[20px] md:text-[24px] font-[general-sans-medium] leading-[32.4px]'>About us</h3>
            <div className='flex flex-col gap-[20px] font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[24px]'>
              <p>We, Creations India Developers Builders Infrastructures (CIDBI), an ISO 9001-2015 certified builder in Thrissur, was established in 2005 in response to the growing need of quality housings. Since then, we have grown to be one of the best builders in Thrissur. CIDBI is a professionally managed company under the leadership of Mr. A A Abdul Lathif, run by well experienced management. We have more than 33 years of experience in the construction field.
              </p>
            </div>
            <div className='flex justify-center md:justify-end pt-[18px]'>
              <button className='underline flex gap-[10px] items-center text-[12px] font-[general-sans-medium]' onClick={()=>router.push('/about-us')}>
                Know more
                <Image src={arrowIcon} alt='arrow-icon' />
              </button>
            </div>
          </div>
        </div>
        <Image src={aboutCardshapeMobile} alt='' className='min-w-full align-bottom -mb-[5px] -mt-[30px] md:hidden block' />
        <div className='bg-cover bg-bottom md:w-full lg:w-7/12 rounded-t-[12px] md:rounded-e-[12px] h-[300px] md:h-full z-4' style={{ backgroundImage: `url(${aboutImage.src})` }}>
          <Image className='h-full -ms-[2px] md:block hidden' alt='card-shape' src={aboutCardshape} />
        </div>
      </card>
      {/* Why choose us? */}
      <section className='containers'>
        <h3 className='text-[24px] font-[general-sans-medium] text-center mt-[40px] mb-[20px] leading-[32.4px]'>WHY CHOOSE US?</h3>
        <div className='grid grid-rows-1 lg:grid-cols-3 gap-[20px]'>
          <div className="text-center flex flex-col md:flex-row lg:flex-col px-[20px] lg:px-0 items-center gap-[10px] lg:gap-[20px] py-[30px]  bg-white shadow-2xl rounded-[15px]">
            <Image src={qualityGif} alt='quality-fig' className='w-[90px] lg:w-[120px]' />
            <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
              <h6 className='font-[general-sans-medium] text-[24px] md:text-[20px] lg:text-[24px] leading-[32px]'>
                <span className='md:hidden block'>Unparalleled <br /> Quality</span>
                <span className='md:block hidden'>Unparalleled Quality</span>
              </h6>
              <p className='px-[30px] font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[24px]'> CIDBI's guarantees consistency and excellence in every aspect of construction, ensuring that each project meets the highest standards of quality.</p>
            </div>
          </div>
          <div className="text-center flex flex-col md:flex-row lg:flex-col px-[20px] lg:px-0 items-center gap-[20px] py-[30px]  bg-white shadow-2xl rounded-[15px]">
            <Image src={facilitiesGif} alt='facilities-gif' className='w-[90px] lg:w-[120px]' />
            <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
              <h6 className='font-[general-sans-medium] text-[24px] md:text-[20px] lg:text-[24px] leading-[32px]'>
                <span className='md:hidden block'>Comprehensive <br /> Amenities</span>
                <span className='md:block hidden px-[5px]'>Comprehensive Amenities</span>
              </h6>
              <p className='px-[30px] font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[24px]'> From parking spaces to landscaped gardens and community halls, CIDBI's apartments offer a wide range of amenities to enhance the quality of life for residents.</p>
            </div>
          </div>
          <div className="text-center flex flex-col md:flex-row lg:flex-col px-[20px] lg:px-0 items-center gap-[20px] py-[30px]  bg-white shadow-2xl rounded-[15px]">
            <Image src={serviceGif} alt='service-gif' className='w-[90px] lg:w-[120px]' />
            <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
              <h6 className='font-[general-sans-medium] text-[24px] md:text-[20px] lg:text-[24px] leading-[32px]'>
                <span className='md:hidden block'>Customer-Centric <br /> Approach</span>
                <span className='md:block hidden px-[5px]'>Customer-Centric Approach</span>
              </h6>
              <p className='px-[30px] font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[24px]'>CIDBI prioritizes customer satisfaction, offering flexible floor plans and personalized service, exceeding expectations in every project.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Banner */}
      <section className='containers pt-[40px] lg:block hidden'>
        <card className='w-full bg-white rounded-[20px] p-[15px] box-shadow grid grid-cols-[500px,1fr] lg:grid-cols-2'>
          <left className="flex flex-col gap-[10px]">
            <div className='flex flex-row gap-[15px] h-[170px] lg:h-[190px]'>
              <div className='ps-[35px] w-[14.9vw] flex flex-col justify-center'>
                <h5 className='text-[36px] lg:text-[3.33vw] lg:leading-[3.54vw] font-[general-sans-semibold]'>20+</h5>
                <p className='text-[16px] lg:text-[1.04vw] leading-[21px] lg:leading-[1.40vw] font-[general-sans-regular]'>Projects <br /> Completed</p>
              </div>
              <div>
                <Image src={image1} alt='banner-image1' className='rounded-[12px] w-[137px] h-full lg:w-[262px]' />
              </div>
              <div className='bg-[--primary-cl] rounded-[12px] rounded-br-[84px] w-[160px] lg:w-[19.375vw] flex flex-col items-center justify-center'>
                <h5 className='text-[36px] lg:text-[3.33vw] lg:leading-[3.54vw]  font-[general-sans-semibold]'>1M+</h5>
                <p className='text-[16px] lg:text-[1.04vw] leading-[21px] lg:leading-[1.40vw] font-[general-sans-regular]'>Square Feet<br />Completed</p>
              </div>
            </div>
            <div className='h-[170px] lg:h-[190px] ps-[50px] w-10/12 lg:w-[23.28125vw] flex flex-col justify-center bg-[--primary-cl] rounded-[12px] rounded-tr-[56px]'>
              <h5 className='text-[36px] lg:text-[3.33vw] lg:leading-[3.54vw]  font-[general-sans-semibold]'>1000+</h5>
              <p className='text-[16px] lg:text-[1.04vw] leading-[21px] lg:leading-[1.40vw] font-[general-sans-regular]'>Happy Customers</p>
            </div>
            <div className='flex flex-row gap-[45px]'>
              <div className='w-[142px] lg:w-[195px] h-[177px] lg:h-[243px] rounded-[12px] bg-center bg-cover' style={{ backgroundImage: `url(${image2.src})` }}/>
              {/* <Image src={image2} alt='banner-image2' className='w-[142px] lg:w-[195px] h-[177px] lg:h-[243px] rounded-[12px]' /> */}
              <div className='flex flex-col justify-center'>
                <h5 className='text-[36px] lg:text-[3.33vw] lg:leading-[3.54vw]  font-[general-sans-semibold]'>35+</h5>
                <p className='text-[16px] lg:text-[1.04vw] leading-[21px] lg:leading-[1.40vw] font-[general-sans-regular]'>Years of <br /> Experience</p>
              </div>
            </div>
          </left>
          <right className="relative flex justify-center items-center">
            <Image src={charectersImage} className='absolute bottom-8 w-[17.2vw] lg:w-[377px]' alt='people-image' />

            <motion.div
              className="bg-[--primary-cl] w-[26vw] h-[26vw]"
              animate={{
                borderRadius: [
                  "20% 50% 50% 20%",
                  "50% 20% 50% 20%",
                  "20% 20% 50% 50%",
                  "50% 50% 20% 20%",
                  "20% 50% 50% 20%"
                ]
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          </right>

        </card>
      </section>
      <section className='containers pt-[40px] block lg:hidden'>
        <card className='h-[672px] md:h-[496px] w-full bg-white rounded-[20px] p-[10px] md:p-[15px] box-shadow grid grid-rows-[18%,1fr] md:grid-rows-[36%,1fr] gap-[10px]'>
          <div className=" grid h-[120px] md:h-auto grid-cols-[1fr,90px,1fr] md:grid-cols-[150px,150px,150px,1fr] gap-[10px]">
            <div className='flex flex-col mt-2 md:pt-5 items-center'>
              <h5 className='text-[32px] md:text-[36px] lg:text-[3.33vw] lg:leading-[3.54vw] font-[general-sans-semibold]'>20+</h5>
              <p className='res-text text-[14px] leading-[18px] md:text-[16px] lg:text-[1.04vw] md:leading-[21px] lg:leading-[1.40vw] font-[general-sans-regular]'>Projects <br /> Completed</p>
            </div>
            <div className='h-[120px] lg:h-auto'>
              <Image src={image1} alt='banner-image1' className='rounded-[12px] h-full md:h-[170px]' />
            </div>
            <div className='bg-[--primary-cl] rounded-[12px] rounded-br-[54px] md:rounded-br-[84px] flex flex-col items-center pt-3 md:pt-5'>
              <h5 className='text-[32px] md:text-[36px] lg:text-[3.33vw] lg:leading-[3.54vw]  font-[general-sans-semibold]'>1M+</h5>
              <p className='res-text text-[14px] leading-[18px] md:text-[16px] lg:text-[1.04vw] md:leading-[21px] lg:leading-[1.40vw] font-[general-sans-regular]'>Square Feet<br />Completed</p>
            </div>
            {/* <div className=''></div> */}
        
          </div>
          <bottom className="flex flex-col md:flex-row  gap-[10px]">
            <div className=' w-full grid grid-rows-[45%,1fr] md:grid-rows-[35%,1fr] gap-[10px]'>
              <div className='ps-[40px] h-[120px] md:h-auto flex flex-col justify-center bg-[--primary-cl] rounded-[12px] rounded-tr-[56px]'>
                <h5 className='text-[32px] md:text-[36px] lg:text-[3.33vw] lg:leading-[3.54vw]  font-[general-sans-semibold]'>1000+</h5>
                <p className='text-[14px] leading-[18px] md:text-[16px] lg:text-[1.04vw] md:leading-[21px] lg:leading-[1.40vw] font-[general-sans-regular]'>Happy Customers</p>
              </div>
              <div className='flex flex-row gap-[45px] mt-[16px] md:mt-0'>
              <div className='w-[142px] lg:w-[195px] rounded-[12px] bg-center bg-cover' style={{ backgroundImage: `url(${image2.src})` }}/>

                {/* <Image src={image2} alt='banner-image2' className='w-[142px] lg:w-[195px] rounded-[12px]' /> */}
                <div className='flex flex-col justify-center'>
                  <h5 className='text-[32px] md:text-[36px] lg:text-[3.33vw] lg:leading-[3.54vw]  font-[general-sans-semibold]'>35+</h5>
                  <p className='text-[16px] lg:text-[1.04vw] leading-[21px] lg:leading-[1.40vw] font-[general-sans-regular]'>Years of <br /> Experience</p>
                </div>
              </div>
            </div>
            <div className='relative w-full flex h-full justify-center items-center'>
              <Image src={charectersImage} className='absolute  md:bottom-8 w-[180px] md:w-7/12' alt='people-image' />
              <motion.div
                className="bg-[--primary-cl] w-[200px] md:w-[26vw] h-[230px] md:h-[26vw] animated-bg"
                animate={{
                  borderRadius: [
                    "20% 50% 50% 20%",
                    "50% 20% 50% 20%",
                    "20% 20% 50% 50%",
                    "50% 50% 20% 20%",
                    "20% 50% 50% 20%"
                  ]
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </div>
           
          </bottom>

        </card>
      </section>
    </main>
  )
}

export default AboutSection