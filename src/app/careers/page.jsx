import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import HeroSection from './HeroSection'
import CareerListing from './CareerListing'
function page() {
    return (
        <>
            <Header bgPrimary={true} />
            <HeroSection/>
            <CareerListing/>
            <Footer />
        </>
    )
}

export default page