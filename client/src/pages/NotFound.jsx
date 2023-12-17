import React, { useEffect } from 'react'

const NotFound = () => {
    useEffect(() => {
        document.title = "Page Not Found"
    }, []);
    return (
        <div>NotFound</div>
    )
}

export default NotFound