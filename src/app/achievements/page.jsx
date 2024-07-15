import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Skelten from '../../components/skeletoneffect/Skelten';
import dynamic from 'next/dynamic';
import './Achievements.css'
const AchievementsListing = dynamic(() => import('./AchievementsListing'), { ssr: false,loading:() => <Skelten/>, });
function page() {
    return (
        <>
            <Header bgPrimary={true} />
            <AchievementsListing/>
            <Footer />
        </>
    )
}

export default page