import React from 'react'

const QuestionBar = (props) => {
  return (
    <>
        <div className='flex justify-between w-4/6 flow-card-col font-bold text-2xl p-5 mt-8 rounded-lg'> 
            <div >{props.title}</div>
            <div><img src='./images/plus.png' alt='$'/></div>
        </div>
    </>
  )
}

export default QuestionBar