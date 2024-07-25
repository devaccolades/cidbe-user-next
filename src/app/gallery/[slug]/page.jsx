'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import GalaryHeroSection from '../GalaryHeroSection'
import GalaryDetails from './GalaryDetails'
import { getGalleryDetailsApi } from '../../../services/services'
import { useRouter } from 'next/navigation'
function Page({ params }) {
  const slug = params.slug
  const router = useRouter();
  const [galleryDetails, setGalleryDetails] = useState({})
  const fetchData = useCallback(async () => {
    try {
      const res = await getGalleryDetailsApi(slug);
      const { StatusCode, data } = res.data;
      if (StatusCode === 6000) {
        setGalleryDetails(data);
      } else {
        router.push('/gallery');
      }
    } catch (error) {
      console.error(error);
      router.push('/gallery');
    }
  }, [slug, router]);

  useEffect(() => {
    if (slug) {
      fetchData();
    } else {
      router.push('/blogs');
    }
  }, [slug, fetchData, router]);

  return (
    <>
      <title>{galleryDetails.title || 'Default Title'}</title>
      <meta name="description" content={galleryDetails.meta_description || 'Default Description'} />
      <Header />
      <GalaryHeroSection />

      {galleryDetails.images && (
        <React.Fragment>
          <GalaryDetails galleryDetails={galleryDetails} />
        </React.Fragment>
      )}
      <Footer backGround='' />
    </>
  )
}

export default React.memo(Page)