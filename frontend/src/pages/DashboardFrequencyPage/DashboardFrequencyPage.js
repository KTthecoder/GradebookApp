import React from 'react'
import { NavLink } from 'react-router-dom'
import DrawerDashNav from '../../components/DrawerDashNav/DrawerDashNav'
import '../DashboardGradesPage/DashboardGradesPage.css'
import accountIcon from '../../static/icons/userWhite.png'

const DashboardFrequencyPage = () => {
  return (
    <div className='DashboardContainer'>
        <DrawerDashNav/>
        <div className='DashboardContainer1'>
            <div className='DashboardGradesHeader'>
                <div className='DashboardGradesHeaderS'>
                    <div className='DashboardGradesHeader1'>
                        <h1>Your Frequency</h1>
                        <div className='DashboardHeaderBtn'>
                            <img src={accountIcon} className='DashboardHeaderIcon' alt='Profile Icon'/>
                            <p>Your Profile</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='DashboardGradesMain'>
                
            </div>
        </div>
    </div>
  )
}

export default DashboardFrequencyPage