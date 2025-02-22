import React from 'react'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import GalaryHeroSection from '../GalaryHeroSection'
import GalaryDetails from './GalaryDetails'
import { getGalleryDetailsApi } from '../../../services/services'
import '../Galary.css'
import { redirect } from 'next/navigation'

export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const res = await getGalleryDetailsApi(slug);    

    const { data } = res?.data || {};
    return {
      title: data?.title || 'Gallery',
      description: data?.title || 'Default Description',
    };
  } catch (error) {
    console.error(`Error fetching metadata for blog with slug: ${slug}`, error);
    return {
      title: 'Gallery',
      description: 'Default Description',
    };
  }
}

async function fetcGallaryDetailsData(slug) {
  try {
    const res = await getGalleryDetailsApi(slug);
    const { StatusCode, data } = res.data;    
    if (StatusCode === 6000) {
      return data;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching blog details for slug: ${slug}`, error);
    return null;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
    const data = await fetcGallaryDetailsData(slug);
  
    if (!data) {
      redirect('/gallery');
      return;
    }

  return (
    <>
      {/* <title>{galleryDetails.title || 'Default Title'}</title>
      <meta name="description" content={galleryDetails.meta_description || 'Default Description'} /> */}
      <Header />
      <GalaryHeroSection />
      {data.images && (
        <React.Fragment>
          <GalaryDetails galleryDetails={data} />
        </React.Fragment>
      )}
      <Footer backGround='' />
    </>
  )
}
