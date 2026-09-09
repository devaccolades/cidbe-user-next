'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

const chaletFaqs = [
  ['Where is CIDBI Chalet located in Thrissur?', 'CIDBI Chalet is located at Kannamkulangara in Thrissur. The property sits just one kilometre from Sakthan Stand. Swaraj Round is only two kilometres away from home.'],
  ['What unit types are available at CIDBI Chalet?', 'If you want a 3 & 2 BHK Flat for sale in Thrissur, Chalet offers smart layouts. Unit sizes range from 994 to 1,137 square feet.'],
  ['Is CIDBI Chalet a RERA-registered housing project?', 'Yes, CIDBI Chalet is an official RERA-registered project with number K-RERA/PRJ/TSR/059/2021. Buyers looking for reliable Apartments For Sale In Thrissur can invest with total peace of mind.'],
  ['What amenities does CIDBI Chalet offer to residents?', "Residents enjoy a rooftop party area, a kids' play zone and an elegant lobby. The building also features biometric card access, solar power and full CCTV surveillance."],
  ['How good is the travel connectivity around Kannamkulangara?', 'Connectivity is exceptionally fast and easy from this location. You can reach the Thrissur Railway Station and KSRTC bus stand in just five minutes by car.'],
  ['Are there hospitals close to CIDBI Chalet?', 'Yes, Sun Hospital is only five hundred meters away from the building. Several other renowned hospitals in Thrissur are also reachable within a few minutes.'],
  ['Why choose CIDBI for buying flats in Thrissur?', 'CIDBI is a trusted CREDAI builder holding an ISO 9001:2015 certification. We always maintain high construction standards and deliver quality homes on time to happy families.'],
  ['Which ongoing CIDBI project is open for new investment?', 'Buyers seeking a 3 & 2 BHK Flat for sale in Thrissur can explore our ongoing project, CIDBI Cassia. It sits conveniently near Daya Hospital with sample flats available.'],
]

const candorFaqs = [
  ['Where are the CIDBI Candor luxury apartments located?', 'CIDBI Candor offers premium flats in Punkunnam, Thrissur. These modern homes sit near Swaraj Round. You get very quick access to the local railway station daily.'],
  ['What sizes are the flats for sale at CANDOR in Punkunnam?', 'These 2 BHK and 3 BHK apartments range from 1196 to 2233 square feet. The spacious layouts provide bright sunlight and fresh air for your family.'],
  ['What amenities do these premium properties provide?', 'Residents enjoy a rooftop swimming pool and a modern AC health club. The property also features a sky lounge and a safe play area for kids.'],
  ['How secure are the ready to occupy apartments?', 'Your family stays completely safe with constant security guards and CCTV cameras. We also use smart biometric entry and automatic gates to ensure peace of mind.'],
  ['Do these luxury flats in Thrissur have backup power?', 'Yes, the property features a fully automatic generator backup for lifts and emergencies. We also utilize a five kilowatt green solar panel system for cleaner energy.'],
  ['Are there good hospitals near these residential flats?', 'Top healthcare facilities sit right around the corner from your new home. Ashwini Hospital is just one kilometre away, while Saroja Multi Speciality Hospital is nearby.'],
  ['Is it easy to find schools near CIDBI Candor?', 'Yes, families love these premium properties because excellent education is very close. The famous Devamatha Public School sits just two kilometres away from your front door.'],
  ['How is the travel connectivity around these Punkunnam apartments?', 'Buying property here offers amazing travel connectivity to major local city roads. The Punkunnam Railway Station is only 300 meters away, making your daily trips easy.'],
]

export default function ProjectFaq({ isChaletPage }) {
  const [isOpend, setOpen] = useState(null)
  const faqs = isChaletPage ? chaletFaqs : candorFaqs

  return (
    <div className='py-[45px] about-main-bg'>
      <div className='containers '>
        <h2 className='font-[clash-display-medium] text-[20px] lg:text-[32px]'>FAQ</h2>
        <div className='text-black'>
          {faqs.map(([question, answer], index) => (
            <div key={index}>
              <div
                className='flex justify-between flex-row cursor-pointer'
                onClick={() => setOpen(isOpend === index ? null : index)}
              >
                <p className='font-[general-sans-regular] font-bold text-[12px] lg:text-[16px] py-[14px] w-[90%]'>
                  {question || ''}
                </p>
              </div>
              <AnimatePresence>
                {isOpend === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'
                  >
                    <p className='font-[general-sans-regular] text-[12px] lg:text-[16px] py-[8px] leading-[18px] lg:leading-[24px]'>
                      {answer || ''}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className='border-t-[1px] border-t-[--secondary-cl]' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
