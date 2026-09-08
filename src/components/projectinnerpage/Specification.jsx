"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Specifications = ({ specification, isCandorPage, isChaletPage }) => {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const hasValidSpecs =
    Array.isArray(specification) &&
    specification.some(
      (spec) =>
        (spec?.title && String(spec.title).trim() !== "") ||
        (spec?.description && String(spec.description).trim() !== ""),
    );

  if (!hasValidSpecs && !isCandorPage && !isChaletPage) return null;

  return (
    <div className="containers custom-res py-[20px] bg-white">
      <h2 className="text-[24px] font-[clash-display-medium] mb-[10px]">
        Specifications
      </h2>
      {isCandorPage && (
        <div className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-regular] mb-4">
          <p className="mb-2">
            Candor offers a highly strong, earthquake-resistant RCC framed
            structure. Solid block walls with cement plaster give your new home
            maximum strength. We use premium vitrified tiles to craft the bright
            floors inside these <Link className="font-[general-sans-medium]" href="/">premium flats in Punkunnam</Link>. The finish features
            stylish moulded doors and sleek granite kitchen counters. Smooth
            indoor walls feature a rich double plastic emulsion coating.
          </p>

          <p className="mb-2">
            We built your home to last a lifetime. If you seek <Link className="font-[general-sans-medium]" href="/">flats for sale in Punkunnam</Link>,
            our spaces feature safe copper wiring and branded hidden plumbing.
            A steady sewage plant and smart groundwater system make your daily
            routine completely trouble-free.
          </p>

          <p className="mb-2">
            Safety always comes first in our secure apartments. We protect your
            family using modern fire systems, strict electrical controls, and
            safe non-skid bathroom floors. An automatic generator runs all day
            to power the lifts and handle emergencies during any blackout.
          </p>

          {/* <p className="mb-2">
            Your home is built to last. These 3 and 2 BHK flats in Punkunnam
            feature ISI marked copper wiring and branded UPVC concealed
            plumbing. A reliable sewage treatment plant and a smart groundwater
            supply system ensure trouble free daily living.
          </p> */}

          {/* <p className="mb-2">
            Safety remains our top priority in these Punkunnam apartments. We
            provide advanced firefighting systems, strict ELCB electrical
            controls, and non-skid bathroom floors. There is a 24 hour automatic
            generator backup to ensure lift operations and other emergencies
            during power failure.
          </p> */}
        </div>
      )}
      {isChaletPage && (
        <div className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-regular] mb-4">
          <p className="mb-2">
            We build every home with a strong foundation and solid structure.
            You get smooth walls, premium flooring and elegant doors and
            windows. Our modern kitchens and clean bathrooms feature top
            sanitary and CP fittings. We ensure safety with advanced
            firefighting systems and secure electrical wiring.
          </p>
          <p className="mb-2">
            If you seek <Link className="font-[general-sans-medium]" href="/">Apartments For Sale In Thrissur</Link>,
            we deliver unmatched quality. Reliable water supply and a
            dedicated sewage treatment plant keep daily routines easy. A
            backup generator and smooth passenger lifts add pure daily
            convenience. Every corner features beautiful painting and handy
            telephone connections. Finding a perfect <Link className="font-[general-sans-medium]" href="/">3 &amp; 2 BHK Flat for sale in Thrissur</Link>
            is now truly simple.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[106px] gap-y-[20px] md:gap-y-[30px]">
        {specification?.map((spec, index) => (
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
