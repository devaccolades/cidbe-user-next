import React from 'react'
import bg from '../../../public/images/interiors/bg.svg'
import herobg1 from '../../../public/images/interiors/herobg-1.png'
import herobg2 from '../../../public/images/interiors/herobg-2.png'
function InteriorsHeroSection() {
    return (
        <section className='relative h-[543px] lg:h-[900px] w-full bg-[--primary-cl] -mt-[80px] lg:-mt-[95px]' style={{ backgroundImage: `url(${bg.src})` }}>
            <div className='absolute text-[64px] md:text-[100px] lg:text-[300px] font-[inter-medium] flex flex-col h-full overflow-hidden w-full items-center justify-center lg:justify-end'>
                <p className='self-start text-[#98C9A3] opacity-[30%] -ms-[1%]'>INTERIORS</p>
                <p className='self-end text-stroke -me-[1%]'>DESIGN</p>
            </div>
            <div className='flex flex-row h-full gap-[20px]'>
                <div className='w-full flex flex-col justify-end pb-[2%] items-center h-full '>
                    <div className='border-[5px] border-[--primary-cl] z-10 rounded-[166px__166px__166px__0px] -ms-[29%] h-[600px] w-[330px] bg-cover bg-center' style={{ backgroundImage: `url(${herobg1.src})` }}/>
                    <div className='-z-0 -mt-[32%] rounded-[0px__158px] h-[400px] w-[600px] bg-cover bg-center' style={{ backgroundImage: `url(${herobg2.src})` }}/>
                </div>
                <div className='w-full text-[--secondary-cl] flex flex-col justify-center items-start gap-[20px]' >
                    <h1 className='text-[20px] lg:text-[65px] leading-[24px] lg:leading-[78px] font-[clash-display-medium] xl:w-[60%]'>Expert service in interior design</h1>
                    <p className='text-[14px] lg:text-[24px] leading-[18px] lg:leading-[32px] font-[general-sans-regular] xl:w-[60%]'>Our aim is to create a comfortable and cosy home for our clients, providing interior design solutions which are practical and beautiful.</p>
                </div>
            </div>
        </section>
    )
}

export default InteriorsHeroSection