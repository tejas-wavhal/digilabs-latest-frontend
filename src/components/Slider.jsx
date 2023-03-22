import React from 'react'
import SliderImg from '../images/img.png'

const Slider = () => {
  return (
    <>
      <div className='hidden lg:block relative'>
        <div className='w-[480px] h-[664px] bg-maincolor-100 rounded-3xl text-white z-30'>
          <img src={SliderImg} alt="slider" />
          <div className='mx-[4.5rem] my-8 space-y-4'>
            <span className='py-1 px-2 bg-black rounded-lg'>NEW</span>
            <h1 className='font-semibold text-2xl'>Developer handoff <br />improvements</h1>
            <p>You’ll now see a highlight around Symbols on the Canvas and in the Inspector.</p>
            <span className='cursor-pointer float-right font-semibold'>Share</span>
          </div>
        </div>
        <div className='w-[433.96px] h-[600.32px] bg-[#0646C6] rounded-3xl mx-auto absolute top-8 -right-4 -skew-x-[4deg] -z-10'>slider 2</div>
        <div className='w-[387.7px] h-[536.32px] bg-[#053594] rounded-3xl mx-auto absolute top-16 -right-7 -skew-x-[9deg] -z-20'>slider 3</div>
      </div>
    </>
  )
}

export default Slider