import React from 'react';
import Image from 'next/image';
import downloadIcon from '../../../public/images/product-view/download.svg';
import qrIcon from '../../../public/images/product-view/newQr.svg';
import first from '../../../public/images/product-view/icons/05.svg';
import second from '../../../public/images/product-view/icons/04.svg';
import third from '../../../public/images/product-view/icons/03.svg';
import fourth from '../../../public/images/product-view/icons/02.svg';
import fifth from '../../../public/images/product-view/icons/01.svg';

function Brochure() {
  const overViewIcon = [
    { icon: first, title: 'K.RERA', description: 'K.RERA/PRJ/TSR/043/2023' },
    { icon: second, title: 'Location', description: 'Near Daya Hospital' },
    { icon: third, title: 'Other Title', description: 'Description for another item' },
    { icon: fourth, title: 'Status', description: 'Ongoing' },
    { icon: fifth, title: 'Area Range', description: '1,220 - 2,377 Sq.Ft' },
  ];

  return (
    <section className='bg-white ' style={{paddingTop:'100px',borderRadius:'100px 100px 0px 0px'}}>
      <div className='containers custom-res mx-auto px-[20px] w-full max-w-[90%] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%]   left-side-width  '>
        <div className='flex flex-col md:flex-row gap-[20px] lg:gap-[30px]'>
          {/* Left-side content */}
          <div className='flex flex-col mb-[20px] md:mb-0 md:w-[53%] lg:w-[70%]'>
            <div className='flex-grow'>
              <h1 className='lg:text-[24px] md:text-[16px] font-[clash-display-medium] heading-size'>PREMIUM SMART HOMES</h1>
              <p className='lg:text-[18px] md:text-[14px] sm:text-[12px] font-[general-sans-regular] leading-[27px] paragraph-size'>
                Envisaged to be truly an epitome of excellence, CIDBI CASSIA offers a superlative living space in an area of around an acre. CIDBI CASSIA offers 2, 3 & 4 BHK Ultra Premium Apartments for the elite class complimented with the best of amenities you have desired. The key feature of project comprises up to 70% open space with all the premium amenities. The project comprises all the premium amenities like 15m long infinity pool, 250m jogging track, Open gym, automated homes, face detected access controlled lobby, seniors corner, video door phone, electric car charging provision, reticulated gas line, smart lighting system, Home theatre, access controlled lift, one BHK guest apartment and many more……..Coming up at Viyyur, Near Daya Hospital, one of the most wanted residential hubs of Thrissur City. CIDBI CASSIA ensures quick access to all the vibes and ensures an elegant lifestyle at a prominent location. Moreover the project is designed with open space in mind for the experience of premium lifestyle alongside the calmness and serene beauty of nature. We are proud to say that all of our projects have been timely delivered with the experience and expertise of team CIDBI that has bagged us the reputation that we enjoy today.
              </p>
            </div>
            <div className='mt-auto'>
              <button className='mt-[20px] py-[10px] px-[18px] bg-[#052D23] text-[#ffff] text-[15px] inline-flex items-center gap-[8px] rounded-[6px] lg:inline-flex hidden'>
                <span>Download Brochure</span>
                <Image src={downloadIcon} alt='Download Icon' width={16} height={16} />
              </button>
            </div>
          </div>

          {/* Right-side content */}
          <div className='md:w-[47%] lg:w-[30%] bg-[#BFD8BD] rounded-[12px] p-[30px] flex flex-col right-side-width'>
            <div className='flex-grow'>
              <div className='flex items-center justify-between mb-[20px]'>
                <h1 className='lg:text-[24px] md:text-[16px] font-[clash-display-medium] heading-size '>Project Overview</h1>
                <Image src={qrIcon} alt='QR Code' width={46} height={46} />
              </div>
              <div>
                {overViewIcon.map((item, index) => (
                  <div key={index} className='flex items-center mb-[15px]'>
                    <div className='md:w-[30px] md:h-[30px] lg:w-auto lg:h-auto flex-shrink-0'>
                      <Image src={item.icon} alt={item.title} width={30} height={30} className='md:w-[30px] md:h-[30px] lg:w-auto lg:h-auto' />
                    </div>
                    <div className='ml-[10px] flex-grow'>
                      <h1 className='lg:text-[18px] md:text-[14px] font-[general-sans-medium] heading-size'>{item.title}</h1>
                      <p className='lg:text-[14px] md:text-[12px] sm:text-[12px] font-[general-sans-regular] text-res leading-[20px] paragraph-size'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-auto'>
              <button className='mt-[20px] py-[10px] px-[18px] bg-[#052D23] text-[#ffff] text-[15px] flex items-center justify-center gap-[8px] rounded-[6px] w-full lg:hidden'>
                <span>Download Brochure</span>
                <Image src={downloadIcon} alt='Download Icon' width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brochure;
