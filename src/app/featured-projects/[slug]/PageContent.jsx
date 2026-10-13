'use client';
import React, { useState } from 'react';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import HeroSection from '../../../components/projectinnerpage/HeroSection';
import '../../../components/projectinnerpage/projectDetails.css';
import dynamic from 'next/dynamic';
import { SkeletonLoader } from '../../../components/skeletoneffect/Skelten';
import FeaturedFaq from './FeaturedFaq';
import OngoingInnerFaq from '../../ongoing-projects/[slug]/OngoingInnerFaq';
import ProjectFaq from '../../completed-projects/[slug]/ProjectFaq';

const Brochure = dynamic(() => import('../../../components/projectinnerpage/Brochure'), { ssr: false, loading: () => <SkeletonLoader />, });
const DeepDeatiles = dynamic(() => import('../../../components/projectinnerpage/DeepDeatiles'), { ssr: false, loading: () => <SkeletonLoader />, });

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
      "@type": "BreadcrumbList",
      "@id": "https://cidbi.com/projects/premium-flats-cassia#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cidbi.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Featured Projects",
          "item": "https://cidbi.com/featured-projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Cassia – Premium Flats in Thrissur",
          "item": "https://cidbi.com/projects/premium-flats-cassia"
        }
      ]
  }]
};

export default function PageContent({ data }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const slug = data?.data?.slug;
  const isCandorPage = slug === 'flats-in-punkunnam-candor';
  const isChaletPage = slug === 'chalet';
  const isCredencePage = slug === 'credence';
  const isClarionPage = slug === 'clarion';
  const showFeaturedFaq = [
    'premium-flats-cassia',
    'flats-in-thrissur-candor',
  ].includes(slug);

  return (
    <>
      {data?.data?.slug === "premium-flats-cassia" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}

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
          isCandorPage={isCandorPage}
          isChaletPage={isChaletPage}
          isCredencePage={isCredencePage}
          className='bg-[#ffff]'
          onVideoModalOpen={() => setIsVideoModalOpen(true)}
          onVideoModalClose={() => setIsVideoModalOpen(false)}
        />
        {showFeaturedFaq && <FeaturedFaq schemaUrl={`/projects/${slug}`} />}
        {slug === 'chembaka-premium-luxury-apartments' && (
          <OngoingInnerFaq slug={slug} />
        )}
        {(isCandorPage || isChaletPage || isCredencePage || isClarionPage) && (
          <ProjectFaq
            isChaletPage={isChaletPage}
            isCredencePage={isCredencePage}
            isClarionPage={isClarionPage}
            slug={slug}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
