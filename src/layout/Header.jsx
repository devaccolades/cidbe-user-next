"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    // dropdown: [
    //   { label: "Our Story", href: "/about/our-story" },
    //   { label: "Our Team", href: "/about/team" },
    //   { label: "Vision & Mission", href: "/about/vision-mission" },
    // ],
  },
  {
    label: "Projects",
    // href: "/projects",
    dropdown: [
      { label: "Ongoing Projects", href: "/ongoing-projects" },
      { label: "Completed Projects", href: "/completed-projects" },
      { label: "Featured Projects", href: "/featured-projects" },
      { label: "Ready to Occupy", href: "/ready-to-occupy-flats-thrissur" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Interiors", href: "/interiors" },
  { label: "Blog", href: "/blogs" },
  { label: "Acheivements", href: "/achievements" },
  { label: "Contact Us", href: "/contact-us" },
];

const contactNumbers = ["+918137873330", "+919496933000"];

export default function Navbar() {
  const pathname = usePathname();
  const contactNumber = contactNumbers[new Date().getMonth() % contactNumbers.length];
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    if (!pathname) return;

    const currentPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

    if (currentPath === "/") {
      setActiveLink("Home");
      return;
    }

    const directMatch = navLinks.find(
      (link) =>
        link.href &&
        (currentPath === link.href || currentPath.startsWith(`${link.href}/`))
    );

    if (directMatch) {
      setActiveLink(directMatch.label);
      return;
    }

    const dropdownMatch = navLinks.find((link) =>
      link.dropdown?.some(
        (item) =>
          currentPath === item.href || currentPath.startsWith(`${item.href}/`)
      )
    );

    setActiveLink(dropdownMatch ? "Projects" : "Home");
  }, [pathname]);

  const openDropdown = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="relative z-50 flex w-full items-center gap-3 px-4 py-4 md:px-8">
      {/* Logo (separate pill, outside nav links) */}
      <Link
        href="/"
        className="flex w-fit flex-none shrink-0 items-center rounded-[10px] bg-white/95 px-2 md:px-5 py-2 shadow-md backdrop-blur-sm"
      >
        <Image
          src="/images/home/cidb.svg"
          alt="CIDBI"
          width={110}
          height={44}
          className="h-6 w-auto object-contain md:h-8"
          priority
        />
      </Link>

      {/* Nav links pill (desktop/large screens only) */}
      <nav className="hidden w-fit flex-none items-center gap-6 rounded-[10px] bg-white/95 px-4 lg:py-[14px] shadow-md backdrop-blur-sm md:px-6 lg:flex xl:gap-8">
        {/* Desktop Nav Links */}
        <ul className="flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && openDropdown(link.label)}
              onMouseLeave={() => link.dropdown && scheduleClose()}
            >
              {link.href ? (
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`flex items-center font-[inter-regular] gap-1 whitespace-nowrap text-[14px] leading-[20px] transition-colors hover:text-[#185D41] hover:font-bold ${
                    activeLink === link.label
                      ? "text-[#185D41] font-bold"
                      : "text-[#000000] hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <Image
                      src="/images/home/down.svg"
                      alt="Dropdown"
                      width={14}
                      height={14}
                      className={`shrink-0 transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              ) : (
                <button
                  onClick={() => setActiveLink(link.label)}
                  className={`flex items-center font-[inter-regular] gap-1 whitespace-nowrap text-[14px] leading-[20px] transition-colors ${
                    activeLink === link.label
                      ? "text-[#185D41] font-bold"
                      : "text-[#000000] hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <Image
                      src="/images/home/down.svg"
                      alt="Dropdown"
                      width={14}
                      height={14}
                      className={`shrink-0 transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              )}

              {/* Dropdown */}
              {link.dropdown && (
                <div
                  className={`absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    activeDropdown === link.label
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className="overflow-hidden rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 font-[inter-regular] text-[14px] leading-[20px]  transition-colors hover:bg-neutral-50 hover:text-emerald-800"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right side: Call Now + WhatsApp + Hamburger (hamburger only on mobile/tablet) */}
      <div className="ml-auto flex w-fit flex-none shrink-0 items-center gap-1 md:gap-2">
        <a
          href={`tel:${contactNumber}`}
          className="flex items-center gap-2 rounded-[10px] font-[inter-regular] bg-emerald-950 px-2 py-2 md:py-3 text-[12px] md:text-[14px] font-medium text-white shadow-md transition-colors hover:bg-emerald-900 md:px-5"
        >
          <Image src="/images/home/fon.svg" alt="phone" width={16} height={16} className="h-[16px] w-[16px]"/>
          Call Now
        </a>
        <a
          href={`https://wa.me/${contactNumber.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-[10px] bg-emerald-950 shadow-md transition-colors hover:bg-emerald-900"
        >
          <Image
            src="/images/home/msg.svg"
            alt="WhatsApp"
            width={22}
            height={22}
            className="h-[22px] w-[22px] object-contain"
          />
        </a>

        {/* Hamburger (mobile/tablet only) */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-8 w-8 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-[10px] bg-white/95 text-neutral-800 shadow-md backdrop-blur-sm lg:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu (nav links dropdown, shown below the bar on mobile/tablet) */}
      {mobileOpen && (
        <div className="absolute inset-x-4 top-[72px] rounded-2xl bg-white p-4 shadow-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <div className="flex items-center justify-between">
                  {link.href ? (
                    <Link
                      href={link.href}
                      onClick={() => setActiveLink(link.label)}
                      className="block flex-1 py-2 text-[15px] font-medium text-neutral-700"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setActiveLink(link.label)}
                      className="block flex-1 py-2 text-left text-[15px] font-medium text-neutral-700"
                    >
                      {link.label}
                    </button>
                  )}
                  {link.dropdown && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown((prev) =>
                          prev === link.label ? null : link.label
                        )
                      }
                      className="p-2 text-neutral-500"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}
                </div>
                {link.dropdown && activeDropdown === link.label && (
                  <ul className="ml-3 flex flex-col gap-1 border-l border-neutral-200 pl-3">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block py-1.5 text-sm text-neutral-500"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}