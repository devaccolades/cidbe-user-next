'use client'
import './Style.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/images/logo/logo.png";
import dropdownIcon from "../../public/icons/dropdown.webp";
import dropdownyellowIcon from "../../public/icons/dropdown-yellow.webp";
import dropdownGreenIcon from "../../public/icons/dropdown-greeen.webp";
import mobileDropdownIcon from "../../public/icons/mobile_dropdown.webp";
import mobileDropupIcon from "../../public/icons/mobile_dropup.webp";
import menuIcon from "../../public/icons/menu.webp"
import menuGreenIcon from "../../public/icons/menu-green.webp"
import closeIcon from "../../public/icons/close.webp"
import { usePathname, useRouter } from 'next/navigation';
import Head from 'next/head';
import Script from 'next/script';

function Header({ bgPrimary = false }) {
    const router = useRouter();
    const pathname = usePathname();
    const [hovered, setHovered] = useState({ about: false, project: false });
    const [scrolling, setScrolling] = useState(pathname === '/about-us' ? true : false);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [dropDown, setdropDown] = useState({ project: false, about: false });

    useEffect(() => {
        const handleScroll = () => {

            if (pathname === '/about-us') {
                setScrolling(true)
            } else {
                const scrollTop = window.scrollY;
                setScrolling(scrollTop > 0);
            }
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
            <Head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PWFG6894');
            `,
                    }}
                />
                {/* End Google Tag Manager */}
            </Head>
            <meta name="google-site-verification" content="2jg94-S0O0YXT4aejzDkxO-7XCdJKcEk06Oh6woEsC0" />
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PWFG6894');
          `,
                }}
            />

            <Script
                id="gtag-base"
                strategy="afterInteractive" // Load after the page has loaded
                src={`https://www.googletagmanager.com/gtag/js?id=AW-10797634861`}
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10797634861');`}
            </Script>

            <noscript
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWFG6894" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
            />
            <header className='main-area sticky top-1 z-50'>
                <section className={`nav-bar ${bgPrimary ? "bgPrimary" : ""} lg:container ${scrolling ? 'bg-white' : 'bg-transparent'} transition-all duration-500 `}>
                    <Link href='/'><Image src={logo} alt='logo' className='logo cursor-pointer' /></Link>
                    <div className='lap-navbar'>
                        <ul className={`${scrolling ? 'text-[#052D23]' : bgPrimary ? 'text-[--secondary-cl]' : 'text-white'}`}>
                            <Link href="/"><li className={`${scrolling ? 'isscroll' : ''} ${pathname === '/' && 'active'}`}>Home</li></Link>
                            <li className={`menu-hover relative group ${hovered.about || pathname === '/about-us' || pathname === '/csr' ? 'active' : ''}`}
                                onMouseEnter={() => setHovered({ project: false, about: true })}
                                onMouseLeave={() => setHovered({ project: false, about: false })}>
                                About Us
                                <Image src={hovered.about ? bgPrimary ? dropdownGreenIcon : dropdownyellowIcon : scrolling ? dropdownGreenIcon : bgPrimary ? dropdownGreenIcon : dropdownIcon} alt="dropdown icon" />
                                <div className="absolute card flex flex-col gap-[1px] left-[-10%] top-[100%] w-[285px] bg-white shadow-lg rounded-lg invisible group-hover:visible group-hover:translate-y-1 transition-all duration-200 ease-in-out z-10 ">
                                    <Link href='/about-us' className="flip-animate dropdown-item" >
                                        <span data-hover="Who we are">Who we are</span>
                                    </Link>
                                    <Link href='/csr' className="flip-animate dropdown-item">
                                        <span data-hover="CSR">CSR</span>
                                    </Link>
                                </div>
                            </li>
                            <li className={`menu-hover relative group ${hovered.project ||
                                pathname === '/featured-projects' ||
                                pathname === '/completed-projects' ||
                                pathname === '/upcoming-projects' ||
                                pathname === '/ready-to-occupy' ||
                                pathname === '/ongoing-projects'
                                ? 'active' : ''}`}
                                onMouseEnter={() => setHovered({ project: true, about: false })}
                                onMouseLeave={() => setHovered({ project: false, about: false })}>

                                Projects
                                <Image src={hovered.project ? bgPrimary ? dropdownGreenIcon : dropdownyellowIcon : scrolling ? dropdownGreenIcon : bgPrimary ? dropdownGreenIcon : dropdownIcon} alt="dropdown icon" />
                                <div className="absolute card flex flex-col gap-[1px] left-[-10%] top-[100%] w-[285px] bg-white shadow-lg rounded-lg invisible group-hover:visible group-hover:translate-y-1 transition-all duration-200 ease-in-out z-10 ">
                                    <Link href='/featured-projects' className="flip-animate dropdown-item">
                                        <span data-hover="Featured project">Featured project</span>
                                    </Link>
                                    <Link href='/completed-projects' className="flip-animate dropdown-item">
                                        <span data-hover="Completed project">Completed project</span>
                                    </Link>
                                    <Link href='/upcoming-projects' className="flip-animate dropdown-item">
                                        <span data-hover="Upcoming projects">Upcoming projects</span>
                                    </Link>
                                    <Link href='/ready-to-occupy' className="flip-animate dropdown-item">
                                        <span data-hover="Ready to occupy">Ready to occupy</span>
                                    </Link>
                                    <Link href='/ongoing-projects' className="flip-animate dropdown-item">
                                        <span data-hover="Ongoing project">Ongoing project</span>
                                    </Link>
                                </div>
                            </li>
                            <Link href='/gallery'><li className={`${pathname === '/gallery' && "active"}`}>Gallery</li></Link>
                            <Link href="/interiors"><li className={`${pathname === '/interiors' && "active"}`}>Interiors</li></Link>
                            <Link href={'/blogs'}><li className={`${pathname === '/blogs' && "active"}`}>Blog</li></Link>
                            <Link href={'/achievements'}><li className={`${pathname === '/achievements' && "active"}`}>Achievements</li></Link>
                            <Link href='/contact-us'><li className={`${pathname === '/contact-us' && "active"}`}>Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className='mobile-navbar cursor-pointer' onClick={() => setShowMobileNav(!showMobileNav)}>
                        <Image src={scrolling ? menuGreenIcon : bgPrimary ? menuGreenIcon : menuIcon} alt="menu-icon" />
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
                                    <Link href='/'>
                                        <motion.p
                                            className="cursor-pointer text-[#4C956C] text-[20px]"
                                            variants={linkItemVariants}
                                        >
                                            Home
                                        </motion.p>
                                    </Link>
                                    <motion.div
                                        className={`cursor-pointer ${dropDown.about ? 'text-[#052D23]' : 'text-[#4C956C]'}  text-[20px] flex flex-col items-center gap-[10px]`}
                                        variants={linkItemVariants}
                                        onClick={() => setdropDown({ project: false, about: !dropDown.about })}
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
                                                <Link href='/about-us'><p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">Who we are</p></Link>
                                                <Link href='/csr'><p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">CSR</p></Link>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                    <motion.div
                                        className={`cursor-pointer ${dropDown.project ? 'text-[#052D23]' : 'text-[#4C956C]'}  text-[20px] flex flex-col items-center gap-[10px]`}
                                        variants={linkItemVariants}
                                        onClick={() => setdropDown({ about: false, project: !dropDown.project })}
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
                                                <Link href="/featured-projects">
                                                    <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" >Featured project</p>
                                                </Link>
                                                <Link href="/completed-projects">
                                                    <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" >Completed project</p>
                                                </Link>
                                                <Link href="/upcoming-projects">
                                                    <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" >Upcoming projects</p>
                                                </Link>
                                                <Link href="/ready-to-occupy">
                                                    <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">Ready to occupy</p>
                                                </Link>
                                                <Link href="/ongoing-projects">
                                                    <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]">Ongoing project</p>
                                                </Link>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                    <Link href='/gallery'><motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants} >
                                        Gallery
                                    </motion.p>
                                    </Link>
                                    <Link href='/interiors'>
                                        <motion.p
                                            className="cursor-pointer text-[#4C956C] text-[20px]"
                                            variants={linkItemVariants}>
                                            Interiors
                                        </motion.p>
                                    </Link>
                                    <Link href='/blogs'>
                                        <motion.p
                                            className="cursor-pointer text-[#4C956C] text-[20px]"
                                            variants={linkItemVariants}>
                                            Blog
                                        </motion.p>
                                    </Link>
                                    <Link href='/achievements'>
                                        <motion.p
                                            className="cursor-pointer text-[#4C956C] text-[20px]"
                                            variants={linkItemVariants}
                                        >
                                            Achievements
                                        </motion.p>
                                    </Link>
                                    <Link href='/contact-us'>
                                        <motion.p
                                            className="cursor-pointer text-[#4C956C] text-[20px]"
                                            variants={linkItemVariants}
                                        >
                                            Contact Us
                                        </motion.p>
                                    </Link>
                                    <Link href='/careers'>
                                        <motion.p
                                            className="cursor-pointer text-[#4C956C] text-[20px]"
                                            variants={linkItemVariants}
                                        >
                                            Careers
                                        </motion.p>
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    }
                </section>
            </header>
        </>
    );
}

export default Header;
