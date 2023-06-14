import React from 'react'
import DrawerDashNav from '../../components/DrawerDashNav/DrawerDashNav'
import './DashboardPage.css'
import accountIcon from '../../static/icons/userWhite.png'
import gradesIcon from '../../static/icons/grades.png'
import frequencyIcon from '../../static/icons/frequency.png'

const DashboardPage = () => {
  return (
    <div className='DashboardContainer'>
        <DrawerDashNav/>
        <div className='DashboardContainer1'>
            <div className='DashboardGradesHeader'>
                <div className='DashboardGradesHeaderS'>
                    <div className='DashboardGradesHeader1'>
                        <h1>Welcome Ksawery</h1>
                        <div className='DashboardHeaderBtn'>
                            <img src={accountIcon} className='DashboardHeaderIcon' alt='Profile Icon'/>
                            <p>Your Profile</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='DashboardMain'>
                <div className='DashboardMainDivGrades'>
                    <div className='DashboardMainDivGradesHeader'>
                        <div className='DashboardMainDivGradesHeaderIconDiv'>
                            <img src={gradesIcon} className='DashboardMainDivGradesHeaderIcon' alt='Grades Icon'/>
                        </div>
                        <div className='DashboardMainDivGradesHeader1'>
                            <p>Grades</p>
                            <h2>Your Last Grades</h2>
                        </div>  
                    </div>
                    <div className='DashboardMainDivGradesDiv'>
                        <div className='DashboardMainDivGradesDivLeft'>
                            <div className='DashboardMainDivGradesDivLeftIcon'></div>
                        </div>
                        <div className='DashboardMainDivGradesDivRight'>
                            <h3>Mathematics</h3>
                            <p>4, 5</p>
                        </div>
                    </div>
                    <div className='DashboardMainDivGradesDiv'>
                        <div className='DashboardMainDivGradesDivLeft'>
                            <div className='DashboardMainDivGradesDivLeftIcon'></div>
                        </div>
                        <div className='DashboardMainDivGradesDivRight'>
                            <h3>History</h3>
                            <p>4</p>
                        </div>
                    </div>
                    <div className='DashboardMainDivGradesDiv'>
                        <div className='DashboardMainDivGradesDivLeft'>
                            <div className='DashboardMainDivGradesDivLeftIcon'></div>
                        </div>
                        <div className='DashboardMainDivGradesDivRight'>
                            <h3>Chemistry</h3>
                            <p>2</p>
                        </div>
                    </div>
                </div>

                <div className='DashboardMainDivFrequency'>
                    <div className='DashboardMainDivGradesHeader'>
                        <div className='DashboardMainDivGradesHeaderIconDiv'>
                            <img src={frequencyIcon} className='DashboardMainDivGradesHeaderIcon' alt='Grades Icon'/>
                        </div>
                        <div className='DashboardMainDivGradesHeader1'>
                            <p>Frequency</p>
                            <h2>Your Frequency</h2>
                        </div>  
                    </div>
                    <div className='DashboardMainDivGradesDiv'>
                        <div className='DashboardMainDivGradesDivLeft'>
                            <div className='DashboardMainDivGradesDivLeftIcon'></div>
                        </div>
                        <div className='DashboardMainDivGradesDivRight'>
                            <h3>Mathematics</h3>
                            <p>4, 5</p>
                        </div>
                    </div>
                    <div className='DashboardMainDivGradesDiv'>
                        <div className='DashboardMainDivGradesDivLeft'>
                            <div className='DashboardMainDivGradesDivLeftIcon'></div>
                        </div>
                        <div className='DashboardMainDivGradesDivRight'>
                            <h3>History</h3>
                            <p>4</p>
                        </div>
                    </div>
                    <div className='DashboardMainDivGradesDiv'>
                        <div className='DashboardMainDivGradesDivLeft'>
                            <div className='DashboardMainDivGradesDivLeftIcon'></div>
                        </div>
                        <div className='DashboardMainDivGradesDivRight'>
                            <h3>Chemistry</h3>
                            <p>2</p>
                        </div>
                    </div>
                </div>

                <div className='DashboardMainDivTimetable'>
                    <div className='DashboardMainDivGradesHeader'>
                        <div className='DashboardMainDivGradesHeaderIconDiv'>
                            <img src={gradesIcon} className='DashboardMainDivGradesHeaderIcon' alt='Grades Icon'/>
                        </div>
                        <div className='DashboardMainDivGradesHeader1'>
                            <p>Grades</p>
                            <h2>Your Last Grades</h2>
                        </div>  
                    </div>
                    <div className='DashboardMainDivGradesDiv'>
                        <div className='DashboardMainDivGradesDivLeft'>
                            <div className='DashboardMainDivGradesDivLeftIcon'></div>
                        </div>
                        <div className='DashboardMainDivGradesDivRight'>
                            <h3>Mathematics</h3>
                            <p>4, 5</p>
                        </div>
                    </div>
                    <div className='DashboardMainDivGradesDiv'>
                        <div className='DashboardMainDivGradesDivLeft'>
                            <div className='DashboardMainDivGradesDivLeftIcon'></div>
                        </div>
                        <div className='DashboardMainDivGradesDivRight'>
                            <h3>History</h3>
                            <p>4</p>
                        </div>
                    </div>
                    <div className='DashboardMainDivGradesDiv'>
                        <div className='DashboardMainDivGradesDivLeft'>
                            <div className='DashboardMainDivGradesDivLeftIcon'></div>
                        </div>
                        <div className='DashboardMainDivGradesDivRight'>
                            <h3>Chemistry</h3>
                            <p>2</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DashboardPage