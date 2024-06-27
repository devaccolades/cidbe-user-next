'use client'
import './Style.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logo from "../../public/images/logo/logo.svg";
import dropdownIcon from "../../public/icons/dropdown.svg";
import dropdownyellowIcon from "../../public/icons/dropdown-yellow.svg";
import dropdownGreenIcon from "../../public/icons/dropdown-greeen.svg";
import mobileDropdownIcon from "../../public/icons/mobile_dropdown.svg";
import mobileDropupIcon from "../../public/icons/mobile_dropup.svg";
import menuIcon from "../../public/icons/menu.svg"
import menuGreenIcon from "../../public/icons/menu-green.svg"
import closeIcon from "../../public/icons/close.svg"
function Header() {
    const [hovered, setHovered] = useState({ about: false, project: false });
    const [scrolling, setScrolling] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [dropDown, setdropDown] = useState({ project: false, about: false });
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setHovered({ project: false, about: false });
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [hovered]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolling(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const modalVariants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.3,
            },
        },
    };

    const linkItemVariants = {
        hidden: { opacity: 0, y: '50%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"

            },
        },
        exit: {
            opacity: 0,
            y: '50%',
            transition: {
                duration: 0.1,
                ease: "easeOut"
            }
        },
    };


    const navLinksVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    return (
        <>
            <header className='main-area sticky top-1 z-50 '>
                <section className={`nav-bar lg:container ${scrolling ? 'bg-white' : 'bg-transparent'} transition-all duration-500 `}>
                    <Image src={logo} alt='logo' className='logo' />
                    <div className='lap-navbar'>
                        <ul className={`${scrolling ? 'text-[#052D23]' : 'text-white'}`}>
                            <li className={`${scrolling}? 'isscroll':''`}>Home</li>
                            <li
                                onMouseEnter={() => setHovered({ project: false, about: true })}
                                className={`relative ${hovered.about ? 'active' : ''}`}
                                ref={menuRef}
                            >
                                About us
                                <Image src={hovered.about ? dropdownyellowIcon : scrolling ? dropdownGreenIcon : dropdownIcon} alt="dropdown icon" />
                                {hovered.about && (
                                    <div className="card absolute w-[285px] p-[10px] top-full left-0 mt-2 bg-white shadow-md z-10">
                                        <a class="flip-animate"><span data-hover="Who we are">Who we are</span></a>
                                        <a class="flip-animate"><span data-hover="CSR">CSR</span></a>
                                    </div>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => setHovered({ about: false, project: true })}
                                className={`relative ${hovered.project ? 'active' : ''}`}
                                ref={menuRef}
                            >
                                Projects
                                <Image src={hovered.project ? dropdownyellowIcon : scrolling ? dropdownGreenIcon : dropdownIcon} alt="dropdown icon" />
                                {hovered.project && (
                                    <div className="card absolute w-[285px] top-full left-0 mt-2 bg-white shadow-md z-10">
                                        <a class="flip-animate"><span data-hover="Featured project">Featured project</span></a>
                                        <a class="flip-animate"><span data-hover="Completed project">Completed project</span></a>
                                        <a class="flip-animate"><span data-hover="Upcoming projects">Upcoming projects</span></a>
                                        <a class="flip-animate"><span data-hover="Ready to occupy">Ready to occupy</span></a>
                                        <a class="flip-animate"><span data-hover="0ngoing project">0ngoing project</span></a>
                                    </div>
                                )}
                            </li>
                            <li>Gallery</li>
                            <li>Interiors</li>
                            <li>Blog</li>
                            <li>Achievements</li>
                            <li>Contact us</li>

                        </ul>
                    </div>
                    <div className='mobile-navbar cursor-pointer' onClick={() => setShowMobileNav(!showMobileNav)}>
                        <Image src={scrolling?menuGreenIcon:menuIcon} alt="menu-icon" />
                    </div>
                    {showMobileNav &&
                        <motion.div
                            className="fixed inset-0 flex justify-center z-50 items-center bg-[#BFD8BD]"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div onClick={() => setShowMobileNav(!showMobileNav)} className="absolute top-12 right-11 text-white cursor-pointer">
                                <Image src={closeIcon} alt='closing-icon' />
                            </div>
                            <motion.div
                                className="relative bg-[#BFD8BD]"
                                variants={navLinksVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"

                            >
                                <div className="flex flex-col gap-5 items-center justify-center h-full font-[general-sans-medium]">
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                    >
                                        Home
                                    </motion.p>
                                    <motion.div
                                        className={`cursor-pointer ${dropDown.about ? 'text-[#052D23]' : 'text-[#4C956C]'}  text-[20px] flex flex-col items-center gap-[10px]`}
                                        variants={linkItemVariants}
                                        onClick={() => setdropDown({ project:false, about: !dropDown.about })}
                                    >
                                        <span className="flex items-center">
                                            About Us <Image src={dropDown.about ? mobileDropupIcon : mobileDropdownIcon} alt="dropdown icon" />
                                        </span>
                                        {dropDown.about && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex flex-col gap-4 mt-2 text-center "
                                            >
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">Who we are</p>
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">CSR</p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                    <motion.div
                                        className={`cursor-pointer ${dropDown.project ? 'text-[#052D23]' : 'text-[#4C956C]'}  text-[20px] flex flex-col items-center gap-[10px]`}
                                        variants={linkItemVariants}
                                        onClick={() => setdropDown({ about:false, project: !dropDown.project })}
                                    >
                                        <span className="flex items-center">
                                            Projects <Image src={dropDown.project ? mobileDropupIcon : mobileDropdownIcon} alt="dropdown icon" />
                                        </span>
                                        {dropDown.project && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="flex flex-col gap-4 mt-2 text-center "
                                            >
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">Completed project</p>
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">Upcoming projects</p>
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">Ready to occupy</p>
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">0ngoing project</p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                    >
                                        Gallery
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                    >
                                        Interiors
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                    >
                                        Blog
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                    >
                                        Achievements
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                    >
                                        Contact us
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                    >
                                        Careers
                                    </motion.p>
                                </div>
                            </motion.div>
                        </motion.div>
                    }
                </section>
            </header>
        </>
    )
}

export default Header
