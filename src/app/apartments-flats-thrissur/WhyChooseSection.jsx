"use client";

import Image from "next/image";
import templeImage from "../../../public/images/aprtments_thrissur/temple.webp";
import onGoing from "../../../public/images/aprtments_thrissur/onGoing.webp";
import ready from "../../../public/images/aprtments_thrissur/ready.webp";
import completed from "../../../public/images/aprtments_thrissur/complete.webp";
import featured from "../../../public/images/aprtments_thrissur/featured.webp";
import Link from "next/link";


const features = [
  {
    title:
      "Prime Locations with Excellent Connectivity ",
    icon: "/images/aprtments_thrissur/icon1.webp",
  },
  {
    title: "More Open Space with Outstanding Amenities",
    icon: "/images/aprtments_thrissur/icon2.webp",
  },
  {
    title: "Quality Construction & Eco-Friendly Design.",
    icon: "/images/aprtments_thrissur/icon3.webp",
  },
  {
    title: "On Time Delivery and Transparency in Dealing",
    icon: "/images/aprtments_thrissur/icon4.webp",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white md:py-12">
      <div className="w-full lg:w-[94%] mr-auto flex flex-col lg:flex-row items-center justify-start sm:gap-10 max-w-[1660px] xxl:mx-auto xxl:px-24">
        {/* Left Image */}
        <div className="relative w-full h-[327px] md:h-[500px] 2xl:h-[600px]">
          <Image
            src={templeImage}
            alt="Flat for sale in Thrissur"
            fill
            className="object-cover object-center 2xl:object-contain"
            priority
          />

          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Right Content */}
        <div className="font-[general-sans-regular] w-[92%] mx-auto sm:mr-auto">
          <h2 className="text-[32px] leading-[40px] md:text-[36px] md:max-w-xl text-gray-500 mb-3 font-semibold">
            Why Choose{" "}
            <span className="text-black font-semibold">
              CIDBI Apartments in Thrissur?
            </span>
          </h2>
          <p className="text-gray-600 text-[13px] leading-normal md:text-[14px] max-w-4xl mb-8 ">
          CIDBI, with over 40 years of building experience, has the ability to face any challenges in construction field and deliver projects on time. Moreover, CIDBI has no sub contracts in any stage of development. Each apartment is designed and built to create a perfect living space for families and individuals. CIDBI’s projects are designed to minimize environmental impact while maximizing comfort. They come with solar power plants and waste management system. CIDBI also uses premium quality materials for doors, windows, plumbing and electrical fittings. More open space for echo friendly living is the main feature of apartments in Thrissur by CIDBI.
          </p>

          {/* Features */}
          {/* Features */}
          <div className="flex flex-wrap gap-4">
            {features.map((item, i) => (
              <div
                key={i}
                className="w-full sm:w-[48%] p-4 rounded-lg text-sm text-gray-800 hover:bg-green-100 hover:text-green-900 transition-colors duration-200"
                style={{ boxShadow: "0px 0px 25.8px 0px #0000001F" }}
              >
                <div className="flex items-start gap-3">
                  <Image
                    src={item.icon}
                    alt="flat for sale in Thrissur"
                    width={24}
                    height={24}
                    className="shrink-0 mt-1"
                  />
                  <p className="text-[16px]">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[92%] md:w-full grid grid-cols-2 md:grid-cols-4 gap-[12px] py-4 lg:max-w-[1610px] mx-auto sm:px-6 lg:px-24">
        <Link href="/ongoing-projects" className="cursor-pointer">
          <div
            style={{
              backgroundImage: `url(${onGoing.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Flat for sale in Thrissur"
            className="relative w-full h-[150px] flex justify-center items-center rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 p-4 text-white text-[20px] text-center font-bold">
              Ongoing Projects
            </div>
          </div>
        </Link>

        <Link href="/ready-to-occupy" className="cursor-pointer">

          <div
            style={{
              backgroundImage: `url(${ready.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Flats in thrissur"
            className="relative w-full h-[150px] flex justify-center items-center rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 p-4 text-white text-[20px] text-center font-bold">
              Ready to Occupy
            </div>
          </div>
        </Link>

        <Link href="/completed-projects" className="cursor-pointer">

          <div
            style={{
              backgroundImage: `url(${completed.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative w-full h-[150px] flex justify-center items-center rounded-xl overflow-hidden"
            role="img"
            aria-label="Apartments in Thrissur"
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 p-4 text-white text-[20px] text-center font-bold">
              Completed Projects
            </div>
          </div>
        </Link>

        <Link href="/featured-projects" className="cursor-pointer">

        <div
          style={{
            backgroundImage: `url(${featured.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="relative w-full h-[150px] flex justify-center items-center rounded-xl overflow-hidden"
          role="img"
            aria-label="Flat for sale in Thrissur"
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-20 p-4 text-white text-[20px] text-center font-bold">
            Featured Projects
          </div>
        </div>
        </Link>

      </div>
    </section>
  );
}
