'use client'
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import { getProjectDetails } from '../../../services/services';
import HeroSection from '../../../components/projectinnerpage/HeroSection';
import Brochure from '../../../components/projectinnerpage/Brochure';
import DeepDeatiles from '../../../components/projectinnerpage/DeepDeatiles';
import '../../../components/projectinnerpage/projectDetails.css'
function Page({ params }) {
  const [projectDetails, setProjectDetails] = useState(
    {
      details: [], images: [], amenities: [], features: [], amenities_images: [],
      specification: [], floor_plan: [], videos: [], status: [], bank: []
    })

  const router = useRouter();
  const slug = params.slug;

  const fetchData = useCallback(async () => {
    try {
      const res = await getProjectDetails(slug);
      const { StatusCode, data, images, amenities, features, amenities_images, specification, floor_plan, videos, nearby, status, bank } = res.data;
      if (StatusCode === 6000) {
        setProjectDetails(
          {
            ...projectDetails, details: data, images: images, amenities: amenities, features: features, amenities_images: amenities_images,
            specification: specification, floor_plan: floor_plan, videos: videos, nearby: nearby, status: status, bank: bank
          }
        );
      } else {
        router.push('/featured-projects');
        setProjectDetails({
          details: [], images: [], amenities: [], features: [], amenities_images: [],
          specification: [], floor_plan: [], videos: [], status: [], bank: []
        })
      }
    } catch (error) {
      console.error(error);
      setProjectDetails({
        details: [], images: [], amenities: [], features: [], amenities_images: [],
        specification: [], floor_plan: [], videos: [], status: [], bank: []
      })
      router.push('/featured-projects');
    }
  }, [slug, router]);

  useEffect(() => {
    if (slug) {
      fetchData();
    } else {
      router.push('/featured-projects');
    }
  }, [slug, fetchData, router]);

  return (
    <>
    <title>{projectDetails?.details?.meta_title || 'Default Title'}</title>
    <meta name="description" content={projectDetails?.details?.meta_description || 'Default Description'} />
      <Header />
      <HeroSection data={projectDetails?.details} images={projectDetails?.images} className='bg-[#ffff]' />
      <Brochure data={projectDetails?.details} />
      <div className='bg-[#ffff]'>
        <DeepDeatiles
          amenities={projectDetails?.amenities}
          features={projectDetails?.features}
          amenities_images={projectDetails?.amenities_images}
          specification={projectDetails?.specification}
          blueprint_image={projectDetails?.details?.blueprint_image}
          floor_plan={projectDetails?.floor_plan}
          location={projectDetails?.details?.iframe}
          nearby={projectDetails?.nearby}
          status={projectDetails?.status}
          videos = {projectDetails?.videos}
          bank={projectDetails?.bank}
          className='bg-[#ffff]' />
      </div>
      <Footer />
    </>
  )
}

export default Page




