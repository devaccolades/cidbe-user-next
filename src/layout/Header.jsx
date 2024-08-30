'use client'
import './Style.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/images/logo/logo.svg";
import dropdownIcon from "../../public/icons/dropdown.svg";
import dropdownyellowIcon from "../../public/icons/dropdown-yellow.svg";
import dropdownGreenIcon from "../../public/icons/dropdown-greeen.svg";
import mobileDropdownIcon from "../../public/icons/mobile_dropdown.svg";
import mobileDropupIcon from "../../public/icons/mobile_dropup.svg";
import menuIcon from "../../public/icons/menu.svg"
import menuGreenIcon from "../../public/icons/menu-green.svg"
import closeIcon from "../../public/icons/close.svg"
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
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            !event.target.closest('.dropdown-item')
        ) {
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

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWFG6894" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
            <header className='main-area sticky top-1 z-50 '>
                <section className={`nav-bar ${bgPrimary ? "bgPrimary" : ""} lg:container ${scrolling ? 'bg-white' : 'bg-transparent'} transition-all duration-500 `}>
                    <Image src={logo} alt='logo' className='logo cursor-pointer' onClick={() => router.push('/')} />
                    <div className='lap-navbar'>
                        <ul className={`${scrolling ? 'text-[#052D23]' : bgPrimary ? 'text-[--secondary-cl]' : 'text-white'}`}>
                            <Link href="/"><li className={`${scrolling ? 'isscroll' : ''} ${pathname === '/' && 'active'}`}>Home</li></Link>
                            <li
                                onMouseEnter={() => setHovered({ project: false, about: true })}
                                className={`relative ${hovered.about || pathname === '/about-us' || pathname === '/csr' ? 'active' : ''}`}
                                ref={menuRef}
                            >
                                About Us
                                <Image src={hovered.about ? bgPrimary ? dropdownGreenIcon : dropdownyellowIcon : scrolling ? dropdownGreenIcon : bgPrimary ? dropdownGreenIcon : dropdownIcon} alt="dropdown icon" />
                                {hovered.about && (
                                    <div className="card absolute w-[285px] p-[10px] top-full left-0 mt-2 bg-white shadow-md z-10">
                                        <a className="flip-animate dropdown-item" onClick={() => router.push('/about-us')}>
                                            <span data-hover="Who we are">Who we are</span>
                                        </a>
                                        <a className="flip-animate dropdown-item" onClick={() => router.push('/csr')}>
                                            <span data-hover="CSR">CSR</span>
                                        </a>
                                    </div>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => setHovered({ about: false, project: true })}
                                className={`relative ${hovered.project ||
                                    pathname === '/featured-projects' ||
                                    pathname === '/completed-projects' ||
                                    pathname === '/upcoming-projects' ||
                                    pathname === '/ready-to-occupy' ||
                                    pathname === '/ongoing-projects'
                                    ? 'active' : ''}`}
                                ref={menuRef}
                            >
                                Projects
                                <Image src={hovered.project ? bgPrimary ? dropdownGreenIcon : dropdownyellowIcon : scrolling ? dropdownGreenIcon : bgPrimary ? dropdownGreenIcon : dropdownIcon} alt="dropdown icon" />
                                {hovered.project && (
                                    <div className="card absolute w-[285px] top-full left-0 mt-2 bg-white shadow-md z-10">
                                        <a className="flip-animate dropdown-item" onClick={() => router.push('/featured-projects')}>
                                            <span data-hover="Featured project">Featured project</span>
                                        </a>
                                        <a className="flip-animate dropdown-item" onClick={() => router.push('/completed-projects')}>
                                            <span data-hover="Completed project">Completed project</span>
                                        </a>
                                        <a className="flip-animate dropdown-item" onClick={() => router.push('/upcoming-projects')}>
                                            <span data-hover="Upcoming projects">Upcoming projects</span>
                                        </a>
                                        <a className="flip-animate dropdown-item" onClick={() => router.push('/ready-to-occupy')}>
                                            <span data-hover="Ready to occupy">Ready to occupy</span>
                                        </a>
                                        <a className="flip-animate dropdown-item" onClick={() => router.push('/ongoing-projects')}>
                                            <span data-hover="Ongoing project">Ongoing project</span>
                                        </a>
                                    </div>
                                )}
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
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                        onClick={() => router.push('/')}
                                    >
                                        Home
                                    </motion.p>
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
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" onClick={() => router.push('/about-us')}>Who we are</p>
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" onClick={() => router.push('/csr')}>CSR</p>
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
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" onClick={() => router.push('/featured-projects')}>Featured project</p>
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" onClick={() => router.push('/completed-projects')}>Completed project</p>
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" onClick={() => router.push('/upcoming-projects')}>Upcoming projects</p>
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" onClick={() => router.push('/ready-to-occupy')}>Ready to occupy</p>
                                                <p className="cursor-pointer text-[#052D23] font-[general-sans-regular] text-[16px]" onClick={() => router.push('/ongoing-projects')}>Ongoing project</p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                        onClick={() => router.push('/gallery')}                                    >
                                        Gallery
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                        onClick={() => router.push('/interiors')}
                                    >
                                        Interiors
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                        onClick={() => router.push('/blogs')}
                                    >
                                        Blog
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                        onClick={() => router.push('/achievements')}
                                    >
                                        Achievements
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                        onClick={() => router.push('/contact-us')}
                                    >
                                        Contact Us
                                    </motion.p>
                                    <motion.p
                                        className="cursor-pointer text-[#4C956C] text-[20px]"
                                        variants={linkItemVariants}
                                        onClick={() => router.push('/careers')}
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
    );
}

export default Header;
