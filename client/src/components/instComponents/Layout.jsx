import React from 'react'

const Layout = ({ children }) => {
    return (
        <div class="flex flex-row h-screen">
            <div class="basis-1/6  bg-slate-500">sidebar</div>
            <div class="basis-5/6 bg-gray-800">
                <div className="flex flex-col h-screen">
                    <div class="basis-1/12 bg-white">nav</div>
                    <div class="basis-11/12 bg-cyan-400">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout