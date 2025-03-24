"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { PostCustomerEnquiryFormApi } from '../../services/services';

function CustomerEnquiryForm() {
  const CUSTOMER_ENQUIRY_SOURCE = [
    { value: 'facebook', label: 'Facebook' },
    { value: 'google_ad', label: 'Google-ad' },
    { value: 'website', label: 'Website' },
    { value: 'phone_no', label: 'Phone-no' },
    { value: 'whatsapp', label: 'Whatsapp' },
    { value: 'referral', label: 'Referral' },
    { value: 'broker', label: 'Broker' },
  ];

  const CUSTOMER_FLAT_FOR = [
    { value: 'self', label: 'Self' },
    { value: 'relatives', label: 'Relatives' },
    { value: 'friend', label: 'Friend' },
    { value: 'agent', label: 'Agent' },
  ];

  const CUSTOMER_DECISION_TIME = [
    { value: 'immediate', label: 'Immediate' },
    { value: 'within_1_month', label: 'Within 1 month' },
    { value: 'within_2_month', label: 'Within 2 months' },
    { value: 'within_3_month', label: 'Within 3 months' },
    { value: 'flexible', label: 'Flexible' },
  ];
 
  const CUSTOMER_BUDGET_CHOICES = [
    { value: '25_lakhs_to_50_lakhs', label: '25 Lakhs - 50 Lakhs' },
    { value: '50_lakhs_to_75_lakhs', label: '50 Lakhs - 75 Lakhs' },
    { value: '75_lakhs_to_1_crore', label: '75 Lakhs - 1 Crore' },
    { value: '1_crore_to_1.25_crore', label: '1 Crore - 1.25 Crore' },
    { value: '1.5_crore_to_1.75_crore', label: '1.5 Crore - 1.75 Crore' },
    { value: '1.75_crore_to_2_crore', label: '1.75 Crore - 2 Crore' },
  ];

  const CUSTOMER_CALL_PREFERENCE = [
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' },
    { value: 'evening', label: 'Evening' },
    { value: 'night', label: 'Night' },
  ];
  
  const CUSTOMER_CALL_TIME = [
    { value: '9am-10am', label: '9AM - 10AM' },
    { value: '10am-11am', label: '10AM - 11AM' },
    { value: '11am-12pm', label: '11AM - 12PM' },
    { value: '12pm-1pm', label: '12PM - 1PM' },
    { value: '1pm-2pm', label: '1PM - 2PM' },
    { value: '2pm-3pm', label: '2PM - 3PM' },
    { value: '3pm-4pm', label: '3PM - 4PM' },
    { value: '4pm-5pm', label: '4PM - 5PM' },
    { value: '5pm-6pm', label: '5PM - 6PM' },
    { value: '6pm-7pm', label: '6PM - 7PM' },
    { value: '7pm-8pm', label: '7PM - 8PM' },
    { value: '8pm-9pm', label: '8PM - 9PM' }
  ];
  
  const CUSTOMER_FLAT_CHOICES = [
    { value: '1bhk', label: '1BHK' },
    { value: '2bhk', label: '2BHK' },
    { value: '3bhk', label: '3BHK' },
    { value: '4bhk', label: '4BHK' },
    { value: 'duplex', label: 'Duplex' },
    { value: 'villa', label: 'Villa' }
  ];
  
  const CUSTOMER_FINANCIAL_STATUS = [
    { value: 'own', label: 'Own' },
    { value: 'loan', label: 'Loan' },
    { value: 'land_or_exchange', label: 'Land or Exchange' }
  ];
 
  const CUSTOMER_PROPERTY_CHOICES = [
    { value: 'buying', label: 'Buying' },
    { value: 'renting', label: 'Renting' },
    { value: 'investment', label: 'Investment' }
  ];
  
  
  
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    whatsapp: '',
    nri_no: '',
    email: '',
    occupation: '',
    address: '',
    enquiry_source: '',
    flat_for: '',
    decision_time: '',
    budget_preference: '',
    call_preference: '',
    call_time: '',
    flat_preference: '',
    prefered_location: '',
    financial_status: '',
    property_requirement: '',
    remarks: ''
  });

  const [errors, setErrors] = useState({
    name: "",
    number: "",
    whatsapp: "",
    nri_no: "",
    email: "",
    occupation: "",
    address: "",
    enquiry_source: "",
    flat_for: "",
    decision_time: "",
    budget_preference: "",
    call_preference: "",
    call_time: "",
    flat_preference: "",
    prefered_location: "",
    financial_status: "",
    property_requirement: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setFormData({
      name: '',
      number: '',
      whatsapp: '',
      nri_no: '',
      email: '',
      occupation: '',
      address: '',
      enquiry_source: '',
      flat_for: '',
      decision_time: '',
      budget_preference: '',
      call_preference: '',
      call_time: '',
      flat_preference: '',
      prefered_location: '',
      financial_status: '',
      property_requirement: '',
      remarks: ''
    });

    setErrors({
      name: "",
      number: "",
      whatsapp: "",
      nri_no: "",
      email: "",
      occupation: "",
      address: "",
      enquiry_source: "",
      flat_for: "",
      decision_time: "",
      budget_preference: "",
      call_preference: "",
      call_time: "",
      flat_preference: "",
      prefered_location: "",
      financial_status: "",
      property_requirement: "",
      remarks: "",
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;
  
    // Name validation
    if (!formData.name) {
      formErrors.name = "Name is required.";
      isValid = false;
    }
  
    // Phone number validation (must be exactly 10 digits)
    if (!formData.number) {
      formErrors.number = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.number)) {
      formErrors.number = "Phone number must be exactly 10 digits.";
      isValid = false;
    }
  
    // Email validation
    if (!formData.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email format is invalid.";
      isValid = false;
    }
  
    // Whatsapp validation
    if (!formData.whatsapp) {
      formErrors.whatsapp = "Whatsapp number is required.";
      isValid = false;
    }
  
    // NRI Number validation (Optional but if provided it must be filled)
    // if (formData.nri_no && formData.nri_no.trim() === "") {
    //   formErrors.nri_no = "NRI number can't be empty if provided.";
    //   isValid = false;
    // }
  
    // Occupation validation
    if (!formData.occupation) {
      formErrors.occupation = "Occupation is required.";
      isValid = false;
    }
  
    // Address validation
    if (!formData.address) {
      formErrors.address = "Address is required.";
      isValid = false;
    }
  
    // Enquiry Source validation
    if (!formData.enquiry_source) {
      formErrors.enquiry_source = "Enquiry source is required.";
      isValid = false;
    }
  
    // Flat for validation
    if (!formData.flat_for) {
      formErrors.flat_for = "Flat for is required.";
      isValid = false;
    }
  
    // Decision time validation
    if (!formData.decision_time) {
      formErrors.decision_time = "Decision time is required.";
      isValid = false;
    }
  
    // Budget preference validation
    if (!formData.budget_preference) {
      formErrors.budget_preference = "Budget preference is required.";
      isValid = false;
    }
  
    // Call preference validation
    if (!formData.call_preference) {
      formErrors.call_preference = "Call preference is required.";
      isValid = false;
    }
  
    // Call time validation
    if (!formData.call_time) {
      formErrors.call_time = "Preferred call time is required.";
      isValid = false;
    }
  
    // Flat preference validation
    if (!formData.flat_preference) {
      formErrors.flat_preference = "Flat preference is required.";
      isValid = false;
    }
  
    // Preferred location validation
    if (!formData.prefered_location) {
      formErrors.prefered_location = "Preferred location is required.";
      isValid = false;
    }
  
    // Financial status validation
    if (!formData.financial_status) {
      formErrors.financial_status = "Financial status is required.";
      isValid = false;
    }
  
    // Property requirement validation
    if (!formData.property_requirement) {
      formErrors.property_requirement = "Property requirement is required.";
      isValid = false;
    }
  
    // Remarks validation (Optional)
    // if (formData.remarks && formData.remarks.trim() === "") {
    //   formErrors.remarks = "Remarks can't be empty if provided.";
    //   isValid = false;
    // }
  
    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  
    if (!validateForm()) {
      return;
    }
  
    setLoading(true);
    try {
      const response = await PostCustomerEnquiryFormApi(formData);
      const { status, data } = response;
  
      if (status === 200 && data.StatusCode === 6001) {
        // Success case
        Swal.fire({
          title: "Form Submitted Successfully!",
          text: "We will reach out to you soon.",
          icon: "success",
        }).then(() => {
          resetForm();
        });
      } else {
        // Validation error case
        if (data.StatusCode === 6002) {
          const errorMessage = data.message || 'Please fix the errors in the form.';
          Swal.fire({
            title: "Submission Failed",
            text: errorMessage,
            icon: "error",
          }).then(() => {
            resetForm();
          });
        }
      }
    } catch (error) {
      console.error("Submission Error:", error);
      Swal.fire({
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
        icon: "error",
      }).then(() => {
        resetForm();
      });
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div>
      <section className='containers px-0 lg:px-5 pt-[80px] pb-[50px] md:py-24 md:px-5 sm:pt-[80px]'>
     


        <h1 className='font-[clash-display-medium] text-center text-[32px] md:text-[48px] mb-2 md:mb-2 md:leading-[48px] leading-[32px]'>Customer Enquiry</h1>
        <p className='font-[general-sans-regular] text-center pb-[32px] text-[15px] md:text-[17px] leading-[22px] md:leading-[24px]'>
  We’re here to help you find your ideal home. Whether you have questions about our properties, pricing, or availability, feel free to reach out. Share your requirements with us, and our team will get back to you with the best options tailored to your needs.
</p>

       
        <div className='border' style={{ border: '0.5px solid #959595', borderRadius: '20px', overflow: 'hidden' }}>
          <div className="bg-white p-[20px] md:p-[30px]">
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>

                {/* Name */}
                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Name</p>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='Enter Your Name'
                    type="text"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Phone No */}
                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Phone No</p>
                  <input
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='Enter Phone Number'
                    type="number"
                    required
                  />
                  {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
                </div>

                {/* WhatsApp No */}
                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>WhatsApp No</p>
                  <input
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='Enter WhatsApp Number'
                    type="number"
                  />
                  {errors.whatsapp && <p className="text-red-500 text-sm">{errors.whatsapp}</p>}
                </div>

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>NRI Number(optional)</p>
                  <input
                    name="nri_no"
                    value={formData.nri_no}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='Enter NRI Number'
                    type="number"
                  />
               
                  {errors.whatsapp && <p className="text-red-500 text-sm">{errors.nri_no}</p>}
                </div>

                {/* Email */}
                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Email</p>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='Enter Email'
                    type="email"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Occupation */}
                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Occupation</p>
                  <input
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='Enter Occupation'
                    type="text"
                  />
                  {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation}</p>}
                </div>

                {/* Address */}
                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Address</p>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full h-[80px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none"
                    placeholder="Enter Your Address"
                  />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                

                {/* Enquiry Source */}
                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Enquiry Source</p>
                  <select
                    name="enquiry_source"
                    value={formData.enquiry_source}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    required
                  >
                     <option className='font-[inter-regular] text-[14px]' value="">Select </option>
                    {CUSTOMER_ENQUIRY_SOURCE.map((source) => (
                      <option key={source.value} value={source.value}>
                        {source.label}
                      </option>
                    ))}
                  </select>
                  {errors.enquiry_source && <p className="text-red-500 text-sm">{errors.enquiry_source}</p>}
                </div>

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Flat For</p>
                  <select
                    name="flat_for"
                    value={formData.flat_for}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    required
                  >
                     <option className='font-[inter-regular] text-[14px]' value="">Select </option>
                    {CUSTOMER_FLAT_FOR.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.flat_for && <p className="text-red-500 text-sm">{errors.flat_for}</p>}
                </div>

                <div className='flex flex-col'>
              <p className='font-[inter-regular] text-[14px]'>Flat Preference </p>
              <select
                name="flat_preference"
                value={formData.flat_preference}
                onChange={handleChange}
                className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                required
              >
                <option className='font-[inter-regular] text-[14px]' value="">Select </option>
                {CUSTOMER_FLAT_CHOICES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.flat_preference && <p className="text-red-500 text-sm">{errors.flat_preference}</p>}
            </div>

               

               

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Call Preference</p>
                  <select
                    name="call_preference"
                    value={formData.call_preference}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    required
                  >
                    <option className='font-[inter-regular] text-[14px]' value="">Select </option>
                    {CUSTOMER_CALL_PREFERENCE.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.call_preference && <p className="text-red-500 text-sm">{errors.call_preference}</p>}
                </div>

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Prefered Time To Call</p>
                  <select
                    name="call_time"
                    value={formData.call_time}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    required
                  >
                     <option className='font-[inter-regular] text-[14px]' value="">Select </option>
                      {CUSTOMER_CALL_TIME.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  {errors.call_time && <p className="text-red-500 text-sm">{errors.call_time}</p>}
                </div>


                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Budget Preference</p>
                  <select
                    name="budget_preference"
                    value={formData.budget_preference}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    required
                  > 
                     <option className='font-[inter-regular] text-[14px]' value="">Select </option>
                    {CUSTOMER_BUDGET_CHOICES.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget_preference && <p className="text-red-500 text-sm">{errors.budget_preference}</p>}
                </div>


                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Decision Time</p>
                  <select
                    name="decision_time"
                    value={formData.decision_time}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    required
                  >
                    <option className='font-[inter-regular] text-[14px]' value="">Select</option>
                    {CUSTOMER_DECISION_TIME.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.decision_time && <p className="text-red-500 text-sm">{errors.decision_time}</p>}
                </div>
         
   
               
                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Prefered Location</p>
                  <input
                    name="prefered_location"
                    value={formData.prefered_location}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='Enter Prefered Location'
                    type="text"
                  />
                  {errors.prefered_location && <p className="text-red-500 text-sm">{errors.prefered_location}</p>}
                </div>

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Financial Status</p>
                  <select
                    name="financial_status"
                    value={formData.financial_status}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    required
                  >
                    <option className='font-[inter-regular] text-[14px]' value="">Select </option>
                    {CUSTOMER_FINANCIAL_STATUS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.financial_status && <p className="text-red-500 text-sm">{errors.financial_status}</p>}
                </div>

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Property Requirement</p>
                  <select
                    name="property_requirement"
                    value={formData.property_requirement}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    required
                  >
                     <option className='font-[inter-regular] text-[14px]' value="">Select</option>
                    {CUSTOMER_PROPERTY_CHOICES.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.property_requirement && <p className="text-red-500 text-sm">{errors.property_requirement}</p>}
                </div>

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Remarks</p>
                  <textarea
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    className="w-full h-[100px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none"
                    placeholder="Enter additional remarks or information"
                  />
                  {errors.remarks && <p className="text-red-500 text-sm">{errors.remarks}</p>}
                </div>
               
              </div>

              <div className='mt-6 md:flex md:justify-end'>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className='w-full md:w-auto text-white border bg-[#052D23] px-6 py-2 rounded-md transition-all duration-300'>
                  {loading ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <a 
  href="https://cidbi.com"  
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800 underline"
>
  <span className="text-green-600">Would you like to visit our website: </span>
  <span className="underline text-blue-600">cidbi.com</span>
</a>

      </section>
    </div>
  );
}

export default CustomerEnquiryForm;
