import React from 'react';

function Location() {
  const nearbyPlaces = [
    { name: 'North Stand', distance: '2.8 Kms' },
    { name: 'Church', distance: '900 m' },
    { name: 'Daya Hospital', distance: '100 m' },
    { name: 'Railway Station', distance: '4.5 Kms' },
    { name: 'Smart Bazaar', distance: '2 Kms' },
    // You can add more places here, and the entire section will adjust
  ];

  return (
    <section className='bg-[#ffff]'>
      <div className="containers p-[20px]">
        <h1 className='text-[24px] font-[clash-display-medium] mb-[20px]'>Location</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
          <div className='flex-grow'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767785"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className='flex-1 flex flex-col'>
            <h2 className='text-[16px] font-[general-sans-regular] text-[#8E7A6A] mb-[10px]'>Nearby Places</h2>
            <div className='bg-white flex-grow min-h-[300px]'> 
              <ul className='space-y-[10px]'>
                {nearbyPlaces.map((place, index) => (
                  <li
                    key={index}
                    className='py-[15px] border-b'
                    style={{ borderBottomColor: '#483C32', borderBottomWidth: '1px', paddingLeft: '0', paddingRight: '0' }}
                  >
                    <div className='flex justify-between items-center'>
                      <span className='text-[18px] font-[general-sans-medium] text-[#483C32]'>{place.name}</span>
                      <span className='text-[18px] font-[general-sans-medium] text-[#483C32]'>{place.distance}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
