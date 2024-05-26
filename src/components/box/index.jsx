import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Box = ({ reached, txt, airport }) => {
    return (
        <div className="flex justify-between items-center gap-4">
            <FaMapMarkerAlt className={`w-[30px] text-lg ${reached ? "text-[#1882FF]" : "text-[#9BA6B2]"}`} />
            <div className="box bg-[#F5F7FA] w-full h-full py-3 px-4 rounded-md flex justify-between items-center gap-2">
                <p className='text-sm font-[500]'>{txt}</p>
                <p className='text-sm'>{airport}</p>
            </div>
        </div>
    )
}

export default Box