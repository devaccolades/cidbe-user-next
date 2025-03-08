// "use client"
// import React, { useState } from 'react'

// function ComplaintForm() {
//   const [formData, setFormData] = useState({
//     flat: '',
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

  
//   const handleSubmit = (e) => {
//     e.preventDefault(); 
    
//     console.log('Form Data Submitted:', formData);

//     setFormData({
//       flat: '',
//       name: '',
//       phone: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div>
//        <section className='containers px-0 lg:px-5 pt-[80px] pb-[50px] md:py-24 md:px-5 sm:pt-[80px]'> 
//        <h1 className="text-[20px] sm:text-[32px] font-[clash-display-medium] mb-4 sm:mb-8 text-start text-[#052D23]">
//                 Complaints
//                </h1>     
//             <div className='border' style={{ border: '0.5px solid #959595', borderRadius: '20px', overflow: 'hidden' }}>
//                   <div className="bg-white  p-[20px] md:p-[30px]">
//                     <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>

//                     <div className='flex flex-col'>
//                         <p className='font-[inter-regular] text-[14px] '>Flat and Block No</p>
//                         <input
//                           name="flat"
                       
//                           className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
//                           placeholder='1/H/5...'
//                           type="text"
//                         />
//                       </div>
//                       <div className='flex flex-col'>
//                         <p className='font-[inter-regular] text-[14px] '>Name</p>
//                         <input
//                           name="name"
                    
//                           className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
//                           placeholder='Enter Your Name'
//                           type="text"
//                         />
//                       </div>
                      
//                       <div className='flex flex-col'>
//                         <p className='font-[inter-regular] text-[14px] '>Phone No</p>
//                         <input
//                           name="phone"
                       
//                           className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
//                           placeholder='Enter Phone Number'
//                           type="number"
//                         />
//                       </div>
                     
//                       <div className='flex flex-col'>
//                         <p className='font-[inter-regular] text-[14px] '>Email</p>
//                         <input
//                           name="email" 
//                           className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
//                           placeholder='Enter Email'
//                           type="email"
//                           required
//                         />
//                       </div>

//                       <div className='flex flex-col'>
//                         <p className='font-[inter-regular] text-[14px] '>Message</p>
//                         {/* <input
//                           name="message"
                       
//                           className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
//                           placeholder='Enter complaint'
//                           type="textarea"
//                         /> */}
//                         <textarea
//                         name="message"
//                         className="w-full h-[200px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none"
//                         placeholder="Enter complaint"
//                       ></textarea>

//                       </div>
      
               
                    
//                     </div>
//                     <div className='mt-6 md:flex md:justify-end'>
      
//                       <button
//                        type='submit'
//                         className='w-full md:w-auto text-black border border-black px-6 py-2 rounded-md transition-all duration-300  '
                   
                        
//                       >SUBMIT
                        
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 </section>
//     </div>
//   )
// }

// export default ComplaintForm;


"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';


function ComplaintForm() {
  
  const [formData, setFormData] = useState({
    flat: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Data Submitted:', formData);
    Swal.fire({
      title: "Form Submitted Successfully!",
      text: "We will reach out to you soon",
      icon: "success",
    })

    
    setFormData({
      flat: '',
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

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
                  <p className='font-[inter-regular] text-[14px]'>Flat and Block No</p>
                  <input
                    name="flat"
                    value={formData.flat}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='1/H/5...'
                    type="text"
                  />
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
                  />
                </div>

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Phone No</p>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none'
                    placeholder='Enter Phone Number'
                    type="number"
                  />
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
                </div>

                <div className='flex flex-col'>
                  <p className='font-[inter-regular] text-[14px]'>Message</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-[100px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none"
                    placeholder="Enter complaint"
                  ></textarea>
                </div>
              </div>

              <div className='mt-6 md:flex md:justify-end'>
                <button
                  type='submit'
                  className='w-full md:w-auto text-white border bg-[#052D23] px-6 py-2 rounded-md transition-all duration-300'>
                  Submit
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
