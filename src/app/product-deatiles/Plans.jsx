import React from 'react'
import PlanImage from '../../../public/images/product-view/plansImage .svg'
import Image from 'next/image'
import planTypeA from '../../../public/images/product-view/typeA.svg'
import planTypeB from '../../../public/images/product-view/typeB.svg'

function Plans() {
  return (
   <>
   <section>
    <div className="containers p-[20px]">
      <h1 className='text-[24px] font-[clash-display-medium] mb-[20px]'>Plans</h1>
      <div>
 hear i want ot 
      </div>
      <div>
        <Image src={PlanImage} alt="Plan Image" />
      </div>
    </div>
   </section>
   </>
  )
}

export default Plans