'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import location from '../../../public/images/careers/newLocaton.svg';
import work from '../../../public/images/careers/newWork.webp';
import uploadIcon from '../../../public/images/careers/attachment.webp';
import NotFound from '../../components/common/NotFound';
import { getCareersApi, getCareersSuggestionApi, postApplyJobApi } from '../../services/services';
import Swal from 'sweetalert2';
import { Spinner } from '@material-tailwind/react';
import CareerModal from '../../components/careermodal/CareerModal'


function CurrentOpenings() {
  const [isLoad, setLoading] = useState(false)
  const [jobOpenings, setJobOpenings] = useState([])
  const [jobSuggestion, setJobSuggestion] = useState([])
  const [locations, setLocations] = useState([])
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
    email: '',
    position: ''
  });
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  console.log(isFormFilled, formData);



  useEffect(() => {
    const allFieldsFilled =
      formData.name !== '' &&
      formData.phone !== '' &&
      formData.email !== '' &&
      formData?.position !== '' &&
      // selectedLocation !== '' &&
      selectedFile !== null;
    setIsFormFilled(allFieldsFilled);
  }, [formData, selectedFile]);

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
    // if (event.target.name === "position") {

    //   const filteredLocations = jobSuggestion
    //     .filter(job => job.id === event.target.value)
    //     ;
    //   setLocations(filteredLocations);

    // }
  };

  const handlemodalLocattions = (id) => {
    setSelectedPosition(id)
    setFormData({ ...formData, position: id })
  }

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  };

  const handleSubmit = async () => {
    const datas = new FormData();

    if (isFormFilled) {
      setLoading(true)
      datas.append("name", formData.name)
      datas.append('career', formData.position);
      // datas.append('location', selectedLocation);
      datas.append('number', formData.phone);
      datas.append('email', formData.email);
      datas.append('cv_file', selectedFile);
      try {
        const res = await postApplyJobApi(datas)
        const { StatusCode, data } = res.data
        if (StatusCode === 6001) {
          setFormData({
            name: '',
            phone: '',
            email: '',
            position: ''
          })
          // setSelectedPosition("")
          // setSelectedLocation("")
          setSelectedFile(null)
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
          background: 'white',
          color: '#2B2B2B',
          timer: 1500
        });
      } finally {
        setLoading(false)
      }
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

  useEffect(() => {
    fetchDate()
  }, [page])

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <section>
        <main className="md:bg-[url('/images/careers/careerBackgroun.webp')] min-h-screen">
          <section className='pt-4 md:pt-8 lg:pt-12'>
            <div className='containers px-0 md:px-5 lg:px-5' style={{ alignItems: 'center' }}>
              <h1 className="text-[20px] sm:text-[32px] font-[clash-display-medium] mb-4 sm:mb-8 text-start text-[#052D23]">
                Current Openings
              </h1>
              {jobOpenings.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                  {jobOpenings.map((job, index) => (
                    <div key={index} className="w-full bg-white p-5 md:p-8 lg:p-8 rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h2 className='text-[24px] font-[general-sans-medium] mb-4'>{job?.job_title}</h2>
                      <div className='flex text-[14px] text-gray-600 mb-4'>
                        {/* <div className='flex items-center mr-4 bg-[#EBEBEB] px-2 py-1 rounded-md'>
                          <Image src={location} alt='location' className="mr-2" />
                          {job?.location}
                        </div> */}
                        <div className='flex items-center bg-[#EBEBEB] px-2 py-1 rounded-md'>
                          <Image src={work} alt='flats in Thrissur' className="mr-2" />
                          {job?.type}
                        </div>
                      </div>
                      <p className="text-[16px] md:text-[18px] lg:text-[18px] text-[#483C32] mb-6 leading-[24px] md:leading-[30px] lg:leading-[30px] font-[general-sans-light]">{job?.description}</p>
                      <div className='flex justify-end'>
                        <button onClick={() => (handleOpen(), handlemodalLocattions(job?.job_title))} className='border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg'>Apply Now</button>
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
          <section className='containers px-0 lg:px-5 pt-[80px] pb-[50px] md:py-24 md:px-5 sm:pt-[80px]'>          <div className='border' style={{ border: '0.5px solid #959595', borderRadius: '20px', overflow: 'hidden' }}>
            <div className="bg-white  p-[20px] md:p-[30px]">
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
                  <input
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='Enter position'
                    type="text"
                  />
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
                    type="email"
                    required
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
                    <Image src={uploadIcon} alt='flats in Thrissur' className='absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer' />
                    <input type="file" ref={fileInputRef} className='hidden' onChange={handleFileChange} />
                  </div>

                </div>
                <div className='-mt-[10px] md:mt-2 flex items-center text-[inter-regular] md:text-[11px] text-[#052D23]'>
                  <p className='text-xs md:text-[11px]'>
                    Allowed file types: pdf, doc, docx, rtf<br />
                    Maximum file size allowed: 5MB
                  </p>
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
          </section>
        </main>
        <CareerModal open={open} handleOpen={handleOpen}
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          handlePositionChange={handlePositionChange}
          jobSuggestion={jobSuggestion}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          handleLocationChange={handleLocationChange}
          locations={locations}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          handleFileInputClick={handleFileInputClick}
          uploadIcon={uploadIcon}
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
          isFormFilled={isFormFilled}
          setIsFormFilled={setIsFormFilled}
          isLoad={isLoad}
          setLoading={setLoading}
        />
      </section>
    </>
  );
}

export default CurrentOpenings;
