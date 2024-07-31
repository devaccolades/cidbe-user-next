import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
function ImageModal({ open, handleOpen ,data}) {
  return (
    <>
      <Dialog className="relative bg-transparent shadow-none" open={open} handler={handleOpen}>
        <p className="absolute border-[2px] text-2xl rounded-full right-3 top-3 border-[--secondary-cl] text-[--secondary-cl] cursor-pointer font-bold px-[9px]" onClick={handleOpen}>x</p>
          <div className="h-[90vh] bg-contain rounded-[16px] bg-no-repeat bg-center" style={{ backgroundImage: `url(${data})` }} />
      </Dialog>
    </>
  )
}

export default ImageModal