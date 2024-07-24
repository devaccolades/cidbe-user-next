import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import dynamic from 'next/dynamic';
import Skelten from '../../components/skeletoneffect/Skelten';
const ProjectListing = dynamic(() => import('../../components/projectlisting/ProjectListing'), { ssr: false,loading:() => <Skelten/>, });
function page() {
  const title = "Ongoing Projects"
  const OngoingProjects = [
    { id: 1, name: "CASSIA", sub_name: "PREMIUM SMART HOMES", rera_number: "K.RERA/PRJ/TSR/043/2023", location: "Near Daya Hospital", thumbnail: 'images/home/carorcel1.jpeg', thumbnail_alt: "", bhk: "2,3 & 4", area_from: "1,159", area_to: "2,548", status: "ongoing" },
    { id: 2, name: "CANDOR", sub_name: "A PROMISE OF HAPPINESS", rera_number: "K-RERA/PRJ/112/2021", location: "Poonkunnam", thumbnail: 'images/home/carorcel2.webp', thumbnail_alt: "", bhk: "2 & 3", area_from: "1,196", area_to: "1,769", status: "ready to occupy" },
    { id: 3, name: "CHALET", sub_name: "Exclusive Amenities", rera_number: "K-RERA/PRJ/TSR/059/2021", location: "Kannamkulangara", thumbnail: 'images/home/carorcel3.jpeg', thumbnail_alt: "", bhk: "2 & 3", area_from: "992", area_to: "1,340", status: "ready to occupy" },
]
  return (
   <>
   <Header bgPrimary={true}/>
   <ProjectListing title={title} data={OngoingProjects}/>
   <Footer backGround=''/>
   </>
)
}

export default page