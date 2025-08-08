'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Card } from '@material-tailwind/react'
import { AnimatePresence, motion } from 'framer-motion'
import './projectCard.css'
import EnquiryModal from '../components/EnquiryForm/EnquiryModal'
// Icons
import locationIcon from '../../public/icons/location.svg'
import appartmentIcon from '../../public/icons/appartment.svg'
import areaIcon from '../../public/icons/area.png'
import premiumIcon from '../../public/icons/premium.svg'
import reraIcon from '../../public/icons/rera.svg'
import arrow_outwardIcon from '../../public/icons/arrow_outward.svg'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

function ProjectCard({ project }) {
    let pathname = usePathname();
    if (pathname==='/' || pathname === '/flats-in-thrissur'){
        pathname = '/featured-projects'
    }
    const router = useRouter()
    const [projectId,setProjectId] = useState("")
    const [hovered, setHovered] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            {pathname === "/completed-projects" ? (
                <Card className='relative w-full h-[500px] cursor-pointer card-animation bg-white rounded-[15px] overflow-hidden p-[5px] grid grid-rows-[1fr,1fr,1fr] gap-[10px]'>
                    <motion.div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        // onTap={() => setHovered(!hovered)}
                        className='card-image bg-top h-[350px] rounded-[10px] bg-cover'
                        style={{ backgroundImage: `url(${project?.thumbnail})` }}
                    />
                    <div className='flex justify-between items-center pt-[10px] px-[15px]'>
                        <div className='font-[general-sans-regular] flex flex-col gap-[6px]'>
                            <p className='text-[30px] res-custom-name text-black uppercase leading-[36px]'>{project?.name}</p>
                            <p className='capitalize flex gap-[8px]'><Image src={locationIcon} alt="Apartments in Thrissur" /> <span className='text-[14px] lg:text-[16px] leading-[18px] text-[#767575]'>{project?.location}</span></p>
                        </div>
                        <div>
                        <p className='capitalize rounded-[12px] text-[general-sans-medium] bg-[--secondary-cl] text-[12px] text-white py-[4px] px-[12px]'>{project?.status}</p>
                        </div>
                    </div>
                    <div className='sticky bottom-1 bg-white mt-[10px] gap-[10px] px-[15px] pb-[10px] text-[12px] sm:text-[14px] '>
                        {project?.description?(<Link href={`${pathname}/${project?.slug}`}><button className='border cursor-pointer border-[--secondary-cl] w-full text-[--secondary] py-[7px] px-[8px] rounded-[8px]'>Read more</button></Link>):
                        (<button className='border cursor-pointer border-[--secondary-cl] w-full text-[--secondary] py-[7px] px-[8px] rounded-[8px]'>Read more</button>)}
                        
                    </div>
                </Card >
            ) : (
                <Card className='relative w-full h-[638px] cursor-pointer card-animation bg-white rounded-[15px] overflow-hidden p-[5px] grid grid-rows-[1fr,1fr,1fr] gap-[10px]'>
                    <motion.div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        // onTap={() => setHovered(!hovered)}
                        className='card-image bg-top rounded-[10px] bg-cover'
                        style={{ backgroundImage: `url(${project?.thumbnail})` }}
                        animate={{ height: hovered ? 408 : 201 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                    <div className='flex justify-between items-center pt-[10px] px-[15px]'>
                        <div className='font-[general-sans-regular] flex flex-col gap-[6px]'>
                            <p className='text-[32px] lg:text-[36px] text-black uppercase leading-[36px]'>{project?.name}</p>
                            <p className='capitalize flex gap-[8px]'><Image src={locationIcon} alt="Apartments in Thrissur" /> <span className='text-[14px] lg:text-[16px] leading-[18px] text-[#767575]'>{project?.location}</span></p>
                        </div>
                        <div>
                            <p className='capitalize rounded-[12px] text-[general-sans-medium] bg-[--secondary-cl] text-[12px] text-white py-[4px] px-[12px]'>{project?.status}</p>
                        </div>
                    </div>
                    <div className='px-[15px] py-[10px] flex flex-col gap-[20px]'>
                        <div className='flex flex-row items-start gap-[20px]'>
                            <Image src={appartmentIcon} alt="Apartments in Thrissur" />
                            <div className='flex flex-col gap-[6px] -mt-[5px]'>
                                <p className='text-[14px] lg:text-[16px] font-[general-sans-light]'>Apartment type</p>
                                <p className='text-[14px] lg:text-[16px] font-[general-sans-medium]'>{project?.bhk} BHK</p>
                            </div>
                        </div>
                        <AnimatePresence>
                            {!hovered && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        transition={{ duration: 0.10 }}
                                        className='flex flex-row items-start gap-[20px]'
                                    >
                                        <Image src={areaIcon} alt="flats in Thrissur" />
                                        <div className='flex flex-col gap-[6px] -mt-[5px]'>
                                            <p className='text-[14px] lg:text-[16px] font-[general-sans-light]'>Area range</p>
                                            <p className='text-[14px] lg:text-[16px] font-[general-sans-medium]'>{project?.area_from} - {project?.area_to} Sq.Ft</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        transition={{ duration: 0.10 }}
                                        className='flex flex-row items-start gap-[20px]'
                                    >
                                        <Image src={premiumIcon} alt="flats in Thrissur" />
                                        <div className='flex flex-col gap-[6px] -mt-[5px]'>
                                            <p className='text-[14px] lg:text-[16px] font-[general-sans-light]'>Premium luxury apartment </p>
                                            <p className='text-[14px] lg:text-[16px] font-[general-sans-medium]'>{project?.sub_name}</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        transition={{ duration: 0.10 }}
                                        className='flex flex-row items-start gap-[25px]'
                                    >
                                        <Image src={reraIcon} alt="flats in Thrissur" />
                                        <div className='flex flex-col gap-[6px] -mt-[5px]'>
                                            <p className='text-[14px] lg:text-[16px] font-[general-sans-light]'>K.RERA</p>
                                            <p className='text-[14px] lg:text-[16px] font-[general-sans-medium]'>{project?.rera_number}</p>
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className='sticky bottom-1 bg-white grid grid-cols-2 gap-[10px] px-[15px] pb-[10px] text-[12px] sm:text-[14px] '>
                       <Link href={`${pathname}/${project?.slug}`}> <button className='border border-[--secondary-cl] w-full text-[--secondary] py-[7px] px-[8px] rounded-[8px] cursor-pointer'>Read more</button></Link>
                        <button className='bg-[--secondary-cl] text-white flex flex-row gap-[8px] py-[7px] px-[8px] rounded-[8px] items-center justify-center cursor-pointer' onClick={()=>(handleOpen(),setProjectId(project.id))}>Enquire Now <Image src={arrow_outwardIcon} alt="flats in Thrissur" /></button>
                    </div>
                </Card >
            )
            }
            <EnquiryModal open={open} handleOpen={handleOpen} projectId={projectId} />
        </>
    );
}

export default ProjectCard;
