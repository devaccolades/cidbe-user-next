import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Skelten from '../../components/skeletoneffect/Skelten';
import dynamic from 'next/dynamic';
import './Blogs.css'
const BlogListing = dynamic(() => import('./BlogListing'), { ssr: false,loading:() => <Skelten/>, });
function page() {
    return (
        <>
            <Header bgPrimary={true} />
            <BlogListing />
            <Footer backGround='#FFFFFF' />
        </>
    )
}

export default page