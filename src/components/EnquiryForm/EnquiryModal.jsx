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

function EnquiryModal({ open, handleOpen, projectId }) {
  const [size, setSize] = useState('md');

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 767) {
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
    <Dialog size={size} open={open} handler={handleOpen}>
      <div className="hidden md:block">
        <div className="flex justify-center items-center pt-[60px] ">
          <Image src={enquiryImage} alt="" />
        </div>
      </div>
      <EnquiryForm projectId={projectId} modal={true} handleOpen={handleOpen} />
    </Dialog>
  )
}

export default EnquiryModal