'use client'
import React, { useState } from 'react'
import aboutFormShape from '../../../public/images/about/aboutfromnew.svg.svg'
import Image from 'next/image'
import formImage from '../../../public/images/about/AboutFormImage.png'
import { EnquiryFomSchema } from '../../validation/Validation'
import { PostEnquiryApi } from '../../services/services'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { Spinner } from '@material-tailwind/react'

function AboutFourthSection() {
  const [isLoad, setLoad] = useState(false)
  const initialValues = {
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
      setLoad(true)
      const res = await PostEnquiryApi(values)
      const { StatusCode, data } = res.data
      if (StatusCode === 6001) {
        resetForm()
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

    <>

      <section>
        <main className='py-[45px]'>
          <card className='relative containers shadow-2xl flex flex-col-reverse md:flex-row rounded-[12px]'>
            <form onSubmit={handleSubmit} className='w-full bg-color rounded-b-[12px] md:rounded-e-none  md:rounded-s-[12px] flex items-center '>
              <div className={`h-full rounded-s-[20px] text-[--secondary-cl] p-[30px] md:p-[40px] xl:ms-[90px]`} >
                <div className='flex flex-col gap-[17px] md:gap-[20px]'>
                  <p className='font-[general-sans-semibold] text-[20px] ]'>WE ARE READY TO ANSWER ALL YOUR   QUESTIONS</p>
                  <div className='flex flex-col gap-[10px]'>
                    <div className='flex flex-col gap-[6px]'>
                      <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Name</p>
                      <input className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter your name' type="text"
                        name='name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name} />
                      {touched.name && errors.name && (
                        <p className="text-red-500 text-sm ">{errors.name}</p>
                      )}
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                      <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Phone No</p>
                      <input className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter Your Phone No Number' type="number"
                        name='number'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.number} />
                      {touched.number && errors.number && (
                        <p className="text-red-500 text-sm ">{errors.number}</p>
                      )}
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                      <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Email</p>
                      <input className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter Your Email id' type="text"
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} />
                      {touched.email && errors.email && (
                        <p className="text-red-500 text-sm ">{errors.email}</p>
                      )}
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                      <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Message</p>
                      <textarea rows="5" placeholder='Message here' className='w-full px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                        name='message'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message} >
                      </textarea>
                    </div>
                    {isLoad ? (
                      <button disabled className='w-full bg-[--secondary-cl] font-[general-sans-semibold] rounded-[6px] p-[10px] text-[15px] flex justify-center items-center'>   <Spinner /></button>
                    ) : (
                      <button type='submit' className='w-full bg-[--secondary-cl] font-[general-sans-semibold] rounded-[6px] p-[10px] text-[15px] text-white'>Send</button>
                    )}
                  </div>
                </div>
              </div>
            </form>
            <div className='bg-cover h-[270px] md:h-full bg-bottom md:w-full lg:w-7/12 rounded-t-[12px] md:rounded-t-0  md:rounded-e-[12px] z-4' style={{ backgroundImage: `url(${formImage.src})`, zIndex: '1' }}>
              <Image className='h-full -ms-[2px] md:visible invisible' alt='card-shape' src={aboutFormShape} />
            </div>
          </card>
        </main>
      </section>
    </>
  )
}

export default AboutFourthSection