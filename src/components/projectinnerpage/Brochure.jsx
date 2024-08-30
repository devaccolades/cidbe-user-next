'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import downloadIcon from '../../../public/images/product-view/download.svg';
import arrow_outwardicon from '../../../public/icons/arrow_outward.svg';

import qrIcon from '../../../public/images/product-view/newQr.svg';
import first from '../../../public/images/product-view/icons/05.svg';
import second from '../../../public/images/product-view/icons/04.svg';
import third from '../../../public/images/product-view/icons/03.svg';
import fourth from '../../../public/images/product-view/icons/02.svg';
import fifth from '../../../public/images/product-view/icons/01.svg';
import { getBrochureDownload } from '../../services/services';
import EnquiryModal from '../EnquiryForm/EnquiryModal';

function Brochure({ data }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const overViewIcon = [
    { icon: first, title: 'K.RERA', description: data?.rera_number },
    { icon: second, title: 'Location', description: data?.location },
    { icon: third, title: 'Apartment type', description: `${data?.bhk} Bhk` },
    { icon: fourth, title: 'Status', description: data?.status },
    { icon: fifth, title: 'Area Range', description: `${data?.area_from || ""} - ${data?.area_to || ""} Sq.Ft` },
  ];

  const getBrochure = async (id) => {
    try {
      const response = await getBrochureDownload(id);

      if (response.status !== 200) {
        throw new Error('Failed to download brochure');
      }

      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${data?.name}-brochure.pdf`; // Customize the filename if needed
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the brochure:', error);
    }
  };



  return (
    <section className='bg-white rounded-t-[20px] lg:rounded-t-[100px] pt-[30px] lg:pt-[100px]' >
      <div className='containers custom-res mx-auto w-full max-w-[90%] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%]   left-side-width  '>
        <div className='flex flex-col md:flex-row gap-[20px] lg:gap-[30px]'>
          {/* Left-side content */}
          <div className='flex flex-col mb-[20px] md:mb-0 md:w-[53%] lg:w-[70%]'>
            <div className='flex-grow'>
              <h2 className='lg:text-[24px] text-[16px] font-[clash-display-medium] heading-size'>{data?.sub_name}</h2>
              <p
                className='lg:text-[16px] text-[14px] font-[general-sans-regular] leading-[27px] paragraph-size'
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />
            </div>
            <div className='mt-auto flex flex-row gap-[10px]'>
              {data?.brochure && <button onClick={() => getBrochure(data?.id)} className='mt-[20px] py-[10px] px-[18px] text-[--secondary-cl] border border-[--secondary-cl] text-[#ffff] text-[15px] inline-flex items-center gap-[8px] rounded-[6px] lg:inline-flex hidden'>
                <span>Download Brochure</span>
                <Image src={downloadIcon} alt='Download Icon' width={16} height={16} />
              </button>}
              <button onClick={handleOpen} className='mt-[20px] py-[10px] px-[18px] bg-[#052D23] text-[#ffff] text-[15px] inline-flex items-center gap-[8px] rounded-[6px] lg:inline-flex hidden'>
                <span>Enquire Now</span>
                <Image src={arrow_outwardicon} alt='Download Icon' width={16} height={16} />
              </button>
            </div>
          </div>

          {/* Right-side content */}
          <div className='md:w-[47%] lg:w-[30%] bg-[#BFD8BD] rounded-[12px] p-[30px] flex flex-col right-side-width'>
            <div className='flex-grow'>
              <div className='flex items-center justify-between mb-[20px]'>
                <h2 className='lg:text-[24px] md:text-[16px] font-[clash-display-medium] heading-size '>Project Overview</h2>
                {data?.qr_code && <Image unoptimized src={data?.qr_code} alt='QR Code' width={46} height={46} />}
              </div>
              <div>
                {overViewIcon.map((item, index) => (
                  <div key={index} className='flex items-center mb-[15px]'>
                    <div className='md:w-[30px] md:h-[30px] lg:w-auto lg:h-auto flex-shrink-0'>
                      <Image src={item.icon} alt={item.title} width={30} height={30} className='md:w-[30px] md:h-[30px] lg:w-auto lg:h-auto' />
                    </div>
                    <div className='ml-[10px] flex-grow'>
                      <h2 className='lg:text-[16px] md:text-[14px] font-[general-sans-medium] heading-size'>{item.title}</h2>
                      <p className='xl:text-[18px] lg:text-[16px] md:text-[14px] text-[14px] font-[general-sans-regular] text-res leading-[20px] paragraph-size'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-auto flex flex-col gap-[10px]'>
              {data?.brochure && <button onClick={() => getBrochure(data?.id)} className='mt-[20px] py-[10px] px-[18px] border border-[--secondary-cl] text-[--secondary-cl] text-[15px] flex items-center justify-center gap-[8px] rounded-[6px] w-full lg:hidden'>
                <span>Download Brochure</span>
                <Image src={downloadIcon} alt='Download Icon' width={16} height={16} />
              </button>}
              <button onClick={handleOpen} className='py-[10px] px-[18px] bg-[#052D23] text-[#ffff] text-[15px] flex items-center justify-center gap-[8px] rounded-[6px] w-full lg:hidden'>
                <span>Enquire Now</span>
                <Image src={arrow_outwardicon} alt='Download Icon' width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <EnquiryModal open={open} handleOpen={handleOpen} projectId={data?.id} />
    </section>
  );
}

export default Brochure;
