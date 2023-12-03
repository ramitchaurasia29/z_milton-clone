import React from 'react'


const FlowCardMain = (props) => {
  return (
    <>
      <div className='flex flex-col justify-between flow-card-col h-44 m-8 flow-card p-3 rounded-lg backdrop-blur-xl' >
        <div className='flex justify-between '>
          <div className=' flex '>
            <div className='object-cover mr-2'><img src='./images/flowUser.png ' alt='#' className='w-6' /></div>
            <div className='text-left font-semibold'> {props.cmt}</div>
          </div>
          <div>⭐⭐⭐⭐⭐</div>
        </div>
        <div className='mt-2 '>
        {props.des}
        </div>
        <div className='flex justify-between mt-6 '>
          <div className=' flex '>
            <div className='text-left font-semibold'>{props.name}</div>
          </div>
          <div className='text-left'>{props.profession}</div>
        </div>
      </div>
    </>
  )
}

export default FlowCardMain