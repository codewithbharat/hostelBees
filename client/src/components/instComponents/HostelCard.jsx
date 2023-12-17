import React from 'react'
import { FaRegBuilding } from "react-icons/fa";

const HostelCard = ({ name, warden, capacity, students, expenses }) => {
    return (
        <div className="flex flex-col mx-12 my-6 items-center justify-start rounded-lg shadow-lg p-8 w-80">
            <div className="flex flex-row w-full">
                <FaRegBuilding size={70} />
                <div className='ml-2 tracking-wide'>
                    <p className='text-lg font-semibold'>{name}</p>
                    <p className='text-md font-thin'>Warden : {warden}</p>
                    <p className='text-sm font-extralight'>Capacity : {capacity}</p>
                </div>
            </div>


            <div className='w-full'>
                <div className='w-full pt-2'>
                    <p className='text-lg font-semibold'>Students</p>
                    <p className='text-sm font-extralight'>{`${students}/${capacity}`}</p>
                </div>
                <div className='w-full pt-2'>
                    <p className='text-lg font-semibold'>Expanses</p>
                    <p className='text-sm font-extralight'>{expenses}</p>
                </div>
            </div>
        </div>
    )
}

export default HostelCard