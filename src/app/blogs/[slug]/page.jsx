'use client'
import React, { useEffect, useState, useCallback } from 'react';
import BlogCarousel from './BlogCarousel';
import BlogDescription from './BlogDescription';
import MoreBlogs from './MoreBlogs';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import '../../../app/globals.css';
import { getBlogDetailsApi } from '../../../services/services';
import { useRouter } from 'next/navigation';

const Page = ({ params }) => {

  const router = useRouter();
  const slug = params.slug;
  const [blogDetails, setBlogDetails] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const res = await getBlogDetailsApi(slug);
      const { StatusCode, data } = res.data;
      if (StatusCode === 6000) {
        setBlogDetails(data);
      } else {
        router.push('/blogs');
      }
    } catch (error) {
      console.error(error);
      router.push('/blogs');
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
      <title>{blogDetails.meta_title || 'Default Title'}</title>
      <meta name="description" content={blogDetails.meta_description || 'Default Description'} />
      <Header />
      {blogDetails.title && (
        <React.Fragment>
          <BlogCarousel blogDetails={blogDetails} />
          <BlogDescription body={blogDetails?.body} />
        </React.Fragment>
      )}
      <MoreBlogs />
      <div className='bg-white'>
        <Footer backGround='' />
      </div>
    </>
  );
};

export default React.memo(Page);
