import React from 'react'
import { useState } from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom'
import { CgSpinner } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { verifyOtp } from '../redux/actions/otpAction'

const Verification = () => {

  const [otp, setOtp] = useState('')
  const { error, message, loading } = useSelector((state) => state.otp);
  const dispatch = useDispatch();


  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(verifyOtp(otp))
  }

  if (message) {
    toast.success(message)
    dispatch({ type: "clearMessage" })
  }

  if (error) {
    toast.error(error)
    dispatch({ type: "clearError" })
  }

  return (
    <>
      <section className="mx-5 flex justify-center my-7 md:mx-auto md:mt-52 lg:mt-0 lg:flex lg:justify-evenly lg:items-center lg:space-x-0 md:mr-6 relative lg:bottom-10">
        <form className="mt-1 max-w-[344px] md:mx-auto lg:mx-0 " onSubmit={handleOnSubmit}>
          <div className="-space-y-3">
            <h1 className="text-[28px] font-bold">Enter the verification</h1>
            <h2 className="text-[28px] font-bold">code to continue</h2>
          </div>
          <p className='text-[#7A7A85] text-base font-medium mb-7 mt-3'>We sent to <Link className='text-maincolor-100 cursor-pointer'>hellouser@heads.design.</Link> If you don’t see it, check your spam.</p>

          <input required type="number" value={otp} onChange={(e) => setOtp(e.target.value)} className="bg-[#f3f3f3] text-gray-900 rounded-xl block w-full p-4 h-[56px] font-semibold border-none" placeholder="Enter Otp ..." />

          <button className={`font-semibold bg-maincolor-100 hover:bg-maincolor-200 rounded-xl p-2 text-white w-full h-[56px] relative mt-8 bottom-3 ${loading && 'cursor-not-allowed'}`} type='submit' disabled={loading ? true : false} >
            {
              loading ? (<>
                <CgSpinner className='animate-spin text-2xl mx-auto' />
              </>) : (
                <>
                  Verify
                </>
              )
            }
          </button>

          <div className='mt-8 flex justify-between font-bold'>
            <Link to={'/'}><button className='text-maincolor-100'>Back</button></Link>
            <span className='text-[#CACACE]'>Resend 03.00</span>
          </div>


        </form>
        <Slider />
      </section>
      <div className="relative bottom-20 space-x-2 font-medium text-sm hidden lg:flex px-14">
        <h1>Not member?</h1>  <button className="text-maincolor-100">Create account</button>
      </div>
    </>
  )
}

export default Verification