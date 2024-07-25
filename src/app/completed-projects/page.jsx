import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import dynamic from 'next/dynamic';
import Skelten from '../../components/skeletoneffect/Skelten';
const ProjectListing = dynamic(() => import('../../components/projectlisting/ProjectListing'), { ssr: false,loading:() => <Skelten/>, });
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
  const path = '/completed-projects';
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
  };
}


function page() {
  const title = "Completed Projects"
  return (
   <>
   <Header bgPrimary={true}/>
   <ProjectListing title={title}/>
   <Footer backGround=''/>
   </>
)
}

export default page