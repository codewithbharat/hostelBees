import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' text-white w-full py-1 text-sm bg-slate-600 flex flex-row justify-center items-end'>
      <p>
        &copy; Copyright 2023 | All Rights Reserved Hostelbees
      </p>
      <Link className='px-2 underline'> Privacy Policy</Link>
      <Link className='underline'> Terms & Conditions</Link>
    </div>
  )
}

export default Footer