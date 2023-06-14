import React from 'react'
import './DashboardGradesDetails.css'
import { NavLink } from 'react-router-dom'
import DrawerDashNav from '../../components/DrawerDashNav/DrawerDashNav'
import accountIcon from '../../static/icons/userWhite.png'

const DashboardGradesDetails = () => {
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
                            <p>Grade</p>
                            <p>4</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Description</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lobortis urna. </p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Weight</p>
                            <p>1</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1 DashboardGradesDetailsMainDiv1Last'>
                            <p>Issued by</p>
                            <p>Ksawery Tkaczyk, 08.09.2022</p>
                        </div>
                    </div>
                    <div className='DashboardGradesDetailsMainDivBig'>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Grade</p>
                            <p>4</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Description</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lobortis urna. </p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Weight</p>
                            <p>1</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1 DashboardGradesDetailsMainDiv1Last'>
                            <p>Issued by</p>
                            <p>Ksawery Tkaczyk, 08.09.2022</p>
                        </div>
                    </div>
                    <div className='DashboardGradesDetailsMainDivBig'>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Grade</p>
                            <p>4</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Description</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lobortis urna. </p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Weight</p>
                            <p>1</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1 DashboardGradesDetailsMainDiv1Last'>
                            <p>Issued by</p>
                            <p>Ksawery Tkaczyk, 08.09.2022</p>
                        </div>
                    </div>
                    <h2>History</h2>
                    <div className='DashboardGradesDetailsMainDivBig'>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Grade</p>
                            <p>4</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Description</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lobortis urna. </p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Weight</p>
                            <p>1</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1 DashboardGradesDetailsMainDiv1Last'>
                            <p>Issued by</p>
                            <p>Ksawery Tkaczyk, 08.09.2022</p>
                        </div>
                    </div>
                    <div className='DashboardGradesDetailsMainDivBig'>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Grade</p>
                            <p>4</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Description</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id lobortis urna. </p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Weight</p>
                            <p>1</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1 DashboardGradesDetailsMainDiv1Last'>
                            <p>Issued by</p>
                            <p>Ksawery Tkaczyk, 08.09.2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardGradesDetails