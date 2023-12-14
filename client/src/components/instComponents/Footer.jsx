import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="basis-1/12 text-white text-sm bg-slate-600 flex flex-row justify-center items-center"> 
        <p>
            &copy; Copyright 2023 | All Rights Reserved Hostelbees
        </p>
        <Link className='px-2 underline'> Privacy Policy</Link>
        <Link className='underline'> Terms & Conditions</Link>
    </div>
  )
}

export default Footer