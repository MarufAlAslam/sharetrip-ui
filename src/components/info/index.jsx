import React from 'react'
import logo1 from "../../assets/img/logo1.png"
import journeyLane from "../../assets/img/jounrey-lane.png"
import jl2 from "../../assets/img/jl2.png"
import { FaInfoCircle } from 'react-icons/fa'

const Info = ({ hasInfo }) => {
    return (
        <div>
            <div className="flex justify-start items-start gap-4">
                <div className="w-[30px] pt-2 text-center flex flex-col justify-between items-center gap-2">
                    <img src={logo1} alt="logo" />
                    {
                        hasInfo ? <img src={journeyLane} alt="journey-lane" className='h-full' /> : <img src={jl2} alt="journey-lane" className='h-full' />
                    }

                </div>

                <div className="right w-full">
                    <div className="w-full grid grid-cols-3 gap-4">
                        <div className="item">
                            <p className="font-bold">
                                DAC - DXB
                            </p>
                            <p className="text-sm text-[#5A6573]">
                                12 hr 20 min
                            </p>
                        </div>
                        <div className="item">
                            <p className="font-bold">
                                07:30 PM
                            </p>
                            <p className="text-sm text-[#5A6573]">
                                28 Mar, Friday
                            </p>
                        </div>
                        <div className="item">
                            <p className="font-bold">
                                08:50 AM
                            </p>
                            <p className="text-sm text-[#5A6573]">
                                29 Mar, Saturday
                            </p>
                        </div>
                        <div className="item">
                            <p className="text-sm font-[500] text-[#3E4957]">
                                Turkish Airlines
                            </p>
                            <p className="text-sm text-[#5A6573]">
                                Flight no : TUR467
                            </p>
                        </div>
                        <div className="item">
                            <p className="text-sm text-[#5A6573]">
                                Airbus Industrie 737-800-738
                            </p>
                            <p className="text-sm text-[#5A6573]">
                                Class: <b>ECONOMY-Y (O)</b>
                            </p>
                        </div>
                    </div>
                    {
                        hasInfo && <div className="infobox mt-4 bg-[#FFEEDB] px-3 py-2 rounded w-full flex justi items-center gap-3">
                            <FaInfoCircle className='text-[#F27D00] text-xl' />
                            <p className='text-sm'>
                                Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality
                            </p>
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default Info