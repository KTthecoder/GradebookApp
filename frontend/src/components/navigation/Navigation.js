import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from '../../pages/DashboardPage/DashboardPage'
import HomePage from '../../pages/HomePage/HomePage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
 
const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/sign-in' element={<LoginPage/>} />
        <Route path='/sign-up' element={<RegisterPage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
    </Routes>
  )
}

export default Navigation