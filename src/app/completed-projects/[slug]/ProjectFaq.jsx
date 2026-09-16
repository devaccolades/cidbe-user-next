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

const credenceFaqs = [
  ['1. Where is the CIDBI Credence project located?', 'CIDBI Credence offers premium Apartments in Thrissur located near Jubilee Mission. This prime location gives residents very quick and easy access to the central city core.'],
  ['2. What types of homes does Credence offer?', 'We provide a beautiful mix of living spaces for modern families. You can easily find spacious 3 BHK Apartments in Thrissur or comfortable two-bedroom homes here.'],
  ['3. Are there large units available for families?', 'Yes, our Type A layout offers massive 3 BHK Apartments in Thrissur. These units cover 1,615 square feet to give larger families plenty of living space.'],
  ['4. Do you have properties in other nearby areas?', 'Yes, we also offer highly popular Apartments in Kannamkulangara for buyers. Our completed Chalet project there brings you smart layouts and truly peaceful city living.'],
  ['5. What amenities do residents enjoy at Credence?', 'Buyers seeking Apartments in Thrissur enjoy a relaxing rooftop swimming pool here. We also provide a modern air-conditioned health club and a safe children\'s play area.'],
  ['6. Is the property safe and secure for families?', 'Yes, these premium Apartments in Thrissur feature strict 24-hour security guards. We also run smart CCTV surveillance systems across the property to keep your family protected.'],
  ['7. How is the build quality of these homes?', 'CIDBI builds every project using proven methods and highly durable materials. Similar to our Apartments in Kannamkulangara, Credence offers lasting value and very low daily upkeep.'],
  ['8. Are the homes designed with good ventilation?', 'Yes, our beautiful 3 BHK Apartments in Thrissur balance natural light perfectly. Smart open layouts pull fresh air into every single room of your new home.'],
  ['9. Why should I choose CIDBI as my builder?', 'CIDBI is a trusted builder offering premium Apartments in Thrissur today. We always deliver high quality homes right on time to satisfy modern families and investors.'],
  ['10. Can I buy a new home from CIDBI now?', 'Yes, we offer beautiful 3 BHK Apartments in Thrissur for immediate investment. Please contact our team to visit the Cassia sample flat and exciting experience centre.'],
]

export default function ProjectFaq({ isChaletPage, isCredencePage }) {
  const [isOpend, setOpen] = useState(null)
  const faqs = isChaletPage ? chaletFaqs : isCredencePage ? credenceFaqs : candorFaqs

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
