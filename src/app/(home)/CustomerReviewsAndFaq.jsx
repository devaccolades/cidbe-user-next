'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
// icons
import quatsIcon from '../../../public/icons/quats.svg'
import plusIcon from '../../../public/icons/plus.svg'
import minusIcon from '../../../public/icons/minus.svg'

import customerReviewbg from '../../../public/images/home/customer-reviewsbg.svg'
import { usePathname } from 'next/navigation';
import { getFaqApi, getTestimonialApi } from '../../services/services';

function CustomerReviewsAndFaq() {
    const pathname = usePathname();

    const [numItems, setNumItems] = useState(1);
    const [testimonials, setTestimonials] = useState([])
    const [faqs,setFaqs] = useState([])
    const [isOpend, setOpen] = useState(null)
    // const faqs = [
    //     { question: "How to choose the right builder in Thrissur?", answer: "When selecting a builder in Thrissur, consider factors such as their experience, reputation, portfolio of completed projects, licenses and certifications, quality of materials used, adherence to timelines, and customer reviews. It is also advisable to request quotations and compare them to ensure competitive pricing." },
    //     { question: "What amenities can I expect in apartments in Thrissur?", answer: "Apartments in Thrissur typically offer amenities such as 24/7 security, power backup, ample parking, gymnasiums, swimming pools, children's play areas, and landscaped gardens. Some premium apartments might also include clubhouses, indoor game facilities, and more." },
    //     { question: "What are some popular residential areas in Thrissur for apartments?", answer: "Popular residential areas in Thrissur for apartments include Punkunnam, Ayyanthole, Viyyur, and East Fort. These areas are well-connected and offer a range of amenities and facilities, making them attractive for residential purposes." },
    //     { question: "What are ready to occupy flats in Thrissur?", answer: "Ready to occupy flats in Thrissur are fully constructed and available for immediate possession. These flats come with completed interiors and necessary utilities, allowing buyers to move in without any waiting period." },
    //     { question: "What is the advantage of buying a ready to occupy flat in Thrissur?", answer: "The primary advantage of buying a ready to occupy flat is the immediate possession, which eliminates the waiting period typically associated with under-construction properties. Buyers can also inspect the property before purchase, ensuring it meets their expectations." },
    //     { question: "Are budget flats in Thrissur of good quality?", answer: "Budget flats in Thrissur can vary in quality. It's important to research the builder's reputation and check for reviews and completed projects. Visiting the site and inspecting the construction quality can also provide assurance regarding the quality of budget flats." },
    //     { question: "Can I visit and inspect the flat before making a purchase?", answer: "Yes, most builders and developers allow potential buyers to visit and inspect the flats before making a purchase decision. This helps buyers assess the quality, layout, and other aspects of the property." },
    // ]
    // const testimonials = [
    // { customer_name: "Raneesh", location: "Thrissur, Kerala", profile_picture: "/images/home/testimoials.png", review_text: "CIDBI Builders exceeded our expectations with their professionalism and quality work. They seamlessly managed our commercial construction project, ensuring everything was done to perfection. The team's communication and expertise were impressive. We highly recommend CIDBI Builders for their exceptional services." },
    // { customer_name: "Reshma", location: "Thrissur, Kerala", profile_picture: "/images/home/testimoials.png", review_text: "CIDBI Builders turned our dream home into a reality. Their team was dedicated, skilled, and attentive to our needs throughout the entire process. The quality of their workmanship is remarkable, and we couldn't be happier with the final outcome. We wholeheartedly recommend CIDBI Builders for any construction project." },
    // { customer_name: "jeeva", location: "Thrissur, Kerala", profile_picture: "/images/home/testimoials.png", review_text: "CIDBI Builders exceeded our expectations with their exceptional craftsmanship and professionalism. Their attention to detail, commitment to quality, and open communication made the process seamless. We highly recommend CIDBI Builders for their reliable and top-notch construction services." },
    // { customer_name: "jeeva", location: "Thrissur, Kerala", profile_picture: "/images/home/testimoials.png", review_text: "CIDBI Builders exceeded our expectations with their exceptional craftsmanship and professionalism. Their attention to detail, commitment to quality, and open communication made the process seamless. We highly recommend CIDBI Builders for their reliable and top-notch construction services." },
    // ]
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
    useEffect(()=>{
        fetchData()
        fetchFaqData()
    },[])
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
                                <div key={index} className=' bg-white cursor-pointer h-[478px] rounded-[12px] py-[30px] grid md:grid-rows-[110px,1fr,110px]'>
                                    <div className='px-[20px]'>
                                        <Image src={quatsIcon} alt='quats-icon' />
                                    </div>
                                    <p className='px-[30px] font-[general-sans-medium] text-[14px] lg:text-[16px] leading-[24px]'>{testimoni?.review_text}</p>
                                    <div className='px-[30px] flex flex-row gap-[10px] lg:gap-[20px] items-center'>
                                        {/* <Image className='w-[60px] h-[60px] rounded-full' alt='customer-reviews' width={60} height={60} src={testimoni?.profile_picture} /> */}
                                        <div className='w-[60px] h-[60px] rounded-full bg-cover bg-center'
                                        style={{ backgroundImage: `url(${testimoni?.profile_picture})` }}/>
                                        <div className='flex flex-col'>
                                            <p className='text-[15px] font-[inter-medium]'>{testimoni?.customer_name}</p>
                                            <p className='text-[14px] font-[inter-regular]'>{testimoni?.location}</p>
                                        </div>
                                    </div>
                                </div>
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
                            <div className='flex justify-between flex-row'>
                                <p className={`${isOpend === index ? 'font-[general-sans-medium]' : 'font-[general-sans-regular]'} text-[12px] lg:text-[16px] py-[14px] w-[90%] md:w-5/12 lg:w-1/3 cursor-auto`}>{faq.question || ""}</p>
                                <button className='cursor-pointer' onClick={() => setOpen(isOpend === index ? null : index)}>
                                    <Image src={isOpend === index ? minusIcon : plusIcon} alt='toggle-icon' />
                                </button>
                            </div>
                            {isOpend === index &&
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className='overflow-hidden'
                                >
                                    <p className='font-[general-sans-regular] text-[12px] lg:text-[16px] py-[8px] leading-[18px] lg:leading-[24px]'>{faq.answer || ""}</p>
                                </motion.div>}
                            <hr className='border-t-[1px] border-t-[--secondary-cl]' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CustomerReviewsAndFaq
