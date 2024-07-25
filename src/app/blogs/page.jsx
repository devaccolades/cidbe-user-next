import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Skelten from '../../components/skeletoneffect/Skelten';
import dynamic from 'next/dynamic';
import './Blogs.css'
const BlogListing = dynamic(() => import('./BlogListing'), { ssr: false,loading:() => <Skelten/>, });

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
  const path = '/blogs';
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
            <BlogListing />
            <Footer backGround='#FFFFFF' />
        </>
    )
}

export default page