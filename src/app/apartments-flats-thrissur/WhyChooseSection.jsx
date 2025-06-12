'use client';

import Image from 'next/image'
import templeImage from '../../../public/images/aprtments_thrissur/temple.png'

const features = [
  {
    title: 'Prime residential locations close to schools, hospitals, and shopping centers.',
    icon: '/images/aprtments_thrissur/icon1.svg',
  },
  {
    title: 'Dedicated customer service and post-handover support.',
    icon: '/images/aprtments_thrissur/icon2.svg',
  },
  {
    title: 'Earthquake-resistant and Vaastu-compliant designs.',
    icon: '/images/aprtments_thrissur/icon3.svg',
  },
  {
    title: 'Transparent documentation and on-time delivery.',
    icon: '/images/aprtments_thrissur/icon4.svg',
  },
];



export default function WhyChooseSection() {
    return (
        <section className="w-full bg-white py-12">
            <div className="w-[92%] 2xl:w-[85%] mr-auto flex  items-center justify-between">

                {/* Left Image */}
                <div className="relative w-full h-[500px]">
                    <Image
                        src={templeImage}
                        alt="Temple Sketch"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Content */}
                <div className='font-[general-sans-regular]' >
                    <h2 className="text-lg md:text-[40px] text-gray-500 mb-3 ">Why Choose <span className="text-black font-semibold">CIDBI Apartments in Thrissur?</span></h2>
                    <p className="text-gray-600 text-[16px] md:text-base max-w-4xl mb-8 leading-[100%]">
                        CIDBI Apartments stand out for their commitment to quality and attention to detail. Each apartment is crafted to blend modern design with the cultural essence of Thrissur, creating a perfect living space for families and individuals. With a focus on sustainability and energy efficiency, our projects are designed to minimize environmental impact while maximizing comfort. From premium fittings to innovative layouts, every aspect is carefully planned to provide a superior living experience. Choosing CIDBI means choosing a trusted partner for your dream home in Thrissur.
                    </p>

                    {/* Features */}
                    {/* Features */}
                    <div className="flex flex-wrap gap-4">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="w-full sm:w-[48%] p-4 rounded-lg text-sm text-gray-800 bg-gray-100 hover:bg-green-100 hover:text-green-900 transition-colors duration-200"
                            >
                                <div className="flex items-start gap-3">
                                    <Image src={item.icon} alt="" width={24} height={24} className="shrink-0 mt-1" />
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
