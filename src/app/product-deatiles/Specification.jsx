'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Specifications = () => {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const specificationData = [
    { title: 'FOUNDATION', description: 'Earth quake resistant, RCC framed structure with suitable foundation.' },
    { title: 'WALLS', description: 'High-quality brick walls with smooth plaster finish.' },
    { title: 'GENERATOR', description: 'Backup power supply for common areas and essential services.' },
    { title: 'DOORS & WINDOWS', description: 'Durable and stylish doors and windows for enhanced security and ventilation.' },
    { title: 'ELECTRICAL', description: 'Modern electrical system with safety features and sufficient power outlets.' },
    { title: 'FLOORING', description: 'Premium quality flooring materials used throughout the building.' },
    { title: 'TELEPHONE', description: 'Pre-installed telephone lines and internet connectivity options.' },
    { title: 'LIFTS', description: 'High-speed elevators with modern safety features.' },
    { title: 'FIRE FIGHTING', description: 'Comprehensive fire safety system including sprinklers and alarms.' },
    { title: 'WATER SUPPLY', description: 'Reliable water supply system with storage tanks and treatment facilities.' },
  ];

  return (
    <div className="containers p-[20px] bg-white">
      <h2 className="text-[24px] font-[clash-display-medium] mb-[20px]">Specifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[106px] gap-y-[20px] md:gap-y-[30px]">
        {specificationData.map((spec, index) => (
          <SpecificationItem 
            key={index}
            title={spec.title}
            description={spec.description}
            isOpen={openItemIndex === index}
            onClick={() => setOpenItemIndex(openItemIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

const SpecificationItem = ({ title, description, isOpen, onClick }) => {
  return (
    <div className="mb-2 md:mb-0">
      <div className="flex justify-between items-center">
        <h3 className={`text-[16px] font-[general-sans-medium]`}>{title}</h3>
        <button 
          className="text-xl font-semibold"
          onClick={onClick}
        >
          {isOpen ? '−' : '+'}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-[16px] font-[general-sans-regular] text-gray-600">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Specifications;