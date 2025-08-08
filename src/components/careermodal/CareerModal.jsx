'use client'
import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Spinner,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { postApplyJobApi } from "../../services/services";
import Image from "next/image";

function CareerModal({
    open, handleOpen, formData, setFormData, handleInputChange,
    selectedPosition,setSelectedPosition, handlePositionChange,
     selectedFile, handleFileInputClick,
    uploadIcon, fileInputRef, handleFileChange, isFormFilled, setIsFormFilled,
    isLoad, setLoading,setSelectedLocation,setSelectedFile
}) {


    const handleSubmit = async () => {
        const datas = new FormData();

        if (isFormFilled) {
            setLoading(true)
            datas.append("name", formData.name)
            datas.append('career', formData?.position);
            datas.append('number', formData.phone);
            datas.append('email', formData.email);
            datas.append('cv_file', selectedFile);
            try {
                const res = await postApplyJobApi(datas)
                const { StatusCode, data } = res.data
                if (StatusCode === 6001) {
                    handleOpen()
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        position:""
                    })
                    setSelectedPosition("")
                    setSelectedFile(null)
                    window.location.reload() 
                    
                    Swal.fire({
                        title: "We received your application",
                        text: "We will contact you soon. Thank you for showing interest.",
                        icon: "success",
                        background: 'white',
                        color: '#2B2B2B',
                        confirmButtonColor: '#3085d6',
                        customClass: {
                            // popup: 'custom-swal-popup'
                        },
                        showConfirmButton: false,
                        timer: 3000
                    });
                } else {
                    handleOpen()
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!.",
                        showConfirmButton: false,
                        background: 'white',
                        color: '#2B2B2B',
                        timer: 1500
                    });
                }
            } catch (error) {
                console.log(error);
                handleOpen()
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!.",
                    showConfirmButton: false,
                    background: 'white',
                    color: '#2B2B2B',
                    timer: 1500
                });
            } finally {
                setLoading(false)
            }
        }
    };
    return (
        <Dialog open={open} handler={handleOpen}>
            <div className="">
                <div className="  p-[20px] md:p-[30px]">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                        <div className='flex flex-col'>
                            <p className='font-[inter-regular] text-[14px] '>Name</p>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                                placeholder='Enter Your Name'
                                type="text"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-[inter-regular] text-[14px] '>Position</p>
                            <select
                                name="position"
                                value={selectedPosition}
                                onChange={handlePositionChange}
                                className={`w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[14px] focus:outline-none ${selectedPosition ? 'text-black' : 'text-[#BABABA]'}`}
                            >
                                <option value="" disabled>Select Job Position</option>
                                <option value={selectedPosition} selected>{selectedPosition}</option>
                                {/* {jobSuggestion.map((job, index) => (
                                    <option key={index} selected={job?.job_title === selectedPosition} value={job.job_title}>{job.job_title}</option>
                                ))} */}
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-[inter-regular] text-[14px] '>Phone No</p>
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                                placeholder='Enter Phone Number'
                                type="number"
                            />
                        </div>
                        {/* <div className='flex flex-col'>
                            <p className='font-[inter-regular] text-[14px] '>Location</p>
                            <select
                                name="location"
                                value={selectedLocation}
                                onChange={handleLocationChange}
                                className={`w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[14px] focus:outline-none ${selectedLocation ? 'text-black' : 'text-[#BABABA]'}`}
                            >
                                <option value="" disabled>Select Location</option>
                                <option value="Thrissur" selected={true}>Thrissur</option>
                                {locations.map((job, index) => (
                                    <option key={index} value={job.location}>{job.location}</option>
                                ))}
                            </select>
                        </div> */}
                        <div className='flex flex-col'>
                            <p className='font-[inter-regular] text-[14px] '>Email</p>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                                placeholder='Enter Email'
                                type="text"
                            />
                        </div>

                        <div className='flex flex-col'>
                            <p className='font-[inter-regular] text-[14px] '>Upload CV</p>
                            <div className='relative'>
                                <input
                                    className={`w-full h-[40px] pl-[40px] px-[15px] border-2 rounded-[6px] text-[14px] focus:outline-none cursor-pointer ${selectedFile ? 'text-black' : 'text-[#BABABA]'}`}
                                    value={selectedFile ? selectedFile.name : 'Choose File'}
                                    type="text"
                                    onClick={handleFileInputClick}
                                    readOnly
                                />
                                <Image src={uploadIcon} alt='Apartments in Thrissur' className='absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer' />
                                <input type="file" ref={fileInputRef} className='hidden' onChange={handleFileChange} />
                            </div>
                            <div className='mt-2 text-[inter-regular] md:text-[11px] text-[#052D23]'>
                                <p className='text-xs md:text-[11px]'>
                                    Allowed file types: pdf, doc, docx, rtf<br />
                                    Maximum file size allowed: 5MB
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 md:flex md:justify-end'>

                        <button
                            onClick={handleSubmit}
                            className={`w-full md:w-auto text-white border border-black px-6 py-2 rounded-md transition-all duration-300 ${isFormFilled ? 'bg-black' : 'bg-black opacity-50 cursor-not-allowed'
                                }`}
                            disabled={!isFormFilled || isLoad}
                        >
                            {isLoad ? <Spinner /> : "Submit"}
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default CareerModal