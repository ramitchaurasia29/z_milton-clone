import React from 'react'

const FeatureFour = () => {
  return (
    <>
            <div className='flex w-3/4 mt-28 mb-10'>
                <div className='w-3/5'><img src='./images/f-1.jpg ' alt='#' className='rounded-xl ' /></div>

                <div className='flex flex-col content-start  w-2/4 ml-24'>
                    <div className='btn-sec  rounded-3xl text-center py-3 px-4 w-56 font-medium'>
                        <span>Smart Reminders & Task</span>
                    </div>
                    <div className='mt-2.5 text-5xl font-bold '>
                        <span>Never miss an important deadline or event again</span>
                    </div>
                    <div className='text-slate-500 mt-12'>
                        <span>Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.</span>
                    </div>
                    <div className='flex mt-12'>
                        <div className='mt-16 mr-4'><img src='./images/user-girl.png' alt='$' /></div>
                        <div className='flex flex-col mr-18 bg-black text-white w-3/5 h-20 p-2 rounded-md'>
                            <div className=' text-sm font-medium'><span>I've recommended this app to all my friends and colleagues!    </span></div>
                            <div className=' text-sm mt-1.5 font-medium text-slate-400'><span>Karl, CTO of a cool startup </span></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
  )
}

export default FeatureFour