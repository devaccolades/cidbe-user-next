"use client";
import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import EnquiryModal from "../components/EnquiryForm/EnquiryModal";

// Icons
import locationIcon from "../../public/icons/location.svg";
import appartmentIcon from "../../public/icons/appartment.svg";
import areaIcon from "../../public/icons/area.png";
import premiumIcon from "../../public/icons/premium.svg";
import reraIcon from "../../public/icons/rera.svg";
import arrow_outwardIcon from "../../public/icons/arrow_outward.svg";

export default function ThrissurCard({
  project,
  basePath = "/featured-projects",
}) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState("");

  const handleOpen = () => setOpen(!open);

  const Details = () => (
    <>
      <div className="flex flex-row items-start gap-[20px]">
        <Image src={appartmentIcon} alt="Apartment" />
        <div className="flex flex-col gap-[6px] -mt-[5px]">
          <p className="text-[14px] lg:text-[16px] font-[general-sans-medium]">
            Apartment type
          </p>
          <p className="text-[14px] lg:text-[16px] font-[general-sans-light]">
            {project?.bhk} BHK
          </p>
        </div>
      </div>

      <div className="flex flex-row items-start gap-[20px]">
        <Image src={areaIcon} alt="Area" />
        <div className="flex flex-col gap-[6px] -mt-[5px]">
          <p className="text-[14px] lg:text-[16px] font-[general-sans-medium] ">
            Area range
          </p>
          <p className="text-[14px] lg:text-[16px] font-[general-sans-light]">
            {project?.area_from} - {project?.area_to} Sq.Ft
          </p>
        </div>
      </div>

      <div className="flex flex-row items-start gap-[20px]">
        <Image src={premiumIcon} alt="Premium" />
        <div className="flex flex-col gap-[6px] -mt-[5px]">
          <p className="text-[14px] lg:text-[16px] font-[general-sans-medium]">
            Premium luxury apartment
          </p>
          <p className="text-[14px] lg:text-[16px] font-[general-sans-light]">
            {project?.sub_name}
          </p>
        </div>
      </div>

      <div className="flex flex-row items-start gap-[25px]">
        <Image src={reraIcon} alt="RERA" />
        <div className="flex flex-col gap-[6px] -mt-[5px]">
          <p className="text-[14px] lg:text-[16px] font-[general-sans-medium]">
            K.RERA
          </p>
          <p className="text-[14px] lg:text-[16px] font-[general-sans-light]">
            {project?.rera_number}
          </p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile + Tablet layout */}

      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="xl:hidden w-full min-h-[638px] xs:max-w-[437px] xs:mx-auto md:max-w-full cursor-pointer card-animation bg-white rounded-[15px] overflow-hidden p-[5px] grid grid-rows-[auto_auto_auto] gap-[10px]"
      >
        <motion.div
          className="card-image bg-top rounded-[10px] bg-cover h-[201px]"
          style={{ backgroundImage: `url(${project?.thumbnail})` }}
          animate={{ height: hovered ? 408 : 201 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center pt-[10px] px-[15px]">
            <div className="font-[general-sans-regular] flex flex-col gap-[6px]">
              <p className="text-[32px] lg:text-[36px] text-black uppercase leading-[36px]">
                {project?.name}
              </p>
              <p className="capitalize flex gap-[8px]">
                <Image src={locationIcon} alt="Location" />
                <span className="text-[14px] lg:text-[16px] leading-[18px] text-[#767575]">
                  {project?.location}
                </span>
              </p>
            </div>
            <p className="capitalize rounded-[12px] text-[general-sans-medium] bg-[--secondary-cl] text-[12px] text-white py-[4px] px-[12px]">
              {project?.status}
            </p>
          </div>

          <div className="px-[15px] py-[10px] flex flex-col gap-[20px]">
            <div className="flex flex-row items-start gap-[20px]">
              <Image src={appartmentIcon} alt="Apartment" />
              <div className="flex flex-col gap-[6px] -mt-[5px]">
                <p className="text-[14px] lg:text-[16px] font-[general-sans-light]">
                  Apartment type
                </p>
                <p className="text-[14px] lg:text-[16px] font-[general-sans-medium]">
                  {project?.bhk} BHK
                </p>
              </div>
            </div>

            <AnimatePresence>
              {!hovered && (
                <motion.div
                  className="flex flex-col gap-[20px]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.15 }}
                >
                  <Details />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-white grid grid-cols-2 gap-[10px] px-[15px] pb-[10px] text-[12px] sm:text-[14px]">
            <Link href={`${basePath}/${project?.slug}`}>
              <button className="border border-[--secondary-cl] w-full text-[--secondary] py-[7px] px-[8px] rounded-[8px] cursor-pointer">
                Read more
              </button>
            </Link>
            <button
              className="bg-[--secondary-cl] text-white flex flex-row gap-[8px] py-[7px] px-[8px] rounded-[8px] items-center justify-center cursor-pointer"
              onClick={() => (handleOpen(), setProjectId(project.id))}
            >
              Enquire Now <Image src={arrow_outwardIcon} alt="Arrow" />
            </button>
          </div>
        </div>
      </Card>

      {/* Desktop layout */}
      <Card className="hidden xl:flex-row xl:flex w-full min-h-[365px] cursor-pointer bg-white rounded-[15px] overflow-hidden  p-[5px] gap-[10px] ">
        <div className="h-full">
          <Image
            src={project?.thumbnail}
            width={300}
            height={300}
            alt="image flat"
            className="h-full w-full rounded-[10px] object-cover object-center"
          />
        </div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex justify-between items-center pt-[10px] px-[15px]">
            <div className="font-[general-sans-regular] flex flex-col gap-[6px]">
              <p className="text-[32px] lg:text-[36px] text-black uppercase leading-[36px]">
                {project?.name}
              </p>
              <p className="capitalize flex gap-[8px]">
                <Image src={locationIcon} alt="Location" />
                <span className="text-[14px] lg:text-[16px] leading-[18px] text-[#767575]">
                  {project?.location}
                </span>
              </p>
            </div>
            <p className="capitalize rounded-[8px] font-[general-sans-medium] bg-[--secondary-cl] text-[12px] text-white py-[3px] px-[8px] leading-tight">
              {project?.status}
            </p>
          </div>

          <div className="px-[15px] py-[10px] flex flex-col gap-[20px]">
            <Details />
          </div>

          <div className=" grid grid-cols-2 gap-[10px] px-[15px] pb-[10px] text-[12px] sm:text-[14px]">
            <Link href={`${basePath}/${project?.slug}`}>
              <button className="border border-[--secondary-cl] w-full text-[14px] text-[--secondary] py-[7px] rounded-[8px] cursor-pointer">
                Read more
              </button>
            </Link>
            <button
              className="bg-[--secondary-cl] text-white flex flex-row gap-[8px] py-[7px] rounded-[8px] items-center justify-center cursor-pointer"
              onClick={() => (handleOpen(), setProjectId(project.id))}
            >
              Enquire Now <Image src={arrow_outwardIcon} alt="Arrow" />
            </button>
          </div>
        </div>
      </Card>

      <EnquiryModal open={open} handleOpen={handleOpen} projectId={projectId} />
    </>
  );
}
