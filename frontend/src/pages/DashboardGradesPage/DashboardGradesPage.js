import React from 'react'
import { NavLink } from 'react-router-dom'
import DrawerDashNav from '../../components/DrawerDashNav/DrawerDashNav'
import './DashboardGradesPage.css'
import accountIcon from '../../static/icons/userWhite.png'

const DashboardGradesPage = () => {
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
            <div className='DashboardGradesMain'>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>Mathematics</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>3,</p>
                        <p>2,</p>
                        <p>5+,</p>
                        <p>1</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>3.45</span></p>
                    </div>
                </div>
                <div className='DashboardMainDiv'>
                    <div className='DashboardMainDivLeft'>
                        <p>History</p>
                    </div>
                    <div className='DashboardMainDivMid'>
                        <p>2,</p>
                        <p>1,</p>
                        <p>6</p>
                    </div>
                    <div className='DashboardMainDivRight'>
                        <p>Avarage: <span>2.82</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardGradesPage