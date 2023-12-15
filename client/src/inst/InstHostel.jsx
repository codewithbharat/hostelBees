import React from 'react'
import Layout from '../components/instComponents/Layout'
import HostelCard from '../components/instComponents/HostelCard'

import { BiMenuAltLeft } from "react-icons/bi";

const InstHostel = () => {

    const HostelData = [
        {
            name: "Hostel 1",
            warden: "Mr. X",
            capacity: 50,
            students: 25,
            expenses: 30000
        },
        {
            name: "Hostel 2",
            warden: "Mr. Y",
            capacity: 50,
            students: 25,
            expenses: 30000
        },
        {
            name: "Hostel 3",
            warden: "Mr. Z",
            capacity: 50,
            students: 25,
            expenses: 30000
        },
        {
            name: "Hostel 4",
            warden: "Mr. A",
            capacity: 50,
            students: 25,
            expenses: 30000
        },
        {
            name: "Hostel 5",
            warden: "Mr. A",
            capacity: 50,
            students: 25,
            expenses: 30000
        },
        {
            name: "Hostel 6",
            warden: "Mr. A",
            capacity: 50,
            students: 25,
            expenses: 30000
        },
        {
            name: "Hostel 7",
            warden: "Mr. A",
            capacity: 50,
            students: 25,
            expenses: 30000
        },
        {
            name: "Hostel 8",
            warden: "Mr. A",
            capacity: 50,
            students: 25,
            expenses: 30000
        },
        {
            name: "Hostel 9",
            warden: "Mr. A",
            capacity: 50,
            students: 25,
            expenses: 30000
        },
    ]

    return (
        <Layout>
            <div className='flex flex-row items-center mx-12'>

                <div className='flex flex-row text-md bg-slate-200 mt-5 text-blue-900 font-semibold px-2 py-1 rounded-md shadow-md shadow-slate-500/50'>
                    <p> Filter </p>
                    <BiMenuAltLeft className='text-2xl mx-2' />
                </div>

                <div className='bg-green-600 font-semibold text-white ml-auto mr-6 px-2 py-1 rounded-md shadow-md shadow-slate-500/50'>
                    + Add Hostel
                </div>

            </div>
            <div className="flex flex-row flex-wrap">
                {
                    HostelData.map(({ name, warden, capacity, students, expenses }) => (
                        <HostelCard name={name} warden={warden} capacity={capacity} students={students} expenses={expenses} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default InstHostel