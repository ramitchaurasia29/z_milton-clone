import React from 'react'

const Footer2nd = () => {
    return (
        <><div className='flex justify-center'>
            <div className='flex flex-col items-center justify-center pb-8 mt-36 w-2/6'>
                <div className='flex flex-col items-center justify-evenly  mt-10'>
                    <div className='btn-sec w-auto rounded-3xl text-center py-3 px-4 font-medium'>
                        <span>Last call Baby! 🚀</span>
                    </div>
                    <span className='text-7xl font-bold w-auto text-center'>Ready to start?</span>
                </div>
                <div>
                    <div className='text-slate-500 mt-10 text-center'>
                        <span>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</span>
                    </div>
                </div>
                <button type="button" class="text-white btn-head w-fit text-lg  hover:bg-teal-300 mt-4	 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg  px-4 py-2 text-center  mr-4 hover:scale-110 transition duration-150">Get Started it's free</button>

                <div className='flex mt-6'>
                    <div className='mt-16 mr-4'><img src='./images/user-girl.png' alt='$' /></div>
                    <div className='flex flex-col mr-18 bg-black text-white w-3/5 h-20 p-2 rounded-md'>
                        <div className=' text-sm font-medium'><span>I never missed a call again, the AI-drivenfeature is a game changer for me! </span></div>
                        <div className=' text-sm mt-1.5 font-medium text-slate-400'><span>Adam, Solo founder </span></div>
                    </div>
                </div>


            </div>

        </div>
        </>
    )
}

export default Footer2nd