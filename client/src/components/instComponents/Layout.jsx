import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-row h-screen overflow-hidden">
            <div className="basis-1/6  bg-indigo-200">
                <Sidebar />
            </div>
            <div className="basis-5/6 bg-gray-800">
                <div className="flex flex-col h-screen">
                    <div className="basis-1/12 bg-white"> <Topbar /> </div>
                    <div className="basis-11/12 bg-white overflow-scroll overflow-x-hidden">{children}
                        <div className="bg-white flex flex-row justify-center items-end">
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout