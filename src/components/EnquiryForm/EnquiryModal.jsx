'use client'
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import EnquiryForm from "./EnquiryForm";

// Image
import enquiryImage from '../../../public/images/enqiry/enquiry-image.svg'
import Image from "next/image";
import './Enquiry.css'
import closeIcon from '../../../public/icons/close.svg'

function EnquiryModal({ open, handleOpen, projectId }) {
  const [size, setSize] = useState('md');

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1200 && window.innerWidth <=1440){
        setSize('xs')
      }
      else  if (window.innerWidth > 767) {
        setSize('sm');
      } else {
        setSize('md');
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <Dialog size={size} className="custom-width relative" open={open}  handler={handleOpen}>
      {/* <div className="hidden md:block hidden-div">
        <div className="flex justify-center items-center pt-[60px] ">
          <Image src={enquiryImage} alt="" />
        </div>
      </div> */}
       <button
          className="absolute right-3 cursor-pointer top-[10px]"
          onClick={handleOpen}
        >
          <Image src={closeIcon} className="h-[20px] md:h-[30px] w-[20px] md:w-[30px]"/>
        </button>
      <EnquiryForm projectId={projectId} modal={true} handleOpen={handleOpen} />
    </Dialog>
  )
}

export default EnquiryModal