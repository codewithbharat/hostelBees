import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Topbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const UserDropdown = () => {
    return (
      // overlay
      <div onClick={() => setIsOpen(!isOpen)} className='fixed top-0 right-0 bottom-0 left-0 h-full w-full z-50'>
        <div className="absolute right-12 top-12 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center mt-4 border-b-2 cursor-default ">
            <GrUserManager size={32} />
            <p className='font-semibold text-lg'>Bharat Ranjan</p>
            <p className=' font-thin text-sm tracking-wide'>Administrator</p>
            <p className=' font-extralight text-sm tracking-wider'>SPNREC, Araria</p>
          </div>
          <div className='my-2 border-b-2'>
            <Link to="/inst/profile" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Your Profile</Link>
            <Link to="" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
            <Link to="" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
          </div>
          <div className='my-2 border-b-2'>
            <Link to="" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Help & Support</Link>
            <Link to="" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Privacy & Policy</Link>
            <Link to="" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100">Term's conditons</Link>
          </div>
          <p className="block cursor-default px-4 py-1 text-sm text-gray-70"> &copy; Hostelbees 2023</p>
        </div>
      </div>
    )
  }

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
          <FiSearch size={18} className=' -ml-6 z-10 text-slate-600' />
          <CgProfile onClick={() => setIsOpen(!isOpen)} size={30} className='mr-8 ml-4 rounded-full cursor-pointer  text-slate-500' />
        </div>
        {isOpen && <UserDropdown />}
      </div>
    </div>
  )
}

export default Topbar