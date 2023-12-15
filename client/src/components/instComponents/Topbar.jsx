import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="flex flex-row w-full h-full items-center justify-between">
      <div className="ml-8">
        <h1 className='text-xl font-semibold'>
          Overview
        </h1>
        <p className='text-sm tracking-wider font-light'>
          Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>

      <div>
        <div className="flex flex-row h-full pr-5 items-center">
          <input className="drop-shadow-lg text-sm p-2 pl-2 pr-8 tracking-wider w-80 rounded-lg" type="text" placeholder='Search for hostels, warden, student, etc.' />
          <FiSearch className=' -ml-6 z-10 text-slate-600' />
          <CgProfile className='mr-8 ml-4 text-2xl rounded-full  text-slate-500' />
        </div>
      </div>
    </div>
  )
}

export default Topbar