import React from 'react'

function ProductVideo() {
  return (
   <>
  <section className='bg-[#ffff]'>
  <div className="containers custom-res sm:px-5 md:px-[100px] l:px-[150px] py-12">
        <div className="relative w-full rounded-[20px] overflow-hidden" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Cf8NcIiIZeU" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
  </section>
</>
  )
}

export default ProductVideo