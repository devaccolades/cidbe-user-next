"use client";

import React, { useState } from "react";
import Image from "next/image";
import buildingSketch from "../../../public/images/aprtments_thrissur/buildingSketch.png";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { Spinner } from "@material-tailwind/react";
import { PostEnquiryApi } from "../../services/services";
import { EnquiryFomSchema } from "../../validation/Validation";

export default function FormSection({ projectId, handleOpen, modal }) {
  const [isLoad, setLoad] = useState(false);

  const initialValues = {
    project_id: projectId || "",
    name: "",
    email: "",
    number: "",
    message: "",
  };

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
      if (!values.project_id) values.project_id = projectId;
      setLoad(true);
      const res = await PostEnquiryApi(values);
      const { StatusCode } = res.data;

      if (StatusCode === 6001) {
        resetForm();
        if (modal) handleOpen();
        Swal.fire({
          title: "We received your enquiry",
          text: "We will contact you soon. Thank you for your enquiry.",
          icon: "success",
          background: "white",
          color: "#2B2B2B",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        handleOpen();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          background: "white",
          color: "#2B2B2B",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      if (modal) handleOpen();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        background: "#2B2B2B",
        color: "white",
        showConfirmButton: false,
        timer: 1500,
      });
    } finally {
      setLoad(false);
    }
  };

  return (
    <section className="bg-[#BFD8BD] py-16 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white via-transparent to-transparent z-10" />

      <div className="mr-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:max-w-[1610px] mx-auto sm:px-6 lg:px-24">
        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image
            src={buildingSketch}
            alt="Apartment sketch"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Form */}
        <div className="w-[92%] sm:w-full mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 ml-auto">
          <h3 className="text-[20px] font-[general-sans-regular] font-normal text-gray-700 mb-6">
            WE ARE READY TO ANSWER ALL YOUR QUESTIONS
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="number"
                type="text"
                placeholder="Enter WhatsApp Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              {touched.number && errors.number && (
                <p className="text-red-500 text-sm">{errors.number}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Enter Email address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Message here"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              {touched.message && errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {isLoad ? (
              <button
                type="button"
                disabled
                className="w-full bg-green-900 text-white text-sm py-2 rounded-md flex justify-center items-center"
              >
                <Spinner />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-green-900 hover:bg-green-800 text-white text-sm py-2 rounded-md transition duration-200"
              >
                Send
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
