"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import location from '../../../public/images/careers/newLocaton.svg';
import work from '../../../public/images/careers/newWork.svg';
import uploadIcon from '../../../public/images/careers/attachment.svg';

function CurrentOpenings() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(4); // Number of jobs per page

  const jobOpenings = [
    {
      title: "Mern Stack",
      location: "New York",
      type: "Full-time",
      description: "Small description about the job. Small description about the event. Small description about the event. Small description about the event. Small description about the event.",
    },
    {
      title: "UX Designer",
      location: "San Francisco",
      type: "Contract",
      description: "Small description about the job. Small description about the event. Small description about the event. Small description about the event. Small description about the event.",
    },
    {
      title: "Marketing Manager",
      location: "Remote",
      type: "Part-time",
      description: "Small description about the job. Small description about the event. Small description about the event. Small description about the event. Small description about the event.",
    },
    {
      title: "Data Scientist",
      location: "Boston",
      type: "Full-time",
      description: "Small description about the job. Small description about the event. Small description about the event. Small description about the event. Small description about the event.",
    },
    {
      title: "Product Manager",
      location: "Seattle",
      type: "Full-time",
      description: "Small description about the job. Small description about the event. Small description about the event. Small description about the event. Small description about the event.",
    },
    {
      title: "Customer Support Specialist",
      location: "Austin",
      type: "Part-time",
      description: "Small description about the job. Small description about the event. Small description about the event. Small description about the event. Small description about the event.",
    },
    {
      title: "Frontend Developer",
      location: "Chicago",
      type: "Full-time",
      description: "Small description about the job. Small description about the event. Small description about the event. Small description about the event. Small description about the event.",
    },
  ];

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobOpenings.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const allFieldsFilled = 
      formData.name !== '' &&
      formData.phone !== '' &&
      formData.email !== '' &&
      selectedPosition !== '' &&
      selectedLocation !== '' &&
      selectedFile !== null;
    
    setIsFormFilled(allFieldsFilled);
  }, [formData, selectedPosition, selectedLocation, selectedFile]);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    if (isFormFilled) {
      const data = {
        name: formData.name,
        position: selectedPosition,
        location: selectedLocation,
        phone: formData.phone,
        email: formData.email,
        cv: selectedFile ? selectedFile.name : 'No file selected'
      };
      console.log("Form data:", data);
      // You can add your API call or further processing logic here
    }
  };

  return (
    <>
      <section>
        <main className="md:bg-[url('/images/careers/careerBackgroun.svg')] min-h-screen">
          <section className='pt-12'>
            <div className='containers' style={{ padding: '0px 20px', alignItems: 'center' }}>
              <h1 className='text-[32px] font-[clash-display-medium] mb-8 text-start'>Current Openings</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                {currentJobs.map((job, index) => (
                  <div key={index} className='w-full bg-white p-[30px] rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <h2 className='text-[24px] font-[general-sans-medium] mb-4'>{job.title}</h2>
                    <div className='flex text-[14px] text-gray-600 mb-4'>
                      <div className='flex items-center mr-4 bg-[#EBEBEB] px-2 py-1 rounded-md'>
                        <Image src={location} alt='location' className="mr-2" />
                        {job.location}
                      </div>
                      <div className='flex items-center bg-[#EBEBEB] px-2 py-1 rounded-md'>
                        <Image src={work} alt='work type' className="mr-2" />
                        {job.type}
                      </div>
                    </div>
                    <p className='text-[18px] text-[#483C32] mb-6 leading-[30px] font-[general-sans-light]'>{job.description}</p>
                    <div className='flex justify-end'>
                      <button className='border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg'>Apply Now</button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="mt-16 flex justify-center">
                <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.ceil(jobOpenings.length / jobsPerPage) }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === index + 1 ? 'z-10 bg-gray-100 text-gray-900 cursor-default' : 'hover:text-gray-500'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(jobOpenings.length / jobsPerPage)}
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === Math.ceil(jobOpenings.length / jobsPerPage) ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </section>
          <section className='containers' style={{ padding: '96px 20px' }}>
            <div className='border' style={{ border: '0.5px solid #959595', borderRadius: '20px', overflow: 'hidden' }}>
              <div className='bg-white p-[30px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                  <div className='flex flex-col'>
                    <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Name</p>
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
                    <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Position</p>
                    <select
                      name="position"
                      value={selectedPosition}
                      onChange={handlePositionChange}
                      className={`w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[14px] focus:outline-none ${selectedPosition ? 'text-black' : 'text-[#BABABA]'}`}
                    >
                      <option value="" disabled>Select Job Position</option>
                      {jobOpenings.map((job, index) => (
                        <option key={index} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Phone No</p>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                      placeholder='Enter Phone Number'
                      type="text"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Location</p>
                    <select
                      name="location"
                      value={selectedLocation}
                      onChange={handleLocationChange}
                      className={`w-full h-[40px] px-[15px] border-2 rounded-[6px] text-[14px] focus:outline-none ${selectedLocation ? 'text-black' : 'text-[#BABABA]'}`}
                    >
                      <option value="" disabled>Select Location</option>
                      {jobOpenings.map((job, index) => (
                        <option key={index} value={job.location}>{job.location}</option>
                      ))}
                    </select>
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Email</p>
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
                    <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Upload CV</p>
                    <div className='relative'>
                      <input
                        className={`w-full h-[40px] pl-[40px] px-[15px] border-2 rounded-[6px] text-[14px] focus:outline-none cursor-pointer ${selectedFile ? 'text-black' : 'text-[#BABABA]'}`}
                        value={selectedFile ? selectedFile.name : 'Choose File'}
                        type="text"
                        onClick={handleFileInputClick}
                        readOnly
                      />
                      <Image src={uploadIcon} alt='upload' className='absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer' />
                      <input type="file" ref={fileInputRef} className='hidden' onChange={handleFileChange} />
                    </div>
                    <div className='mt-2 text-[inter-regular] md:text-[11px] text-[#052D23]'>
  <p className='text-xs md:text-[11px]'>
    Allowed file types: pdf, doc, docx, rtf<br />
    Maximum file size allowed: 5MB
  </p>
</div>                  </div>
                </div>
                <div className='mt-6 md:flex md:justify-end'>
                  <button
                    onClick={handleSubmit}
                    className={`w-full md:w-auto text-white border border-black px-6 py-2 rounded-md transition-all duration-300 ${
                      isFormFilled ? 'bg-black' : 'bg-black opacity-50 cursor-not-allowed'
                    }`}
                    disabled={!isFormFilled}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

export default CurrentOpenings;
