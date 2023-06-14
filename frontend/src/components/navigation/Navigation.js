import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage'
import ContactPage from '../../pages/ContactPage/ContactPage'
import DashboardAchievements from '../../pages/DashboardAchievementsPage/DashboardAchievements'
import DashboardBooksPage from '../../pages/DashboardBooksPage/DashboardBooksPage'
import DashboardFrequencyPage from '../../pages/DashboardFrequencyPage/DashboardFrequencyPage'
import DashboardGradesDetails from '../../pages/DashboardGradesDetails/DashboardGradesDetails'
import DashboardGradesPage from '../../pages/DashboardGradesPage/DashboardGradesPage'
import DashboardGradesSummary from '../../pages/DashboardGradesSummary/DashboardGradesSummary'
import DashboardPage from '../../pages/DashboardPage/DashboardPage'
import DashboardRemarksPage from '../../pages/DashboardRemarksPage/DashboardRemarksPage'
import DashboardStudentsToClass from '../../pages/DashboardStudentsToClass/DashboardStudentsToClass'
import HomePage from '../../pages/HomePage/HomePage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import PricingPage from '../../pages/PricingPage/PricingPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
 
const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about-us' element={<AboutUsPage/>} />
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/sign-in' element={<LoginPage/>} />
        <Route path='/sign-up' element={<RegisterPage/>} />
        <Route path='/dashboard' exact element={<DashboardPage/>} />
        <Route path='/dashboard/grades' exact element={<DashboardGradesPage/>} />
        <Route path='/dashboard/grades/details' exact element={<DashboardGradesDetails/>} />
        <Route path='/dashboard/grades/summary' exact element={<DashboardGradesSummary/>} />
        <Route path='/dashboard/frequency' exact element={<DashboardFrequencyPage/>} />
        <Route path='/dashboard/achievements' exact element={<DashboardAchievements/>} />
        <Route path='/dashboard/remarks' exact element={<DashboardRemarksPage/>} />
        <Route path='/dashboard/student-to-classmates' exact element={<DashboardStudentsToClass/>} />
        <Route path='/dashboard/books' exact element={<DashboardBooksPage/>} />
    </Routes>
  )
}

export default Navigation