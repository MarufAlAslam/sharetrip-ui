import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Box from '../../components/box'
import Info from '../../components/info'

const Homepage = () => {
    return (
        <main className='min-h-screen'>
            <div className="h-[68px] bg-white w-full"></div>
            <div className="body bg-[#ebf0f5] py-4 h- w-full">
                <div className="container">
                    <div className="grid grid-cols-5 justify-between items-start gap-6">
                        <div className="sidebar col-span-5 md:col-span-1 flex h-full bg-white rounded-lg p-5"></div>
                        <div className="col-span-5 md:col-span-4 py-1">
                            <div className="flex flex-wrap justify-start items-center gap-2">
                                <p className='text-[#5A6573] text-[13px]'>Home</p>
                                <p className='text-[#5A6573] text-[13px]'>
                                    <FaChevronRight className='inline text-[10px]' />
                                </p>
                                <p className='text-[#5A6573] text-[13px]'>Booking History</p>
                                <p className='text-[#5A6573] text-[13px]'>
                                    <FaChevronRight className='inline text-[10px]' />
                                </p>
                                <p className='text-[#5A6573] text-[13px]'>Flight</p>
                                <p className='text-[#5A6573] text-[13px]'>
                                    <FaChevronRight className='inline text-[10px]' />
                                </p>
                                <p className='text-[#1882FF] text-[13px]'>STFL17121182045413</p>
                            </div>


                            <div className="card bg-white mt-6 rounded-lg">
                                <div className="card-header border-b p-4">
                                    <div className="flex justify-between items-center gap-2">
                                        <div className="flex justify-start items-center gap-4">
                                            <span className='number w-[24px] h-[24px] bg-[#1882FF] text-white text-sm flex justify-center items-center rounded-full'>1</span>
                                            <div className="text">
                                                <p className="font-semibold text-lg">
                                                    DAC → JFK
                                                </p>
                                                <p className='flex flex-wrap justify-start items-center gap-2 text-[#5A6573] text-[13px]'>
                                                    <span>Round Trip</span>
                                                    <span className='min-w-[5px] min-h-[5px] rounded-full bg-[#5A6573] d-block'></span>
                                                    <span>25 Mar - 4 Apr 2023</span>
                                                    <span className='min-w-[5px] min-h-[5px] rounded-full bg-[#5A6573] d-block'></span>
                                                    <span>1 Stop</span>
                                                </p>

                                            </div>
                                        </div>

                                        <div className="time hidden md:block text-[#1882FF] text-xs bg-[#E8F3FF] px-[8px] py-[4px] rounded-full font-[500]">
                                            33h 20m
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body px-4 py-5">
                                    <Box reached={false} txt={'Departure from Dhaka'} airport={'Terminal 1: Hazrat Shahjalal International Airport'} />
                                    <div className="my-5">
                                        <Info hasInfo={true} />
                                    </div>
                                    <Box reached={false} txt={'Layover at Dubai: 12 hr 20 min '} airport={'Dubai International Airport'} />
                                    <div className="my-5">
                                        <Info hasInfo={false} />
                                    </div>
                                    <Box reached={true} txt={'Destination at New York'} airport={'Terminal 4: John F Kennedy International Airport'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Homepage