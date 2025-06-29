"use client";

import Image from "next/image";
import templeImage from "../../../public/images/aprtments_thrissur/temple.png";
import onGoing from "../../../public/images/aprtments_thrissur/onGoing.jpg";
import ready from "../../../public/images/aprtments_thrissur/ready.jpg";
import completed from "../../../public/images/aprtments_thrissur/complete.jpg";
import featured from "../../../public/images/aprtments_thrissur/featured.jpg";
import Link from "next/link";


const features = [
  {
    title:
      "Prime residential locations close to schools, hospitals, and shopping centers.",
    icon: "/images/aprtments_thrissur/icon1.svg",
  },
  {
    title: "Dedicated customer service and post-handover support.",
    icon: "/images/aprtments_thrissur/icon2.svg",
  },
  {
    title: "Earthquake-resistant and Vaastu-compliant designs.",
    icon: "/images/aprtments_thrissur/icon3.svg",
  },
  {
    title: "Transparent documentation and on-time delivery.",
    icon: "/images/aprtments_thrissur/icon4.svg",
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
            alt="Temple Sketch"
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
            CIDBI Apartments stand out for their commitment to quality and
            attention to detail. Each apartment is crafted to blend modern
            design with the cultural essence of Thrissur, creating a perfect
            living space for families and individuals. With a focus on
            sustainability and energy efficiency, our projects are designed to
            minimize environmental impact while maximizing comfort. From premium
            fittings to innovative layouts, every aspect is carefully planned to
            provide a superior living experience. Choosing CIDBI means choosing
            a trusted partner for your dream home in Thrissur.
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
                    alt=""
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
