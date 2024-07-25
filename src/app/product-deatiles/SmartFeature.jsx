import React from 'react';
import Image from 'next/image';
import tickIcon from '../../../public/images/product-view/smartFeature.svg';

const featureDetails = [
  { description: 'Automated Car Detected Boom Barrier' },
  { description: 'Smart lighting in landscape area' },
  { description: 'Automated hand sanitizer at lobby entrance' },
  { description: 'Face detected access controlled lobby' },
  { description: 'Automated lights in common loby' },
  { description: 'Automated smoke detector' },
  { description: 'Video door phone' },
  { description: 'Automated gas leak detector' },
  { description: 'Reticulated gas line' },
  { description: 'Lobby with mood lighting' },
  { description: 'Access controlled lift' },
  { description: 'Panic button' },
  { description: 'Smart lighting in car parking' },
  { description: 'Automated garden watering system' },
  { description: 'Common area camera access inside' },
];

function SmartFeature() {
  return (
    <div className="containers p-[20px] mb-[30px] bg-white">
      <h1 className="text-[24px] font-[clash-display-medium] mb-[20px]">Smart features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[96px] gap-y-[16px]">
        {featureDetails.map((feature, index) => (
          <div
            key={index}
            className="flex items-start"
          >
            <div className="w-[24px] h-[24px] mr-[12px] flex-shrink-0 mt-[2px]">
              <Image src={tickIcon} alt="Feature Icon" width={24} height={24} />
            </div>
            <p className="text-[14px] font-[general-sans-regular] leading-[20px]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmartFeature;