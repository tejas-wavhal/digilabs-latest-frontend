import React from 'react'
import { Navbar } from 'flowbite-react'
import { NavLink } from 'react-router-dom'

const Header = ({ logo }) => {
  return (
    <>
      <header className='' >

        <Navbar
          className='border-b-2 shadow-md'
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand>
            {logo && <img
              src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />}
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              DiGiLABS
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <NavLink to="/" className={'shadow-md mb-2 md:mb-0 bg-maincolor-100 text-white py-1 px-3 rounded-full'} >Home</NavLink>
            <NavLink to="/dashboard" className={'shadow-md md:mr-8 bg-maincolor-100 text-white py-1 px-3 rounded-full'} >Dashboard</NavLink>
          </Navbar.Collapse>
        </Navbar>

        <div className='flex justify-between items-center mx-5 my-4 lg:p-10'>
          <img src={logo} className="h-9 w-9" alt="logo" />
          <div className="flex space-x-2 font-medium text-sm lg:hidden">
            <h1>Not member?</h1>  <button className="text-maincolor-100">Create account</button>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header