import React from 'react'
import BlogCarousel from './BlogCarousel'
import BlogDescription from './BlogDescription'
import MoreBlogs from './MoreBlogs'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import '../../../app/globals.css'
function page({params}) {
    const slug = params.slug
  return (
    <>
    <Header/>
    <BlogCarousel/>
    <BlogDescription/>
    <MoreBlogs/>
    <div className='bg-white '>
    <Footer backGround=''/>
    </div>

    </>
  )
}

export default page