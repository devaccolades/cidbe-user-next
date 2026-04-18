"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Specifications = ({ specification, isCandorPage }) => {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  return (
    <div className="containers custom-res py-[20px] bg-white">
      <h2 className="text-[24px] font-[clash-display-medium] mb-[10px]">
        Specifications
      </h2>
      {isCandorPage && (
        <div className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-medium] mb-4">
          <p className="mb-2">
            Candor, our completed flats in Punkunnamm has an earthquake
            resistant RCC framed structure. Solid block masonry walls with
            cement mortar plaster ensure maximum strength. Floorings of these
            luxury apartments in Punkunnam are done using high quality vitrified
            tiles. The elegant finish includes factory moulded design doors,
            sleek granite kitchen counters, and smooth walls coated with double
            plastic emulsion.
          </p>

          <p className="mb-2">
            Your home is built to last. These 3 and 2 BHK flats in Punkunnam
            feature ISI marked copper wiring and branded UPVC concealed
            plumbing. A reliable sewage treatment plant and a smart groundwater
            supply system ensure trouble free daily living.
          </p>

          <p className="mb-2">
            Safety remains our top priority in these Punkunnam apartments. We
            provide advanced firefighting systems, strict ELCB electrical
            controls, and non-skid bathroom floors. There is a 24 hour automatic
            generator backup to ensure lift operations and other emergencies
            during power failure.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[106px] gap-y-[20px] md:gap-y-[30px]">
        {specification.map((spec, index) => (
          <SpecificationItem
            key={index}
            title={spec.title}
            description={spec.description}
            isOpen={openItemIndex === index}
            onClick={() =>
              setOpenItemIndex(openItemIndex === index ? null : index)
            }
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
        <button className="text-xl font-semibold" onClick={onClick}>
          {isOpen ? "−" : "+"}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-[16px] font-[general-sans-regular] text-gray-600">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Specifications;
