import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Skelten from '../../components/skeletoneffect/Skelten';
import { getBlogsApi, getSeoApi } from '../../services/services';
import './Blogs.css';

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
    </>
  )
}

