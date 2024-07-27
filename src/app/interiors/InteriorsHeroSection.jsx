import React from 'react'
import bg from '../../../public/images/interiors/bg.svg'
function InteriorsHeroSection() {
    return (
        <section className='relative h-[543px] lg:h-[900px] w-full bg-[--primary-cl] -mt-[80px] lg:-mt-[95px]'     style={{ backgroundImage: `url(${bg.src})` }}>
            <div className='absolute text-[64px] md:text-[100px] lg:text-[300px] font-[inter-medium] flex flex-col h-full overflow-hidden w-full items-center justify-center lg:justify-end'>
                <p className='self-start text-[#98C9A3] opacity-[30%]'>INTERIORS</p>
                <p className='self-end text-stroke'>DESIGN</p>
            </div>
            <div className='flex flex-row'>
                <div className='w-full'>
                    <div className='border rounded-[166px__166px__166px__0px] h-[600px] w-[330px] bg-red-400'/>
                    <div className='border rounded-[166px__0px] h-[400px] w-[350px] bg-red-400'/>
                </div>
                <div className='w-full'>
                    sdfsa
                </div>
            </div>
        </section>
    )
}

export default InteriorsHeroSection