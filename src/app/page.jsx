import React from 'react';
import { getSeoApi } from '../services/services';
import dynamic from 'next/dynamic'

import Header from '../layout/Header'
import AboutSection from '../app/(home)/AboutSection'
import Chairman from '../app/(home)/Chairman'
import Skelten from '../components/skeletoneffect/Skelten'
import Footer from '../layout/Footer'
import HomePageSkelten from '../components/skeletoneffect/HomePageSkelten';
import Head from 'next/head';

const FeaturedProject = dynamic(() => import('../app/(home)/FeaturedProject'), { ssr: false, loading: () => <Skelten />, });
const Blogs = dynamic(() => import('../app/(home)/Blogs'), { ssr: false, loading: () => <Skelten />, });
const CustomerReviewsAndFaq = dynamic(() => import('../app/(home)/CustomerReviewsAndFaq'), { ssr: false, loading: () => <Skelten />, });
const HeroSection = dynamic(() => import('../app/(home)/HeroSection'), { ssr: false, loading: () => <HomePageSkelten />, });

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


// FAQ schema

const faqStructuredData = {
  
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Why should you invest in flats in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Thrissur offers the perfect mix of growth, connectivity, and cultural richness, making it ideal for both living and investment. With rising demand, good infrastructure, and easy access to cities like Kochi and Coimbatore, the city is a smart choice. CIDBI’s RERA-approved 2 BHK and 3 BHK flats in Thrissur offer quality, comfort, and great value, especially for those seeking budget flats in Thrissur."
    }
  },{
    "@type": "Question",
    "name": "What should I consider when looking for a flat for sale in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When searching for a flat for sale in Thrissur, it's important to consider factors like location, builder reputation, available amenities, RERA registration, proximity to schools, hospitals, and transport hubs. Also, check whether the project offers ready-to-occupy or under-construction options, and ensure legal documentation is clear."
    }
  },{
    "@type": "Question",
    "name": "Does CIDBI have ongoing residential projects in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. One of the standout ongoing projects by CIDBI in Thrissur is CIDBI CASSIA, located at Viyyur near Daya Hospital. This ultra-premium apartment complex offers spacious 2 BHK, 3 BHK, and 4 BHK flats equipped with top-tier amenities such as an infinity pool, jogging track, open gym, advanced smart home features, and up to 70% open green space. Designed for elite living, CIDBI CASSIA blends luxury with nature and promises an elegant lifestyle in one of Thrissur’s prime residential hubs."
    }
  },{
    "@type": "Question",
    "name": "How to choose the right builder in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "When selecting a builder in Thrissur, consider factors such as their experience, reputation, and portfolio of completed projects. Check for proper licenses and certifications, the quality of materials used, and their adherence to timelines. Additionally, review customer feedback and compare quotations to ensure competitive pricing and transparency."
    }
  },{
    "@type": "Question",
    "name": "What amenities can I expect in apartments in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Apartments in Thrissur typically offer amenities such as 24/7 security, power backup, ample parking, gymnasiums, swimming pools, children's play areas, and landscaped gardens. Some premium apartments might also include clubhouses, indoor game facilities, and more."
    }
  },{
    "@type": "Question",
  "name": "What are the best areas to buy apartments in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Popular residential areas in Thrissur for buying apartments include Punkunnam, Ayyanthole, Viyyur, and East Fort. These prime localities are highly sought after due to their excellent connectivity, proximity to schools, hospitals, shopping centres, and transportation hubs. Areas like Punkunnam and East Fort offer a blend of urban convenience and peaceful surroundings, making them ideal for both families and working professionals."
    }
  },{
    "@type": "Question",
    "name": "Are there any ready to occupy flats in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, CIDBI Candor offers ready-to-occupy 2 & 3 BHK luxury flats at Punkunnam, Thrissur. Located in a prime residential area, it features top-class amenities and is designed for a refined, comfortable lifestyle. These ready-to-move flats in Thrissur are perfect for those who value convenience and immediate possession. With easy access to schools, malls, and key city spots, they’re ideal for both homebuyers and investors alike."
    }
  },{
    "@type": "Question",
    "name": "Are 2BHK or 3BHK flats more in demand in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Both 2 BHK and 3 BHK flats are in high demand in Thrissur, depending on the buyer's needs. Young families and first-time homebuyers often prefer 2 BHK flats in Thrissur for their affordability and easy maintenance. On the other hand, 3 BHK apartments in Thrissur are ideal for larger families or those seeking more space and long-term comfort. At CIDBI, we offer a range of budget flats in Thrissur that blend quality, prime location, and modern amenities to suit every lifestyle and budget."
    }
  },{
    "@type": "Question",
    "name": "How can i find budget-friendly flat for sale in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To find a budget-friendly flat for sale in Thrissur, start by researching reputable builders and checking reviews of their completed projects. Not all budget flats in Thrissur offer the same quality, so it's important to visit the site in person and inspect the construction standards. Look for projects that provide good value with essential amenities, a convenient location, and transparent pricing. Choosing a trusted builder like CIDBI ensures you get both affordability and quality in your home investment."
    }
  },{
    "@type": "Question",
    "name": "What documents are required to buy flats in Thrissur?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To buy a flat in Thrissur, you will need key documents such as the Sale Deed, Agreement to Sell, and the Building Approval Plan approved by local authorities. It's important to verify the Encumbrance Certificate to ensure the property is free from legal dues, along with the Khata or Property Tax Receipt for ownership and tax verification. The Occupancy Certificate (OC) confirms that the building is legally ready for occupation, while the Title Deed establishes the seller’s ownership rights. Additionally, buyers must provide valid identity and address proof for registration. If you're opting for a home loan, the loan sanction letter and agreement will also be required."
    }
  }]
}





export async function generateMetadata() {
  const path = '/';
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
  };
}

function Page() {
  return (
    <>
    <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedProject />
      <Chairman />
      <Blogs />
      <CustomerReviewsAndFaq />
      <Footer />
    </>
  );
}

export default Page;
