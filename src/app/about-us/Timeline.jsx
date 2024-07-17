import React from 'react';
import './Timeline.css'; 
import Image from 'next/image';
import branch from '../../../public/images/about/braches.svg'
import buildOne from '../../../public/images/about/aboutSlider1.jpg'
function Timeline() {
  return (
    <>
   <section className="containers py-8 flex overflow-x-auto">
  <div className="relative">
    <div className="relative" style={{ left: '145px', top: '110px' }}>
      <Image src={buildOne} alt="timeline relative" style={{ width: '147px', height: '111px' }} />
    </div>
    <Image src={branch} alt="branches" />
    <div className="relative" style={{ left: '20px',bottom:'110px' ,float:'right'}}>
      <Image src={buildOne} alt="timeline relative" style={{ width: '147px', height: '111px' }} />
    </div>
  </div>

</section>


    </>
  );
}

export default Timeline;
