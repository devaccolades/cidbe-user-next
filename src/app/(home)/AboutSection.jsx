'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'
import gradientLeft from "../../../public/images/home/gradient-left.svg"
import aboutCardImage from "../../../public/images/home/about-card-vector.svg"
import aboutCardshape from "../../../public/images/home/about-shape.svg"
import arrowIcon from "../../../public/icons/arrow-outward-green.svg"
import qualityGif from "../../../public/gif/quality.gif"
import facilitiesGif from "../../../public/gif/facilities.gif"
import serviceGif from "../../../public/gif/service.gif"
import './Home.css'
import image1 from "../../../public/images/home/image1.jpeg"
import image2 from "../../../public/images/home/image2.jpeg"
// after connect the backend

function AboutSection() {

  const pathVariants = {
    initial: {
      d: "M223.517 0.0222643C263.497 -0.875746 297.643 25.5788 332.351 45.4512C367.178 65.3911 409.057 80.603 426.985 116.518C444.783 152.174 427.537 194.203 426.489 234.044C425.471 272.739 435.721 312.3 420.893 348.052C405.247 385.776 375.09 415.312 341.613 438.687C306.251 463.378 266.586 488.029 223.517 485.867C180.86 483.726 148.518 449.441 112.071 427.165C76.5352 405.445 31.583 392.999 11.6904 356.399C-8.13527 319.922 2.18534 275.272 7.10784 234.044C11.5803 196.585 19.6029 159.815 39.023 127.477C58.2406 95.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 223.517 0.0222643Z"
    },
    animate: {
      d: [
        "M223.517 0.0222643C263.497 -0.875746 297.643 25.5788 332.351 45.4512C367.178 65.3911 409.057 80.603 426.985 116.518C444.783 152.174 427.537 194.203 426.489 234.044C425.471 272.739 435.721 312.3 420.893 348.052C405.247 385.776 375.09 415.312 341.613 438.687C306.251 463.378 266.586 488.029 223.517 485.867C180.86 483.726 148.518 449.441 112.071 427.165C76.5352 405.445 31.583 392.999 11.6904 356.399C-8.13527 319.922 2.18534 275.272 7.10784 234.044C11.5803 196.585 19.6029 159.815 39.023 127.477C58.2406 95.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 223.517 0.0222643Z",
        "M223.517 10.0222643C273.497 10.875746 307.643 35.5788 342.351 55.4512C377.178 75.3911 419.057 90.603 436.985 126.518C454.783 162.174 437.537 204.203 436.489 244.044C435.471 282.739 445.721 322.3 430.893 358.052C415.247 395.776 385.09 425.312 351.613 448.687C316.251 473.378 276.586 498.029 233.517 495.867C190.86 493.726 158.518 459.441 122.071 437.165C86.5352 415.445 41.583 402.999 21.6904 366.399C1.86473 329.922 12.1853 285.272 17.1078 244.044C21.5803 206.585 29.6029 169.815 49.023 137.477C68.2406 105.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 233.517 10.0222643Z",
        "M213.517 0.0222643C263.497 -0.875746 297.643 25.5788 332.351 45.4512C367.178 65.3911 409.057 80.603 426.985 116.518C444.783 152.174 427.537 194.203 426.489 234.044C425.471 272.739 435.721 312.3 420.893 348.052C405.247 385.776 375.09 415.312 341.613 438.687C306.251 463.378 266.586 488.029 223.517 485.867C180.86 483.726 148.518 449.441 112.071 427.165C76.5352 405.445 31.583 392.999 11.6904 356.399C-8.13527 319.922 2.18534 275.272 7.10784 234.044C11.5803 196.585 19.6029 159.815 39.023 127.477C58.2406 95.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 223.517 0.0222643Z",
        "M223.517 0.0222643C263.497 -0.875746 297.643 25.5788 332.351 45.4512C367.178 65.3911 409.057 80.603 426.985 116.518C444.783 152.174 427.537 194.203 426.489 234.044C425.471 272.739 435.721 312.3 420.893 348.052C405.247 385.776 375.09 415.312 341.613 438.687C306.251 463.378 266.586 488.029 223.517 485.867C180.86 483.726 148.518 449.441 112.071 427.165C76.5352 405.445 31.583 392.999 11.6904 356.399C-8.13527 319.922 2.18534 275.272 7.10784 234.044C11.5803 196.585 19.6029 159.815 39.023 127.477C58.2406 95.4774 86.7631 71.4902 117.469 50.2778C150.213 27.6567 183.735 0.915837 223.517 0.0222643Z"
      ],
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.3, 0.6, 1],
        repeat: Infinity,
        repeatDelay: 0
      }
    }
  };

  const svgVariants = {
    initial: { y: 0 },
    animate: { y: [0, -20, 0] },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0
    }
  };

  return (
    <main className='h-[1859px] text-[--secondary-cl] w-full flex flex-col py-[45px]'
      style={{ backgroundImage: `url(/images/home/about-section-bg.svg)` }}>
      <div className='absolute top-[1066px] left-[-191px] -z-10'>
        <Image src={gradientLeft} alt='gradient-left' />
      </div>
      {/* About Card */}
      <card className='relative container shadow-2xl grid grid-cols-[1fr,435px] rounded-[12px]'>
        <div className='h-[433px] bg-color rounded-s-[12px] flex items-center'>
          <Image className='absolute right-[400px] bottom-[81px]' src={aboutCardImage} alt="Description-of-the-about-card-image" />
          <div className='w-[550px] ms-[90px] flex flex-col gap-[10px]'>
            <h3 className='text-[24px] font-[general-sans-medium] leading-[32.4px]'>About us</h3>
            <div className='flex flex-col gap-[20px] font-[general-sans-regular] text-[16px] leading-[24px]'>
              <p>"Established in 2005, CIDBI is Thrissur's most trusted builder with over 33 years of industry experience. Led by Mr. A A Abdul Lathif, we've delivered quality housing solutions across Kerala. </p>
              <p>Our stringent Quality Assurance process ensures consistency in every project. With flexible floor plans and timely delivery, we exceed expectations. Welcome to CIDBI - where excellence meets trust."</p>
            </div>
            <div className='flex justify-end pt-[18px]'>
              <button className='underline flex gap-[10px] items-center'>
                Know more
                <Image src={arrowIcon} alt='arrow-icon'/>
              </button>
            </div>
          </div>
        </div>
        <div className='bg-cover rounded-e-[12px] ' style={{ backgroundImage: `url(/images/home/carorcel1.jpeg)` }}>
          <Image className='h-full -ms-[2px]' alt='card-shape' src={aboutCardshape} />
        </div>
      </card>
      {/* Why choose us? */}
      <section className='container'>
        <h3 className='text-[24px] font-[general-sans-medium] text-center mt-[40px] mb-[20px] leading-[32.4px]'>WHY CHOOSE US?</h3>
        <div className='grid grid-cols-3 gap-[20px]'>
          <div className="text-center flex flex-col items-center gap-[20px] py-[30px]  bg-white shadow-lg rounded-[15px]">
            <Image src={qualityGif} alt='quality-fig' width={120} />
            <div className='flex flex-col gap-[20px]'>
              <h6 className='font-[general-sans-medium] text-[24px] leading-[32px]'>Unparalleled
                <br />
                Quality</h6>
              <p className='px-[30px] font-[general-sans-regular]'> we prioritize quality above all else. With decades of experience and a commitment to excellence, we ensure that every aspect of our projects, from design to construction, meets the highest standards of quality and craftsmanship.</p>
            </div>
          </div>
          <div className="text-center flex flex-col items-center gap-[20px] py-[30px]  bg-white shadow-lg rounded-[15px]">
            <Image src={facilitiesGif} alt='facilities-gif' width={120} />
            <div className='flex flex-col gap-[20px]'>
              <h6 className='font-[general-sans-medium] text-[24px] leading-[32px]'>Superior
                <br />
                Facilities</h6>
              <p className='px-[30px] font-[general-sans-regular]'> We believe that luxury living is about more than just four walls and a roof. That's why we go above and beyond to provide our residents with top-notch facilities that enhance their lifestyle. From state-of-the-art fitness centers to serene outdoor spaces, we offer facilities that cater to every need and desire.</p>
            </div>
          </div>
          <div className="text-center flex flex-col items-center gap-[20px] py-[30px]  bg-white shadow-lg rounded-[15px]">
            <Image src={serviceGif} alt='service-gif' width={120} />
            <div className='flex flex-col gap-[20px]'>
              <h6 className='font-[general-sans-medium] text-[24px] leading-[32px]'>Exceptional Customer
                <br />
                Service</h6>
              <p className='px-[30px] font-[general-sans-regular]'>  we prioritize quality above all else. With decades of experience and a commitment to excellence, we ensure that every aspect of our projects, from design to construction, meets the highest standards of quality and craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Banner */}
      <section className='container pt-[40px]'>
        <card className='h-[683px] w-full bg-white rounded-[20px] p-[15px] box-shadow grid grid-cols-2'>
          <left className="flex flex-col gap-[10px]">
            <div className='flex flex-row gap-[15px] h-[190px]'>
              <div className='ps-[35px] w-[220px] flex flex-col justify-center'>
                <h5 className='text-[64px] leading-[86px] font-[general-sans-semibold]'>20+</h5>
                <p className='text-[20px] leading-[27px] font-[general-sans-regular]'>Projects <br /> Completed</p>
              </div>
              <div>
                <Image src={image1} alt='banner-image1' className='rounded-[12px] h-full w-[162px]' />
              </div>
              <div className='bg-[--primary-cl] rounded-[12px] rounded-br-[84px] w-[186px] flex flex-col items-center justify-center'>
                <h5 className='text-[64px] leading-[86px] font-[general-sans-semibold]'>1M+</h5>
                <p className='text-[20px] leading-[27px] font-[general-sans-regular]'>Square Feet<br />Completed</p>
              </div>
            </div>
            <div className='h-[190px] ps-[50px] w-[447px] flex flex-col justify-center bg-[--primary-cl] rounded-[12px] rounded-tr-[56px]'>
              <h5 className='text-[64px] leading-[86px] font-[general-sans-semibold]'>1000+</h5>
              <p className='text-[20px] leading-[27px] font-[general-sans-regular]'>Happy Customers</p>
            </div>
            <div className='flex flex-row gap-[45px]'>
              <Image src={image2} alt='banner-image2' className='w-[195px] h-[243px] rounded-[12px]' />
              <div className='flex flex-col justify-center'>
                <h5 className='text-[64px] leading-[86px] font-[general-sans-semibold]'>35+</h5>
                <p className='text-[20px] leading-[27px] font-[general-sans-regular]'>Years of <br /> Experience</p>
              </div>
            </div>
          </left>
          <right>
            <motion.div
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
            </motion.div>
          </right>

        </card>
      </section>
    </main>
  )
}

export default AboutSection