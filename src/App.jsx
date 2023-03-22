import React from 'react';
import Header from './components/Header'
import SignIn from './components/SignIn'
import Verification from './components/Verification'
import Dashboard from './components/Dashboard.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadData } from './redux/actions/dataAction'


function App() {

  const dispatch = useDispatch()
  const { text, logo } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(loadData())
  }, [dispatch])

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header logo={logo} />
        <Routes>
          <Route exact path='/' element={<SignIn text={text} />} />
          <Route exact path='/verify' element={<Verification />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
