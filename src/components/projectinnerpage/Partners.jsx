import React from 'react';


function Partners({bank}) {
  // Array of logos

  return (
    <>
      <section className='bg-[#ffff]'>
        <div className='containers custom-res py-[20px]'>
          <h2 className='text-center text-[24px] font-[clash-display-medium]'>
            Finance Your Dream Apartment with Our Trusted Banks
          </h2>
          <div className='flex flex-wrap lg:justify-between mt-[20px]'>
            {bank.map((img, index) => (
              <div key={index} className='w-[80px] md:w-[100px] h-[80px] flex items-center justify-center m-[10px]'>
                <img src={img?.image} alt={img?.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
