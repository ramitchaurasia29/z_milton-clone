import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="footer-col">
        <div class="ml-24 mt-36  w-5/6 space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div class="text-black font-bold text-3xl flex content-end">
                  <img src='./images/icon.png' alt='$' className='h-6 w-6  mt-2 mr-1 bg-white content-fit p-1 rounded-sm'/>
                  <div>Milton</div>
              </div>

              <p class="mt-4 max-w-xs text-gray-700">
                A short text explaining why my startup is so cool
              </p>
              <p class="mt-4 max-w-xs text-gray-700">
                © My super start-up
              </p>

              <ul class="mt-8 flex gap-6">
                <li>
                 <div className='h-8 w-8 content-fit'><img src='./images/twitter.png' alt='$'/></div>
                </li>
                <li>
                 <div className='h-8 w-8 content-fit'><img src='./images/facebook.png' alt='$'/></div>
                </li>
                <li>
                 <div className='h-8 w-8 content-fit'><img src='./images/linkedin-logo.png' alt='$'/></div>
                </li>
                
              </ul>
            </div>

            <div class="grid grid-cols-1  sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div >
                <p class="font-semibold text-black text-3xl  ">Services</p>

                <div class="mt-6 space-y-4 text-sm ">
                    <div class="text-gray-700 text-base  hover:text-black  hover:underline hover:underline-offset-2 "> Features </div>
                    <div class="text-gray-700 text-base  hover:text-black  hover:underline hover:underline-offset-2 "> Testimonials </div>
                    <div class="text-gray-700 text-base  hover:text-black  hover:underline hover:underline-offset-2 "> Pricing </div>
                    <div class="text-gray-700 text-base  hover:text-black  hover:underline hover:underline-offset-2 "> FAQs </div>
                </div>
              </div>
              <div>
                <p class="font-semibold text-black text-3xl  ">Resources</p>

                <div class="mt-6 space-y-4 text-sm">
                    <div class="text-gray-700 text-base  hover:text-black  hover:underline hover:underline-offset-2 "> Change log </div>
                    <div class="text-gray-700 text-base  hover:text-black  hover:underline hover:underline-offset-2 "> Help center </div>
                    <div class="text-gray-700 text-base  hover:text-black  hover:underline hover:underline-offset-2 "> Blog </div>
                    <div class="text-gray-700 text-base  hover:text-black  hover:underline hover:underline-offset-2 "> Contact </div>
                </div>
              </div>
              <div>
                <p class="font-semibold text-black text-3xl   ">Others</p>

                <div class="mt-6 space-y-4 text-sm">
                    <div class="text-gray-700 text-base hover:text-black  hover:underline hover:underline-offset-2 "> Privacy</div>
                    <div class="text-gray-700 text-base hover:text-black  hover:underline hover:underline-offset-2 "> Terms </div>
                    <div class="text-gray-700 text-base hover:text-black  hover:underline hover:underline-offset-2 "> Affliation </div>
                    <div class="text-gray-700 text-base hover:text-black  hover:underline hover:underline-offset-2 "> Press</div>
                </div>
              </div>
              <div>
                <p class="font-semibold text-black text-3xl ">From the blog</p>

                <div class="mt-6 space-y-4 text-sm w-80">
                    <div class="text-gray-700 text-base hover:text-black  hover:underline hover:underline-offset-2 "> Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</div>
                    <div class="text-gray-700 text-base hover:text-black  hover:underline hover:underline-offset-2 "> Organizing Your Calendar for Enhanced Productivity and Focus </div>
                    <div class="text-gray-700 text-base hover:text-black  hover:underline hover:underline-offset-2 "> The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks </div>
                    <div class="text-gray-700 text-base hover:text-black  hover:underline hover:underline-offset-2 "> Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</div>
                </div>
              </div>

              
            </div>
          </div>


        </div>
      </footer>
    </>
  )
}

export default Footer