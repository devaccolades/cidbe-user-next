import React from 'react'


function ProductVideo({ videos }) {
  return (
    <>
      {videos.length > 0 &&(<section className='bg-[#ffff]'>
        <div className="containers custom-res sm:px-5 md:px-[100px] l:px-[150px] py-12">
          <div className="relative video iframe w-full rounded-[20px] overflow-hidden" style={{ paddingTop: '56.25%' }}
            dangerouslySetInnerHTML={{ __html: videos[0]?.url }}
          >

          </div>
        </div>
      </section>)}
    </>
  )
}

export default ProductVideo