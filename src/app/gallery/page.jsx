
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import dynamic from 'next/dynamic'
import Skelten from '../../components/skeletoneffect/Skelten'
import GalaryHeroSection from './GalaryHeroSection'
import GalaryListing from './GalaryListing'
import './Galary.css'

function page() {
  return (
    <>
    <Header/>
    <GalaryHeroSection/>
    <GalaryListing/>
    <Footer/>
    </>
  )
}

export default page