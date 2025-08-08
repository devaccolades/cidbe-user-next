import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Skelten from '../../components/skeletoneffect/Skelten';
import { getBlogsApi, getSeoApi } from '../../services/services';
import './Blogs.css';
import Script from 'next/script';

const BlogListing = dynamic(() => import('./BlogListing'),
 { ssr: false, 
  loading: () => <Skelten />, 
});


export async function generateMetadata() {
  try {
    const res = await getSeoApi('/blogs');
    const { data } = res.data;

    return {
      title: data?.[0]?.meta_title || 'Blogs',
      description: data?.[0]?.meta_description || 'Default Description',
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Blogs',
      description: 'Default Description',
    };
  }
}


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cidbi.com/blogs/2-bhk-flat-in-thrissur-the-perfect-choice"
  },
  "headline": "2 BHK Flat in Thrissur: Perfect Choice for Small Families",
  "image": "https://cidbi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.7a355fa9.webp&w=3840&q=75",  
  "author": {
    "@type": "Organization",
    "name": "Cidbi Builders",
    "url": "https://cidbi.com/"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Cidbi",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cidbi.com/_next/static/media/logo.5484c0aa.svg"
    }
  },
  "datePublished": "2023-07-25"
}

export default async function Page({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || '1', 10);
  const pageSize = 8;

  let blogs = [];
  let totalCount = 0;

  try {
    const res = await getBlogsApi(currentPage, pageSize);
    const { StatusCode, data, total_count } = res?.data || {};

    if (StatusCode === 6000) {
      blogs = data || [];
      totalCount = total_count || 0;
    } else {
      console.warn('Unexpected StatusCode. Falling back to empty blogs.');
    }
  } catch (error) {
    console.error('Error loading blogs:', error);
  }
  return (
    <>
      <Header bgPrimary={true} />
      <BlogListing data={blogs} totalCount={totalCount} currentPage={currentPage} pageSize={pageSize} />
      <Footer backGround='#FFFFFF' />
      <Script
        id="seo-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

