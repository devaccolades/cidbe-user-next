'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Specifications = ({specification}) => {
  const [openItemIndex, setOpenItemIndex] = useState(null);


  return (
    <div className="containers custom-res py-[20px] bg-white">
      <h2 className="text-[24px] font-[clash-display-medium] mb-[20px]">Specifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[106px] gap-y-[20px] md:gap-y-[30px]">
        {specification.map((spec, index) => (
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