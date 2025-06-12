import React from 'react'
import Image from 'next/image'
import buildingSketch from '../../../public/images/aprtments_thrissur/buildingSketch.png'

export default async function FormSection() {
    return (
        <>
            <section className="bg-[#BFD8BD] py-16">
                <div className="w-[92%] 2xl:w-[85%] mr-auto grid grid-cols-1 md:grid-cols-2  items-center">

                    {/* Left Image */}
                    <div className="relative w-full h-[400px] md:h-[500px]">
                        <Image
                            src={buildingSketch}
                            alt="Apartment sketch"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right Form Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 w-full max-w-lg ml-auto">
                        <h3 className="text-[20px] font-[general-sans-regular] font-normal text-gray-700 mb-6">
                            WE ARE READY TO ANSWER ALL YOUR QUESTIONS
                        </h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <input
                                type="text"
                                placeholder="Enter WhatsApp Number"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <input
                                type="email"
                                placeholder="Enter Email address"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400">
                                <option value="">Select Project</option>
                                <option value="cassia">Cassia</option>
                                <option value="maple">Maple</option>
                                <option value="pine">Pine</option>
                            </select>
                            <textarea
                                rows="4"
                                placeholder="Message here"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-green-900 hover:bg-green-800 text-white text-sm py-2 rounded-md transition duration-200"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}


