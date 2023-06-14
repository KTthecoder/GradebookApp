import React from 'react'
import '../DashboardGradesDetails/DashboardGradesDetails.css'
import { NavLink } from 'react-router-dom'
import DrawerDashNav from '../../components/DrawerDashNav/DrawerDashNav'
import accountIcon from '../../static/icons/userWhite.png'

const DashboardGradesSummary = () => {
  return (
    <div className='DashboardContainer'>
        <DrawerDashNav/>
        <div className='DashboardContainer1'>
            <div className='DashboardGradesHeader'>
                <div className='DashboardGradesHeaderS'>
                    <div className='DashboardGradesHeader1'>
                        <h1>Your Grades</h1>
                        <div className='DashboardHeaderBtn'>
                            <img src={accountIcon} className='DashboardHeaderIcon' alt='Profile Icon'/>
                            <p>Your Profile</p>
                        </div>
                    </div>
                </div>
                <div className='DashboardGradesHeader2'>
                    <NavLink to='/dashboard/grades' end className={({isActive}) => (isActive ? "DashboardGradesHeaderLinkActive" : "DashboardGradesHeaderLink")}>PARTIAL GRADES</NavLink>
                    <NavLink to='/dashboard/grades/details' className={({isActive}) => (isActive ? "DashboardGradesHeaderLinkActive" : "DashboardGradesHeaderLink")}>GRADES DETAILS</NavLink>
                    <NavLink to='/dashboard/grades/summary' className={({isActive}) => (isActive ? "DashboardGradesHeaderLinkActive" : "DashboardGradesHeaderLink")}>SUMMARY OF GRADES</NavLink>
                </div>
            </div>
            <div className='DashboardGradesDetailsMain'>
                <div className='DashboardGradesDetailsMainDiv'>
                    <h2>Mathematics</h2>
                    <div className='DashboardGradesDetailsMainDivBig'>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Average</p>
                            <p>4.4</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Expected assessment</p>
                            <p>4</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1 DashboardGradesDetailsMainDiv1Last'>
                            <p>Assessment</p>
                            <p>4</p>
                        </div>
                    </div>
                    <h2>History</h2>
                    <div className='DashboardGradesDetailsMainDivBig'>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Average</p>
                            <p>3.2</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Expected assessment</p>
                            <p>3</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1 DashboardGradesDetailsMainDiv1Last'>
                            <p>Assessment</p>
                            <p>3</p>
                        </div>
                    </div>
                    <h2>Mathematics</h2>
                    <div className='DashboardGradesDetailsMainDivBig'>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Average</p>
                            <p>4.4</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Expected assessment</p>
                            <p>4</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1 DashboardGradesDetailsMainDiv1Last'>
                            <p>Assessment</p>
                            <p>4</p>
                        </div>
                    </div>
                    <h2>History</h2>
                    <div className='DashboardGradesDetailsMainDivBig'>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Average</p>
                            <p>3.2</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Expected assessment</p>
                            <p>3</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1 DashboardGradesDetailsMainDiv1Last'>
                            <p>Assessment</p>
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardGradesSummary