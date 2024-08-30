import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import dynamic from 'next/dynamic';
// import ProjectListing from '../../components/projectlisting/ProjectListing'
import Skelten from '../../components/skeletoneffect/Skelten';
import { getFeaturedProject, getSeoApi } from '../../services/services';
const ProjectListing = dynamic(() => import('../../components/projectlisting/ProjectListing'), { ssr: false,loading:() => <Skelten/>, });


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
  const path = '/featured-projects';
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
  };
}

function page() {
  const title = "Featured Projects"

  return (
   <>
   <Header bgPrimary={true}/>
   <ProjectListing title={title}/>
   <Footer backGround=''/>
   </>
)
}

export default page