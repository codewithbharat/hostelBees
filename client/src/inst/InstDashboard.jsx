import React from 'react'
import Layout from "../components/instComponents/Layout"
import './style/InstDashbaord.css'
import HostelCard from '../components/instComponents/HostelCard'
const InstDashboard = () => {


    const StatusData = [
        {
            title: "Student",
            strength: 200,
            percentage: "50%"
        },
        {
            title: "warden",
            strength: 20,
            percentage: "50%"
        },
        {
            title: "Expenses",
            strength: "30,30,00",
            percentage: "50%"
        },
        {
            title: "Notification",
            strength: 200,
            percentage: "50%"
        },
    ]

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
    ]

    const StatusWidget = ({ title, strength, percentage }) => {


        return (
            <div className=" w-56 h-28 shadow-lg rounded-md flex flex-row justify-between p-5 m-10 items-center">
                <div className="flex flex-col items-strech">
                    <p className='text-lg'>{title}</p>
                    <span className='text-sm'>{strength}</span>
                </div>
                <div className="flex items-center justify-center">
                    {percentage}
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <div className="flex flex-row flex-wrap justify-between">
                {
                    StatusData.map(({ title, strength, percentage }) => (
                        <StatusWidget title={title} strength={strength} percentage={percentage} />
                    ))
                }
            </div>

            <div className="flex flex-row bg-black w-full h-80">
                <div className=" basis-6/12 bg-slate-500">1</div>
                <div className=" basis-2/12 bg-blue-500">2</div>
                <div className=" basis-4/12 bg-red-500">3</div>
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

export default InstDashboard;