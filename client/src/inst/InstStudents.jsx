import React, { useState, useRef, useEffect } from 'react'
import Layout from '../components/instComponents/Layout'
import StudentList from '../components/instComponents/StudentList'
import { BiMenuAltLeft } from "react-icons/bi";

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
                <div ref={refOne} className="rounded-xl flex flex-col w-4/6 h-3/4 bg-gray-50 shadow-md p-4">
                    <div className="basis-1/2 flex">
                        <div className="basis-1/4 bg-slate-700"> o1</div>
                        <div className="basis-3/4 bg-red-500">02

                        </div>
                    </div>
                    <div className="basis-1/2">
                        <button onClick={() => setShowAddStudent(false)}>save</button>
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

                <div onClick={() => setShowAddStudent(true)} className=' cursor-pointer bg-green-600 font-semibold text-white ml-auto  px-2 py-1 rounded-md shadow-md shadow-slate-500/50'>
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