import React from 'react'
import Flow1 from './flow1'
import Flow2 from './flow2'
import Flow3 from './flow3'


const FlowCollection = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-evenly pb-8 mt-36'>
                <div className='flex flex-col items-center justify-evenly  mt-10'>
                    <div className='btn-sec w-auto rounded-3xl text-center py-3 px-4 font-medium'>
                        <span>They already love our products 😍</span>
                    </div>
                    <span className='text-7xl font-bold w-auto text-center'>See what our users say about us</span>
                </div>



            </div>
            <div className='mt-8'>
                <Flow1 />
                <Flow2 />
                <Flow3/>
                
                

            </div>

        </>
    )
}

export default FlowCollection