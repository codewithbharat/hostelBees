import React, { useEffect } from 'react'
import './styles/NotFound.css'

const NotFound = () => {
    useEffect(() => {
        document.title = "Page Not Found"
    }, []);
    return (
                <div className='NotFound'>

                    <button>Go Back Home</button>
                
                </div>
    )
}

export default NotFound