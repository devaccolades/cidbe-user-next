import React from 'react'
import EnquiryForm from '../../components/EnquiryForm/EnquiryForm'
function MapAndForm() {
    return (
        <section className='bg-[--primary-cl] -mt-[80px] lg:-mt-[95px]'>
            <h1 className='hidden'>Contact us</h1>
            <div className='containers pt-[120px] lg:pt-[186px] pb-[50px] lg:pb-[107px] grid md:grid-cols-[40vw,1fr] gap-[20px]'>
                <iframe className='rounded-[20px] w-full md:h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7845.531666030167!2d76.216387!3d10.519101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee49cbc41cf7%3A0x6a6fa18c54e21342!2sCIDBI%20(Creations%20India%20Developers%20Builders%20Infrastructures)!5e0!3m2!1sen!2sin!4v1720095817774!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='h-full'>
                    <EnquiryForm bg="bg-[#FFFFFF]" />
                </div>
            </div>
        </section>
    )
}

export default MapAndForm