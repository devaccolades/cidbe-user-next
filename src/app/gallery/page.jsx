
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import dynamic from 'next/dynamic'
import Skelten from '../../components/skeletoneffect/Skelten'
import GalaryHeroSection from './GalaryHeroSection'
import './Galary.css'
// import GalaryListing from './GalaryListing'
const GalaryListing = dynamic(() => import('./GalaryListing'), { ssr: false,loading:() => <Skelten/>, });

import { getSeoApi } from '../../services/services';

async function fetchSeoData(path) {
  let data = {};
  try {
    const res = await getSeoApi(path);
    data = res.data.data[0];
  } catch (error) {
    console.log(error);
  }
  return data;
}

export async function generateMetadata() {
  const path = '/gallery';
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
  };
}

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