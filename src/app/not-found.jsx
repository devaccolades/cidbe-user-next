'use client'
import Image from 'next/image';
import React from 'react';
import notfoundIcon from "../../public/images/pagenotfound/notfound1.svg";
import connectionIcon from "../../public/images/pagenotfound/connection.svg";
import { useRouter } from 'next/navigation';

function NotFound() {
  const router = useRouter()
  return (
    <section className='h-screen w-full bg-[b9e1f5] flex flex-col justify-center gap-[16px]'>
      <Image src={notfoundIcon} alt='flats in Thrissur' className='mx-auto px-[30px]'/>
      <Image src={connectionIcon} alt='flat for sale in Thrissur' className='pe-[20px]'/>
     <div className='flex  flex-col justify-center px-[10px] items-center w-full gap-[10px]'>
     <p className='text-[24px] font-[general-sans-semibold]'>Page Not Found</p>
      <p className='text-[16px] text-[#77707F] font-[general-sans-regular] text-center lg:w-[30%]'>Sorry, the page you're looking for does not exist or has been moved 
      please go back to the Home page</p>
     </div>
     <div className='flex justify-center items-center px-[20px]'>
     <button onClick={()=>router.push('/')} className='text-white bg-[--secondary-cl] text-[16px] rounded-[40px] h-[55px] w-[400px]'>Go back Home</button>
     </div>
    </section>
  );
}

export default NotFound;
