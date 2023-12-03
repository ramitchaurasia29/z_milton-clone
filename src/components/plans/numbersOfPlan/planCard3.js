import React from 'react'


const PlanCard3 = () => {
    return (
        <>
            <div className=' flex flex-col flow-card-col plan-card rounded-lg mx-6 mb-6 p-8'>
                <div className='flex  flex-col '>
                    <div className='bg-pink-200 w-fit rounded-3xl text-center text-lg py-2 px-5 font-medium'>
                        <span>Pro</span>
                    </div>
                    <span className='mt-2 text-slate-500'>So you can see how incredible our tool is. </span>

                </div>
                <div className='mt-6'>
                    <div className='flex content-end '>
                        <div className='font-bold text-7xl'>$49</div>
                        <div className='mt-12'>/mo</div>
                    </div>
                    <div className='text-black font-normal mt-2'>Billed monthly</div>
                </div>
                <div className='mt-4'>
                    <div>
                    <button type="button" class="text-white btn-head w-full text-lg  hover:bg-teal-300	 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg  px-4 py-2 text-center  mr-4 hover:scale-110 transition duration-150">Get Started</button>
                    </div>
                    <div className='text-center text-sm mt-0.5'>
                    7 days free trial no credit card needed
                    </div>
                </div>
                <div className=' mt-10 text-lg'>
                    <div>
                    All Starter features, plus:
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-lg mt-2'>✔️ A cool feature</span>
                        <span className='text-lg mt-2'>✔️ A basic feature</span>
                        <span className='text-lg mt-2'>✔️ A top feature with limitations</span>
                        <span className='text-lg mt-2'>✔️ An incredible feature so useful</span>
                        <span className='text-lg mt-2'>✔️ A premium feature</span>
                        <span className='text-lg mt-2'>✔️ You need this feature</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanCard3