'use client'
import React, { Children, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
// icons
import quatsIcon from '../../../public/icons/quats.svg'
import plusIcon from '../../../public/icons/plus.svg'
import minusIcon from '../../../public/icons/minus.svg'
import playIcon from '../../..//public/icons/play.svg'

import customerReviewbg from '../../../public/images/home/customer-reviewsbg.svg'
import { usePathname } from 'next/navigation';
import { getFaqApi, getTestimonialApi } from '../../services/services';
import { Dialog } from '@material-tailwind/react';

function CustomerReviewsAndFaq() {
    const pathname = usePathname();

    const [numItems, setNumItems] = useState(1);
    const [testimonials, setTestimonials] = useState([])
    const [faqs, setFaqs] = useState([])
    const [isOpend, setOpen] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const videoRef = useRef(null);


    const handleModalClose = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleImageClick = (videoSrc) => {
        setCurrentVideo(videoSrc);
        setIsModalOpen(true);
      };

    useEffect(() => {
        if (!isModalOpen && videoRef.current) {
          videoRef.current.pause();
          setCurrentVideo(null);
        }
      }, [isModalOpen]);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setNumItems(1);
            } else if (window.innerWidth >= 768 && window.innerWidth <= 1700) {
                setNumItems(2);
            } else {
                setNumItems(3);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // ferchData
    const fetchData = async () => {
        try {
            const res = await getTestimonialApi()
            const { StatusCode, data } = res.data
            if (StatusCode === 6000) {
                setTestimonials(data)
            } else {
                setTestimonials([])
            }
        } catch (error) {
            console.log(error);
            setTestimonials([])
        }
    }
    const fetchFaqData = async () => {
        try {
            const res = await getFaqApi()
            const { StatusCode, data } = res.data
            if (StatusCode === 6000) {
                setFaqs(data)
            } else {
                setFaqs([])
            }
        } catch (error) {
            console.log(error);
            setFaqs([])
        }
    }
    useEffect(() => {
        fetchData()
        fetchFaqData()
    }, [])
    return (
        <section className={`relative text-[--secondary-cl] overflow-hidden z-10 ${pathname === '/contact-us' ? "" : 'reviews-bg-gradient'}  py-[40px] lg:py-[90px] flex flex-col gap-[20px] md:gap-[50px] lg:gap-[130px]`}>
            <Image src={customerReviewbg} className='absolute right-0 hidden lg:block -z-10 top-[-30px]' alt='Customer Review Background' />

            {/* Customer reviews */}
            <div className='containers '>
                <h6 className='font-[clash-display-medium] text-[20px] lg:text-[32px]'>Customer Reviews</h6>
                <div className='mt-[10px] lg:mt-[44px] '>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={numItems}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}

                    >
                        {testimonials.map((testimoni, index) => (
                            <SwiperSlide key={index}>
                                {testimoni.type === 'text' ? (
                                    <div key={index} className=' bg-white cursor-pointer h-[478px] rounded-[12px] py-[30px] grid md:grid-rows-[110px,1fr,110px]'>
                                        <div className='px-[20px]'>
                                            <Image src={quatsIcon} alt='quats-icon' />
                                        </div>
                                        <p className='px-[30px] font-[general-sans-medium] text-[14px] lg:text-[16px] leading-[24px]'>{testimoni?.review_text}</p>
                                        <div className='px-[30px] flex flex-row gap-[10px] lg:gap-[20px] items-center'>
                                            <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center'
                                                style={{ backgroundImage: `url(${testimoni?.profile_picture})` }} />
                                            <div className='flex flex-col'>
                                                <p className='text-[15px] font-[inter-medium]'>{testimoni?.customer_name}</p>
                                                <p className='text-[14px] font-[inter-regular]'>{testimoni?.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div 
                                    className='relative w-full h-[478px] bg-center bg-cover rounded-[12px] cursor-pointer'
                                    style={{ backgroundImage: `url(${testimoni?.thumbnail})` }} 
                                    onClick={()=>handleImageClick(testimoni?.video)}>
                                        <Image className='absolute top-[45%] left-[45%] opacity-[70%]' width={50} src={playIcon} alt='Play-icon'/>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/* Faq */}
            <div className='containers'>
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
            {isModalOpen && (
                <Dialog size='xl' open={isModalOpen} handler={handleModalClose} className='bg-transparent'>
                     <video ref={videoRef} className='h-full w-full rounded-[10px]' controls autoPlay src={currentVideo} /> 
                </Dialog>
                
            )}
        </section>
    )
}

// const VideoModal = ({ onClose, children }) => {
//     return (
        // <div onClick={onClose} className='fixed top-0 left-0 w-full h-[100%] bg-[#06060675] flex justify-center items-center video-modal' >
        //     <div onClick={(e) => e.stopPropagation()} className='relative video-modal'>
        //         {children}
        //     </div>
        // </div >
//     );
// };

export default CustomerReviewsAndFaq
