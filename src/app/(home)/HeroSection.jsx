'use client'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Card, Carousel } from "@material-tailwind/react";
import Image from 'next/image';
    import locationIcon from '../../../public/icons/location.svg'
import arrowoutwardIcon from '../../../public/icons/arrow_outward.svg'
function HeroSection() {
    // const [activeIndex, setActiveIndex] = useState(1);
        const projects = [
        { name: "CASSIA", location: "Poonkunnam", status: "Ongoing", image: "/images/home/carorcel1.jpeg" },
        { name: "Test", location: "Poonkunnam", status: "Ongoing", image: "/images/home/carorcel1.jpeg" },
        { name: "T", location: "Poonkunnam", status: "Ongoing", image: "/images/home/carorcel1.jpeg" },
    ];

    const handleDragEnd = (event, info) => {
        if (info.offset.x > 100) {
            // Swipe right
            // setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
        } else if (info.offset.x < -100) {
            // Swipe left
            // setActiveIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
        }
    };


    return (
        <section
            className="md:h-[540px] lg:h-[860px] md:-mt-[77px] lg:-mt-[95px] bg-cover bg-center"
            style={{ backgroundImage: `url(/images/home/bg.webp)` }}>
            <div className='h-full md:w-[90%] res lg:w-[80%] mx-auto flex flex-row justify-between items-center'>
                <div className='md:w-[311px] lg:w-[429px] flex flex-col mt-4 items-center text-center ps-5'>
                    <h1 className='hero-text md:text-[36px] lg:text-[76px]'>തൃശ്ശൂരിൻ്റെ
                        സ്വന്തം</h1>
                    <p className='hero-sub-text md:-mt-2 lg:mt-0'>ബിൽഡർ</p>
                    <button className='box m-[20px]'>
                        <p className='inner'>110 Lakhs Sqft. Area Completed</p>
                    </button>
                    <p className='hero-small-txt'>
                        You are choosing a builder having the best apartments with more than 33 years of experience in construction industry
                    </p>
                </div>
                <div className='md:h-[430px]  lg:h-[591px] md:w-[400px] md:mt-10 lg:mt-0 lg:w-[539px]'>
                    <Carousel
                        loop
                        autoplay
                        autoplayInterval={3000}
                        // prevArrow={false}
                        className="rounded-xl z-0"
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-2 bg-white/50"
                                            }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                        activeIndex={1}
                    >
                        {projects.map((project, index) => (
                            <Card key={index} className='md:w-[275px] lg:w-[395px] h-[97%] px-[5px] pt-[5px] pb-[10px] mx-auto overflow-hidden'>
                                <div className='md:h-[259px] lg:h-[405px] bg-top rounded-[8px] bg-cover'
                                    style={{ backgroundImage: `url(${project.image})` }} />
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
                                            <Image src={arrowoutwardIcon} alt='arrow-icons'/>
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}

                    </Carousel>
                </div>
            </div>

        </section>
    )
}

export default HeroSection