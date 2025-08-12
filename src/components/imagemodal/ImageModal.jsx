import React from "react";
import { Dialog } from "@material-tailwind/react";
import Image from "next/image";

function ImageModal({ open, handleOpen, data }) {
  return (
    <Dialog
      size="xxl"
      open={open}
      handler={handleOpen}
      className="bg-black bg-opacity-40 shadow-none flex justify-center items-center"
    >
      <div className="relative w-full h-[90vh] flex items-center justify-center">
        <button
          className="absolute right-3 cursor-pointer top-[-10px] z-30 bg-white bg-opacity-70 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl"
          onClick={handleOpen}
        >
          ×
        </button>
        <div className="relative w-full h-full">
          <Image
            src={data}
            alt="Apartments in Thrissur"
            layout="fill"
            objectFit="contain"
            quality={100}
            unoptimized
          />
        </div>
      </div>
    </Dialog>
  );
}

export default ImageModal;