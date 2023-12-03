import React from 'react'

import '../hero/hero.css'
const HeroSec = () => {
  return (
    <>
      <div className='pb-10 mt-10' >
        <div className='flex flex-col items-center justify-evenly  hero-sec '>
          <div className='btn-sec  rounded-3xl text-center py-3 px-4 '>
            <span>An other way to manage time</span>
          </div>
          <div className='w-3/5 text-8xl font-bold	text-center'>
            <span>An other way to manage</span>
            📆
            <span>time</span>
          </div>
          <div className='w-2/6  text-center mt-3.5' >
            <span>Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features. </span>
          </div>
        </div>

        <div className='flex flex-col  items-center justify-evenly  pt-2 h-24'>
          <button type="button" class="text-white btn-head	h-12 hover:bg-teal-300	 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  hover:scale-110 transition duration-150 ">Get started it's free</button>
          <span className='text-xs'>
            Free 14 days trials,no credit card needed
          </span>
        </div>

        <div className=' flex  items-evenly justify-center mt-3.5 '>
          <div className='mr-2'><img src='./images/users.png' alt='' className='h-12' /></div>
          <div className='flex flex-col  '>
            <div className=''>⭐⭐⭐⭐⭐ <span>5.0</span></div>
            <div>From 200+ happy users</div>
          </div>
        </div>
        <div className='object-cover flex justify-center mt-16 '><img src='./images/heroTem.avif' alt='' className='rounded-2xl shadow-xl'/></div>
      </div>
    </>
  )
}

export default HeroSec