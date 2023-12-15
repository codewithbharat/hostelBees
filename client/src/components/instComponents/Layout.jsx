import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div class="flex flex-row h-screen overflow-hidden">
            <div class="basis-1/6  bg-indigo-200">
                <Sidebar />
            </div>
            <div class="basis-5/6 bg-gray-800">
                <div className="flex flex-col h-screen">
                    <div class="basis-1/12 bg-white"> <Topbar /> </div>
                    <div class="basis-10/12 bg-white overflow-scroll overflow-x-hidden">{children}</div>
                    <div class="basis-1/12 bg-white flex flex-row justify-center items-end">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout