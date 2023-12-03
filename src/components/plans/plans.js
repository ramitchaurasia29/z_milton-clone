import React from 'react'
import PlanContainer from './planContainer'
import PlanType from './planType'
import BestDeals from './bestDeals'

const Plans = () => {
  return (
    <>
        
        <div className='flex flex-col items-center justify-evenly pb-8 mt-36'>
                <div className='flex flex-col items-center justify-evenly  mt-10'>
                    <div className='btn-sec w-auto rounded-3xl text-center py-3 px-4 font-medium'>
                        <span className=''>Pricing and plans 💰</span>
                    </div>
                    <span className='text-7xl font-bold w-auto  text-center'>Find the best plan for your needs</span>
                </div>
                <PlanType/>
                <BestDeals/>
                <PlanContainer/>
            </div>

        
    </>
  )
}

export default Plans