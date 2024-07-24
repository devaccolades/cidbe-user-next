import React from 'react';
import Image from 'next/image';
import downloadIcon from '../../../public/images/product-view/download.svg';
import qrIcon from '../../../public/images/product-view/newQr.svg';
import first from '../../../public/images/product-view/1.svg';
import second from '../../../public/images/product-view/2.svg';
import third from '../../../public/images/product-view/3.svg';
import fourth from '../../../public/images/product-view/4.svg';
import fifth from '../../../public/images/product-view/5.svg';

function Brochure() {
  const overViewIcon = [
    { icon: first, title: 'K.RERA', description: 'K.RERA/PRJ/TSR/043/2023' },
    { icon: second, title: 'Location', description: 'Near Daya Hospital' },
    { icon: third, title: 'Other Title', description: 'Description for another item' },
    { icon: fourth, title: 'Status', description: 'Ongoing' },
    { icon: fifth, title: 'Area Range', description: '1,220 - 2,377 Sq.Ft' },
  ];

  return (
    <>
      <section className="pt-[80px] pb-[80px] bg-[#FFFFFF] rounded-tl-[80px] rounded-tr-[80px]">
        <div className="containers">
          <div className="flex gap-4">
            <div className="w-[70%] lg:pt-[0px] p-4">
              <h1 className="text-[24px] font-[clash-display-medium]">PREMIUM SMART HOMES</h1>
              <p className="text-[18px] font-[general-sans-regular]">
                Envisaged to be truly an epitome of excellence, CIDBI CASSIA offers a superlative living space in an area of around an acre. CIDBI CASSIA offers 2, 3 & 4 BHK Ultra Premium Apartments for the elite class complimented with the best of amenities you have desired. The key feature of project comprises up to 70% open space with all the premium amenities. The project comprises all the premium amenities like 15m long infinity pool, 250m jogging track, Open gym, automated homes, face detected access controlled lobby, seniors corner, video door phone, electric car charging provision, reticulated gas line, smart lighting system, Home theatre, access controlled lift, one BHK guest apartment and many more……..Coming up at Viyyur, Near Daya Hospital, one of the most wanted residential hubs of Thrissur City. CIDBI CASSIA ensures quick access to all the vibes and ensures an elegant lifestyle at a prominent location. Moreover the project is designed with open space in mind for the experience of premium lifestyle alongside the calmness and serene beauty of nature. We are proud to say that all of our projects have been timely delivered with the experience and expertise of team CIDBI that has bagged us the reputation that we enjoy today.
              </p>
              <button className="px-[24px] py-[10px] bg-[#052D23] mt-4 text-white text-[15px] font-[general-sans-regular] rounded-[6px] flex items-center gap-2 hover:bg-[#034C39] transition-colors duration-300">
                Download Brochure
                <Image src={downloadIcon} alt="Download Icon" />
              </button>
            </div>
            <div className="w-[30%] rounded-[12px] bg-[#BFD8BD] p-[40px]">
              <div className='flex justify-between items-center mb-4'>
                <h1 className='text-[24px] font-[clash-display-medium]'>Project Overview</h1>
                <Image src={qrIcon} alt="QR Icon" />
              </div>
              <div>
                {overViewIcon.map((item, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <Image src={item.icon} alt={item.title} className=" mr-4" />
                    <div>
                      <h2 className="text-[18px] font-[general-sans-medium]">{item.title}</h2>
                      <p className="text-[18px] font-[general-sans-light] whitespace-nowrap">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brochure;