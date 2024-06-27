'use client'
import React from 'react'
import { motion } from "framer-motion";
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
// after connect the backend

function AboutSection() {

  // const pathVariants = {
  //   initial: {
  //     d: "M223.517 0.0222643C263.497 -0.875746 297.643 25.5788 332.351 45.4512C367.178 65.3911 409.057 80.603 426.985 116.518C444.783 152.174 427.537 194.203 426.489 234.044C425.471 272.739 435.721 312.3 420.893 348.052C405.247 385.776 375.09 415.312 341.613 438.687C306.251 463.378 266.586 488.029 223.517 485.867C180.86 483.726 148.518 449.441 112.071 427.165C76.5352 405.445 31.583 392.999 11.6904 356.399C-8.13527 319.922 2.18534 275.272 7.10784 234.044C11.5803 196.585 19.6029 159.815 39.023 127.477C58.2406 95.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 223.517 0.0222643Z"
  //   },
  //   animate: {
  //     d: [
  //       "M223.517 0.0222643C263.497 -0.875746 297.643 25.5788 332.351 45.4512C367.178 65.3911 409.057 80.603 426.985 116.518C444.783 152.174 427.537 194.203 426.489 234.044C425.471 272.739 435.721 312.3 420.893 348.052C405.247 385.776 375.09 415.312 341.613 438.687C306.251 463.378 266.586 488.029 223.517 485.867C180.86 483.726 148.518 449.441 112.071 427.165C76.5352 405.445 31.583 392.999 11.6904 356.399C-8.13527 319.922 2.18534 275.272 7.10784 234.044C11.5803 196.585 19.6029 159.815 39.023 127.477C58.2406 95.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 223.517 0.0222643Z",
  //       "M223.517 10.0222643C273.497 10.875746 307.643 35.5788 342.351 55.4512C377.178 75.3911 419.057 90.603 436.985 126.518C454.783 162.174 437.537 204.203 436.489 244.044C435.471 282.739 445.721 322.3 430.893 358.052C415.247 395.776 385.09 425.312 351.613 448.687C316.251 473.378 276.586 498.029 233.517 495.867C190.86 493.726 158.518 459.441 122.071 437.165C86.5352 415.445 41.583 402.999 21.6904 366.399C1.86473 329.922 12.1853 285.272 17.1078 244.044C21.5803 206.585 29.6029 169.815 49.023 137.477C68.2406 105.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 233.517 10.0222643Z",
  //       "M213.517 0.0222643C263.497 -0.875746 297.643 25.5788 332.351 45.4512C367.178 65.3911 409.057 80.603 426.985 116.518C444.783 152.174 427.537 194.203 426.489 234.044C425.471 272.739 435.721 312.3 420.893 348.052C405.247 385.776 375.09 415.312 341.613 438.687C306.251 463.378 266.586 488.029 223.517 485.867C180.86 483.726 148.518 449.441 112.071 427.165C76.5352 405.445 31.583 392.999 11.6904 356.399C-8.13527 319.922 2.18534 275.272 7.10784 234.044C11.5803 196.585 19.6029 159.815 39.023 127.477C58.2406 95.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 223.517 0.0222643Z",
  //       "M223.517 0.0222643C263.497 -0.875746 297.643 25.5788 332.351 45.4512C367.178 65.3911 409.057 80.603 426.985 116.518C444.783 152.174 427.537 194.203 426.489 234.044C425.471 272.739 435.721 312.3 420.893 348.052C405.247 385.776 375.09 415.312 341.613 438.687C306.251 463.378 266.586 488.029 223.517 485.867C180.86 483.726 148.518 449.441 112.071 427.165C76.5352 405.445 31.583 392.999 11.6904 356.399C-8.13527 319.922 2.18534 275.272 7.10784 234.044C11.5803 196.585 19.6029 159.815 39.023 127.477C58.2406 95.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 223.517 0.0222643Z"
  //     ],
  //     transition: {
  //       duration: 3,
  //       ease: "easeInOut",
  //       times: [0, 0.3, 0.6, 1],
  //       repeat: Infinity,
  //       repeatDelay: 0
  //     }
  //   }
  // };

  // const svgVariants = {
  //   initial: { y: 0 },
  //   animate: { y: [0, -20, 0] },
  //   transition: {
  //     duration: 1.5,
  //     ease: "easeInOut",
  //     repeat: Infinity,
  //     repeatDelay: 0
  //   }
  // };

  return (
    <main className='lg:h-[1859px] text-[--secondary-cl] w-full flex flex-col py-[45px] lg:bg-[url(/images/home/about-section-bg.svg)]'
    >
      <div className='absolute top-[1066px] left-[-191px] lg:block hidden -z-10'>
        <Image src={gradientLeft} alt='gradient-left' />
      </div>
      {/* About Card */}
      <card className='relative containers shadow-2xl flex flex-col-reverse md:flex-row rounded-[12px]'>
        <div className='md:h-[433px] w-full bg-color rounded-b-[12px] md:rounded-e-none  md:rounded-s-[12px] flex items-center p-[30px] md:p-[60px] lg:p-0'>
          <Image className='absolute right-[400px] lg:block hidden bottom-[81px]' src={aboutCardImage} alt="Description-of-the-about-card-image" />
          {/* <Image className='absolute top-[46%] block md:hidden w-full left-0 right-0' src={aboutCardshapeMobile} alt="Description-of-the-about-card-image" /> */}

          <div className='w-full lg:w-10/12 xl:w-7/12 lg:ms-[50px] xl:ms-[90px] flex flex-col gap-[10px] text-center md:text-start'>
            <h3 className='text-[20px] md:text-[24px] font-[general-sans-medium] leading-[32.4px]'>About us</h3>
            <div className='flex flex-col gap-[20px] font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[24px]'>
              <p>"Established in 2005, CIDBI is Thrissur's most trusted builder with over 33 years of industry experience. Led by Mr. A A Abdul Lathif, we've delivered quality housing solutions across Kerala. </p>
              <p>Our stringent Quality Assurance process ensures consistency in every project. With flexible floor plans and timely delivery, we exceed expectations. Welcome to CIDBI - where excellence meets trust."</p>
            </div>
            <div className='flex justify-center md:justify-end pt-[18px]'>
              <button className='underline flex gap-[10px] items-center text-[12px] font-[general-sans-medium]'>
                Know more
                <Image src={arrowIcon} alt='arrow-icon' />
              </button>
            </div>
          </div>
        </div>
        <Image src={aboutCardshapeMobile} alt='' className='min-w-full align-bottom -mb-[5px] -mt-[30px] md:hidden block' />
        <div className='bg-cover md:w-full lg:w-7/12 rounded-t-[12px] md:rounded-e-[12px] bg-center' style={{ backgroundImage: `url(/images/home/carorcel1.jpeg)` }}>
          <Image className='h-full -ms-[2px] md:visible invisible' alt='card-shape' src={aboutCardshape} />
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
              <p className='px-[30px] font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[24px]'> we prioritize quality above all else. With decades of experience and a commitment to excellence, we ensure that every aspect of our projects, from design to construction, meets the highest standards of quality and craftsmanship.</p>
            </div>
          </div>
          <div className="text-center flex flex-col md:flex-row lg:flex-col px-[20px] lg:px-0 items-center gap-[20px] py-[30px]  bg-white shadow-2xl rounded-[15px]">
            <Image src={facilitiesGif} alt='facilities-gif' className='w-[90px] lg:w-[120px]' />
            <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
              <h6 className='font-[general-sans-medium] text-[24px] md:text-[20px] lg:text-[24px] leading-[32px]'>
                <span className='md:hidden block'>Superior <br /> Facilities</span>
                <span className='md:block hidden'>Superior Facilities</span>
              </h6>
              <p className='px-[30px] font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[24px]'> We believe that luxury living is about more than just four walls and a roof. That's why we go above and beyond to provide our residents with top-notch facilities that enhance their lifestyle. From state-of-the-art fitness centers to serene outdoor spaces, we offer facilities that cater to every need and desire.</p>
            </div>
          </div>
          <div className="text-center flex flex-col md:flex-row lg:flex-col px-[20px] lg:px-0 items-center gap-[20px] py-[30px]  bg-white shadow-2xl rounded-[15px]">
            <Image src={serviceGif} alt='service-gif' className='w-[90px] lg:w-[120px]' />
            <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
              <h6 className='font-[general-sans-medium] text-[24px] md:text-[20px] lg:text-[24px] leading-[32px]'>
                <span className='md:hidden block'>Exceptional Customer <br /> Service</span>
                <span className='md:block hidden'>Exceptional Customer Service</span>
              </h6>
              <p className='px-[30px] font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[24px]'>  we prioritize quality above all else. With decades of experience and a commitment to excellence, we ensure that every aspect of our projects, from design to construction, meets the highest standards of quality and craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Banner */}
      <section className='containers pt-[40px]'>
        <card className='w-full bg-white rounded-[20px] p-[15px] box-shadow grid grid-cols-2'>
          <left className="flex flex-col gap-[10px]">
            <div className='flex flex-row gap-[15px] h-[190px]'>
              <div className='ps-[35px] w-[22.9vw] flex flex-col justify-center'>
                <h5 className='text-[64px] leading-[86px] font-[general-sans-semibold]'>20+</h5>
                <p className='text-[20px] leading-[27px] font-[general-sans-regular]'>Projects <br /> Completed</p>
              </div>
              <div>
                <Image src={image1} alt='banner-image1' className='rounded-[12px] h-full w-[16.875vw]' />
              </div>
              <div className='bg-[--primary-cl] rounded-[12px] rounded-br-[84px] w-[19.375vw] flex flex-col items-center justify-center'>
                <h5 className='text-[64px] leading-[86px] font-[general-sans-semibold]'>1M+</h5>
                <p className='text-[20px] leading-[27px] font-[general-sans-regular]'>Square Feet<br />Completed</p>
              </div>
            </div>
            <div className='h-[190px] ps-[50px] w-[23.28125vw] flex flex-col justify-center bg-[--primary-cl] rounded-[12px] rounded-tr-[56px]'>
              <h5 className='text-[64px] leading-[86px] font-[general-sans-semibold]'>1000+</h5>
              <p className='text-[20px] leading-[27px] font-[general-sans-regular]'>Happy Customers</p>
            </div>
            <div className='flex flex-row gap-[45px]'>
              <Image src={image2} alt='banner-image2' className='w-[10.15625vw] h-[243px] rounded-[12px]' />
              <div className='flex flex-col justify-center'>
                <h5 className='text-[64px] leading-[86px] font-[general-sans-semibold]'>35+</h5>
                <p className='text-[20px] leading-[27px] font-[general-sans-regular]'>Years of <br /> Experience</p>
              </div>
            </div>
          </left>
          <right className="relative flex justify-center items-center">
            {/* <Image src={roundedImage} alt='rounded-image'/> */}
            <Image src={charectersImage} className='absolute bottom-8' alt='people-image'/>
            {/* <motion.div
              variants={svgVariants}
              initial="initial"
              animate="animate"
            >
              <motion.svg
                width="435"
                height="486"
                viewBox="0 0 435 486"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="initial"
                animate="animate"
              >
                <motion.path
                  fill="#BFD8BD"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  variants={pathVariants}
                  initial="initial"
                  animate="animate"
                />
              </motion.svg>
            </motion.div> */}
            <motion.div
              className="bg-[--primary-cl] w-[500px] h-[500px]"
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
    </main>
  )
}

export default AboutSection