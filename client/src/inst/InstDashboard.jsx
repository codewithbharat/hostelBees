import React from 'react'
import Layout from "../components/instComponents/Layout"
const InstDashboard = () => {

    
   const  StatusData = [
        {
            title : "Student",
            strength : 200,
            percentage : "50%"
        },
        {
            title : "warden",
            strength : 20,
            percentage : "50%"
        },
        {
            title : "Expenses",
            strength : "30,30,00",
            percentage : "50%"
        },
        {
            title : "Notification",
            strength : 200,
            percentage : "50%"
        },
    ]

    const StatusWidget = ({title , strength, percentage}) => {


        return (
            <div className=" w-56 h-28 shadow-md rounded-md flex flex-row justify-between p-5 m-10 items-center bg-white">
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
            <div className="flex flex-row justify-between">
                {
                    StatusData.map(({title, strength, percentage}) => (
                        <StatusWidget title={title} strength={strength} percentage={percentage} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default InstDashboard;