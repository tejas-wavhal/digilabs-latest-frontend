import React from 'react'
import { BiShow } from 'react-icons/bi'
import { useState } from 'react'
// import { Dropdown } from 'flowbite-react'
import Slider from './Slider'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { sendOtp } from '../redux/actions/otpAction'
import { CgSpinner } from 'react-icons/cg'

const SignIn = ({ text }) => {

  const [showPassword, setShowPassword] = useState('password')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { error, message, loading } = useSelector((state) => state.otp);

  const handleOnSignup = (e) => {
    e.preventDefault()
    dispatch(sendOtp(email))
  }

  if (message) {
    toast.success(message)
    dispatch({ type: "clearMessage" })
    navigate('/verify')
  }

  if (error) {
    toast.success(error)
    dispatch({ type: "clearError" })
  }

  return (
    <>
      <section className="mx-5 flex justify-center my-7 md:mx-auto md:mt-52 lg:mt-0 lg:flex lg:justify-evenly lg:items-center lg:space-x-0 md:mr-6 relative lg:bottom-10">
        <form className="mt-1 max-w-[344px] md:mx-auto lg:mx-0 " onSubmit={handleOnSignup}>
          <div className="-space-y-3 mb-8">
            {text && <h1 className="text-[28px] font-bold">{text}</h1>}
          </div>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#f3f3f3] text-gray-900 rounded-xl block w-full p-4 h-[56px] font-semibold border-none" placeholder="Email" />
          <div className='py-2.5 text-center inline-flex items-center relative bottom-[3.28rem] float-right mx-1 h-12 mr-1'>
            {/* <Dropdown
              label="@heads.design"
              dismissOnClick={false}
              style={{ backgroundColor: 'white', color: '#7A7A85', height: '3rem' }}
            >
              <Dropdown.Item>
                option 1
              </Dropdown.Item>
              <Dropdown.Item>
                option 2
              </Dropdown.Item>
              <Dropdown.Item>
                option 3
              </Dropdown.Item>
            </Dropdown> */}
          </div>

          <input type={showPassword} value={password} onChange={(e) => setPassword(e.target.value)} className="bg-[#f3f3f3] text-gray-900 rounded-xl block w-full p-4 h-[56px] relative bottom-6 font-semibold border-none" placeholder="Password" />
          <div className='flex float-right relative bottom-16 right-5'>
            {showPassword === 'password' ? (<button onClick={() => setShowPassword('text')}><svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-[0.10rem]'>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.7071 7.70711C14.0976 7.31658 14.0976 6.68342 13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289L2.29289 16.2929C1.90237 16.6834 1.90237 17.3166 2.29289 17.7071C2.68342 18.0976 3.31658 18.0976 3.70711 17.7071L4.25815 17.1561C5.33075 17.6677 6.58799 18 8 18C10.4387 18 12.4157 17.0089 13.7772 15.8141C14.4569 15.2177 14.997 14.559 15.3733 13.9236C15.735 13.3129 16 12.6307 16 12C16 11.3693 15.735 10.6871 15.3733 10.0764C14.997 9.44096 14.4569 8.7823 13.7772 8.18587C13.6808 8.10127 13.5813 8.01769 13.4788 7.93541L13.7071 7.70711ZM12.0537 9.36048L5.78764 15.6266C6.4543 15.86 7.19468 16 8 16C9.87499 16 11.398 15.2411 12.4581 14.3109C12.9892 13.8448 13.3903 13.3472 13.6524 12.9045C13.9292 12.4371 14 12.1193 14 12C14 11.8807 13.9292 11.5629 13.6524 11.0955C13.3903 10.6528 12.9892 10.1552 12.4581 9.68913C12.33 9.57674 12.1951 9.46684 12.0537 9.36048Z" fill="#7A7A85" />
              <path d="M8 6C8.37892 6 8.74669 6.02393 9.10274 6.06883L7.11393 8.05765C5.64206 8.25127 4.4297 8.9101 3.54194 9.68913C3.01083 10.1552 2.60975 10.6528 2.34757 11.0955C2.07077 11.5629 2 11.8807 2 12C2 12.115 2.06567 12.414 2.31792 12.8537L0.868951 14.3026C0.781922 14.1758 0.701109 14.0493 0.626701 13.9236C0.265021 13.3129 0 12.6307 0 12C0 11.3693 0.265021 10.6871 0.626701 10.0764C1.003 9.44096 1.5431 8.7823 2.22278 8.18587C3.58425 6.99113 5.56128 6 8 6Z" fill="#7A7A85" />
            </svg></button>) : (
              <div onClick={() => setShowPassword('password')}><BiShow className='cursor-pointer text-[#7a7a85] text-xl mt-[0.10rem] mb-[0.15rem] ' /></div>)}
          </div>
          <button className={`font-semibold bg-maincolor-100 hover:bg-maincolor-200 rounded-xl p-2 text-white w-full h-[56px] relative bottom-3 ${loading && 'cursor-not-allowed'}`} type='submit' disabled={loading ? true : false} >
            {
              loading ? (<>
                <CgSpinner className='animate-spin text-2xl mx-auto' />
              </>) : (
                <>
                  Next
                </>
              )
            }
          </button>
          <p className="text-maincolor-100 font-bold my-2 text-center cursor-pointer hover:underline">Forgot your password?</p>
        </form>
        <Slider />
      </section>
      <div className="relative bottom-20 space-x-2 font-medium text-sm hidden lg:flex px-14">
        <h1>Not member?</h1>  <button className="text-maincolor-100">Create account</button>
      </div>
    </>
  )
}

export default SignIn