import Image from 'next/image'
import React from 'react'
import green from '../../../public/images/aprtments_thrissur/Vector.png';

const Herogreen = () => {
    return (
        <div className="relative -mt-[178px] lg:-mt-[265px] w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
            {/* Background Image */}
            <Image
                src={green}
                alt="Green background"
                fill
                className="object-cover"
                priority
            />


            {/* Content */}
            <div className="relative z-20 text-center pt-24">
                <h1 className="text-white font-[general-sans-regular] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                    Apartments & Flats for
                    <br />
                    Sale in Thrissur
                </h1>
            </div>
        </div>
    )
}

export default Herogreen
