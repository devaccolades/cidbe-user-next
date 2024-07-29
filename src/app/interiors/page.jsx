
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import dynamic from 'next/dynamic'
import InteriorsHeroSection from './InteriorsHeroSection'
import { getSeoApi } from '../../services/services';
import './Interiors.css'
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

// export async function generateMetadata() {
//   const path = '/interiors';
//   const responseData = await fetchSeoData(path);
//   const { meta_title, meta_description } = responseData;
//   return {
//     title: meta_title,
//     description: meta_description,
//   };
// }

function page() {
  return (
    <>
    <Header/>
    <InteriorsHeroSection/>
    <div className='h-[50px]'>

    </div>
    <Footer/>
    </>
  )
}

export default page