'use client'
import React, { useState } from "react";
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

function EnquiryModal({open, handleOpen,projectId}) {

  return (
      <Dialog className="w-[20px]" open={open} handler={handleOpen}>
        <div className="flex justify-center items-center pt-[60px]">
          <Image src={enquiryImage}/>
        </div>
        <EnquiryForm projectId={projectId}/>
      </Dialog>
  )
}

export default EnquiryModal