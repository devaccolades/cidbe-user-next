'use client';
import React, { useState } from 'react'
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import { getProjectDetails } from '../../../services/services';
import HeroSection from '../../../components/projectinnerpage/HeroSection';
import DeepDeatiles from '../../../components/projectinnerpage/DeepDeatiles';
import '../../../components/projectinnerpage/projectDetails.css'
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SkeletonLoader } from '../../../components/skeletoneffect/Skelten';

const Brochure = dynamic(() => import('../../../components/projectinnerpage/Brochure'), { ssr: false, loading: () => <SkeletonLoader />, })

// Create a client component wrapper
function PageContent({ data }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <title>{data?.data?.meta_title || 'Default Title'}</title>
      <meta name="description" content={data?.data?.meta_description || 'Default Description'} />
      
      {/* Hide Header when video modal is open */}
      {!isVideoModalOpen && <Header />}
      
      <HeroSection data={data?.data} images={data?.images || []} className='bg-[#ffff]' />
      <Brochure data={data?.data || {}} />
      <div className='bg-[#ffff]'>
        <DeepDeatiles
          amenities={data?.amenities}
          features={data?.features}
          amenities_images={data?.amenities_images}
          specification={data?.specification}
          blueprint_image={data?.data?.blueprint_image}
          floor_plan={data?.floor_plan}
          location={data?.data?.iframe}
          nearby={data?.nearby}
          videos={data?.videos}
          status={data?.status || []}
          bank={data?.bank}
          videosection={data?.videosection}
          className='bg-[#ffff]'
          onVideoModalOpen={() => setIsVideoModalOpen(true)}
          onVideoModalClose={() => setIsVideoModalOpen(false)}
        />
      </div>
      <Footer />
    </>
  );
}

async function fetchData(slug) {
  try {
      const res = await getProjectDetails(slug);

      if (res?.data?.StatusCode === 6000) {
          return res?.data;
      }
      return null;
  } catch (error) {
      console.error(`Error fetching project details for slug: ${slug}`, error);
      return null;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const data = await fetchData(slug);

  if (!data) {
      redirect('/featured-projects');
      return;
  }

  return <PageContent data={data} />;
}