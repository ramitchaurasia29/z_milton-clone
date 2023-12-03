import React from 'react'
import '../hero/hero.css'

const Card = () => {
    return (
        <div className='flex flex-col card-width rounded-lg backdrop-blur-xl'>

            <div className=' bg-slate-200 object-contain rounded-lg '>
                <img src='./images/card-image.png' alt='#' className='p-12 h-72 w-full rounded-lg' />
            </div>


            <div className='flex flex-col content-start     '>
                <div className='btn-sec  rounded-3xl text-center py-3 px-4 w-56 font-medium mt-10'>
                    <span>Seamless Scheduling</span>
                </div>
                <div className='text-slate-500 mt-8'>
                    <span>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go. </span>
                </div>

            </div>
        </div>
    )
}

export default Card