import React from 'react'
import Card from './card'

const MoreFeatureSection = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-evenly pb-8'>
                <div className='flex flex-col items-center justify-evenly  mt-10'>
                    <div className='btn-sec w-auto rounded-3xl text-center py-3 px-4 font-medium'>
                        <span>And so much more... 💼</span>
                    </div>
                    <span className='text-7xl font-bold w-4/5 text-center'>Our features to make your life easier</span>
                </div>
            <div className='flex justify-around w-11/12 mt-12 flex-wrap'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
            </div>
                

            </div>
        </>
    )
}

export default MoreFeatureSection