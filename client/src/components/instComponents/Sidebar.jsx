import React from 'react'
import { NavLink } from 'react-router-dom'

import { LuLayoutDashboard } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";

const Sidebar = () => {

    const LinkData = [
        {
            name: "Overview",
            icon: <LuLayoutDashboard />
        },
        {
            name: "Students",
            icon: <PiStudent />
        },
        {
            name: "Hostels",
            icon: <FaRegBuilding />
        },
        {
            name: "Finance",
            icon: <GiReceiveMoney />
        },
        {
            name: "Messages",
            icon: <MdOutlineMessage />
        },
        {
            name: "Archives",
            icon: <FaFileAlt />
        }
    ]
    const SideLinks = ({ link, icon }) => (
        <NavLink
            className="px-4 
                       py-2 
                       my-3
                       text-center
                       w-full
                       text-lg
                       text-grey-700
                       shadow-md 
                       transition-colors
                       duration-150
                     bg-indigo-100
                     hover:bg-blue-700
                     hover:text-indigo-100
                       rounded-lg"
        >
            <div className="flex flex-row ml-4 items-center">
                {icon}
                <span className='ml-2'>{link}</span>
            </div>
        </NavLink>
    )

    return (
        <div className='flex flex-col h-screen mx-8 my-5 static'>
            <div className="sidebar-brand text-center mb-5">
                <p className='sidebar-brand-name text-lg tracking-wider uppercase'>Hostelbees</p>
            </div>
            {
                LinkData.map((link) => (
                    <SideLinks link={link.name} icon={link.icon} />
                ))
            }

            <div className='mt-auto mb-5 flex flex-col'> {/* This adds space between the links and the "Settings" link */}
                <SideLinks link="Settings" icon={<IoSettingsOutline />} />
            </div>
        </div>

    )
}

export default Sidebar