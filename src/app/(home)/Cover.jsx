
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Chairman from './Chairman'
import dynamic from 'next/dynamic'
import Skelten from '../../components/skeletoneffect/Skelten'

const FeaturedProject = dynamic(() => import('./FeaturedProject'), { ssr: false,loading:() => <Skelten/>, });
const Blogs = dynamic(() => import('./Blogs'), { ssr: false,loading:() => <Skelten/>, });
const CustomerReviewsAndFaq = dynamic(() => import('./CustomerReviewsAndFaq'), { ssr: false,loading:() => <Skelten/>, });


function Cover() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <FeaturedProject/>
    <Chairman/>
    <Blogs/>
    <CustomerReviewsAndFaq/>
    <Footer/>
    </>
  )
}

export default Cover