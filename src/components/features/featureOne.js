import React from 'react'

const FeatureOne = () => {
    return (
        <>
            <div className='flex w-3/4 mt-28 mb-10'>

                <div className='flex flex-col content-start  w-2/4 mr-24'>
                    <div className='btn-sec  rounded-3xl text-center py-3 px-4 w-56 font-medium'>
                        <span>Seamless Scheduling</span>
                    </div>
                    <div className='mt-2.5 text-5xl font-bold '>
                        <span>Focus on what matters most for you</span>
                    </div>
                    <div className='text-slate-500 mt-16'>
                        <span>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</span>
                    </div>
                    <div className='flex mt-24'>
                        <div className='mt-16 mr-4'><img src='./images/user-girl.png' alt='$' /></div>
                        <div className='flex flex-col mr-18 bg-black text-white w-3/5 h-20 p-2 rounded-md'>
                            <div className=' text-sm font-medium'><span>I tested many calendar apps. This app is the best of all! It saves me hours of time.</span></div>
                            <div className=' text-sm mt-1.5 font-medium text-slate-400'><span>Carla, Head of Finance </span></div>
                        </div>
                    </div>
                </div>

                <div className='w-3/5'><img src='./images/f-1.jpg ' alt='#' className='rounded-xl ' /></div>
            </div>
        </>
    )
}

export default FeatureOne