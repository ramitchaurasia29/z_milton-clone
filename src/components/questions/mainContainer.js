import React from 'react'
import QuestionContainer from './questionContainer'

const MainContainer = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-evenly pb-8 mt-32'>
                <div className='flex flex-col items-center justify-evenly  mt-10'>
                    <div className='btn-sec w-auto rounded-3xl text-center py-3 px-4 font-medium'>
                        <span className=''>Relevant stuff, bla bla 📣</span>
                    </div>
                    <span className='text-7xl font-bold w-auto  text-center'>Frequently asked questions</span>
                </div>
                <QuestionContainer/>
            </div>
    </>
  )
}

export default MainContainer