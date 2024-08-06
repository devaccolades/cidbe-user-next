'use client'
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { EnquiryFomSchema } from '../../validation/Validation'
import { Spinner } from '@material-tailwind/react';
import Swal from 'sweetalert2';
import { PostEnquiryApi } from '../../services/services';
function EnquiryForm({ bg = 'bg-transparent', projectId, handleOpen, modal }) {
  const [isLoad, setLoad] = useState(false)
  const initialValues = {
    project_id: projectId || "",
    name: "",
    email: "",
    number: "",
    message: "",
  }
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: EnquiryFomSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmitForm(values, setSubmitting);
    },
  });
  const handleSubmitForm = async (values, setSubmitting) => {
    try {
      if (!values.project_id) {
        values.project_id = projectId
      }
      setLoad(true)
      const res = await PostEnquiryApi(values)
      const { StatusCode, data } = res.data
      if (StatusCode === 6001) {
        resetForm()
        if (modal) {
          handleOpen()
        }
        Swal.fire({
          title: "We received your enquiry",
          text: "We will contact you soon. Thank you for your enquiry.",
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
      if (modal) {
        handleOpen()
      }
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!.",
        showConfirmButton: false,
        background: '#2B2B2B',
        color: 'white',
        timer: 1500
      });
    } finally {
      setLoad(false)
    }
  };
  return (
    <div className={`h-full rounded-[20px] text-[--secondary-cl] p-[30px] md:p-[40px] ${bg}`}>
      <div className='flex flex-col gap-[17px] md:gap-[20px]'>
        <p className='font-[general-sans-regular] text-[16px] md:text-[20px] leading-[28px] md:leading-[28px]'>WE ARE READY TO ANSWER ALL YOUR QUESTIONS</p>
        <form className='flex flex-col gap-[10px]' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-[6px]'>
            <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Name</p>
            <input name='name' className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter your name' type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name} />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm ">{errors.name}</p>
            )}
          </div>
          <div className='flex flex-col gap-[6px]'>
            <p className='font-[inter-regular] text-[11px] md:text-[14px]'>WhatsApp No</p>
            <input name='number' className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter whatsApp number' type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number} />
            {touched.number && errors.number && (
              <p className="text-red-500 text-sm ">{errors.number}</p>
            )}
          </div>
          <div className='flex flex-col gap-[6px]'>
            <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Email</p>
            <input name='email' className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter email address' type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email} />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm ">{errors.email}</p>
            )}
          </div>
          <div className='flex flex-col gap-[6px]'>
            <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Message</p>
            <textarea name='message' rows="5" placeholder='message' className='w-full px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message} >
              {touched.message && errors.message && (
                <p className="text-red-500 text-sm ">{errors.message}</p>
              )}
            </textarea>
          </div>
          {isLoad ? (
            <button type='button' disabled className='w-full bg-[--secondary-cl] font-[general-sans-semibold] rounded-[6px] p-[10px] text-[15px] text-white flex justify-center items-center'> <Spinner /></button>
          ) : (
            <button type='submit' className='w-full bg-[--secondary-cl] font-[general-sans-semibold] rounded-[6px] p-[10px] text-[15px] text-white'>Send</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default EnquiryForm;
