"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import location from '../../../public/images/careers/newLocaton.svg';
import work from '../../../public/images/careers/newWork.svg';
import uploadIcon from '../../../public/images/careers/attachment.svg';
import NotFound from '../../components/common/NotFound';
import { getCareersApi, getCareersSuggestionApi } from '../../services/services';

function CurrentOpenings() {
  const [jobOpenings, setJobOpenings] = useState([])
  const [jobSuggestion,setJobSuggestion] = useState([])
  const [locations,setLocations] = useState([])
  const [page, setPage] = useState(1)
  const [page_limit, setPage_limit] = useState(4)
  const [total_count, setTotal] = useState(0)
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
    if (event.target.name === "position"){
      
      const filteredLocations = jobSuggestion
      .filter(job => job.id === event.target.value)
     ;
    setLocations(filteredLocations);

    }
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


  const fetchDate = async () => {
    try {
      const res = await getCareersApi(page, page_limit)
      const { StatusCode, data } = res.data
      if (StatusCode === 6000) {
        setJobOpenings(data)
        setTotal(res.data.total_count)
      } else {
        setJobOpenings([])
      }
    } catch (error) {
      console.log(error);
      setJobOpenings([])
    }
  }
  const fetchDateSugestion = async () => {
    try {
      const res = await getCareersSuggestionApi(page, page_limit)
      const { StatusCode, data } = res.data
      if (StatusCode === 6000) {
        setJobSuggestion(data)
      } else {
        setJobSuggestion([])
      }
    } catch (error) {
      console.log(error);
      setJobSuggestion([])
    }
  }
  
  useEffect(()=>{
    fetchDate()
  },[page])
  useEffect(()=>{
    fetchDateSugestion()
  },[])

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <section>
        <main className="md:bg-[url('/images/careers/careerBackgroun.svg')] min-h-screen">
          <section className='pt-12'>
            <div className='containers' style={{ padding: '0px 20px', alignItems: 'center' }}>
              <h1 className='text-[32px] font-[clash-display-medium] mb-8 text-start'>Current Openings</h1>
              {jobOpenings.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                  {jobOpenings.map((job, index) => (
                    <div key={index} className='w-full bg-white p-[30px] rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300'>
                      <h2 className='text-[24px] font-[general-sans-medium] mb-4'>{job?.job_title}</h2>
                      <div className='flex text-[14px] text-gray-600 mb-4'>
                        <div className='flex items-center mr-4 bg-[#EBEBEB] px-2 py-1 rounded-md'>
                          <Image src={location} alt='location' className="mr-2" />
                          {job?.location}
                        </div>
                        <div className='flex items-center bg-[#EBEBEB] px-2 py-1 rounded-md'>
                          <Image src={work} alt='work type' className="mr-2" />
                          {job?.type}
                        </div>
                      </div>
                      <p className='text-[18px] text-[#483C32] mb-6 leading-[30px] font-[general-sans-light]'>{job?.description}</p>
                      <div className='flex justify-end'>
                        <button className='border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg'>Apply Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <NotFound />
              )}

              {/* Pagination */}
              {jobOpenings.length > 1 && <div className="pt-[50px] -mb-[30px] flex justify-center">
                <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => handleClick(page - 1)}
                    disabled={page === 1}
                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.ceil(total_count / page_limit) }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handleClick(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${page === index + 1 ? 'z-10 bg-gray-100 text-gray-900 cursor-default' : 'hover:text-gray-500'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handleClick(page + 1)}
                    disabled={page === Math.ceil(total_count / page_limit)}
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === Math.ceil(10 / 3) ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
                  >
                    Next
                  </button>
                </nav>
              </div>}
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
                      {jobSuggestion.map((job, index) => (
                        <option key={index} value={job.id}>{job.job_title}</option>
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
                      {locations.map((job, index) => (
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
                    className={`w-full md:w-auto text-white border border-black px-6 py-2 rounded-md transition-all duration-300 ${isFormFilled ? 'bg-black' : 'bg-black opacity-50 cursor-not-allowed'
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
