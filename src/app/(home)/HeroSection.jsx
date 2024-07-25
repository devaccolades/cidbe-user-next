'use client'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Card, Carousel } from "@material-tailwind/react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import locationIcon from '../../../public/icons/location.svg'
import arrowoutwardIcon from '../../../public/icons/arrow_outward.svg'
import nextArrowIcon from '../../../public/icons/next_arrow.svg';
import prevArrowIcon from '../../../public/icons/prev_arrow.svg';
import { motion, AnimatePresence } from 'framer-motion';

import image1 from "../../../public/images/home/carorcel1.jpeg"
import image2 from "../../../public/images/home/carorcel2.webp"
import bgimage1 from "../../../public/images/home/bg.webp"
import bgimage2 from "../../../public/images/home/bg-2.jpg"
import { getFeaturedProject } from '../../services/services';
// Custom Next Arrow component
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow next-arrow"
            onClick={onClick}
        >
            <Image src={nextArrowIcon} alt="next" />
        </div>
    );
}

// Custom Prev Arrow component
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow prev-arrow"
            onClick={onClick}
        >
            <Image src={prevArrowIcon} alt="prev" />
        </div>
    );
}

function HeroSection() {

    // const projects = [
    //     { name: "CASSIA", location: "Near Daya Hospital", status: "Ongoing", image: image1, bgimage: bgimage1 },
    //     // { name: "CASSIA", location: "Poonkunnam", status: "Ongoing", image: "/images/home/carorcel1.jpeg" ,bgimage: "/images/home/bg.webp"},
    //     { name: "CANDOR", location: "Poonkunnam", status: "Ongoing", image: image2, bgimage: bgimage2 },
    // ];

    const [projects, setProject] = useState([])
    const [activeIndex, setActiveIndex] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState(projects[0]?.background_image);
    const [isMobile, setIsMobile] = useState();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: isMobile ? false : true,
        beforeChange: (current, next) => {
            setActiveIndex(next);
            setBackgroundImage(projects[next].background_image);
        },
        appendDots: dots => (
            <div>
                <ul className="custom-dots"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className={`custom-dot ${i === activeIndex ? 'active' : ''}`}>
                <span className="dot-line"></span>
            </div>
        ),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    };
    const animationConfig = {
        initial: {
            opacity: 0,
            y: 50,
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.5,
            },
        },
    };


    const fetchData = async () => {
        try {
            const res =await getFeaturedProject(1, 4)
            const { StatusCode, data } = res.data
            if (StatusCode === 6000) {
                setProject(data)
                setBackgroundImage(data[0]?.background_image)
            } else {
                setProject([])
            }
        } catch (error) {
            console.log(error);
            setProject([])

        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <>
            {projects.length > 0 ? (
                <>
                    <section
                        className="h-[605px] carousel-background md:h-[540px] main-div lg:h-[860px] -mt-[78px] lg:-mt-[95px] bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <div className='h-full md:w-[90%] res lg:w-[80%] mx-auto flex flex-row justify-between md:items-center lg:pe-[40px]'>
                            <div className='md:w-[311px] lg:w-[429px] flex flex-col md:mt-4 justify-between items-center text-center md:ps-5 mx-auto pt-[85px] md:pt-0 pb-[20px] md:pb-0 md:mx-0'>
                                <div>
                                    <h1 className='hero-text md:text-[36px] lg:text-[3.95vw] flex flex-col'>
                                        <p className='text-wrapper'><span className='text-animation delay-1'>തൃശ്ശൂരിൻ്റെ </span></p>
                                        <p className='text-wrapper'><span className='text-animation delay-2'>സ്വന്തം</span></p>
                                    </h1>
                                    <p className='hero-sub-text -mt-[10px] md:mt-0 text-wrapper'><span className='text-animation delay-3'>ബിൽഡർ</span></p>
                                </div>

                                <div className='' >
                                    <motion.button
                                        className='box m-[20px]'
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }}
                                    >
                                        <p className='inner'>110 Lakhs Sqft. Area Completed</p>
                                    </motion.button>
                                    <motion.p
                                        className='hero-small-txt'
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } }}
                                    >
                                        You are choosing a builder having the best apartments with more than 33 years of experience in the construction industry
                                    </motion.p>

                                </div>
                            </div>
                            <motion.div className='md:block hidden md:h-[430px] lg:h-[591px] carousel md:w-[311px] md:mt-10 lg:mt-0 lg:w-[395px] md:me-10 lg:me-0' {...animationConfig}>
                                <Slider {...settings}>
                                    {projects.map((project, index) => (
                                        <Card key={index} className='md:w-[275px] lg:w-[195px] h-[97%] px-[5px] pt-[5px] pb-[10px] mx-auto overflow-hidden'>
                                            <div className='md:h-[259px] lg:h-[405px] bg-top rounded-[8px] bg-cover'
                                                style={{ backgroundImage: `url(${project.thumbnail})` }} />
                                            <div className='bg-white grid grid-rows-2 lg:pt-[10px] md:px-[16px] lg:px-[20px] '>
                                                <div className='h-[72px] w-full flex justify-between items-center'>
                                                    <div className='font-[general-sans-regular] md:-mb-[20px] lg:mb-0'>
                                                        <p className='md:text-[24px] lg:text-[36px] text-black'>{project?.name}</p>
                                                        <p className='capitalize flex gap-[8px] lg:-mt-[4px]'><Image src={locationIcon} alt='location-icon' /> <span className='md:text-[10px] lg:text-[16px] text-[#767575]'>{project?.location}</span></p>
                                                    </div>
                                                    <div>
                                                        <p className='capitalize md:-mb-[20px] lg:mb-0 rounded-[12px] text-[general-sans-medium] border-[1px] text-[10px] border-[#052D23] py-[2px] px-[10px]'>{project?.status}</p>
                                                    </div>
                                                </div>
                                                <div className=' h-[64px] flex justify-center items-end'>
                                                    <button className='bg-[--secondary-cl] h-[44px] gap-[8px] py-[12px] pr-[8px] pl-[14px] rounded-[8px] w-full flex justify-center items-center'>
                                                        <p className='font-[general-sans-medium] text-[14px] text-white'>View Project Details</p>
                                                        <Image src={arrowoutwardIcon} alt='arrow-icons' />
                                                    </button>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </Slider>
                            </motion.div>
                        </div>
                    </section>
                    <div className='md:hidden block h-[630px] py-[20px] containers overflow-hidden'>
                        <Slider {...settings}>
                            {projects.map((project, index) => (
                                <Card key={index} className='h-[97%] px-[5px] pt-[5px] pb-[10px] mx-auto border shadow-none rounded-[15px] '>
                                    <div className='h-[400px] bg-top rounded-[8px] bg-cover'
                                        style={{ backgroundImage: `url(${project.thumbnail})` }} />
                                    <div className='bg-white grid grid-rows-2 px-[16px]'>
                                        <div className='h-[72px] w-full pt-[10px] flex justify-between items-center'>
                                            <div className='font-[general-sans-regular] '>
                                                <p className='text-[24px] text-black'>{project?.name}</p>
                                                <p className='capitalize flex gap-[8px] '><Image src={locationIcon} alt='location-icon' /> <span className='text-[14px] text-[#767575]'>{project?.location}</span></p>
                                            </div>
                                            <div>
                                                <p className='capitalize md:-mb-[20px] lg:mb-0 rounded-[12px] text-[general-sans-medium] border-[1px] text-[10px] border-[#052D23] py-[2px] px-[10px]'>{project?.status}</p>
                                            </div>
                                        </div>
                                        <div className='h-[64px] flex justify-center items-end'>
                                            <button className='bg-[--secondary-cl] h-[44px] gap-[8px] py-[12px] pr-[8px] pl-[14px] rounded-[8px] w-full flex justify-center items-center'>
                                                <p className='font-[general-sans-medium] text-[14px] text-white'>View Project Details</p>
                                                <Image src={arrowoutwardIcon} alt='arrow-icons' />
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </Slider>
                    </div>
                </>
            ) : (
                <></>
            )
            }
        </>
    )
}

export default HeroSection