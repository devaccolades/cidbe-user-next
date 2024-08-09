import React from 'react';
import ImageModal from '../imagemodal/ImageModal';

function Location({ location, nearby }) {
  return (
    <section className='bg-[#ffff]'>
      <div className="containers custom-res py-[20px]">
        <h2 className='text-[24px] font-[clash-display-medium] text-[--secondary-cl] mb-[20px]'>Location</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
          {location && <div className='flex-grow rounded-[8px] iframe-div' dangerouslySetInnerHTML={{ __html: location }}></div>}
          {nearby?.length > 0 && <div className='flex-1 flex flex-col'>
            <h2 className='text-[16px] font-[general-sans-regular] text-[#8E7A6A] mb-[10px]'>Nearby Places</h2>
            <div className='bg-white flex-grow min-h-[300px]'>
              <ul className='space-y-[10px]'>
                {nearby?.map((place, index) => (
                  <li
                    key={index}
                    className='py-[15px] border-b'
                    style={{ borderBottomColor: '#483C32', borderBottomWidth: '1px', paddingLeft: '0', paddingRight: '0' }}
                  >
                    <div className='flex justify-between items-center'>
                      <span className='text-[18px] font-[general-sans-medium] text-[--secondary-cl]'>{place?.location_name}</span>
                      <span className='text-[18px] font-[general-sans-medium] text-[--secondary-cl]'>{place?.distance} {place?.measurement_unit}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>}
        </div>
      </div>
      <ImageModal/>
    </section>
  );
}

export default Location;
