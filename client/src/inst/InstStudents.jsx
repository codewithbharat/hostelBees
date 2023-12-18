import React, { useState, useRef, useEffect } from 'react'
import Layout from '../components/instComponents/Layout'
import StudentList from '../components/instComponents/StudentList'
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";

import './style/InstStudents.css'

const InstStudents = () => {

    const refOne = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    })

    const handleClickOutside = (event) => {
        if (refOne.current && !refOne.current.contains(event.target)) {
            setShowAddStudent(false)
        }
    }
    const [showAddStudent, setShowAddStudent] = useState(false)
    const StudentData = [
        {
            index: 1,
            name: 'Rahul Kumar',
            studentId: '2019UGCS053R',
            branch: 'CSE',
            semester: '7th',
            hostel: 'Kaveri',
            contact: '9876543210',
            room: 'A-101'
        },

        {
            index: 2,
            name: 'Rohan Kumar',
            studentId: '2019UGCS053R',
            branch: 'EE',
            semester: '4th',
            hostel: 'Yamuna',
            contact: '9876543210',
            room: 'A-101'
        },

        {
            index: 3,
            name: 'Bharat Rajput',
            studentId: '2019UGCS053R',
            branch: 'CSE',
            semester: '5th',
            hostel: 'Spriti',
            contact: '9876543210',
            room: 'A-101'
        },

        {
            index: 4,
            name: 'Rahul Kumar',
            studentId: '2019UGCS053R',
            branch: 'CSE',
            semester: '1th',
            hostel: 'Lorem',
            contact: '9876543210',
            room: 'A-101'
        },

        {
            index: 5,
            name: 'Rahul Kumar',
            studentId: '2019UGCS053R',
            branch: 'CSE',
            semester: '4th',
            hostel: 'eri',
            contact: '9876543210',
            room: 'A-101'
        }
    ]

    const AddStudents = () => {
        return (
            <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-gray-900/50 z-10">
                <div ref={refOne} className="rounded-xl flex flex-col w-4/6 h-3/4 justify-center bg-gray-50 shadow-md p-4">
                    <div className="basis-2/3  p-2">
                        <form className='m-1 flex rounded-md shadow-md shadow-black/40'>
                            <div className="basis-1/4 flex flex-col justify-center items-center">
                                <FaUserTie size={200} />
                                <input class=" w-2/3 text-sm text-gray-900 border border-gray-300 rounded-md my-2 cursor-pointer bg-gray-50" id="file_input" type="file" />
                            </div>
                            <div className="basis-3/4 bg-blue-300 p-4 rounded-r-md">

                                <div className="flex">
                                    <select className='basis-1/4 p-1 m-2 rounded-md'>
                                        <option value="hostel" disabled selected>Hostel</option>
                                        <option value="hostel1">Hostel 1</option>
                                        <option value="hostel2">Hostel 2</option>
                                        <option value="hostel3">Hostel 3</option>
                                    </select>

                                    <select className='basis-1/4 p-1 m-2 rounded-md'>
                                        <option value="floor" disabled selected>Floor</option>
                                        <option value="floor1">Floor 1</option>
                                        <option value="floor2">Floor 2</option>
                                        <option value="floor3">Floor 3</option>
                                    </select>

                                    <select className='basis-1/4 p-1 m-2 rounded-md'>
                                        <option value="room" disabled selected>Room</option>
                                        <option value="floor1">Floor 1</option>
                                        <option value="floor2">Floor 2</option>
                                        <option value="floor3">Floor 3</option>
                                    </select>
                                    <select className='basis-1/4 p-1 m-2 rounded-md'>
                                        <option value="floor" disabled selected>Bed</option>
                                        <option value="floor1">Floor 1</option>
                                        <option value="floor2">Floor 2</option>
                                        <option value="floor3">Floor 3</option>
                                    </select>
                                </div>
                                <div className='flex'>
                                    <div className=' basis-1/2 flex mx-2 my-1 justify-between'>
                                        <label htmlFor="name" className=' font-semibold'>Name</label>
                                        <input id='name' className='ml-2 px-1 rounded-sm' type="text" />
                                    </div>
                                    <div className=' basis-1/2 flex mx-2 my-1 justify-between'>
                                        <label htmlFor="fname" className=' font-semibold'>Father's Name</label>
                                        <input id='fname' className='ml-2 px-1 rounded-sm' type="text" />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className=' basis-1/2 flex mx-2 my-1 justify-between'>
                                        <label htmlFor="branch" className=' font-semibold'>Branch</label>
                                        <input id='branch' className='ml-2 px-1 rounded-sm' type="text" />
                                    </div>
                                    <div className=' basis-1/2 flex mx-2 my-1 justify-between'>
                                        <label htmlFor="roll" className=' font-semibold'>Roll No.</label>
                                        <input id='roll' className='ml-2 px-1 rounded-sm' type="text" />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className=' basis-1/2 flex mx-2 my-1 justify-between'>
                                        <label htmlFor="mobNo" className=' font-semibold'>Mob No.</label>
                                        <input id='mobNo' className='ml-2 px-1 rounded-sm' maxLength="10" type="number" />
                                    </div>
                                    <div className=' basis-1/2 flex mx-2 my-1 justify-between'>
                                        <label htmlFor="fname" className=' font-semibold'>Email</label>
                                        <input id='fname' className='ml-2 px-1 rounded-sm' type="text" />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className=' basis-1/2 flex mx-2 my-1 justify-between'>
                                        <label htmlFor="city" className=' font-semibold'>City</label>
                                        <input id='city' className='ml-2 px-1 rounded-sm' type="text" />
                                    </div>
                                    <div className=' basis-1/2 flex mx-2 my-1 justify-between'>
                                        <label htmlFor="state" className=' font-semibold'>State</label>
                                        <input id='state' className='ml-2 px-1 rounded-sm' type="text" />
                                    </div>
                                </div>
                                <div className='flex p-2'>
                                    <input type='submit' className='bg-green-600 cursor-pointer text-white px-2 text-lg rounded-md  shadow-md' onClick={() => setShowAddStudent(false)} value="Save" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <Layout>
            <div className='flex flex-row items-center mx-12'>

                <div className='flex flex-row text-md bg-slate-200 mt-5 text-blue-900 font-semibold px-2 py-1 rounded-md shadow-md shadow-slate-500/30'>
                    <p> Filter </p>
                    <BiMenuAltLeft className='text-2xl mx-2' />
                </div>

                <div onClick={() => setShowAddStudent(true)} className='cursor-pointer bg-green-600 font-semibold text-white ml-auto  px-2 py-1 rounded-md shadow-md shadow-slate-500/50'>
                    + Add Student
                </div>

            </div>

            <StudentList students={StudentData} />
            {
                showAddStudent && <AddStudents />
            }

        </Layout>
    )
}

export default InstStudents