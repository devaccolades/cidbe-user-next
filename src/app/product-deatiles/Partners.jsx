import React from 'react';
import first from '../../../public/images/product-view/partners Icons/1.svg';
import second from '../../../public/images/product-view/partners Icons/2.svg';
import third from '../../../public/images/product-view/partners Icons/3.svg';
import fourth from '../../../public/images/product-view/partners Icons/4.svg';
import fifth from '../../../public/images/product-view/partners Icons/5.svg';
import sixth from '../../../public/images/product-view/partners Icons/6.svg';
import seventh from '../../../public/images/product-view/partners Icons/7.svg';
import eighth from '../../../public/images/product-view/partners Icons/8.svg';
import ninth from '../../../public/images/product-view/partners Icons/9.svg';

function Partners() {
  // Array of logos
  const logos = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];

  return (
    <>
      <section className='bg-[#ffff]'>
        <div className='containers custom-res py-[20px]'>
          <h1 className='text-center text-[24px] font-[clash-display-medium]'>
            Finance Your Dream Apartment with Our Trusted Banks
          </h1>
          <div className='flex flex-wrap justify-between mt-[20px]'>
            {logos.map((logo, index) => (
              <div key={index} className='w-[100px] h-[80px] flex items-center justify-center m-[10px]'>
                <img src={logo.src} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
