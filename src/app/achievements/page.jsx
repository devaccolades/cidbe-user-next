import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Skelten from '../../components/skeletoneffect/Skelten';
import dynamic from 'next/dynamic';
import './Achievements.css'
import { getSeoApi } from '../../services/services';
const AchievementsListing = dynamic(() => import('./AchievementsListing'), { ssr: false, loading: () => <Skelten />, });

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
  const path = '/achievements';
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
            <Header bgPrimary={true} />
            <AchievementsListing />
            <Footer />
        </>
    )
}

export default page