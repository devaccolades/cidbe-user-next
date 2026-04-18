"use client";
import React, { useState } from "react";
import EnquiryModal from "../../components/EnquiryForm/EnquiryModal";

const ReadyToOccupySeo = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* Inject click handler into children */}
      {React.cloneElement(children, { onClick: handleOpen })}
      <EnquiryModal open={open} handleOpen={() => setOpen(false)} />
    </>
  );
};

export default ReadyToOccupySeo;
