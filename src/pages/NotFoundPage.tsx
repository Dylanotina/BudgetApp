import React from 'react'
import {Link} from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold p-8'>404</h1>
            <p className='text-base font-bold m-2'>Looks like you're lost...</p>
            <Link to='/'><h3 className='text-lg font-bold'>Return to Home Page</h3></Link>
        </div>
    )
}

export default NotFoundPage
