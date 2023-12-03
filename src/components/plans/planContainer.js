import React from 'react'
import PlanCard from './numbersOfPlan/planCard'
import PlanCard2 from './numbersOfPlan/planCard2'
import PlanCard3 from './numbersOfPlan/planCard3'





const PlanContainer = () => {
  return (
    <>
      <div className=' flex mt-4'>
        <PlanCard/>
        <PlanCard2/>
        <PlanCard3/>
        
      </div>
    </>
  )
}

export default PlanContainer