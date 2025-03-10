
"use client"
import { get } from 'http';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getProjectSuggestionApi } from '../../services/services';
import { PostComplaintsApi } from '../../services/services';
import { number } from 'yup';




function ComplaintForm() {
  const [projectData, setProjectData] = useState([]);
  const [formData, setFormData] = useState({
    flat_no: '',
    name: '',
    number: '',
    email: '',
    message: '',
    project:''
  });

  const [errors, setErrors] = useState({
    flat_no: "",
    name: "",
    number: "",
    email: "",
    message: "",
    project: "",
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
      flat_no: '',
      name: '',
      number: '',
      email: '',
      message: '',
      project: ''
    });

    setErrors({
      flat_no: "",
      name: "",
      number: "",
      email: "",
      message: "",
      project: "",
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Flat number validation
    if (!formData.flat_no) {
      formErrors.flat_no = "Flat number is required.";
      isValid = false;
    }

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

    // Project validation
    if (!formData.project) {
      formErrors.project = "Project is required.";
      isValid = false;
    }

    // Message validation
    if (!formData.message) {
      formErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (formData.number.length !== 10) {
    //   alert("Phone number must be exactly 10 digits");
    //   return;
    // }

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    console.log("Form Submitted:", formData);
    try {
      await PostComplaintsApi(formData);
      Swal.fire({ title: "Form Submitted Successfully!", text: "We will reach out to you soon", icon: "success" }).then(() => {
        resetForm();

      });
    } catch (error) {
      console.error("Submission Error:", error);
      Swal.fire({ title: "Submission Failed", text: "Something went wrong. Please try again.", icon: "error" }).then(() => {
        resetForm();

      });
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

 useEffect(() => {
    getProjectSuggestion();
  }, []);
  
 

  const getProjectSuggestion = async () => {
    try {
      const response = await getProjectSuggestionApi();
      // setProjectData(response.data);

      setProjectData(response.data.data);
      
    } catch (error) {
      console.error('Error fetching project suggestion:', error);
    }
  }
  console.log(projectData);

  useEffect(() => {
    getProjectSuggestion();
  }, [])

  return (
    <div>
      <section className='containers px-0 lg:px-5 pt-[80px] pb-[50px] md:py-24 md:px-5 sm:pt-[80px]  '>

        <h1 className='font-[clash-display-medium] text-center text-[32px] md:text-[48px] mb-2 md:mb-2 md:leading-[48px] leading-[32px]'>Submit Your Complaint</h1>
        <p className='font-[general-sans-regular]   text-center pb-[32px] text-[15px] md:text-[17px] leading-[22px] md:leading-[24px]'>
          We're committed to providing you with the best living experience.
          If you're facing any issue with your flat, let us know, and our
          team will resolve it at the earliest.
          Please provide accurate details so our team can address your issue quickly.
        </p>

        <div className='border' style={{ border: '0.5px solid #959595', borderRadius: '20px', overflow: 'hidden' }}>
          <div className="bg-white p-[20px] md:p-[30px]">
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>


              <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Project</p>
                  <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
          required
        >
          <option className='font-[inter-regular] text-[14px] ' value=""></option>
          {projectData && projectData.length > 0 ? (
            projectData.map((project) => (
              <option className='font-[inter-regular] text-[14px] uppercase' key={project.id} value={project.id}>
                {project.name} 
              </option>
            ))
          ) : (
            <option value="">No Projects Available</option>
          )}  
        </select> 
        {errors.project && <p className="text-red-500 text-sm">{errors.project}</p>}
                </div>

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Flat No</p>
                  <input
                    name="flat_no"
                    value={formData.flat_no}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='1/H/5...'
                    type="text"
                    required
                  />
                  {errors.flat_no && <p className="text-red-500 text-sm">{errors.flat_no}</p>}
                </div>

            


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

               


                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Message</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-[100px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none"
                    placeholder="Enter complaint"
                    required
                  ></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
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





        




      </section>
    </div>
  );
}

export default ComplaintForm;
