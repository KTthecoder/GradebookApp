import React from 'react'
import { NavLink } from 'react-router-dom'
import DrawerDashNav from '../../components/DrawerDashNav/DrawerDashNav'
import '../DashboardGradesPage/DashboardGradesPage.css'
import accountIcon from '../../static/icons/userWhite.png'

const DashboardRemarksPage = () => {
  return (
    <div className='DashboardContainer'>
        <DrawerDashNav/>
        <div className='DashboardContainer1'>
            <div className='DashboardGradesHeader'>
                <div className='DashboardGradesHeaderS'>
                    <div className='DashboardGradesHeader1'>
                        <h1>Your Remarks</h1>
                        <div className='DashboardHeaderBtn'>
                            <img src={accountIcon} className='DashboardHeaderIcon' alt='Profile Icon'/>
                            <p>Your Profile</p>
                        </div>
                    </div>
                </div>
                <div className='DashboardGradesHeader2'>
                    <NavLink to='/dashboard/achievements' end className={({isActive}) => (isActive ? "DashboardGradesHeaderLinkActive" : "DashboardGradesHeaderLink")}>ACHIEVEMENTS</NavLink>
                    <NavLink to='/dashboard/remarks' className={({isActive}) => (isActive ? "DashboardGradesHeaderLinkActive" : "DashboardGradesHeaderLink")}>REMARKS</NavLink>
                </div>
            </div>
            <div className='DashboardGradesDetailsMain'>
                <div className='DashboardGradesDetailsMainDiv'>
                    <div className='DashboardGradesDetailsMainDivBig'>
                        <h2>09 June 2022</h2>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Teacher</p>
                            <p>Ksawery Tkaczyk [KT]</p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Category</p>
                            <p>Ronsectetur adipiscing elit. Cras id lobortis urna. </p>
                        </div>
                        <div className='DashboardGradesDetailsMainDiv1'>
                            <p>Description</p>
                            <p>Curabitur nec lacus et erat sodales aliquet. Sed urna tortor, dapibus eu commodo a, bibendum ut ipsum. Suspendisse sagittis ipsum a sem accumsan, non venenatis nulla tristique. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardRemarksPage