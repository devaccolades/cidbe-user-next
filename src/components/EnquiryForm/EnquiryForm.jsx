import React from 'react';

function EnquiryForm({ bg = 'bg-transparent' }) {
  return (
    <div className={`h-full rounded-[20px] text-[--secondary-cl] p-[30px] md:p-[40px] ${bg}`}>
      <div className='flex flex-col gap-[17px] md:gap-[20px]'>
        <p className='font-[general-sans-regular] text-[16px] md:text-[20px] leading-[28px] md:leading-[28px]'>WE ARE READY TO ANSWER ALL YOUR QUESTIONS</p>
        <div className='flex flex-col gap-[10px]'>
          <div className='flex flex-col gap-[6px]'>
            <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Name</p>
            <input className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter your name' type="text" />
          </div>
          <div className='flex flex-col gap-[6px]'>
            <p className='font-[inter-regular] text-[11px] md:text-[14px]'>WhatsApp No</p>
            <input className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter whatsApp number' type="text" />
          </div>
          <div className='flex flex-col gap-[6px]'>
            <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Email</p>
            <input className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter email address' type="text" />
          </div>
          <div className='flex flex-col gap-[6px]'>
            <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Message</p>
            <textarea rows="5" placeholder='' className='w-full px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' >
            </textarea>
          </div>
          <button className='w-full bg-[--secondary-cl] font-[general-sans-semibold] rounded-[6px] p-[10px] text-[15px] text-white'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default EnquiryForm;
