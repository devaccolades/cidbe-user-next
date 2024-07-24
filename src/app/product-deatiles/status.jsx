import React from 'react';
import Image from 'next/image';

function Status() {
  return (
    <section>
      <div className='containers p-[20px]'>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-[20px]'>
          <h1 className='text-[24px] font-[clash-display-medium] mb-[20px] md:mb-[0] md:mr-[40px]'>
            Current Status
          </h1>
          <div className='flex gap-[10px] flex-wrap'>
            <button className='w-[80px] h-[40px] bg-white text-black font-medium rounded-[6px] flex items-center justify-center border-[1px] border-black transition-colors duration-300 hover:bg-[#052D23] hover:text-white'>
              2021
            </button>
            <button className='w-[80px] h-[40px] bg-white text-black font-medium rounded-[6px] flex items-center justify-center border-[1px] border-black transition-colors duration-300 hover:bg-[#052D23] hover:text-white'>
              2022
            </button>
            <button className='w-[80px] h-[40px] bg-white text-black font-medium rounded-[6px] flex items-center justify-center border-[1px] border-black transition-colors duration-300 hover:bg-[#052D23] hover:text-white'>
              2023
            </button>
          </div>
        </div>

        {/* Status slider */}
        <div className='mt-[20px]'>
          {/* Slider content goes here */}
        </div>
      </div>
    </section>
  );
}

export default Status;
