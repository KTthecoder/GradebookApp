import React from 'react'
import './DrawerDashNav.css'
import { Link, NavLink } from 'react-router-dom'
import homeIcon from '../../static/icons/home.png'
import gradesIcon from '../../static/icons/grades.png'
import frequencyIcon from '../../static/icons/frequency.png'
import timetableIcon from '../../static/icons/timetable.png'
import achievementIcon from '../../static/icons/achievement.png'
import testIcon from '../../static/icons/test.png'
import statsIcon from '../../static/icons/stats.png'
import bookIcon from '../../static/icons/book.png'
import remarksIcon from '../../static/icons/remarks.png'

const DrawerDashNav = () => {
  return (
    <div className='DrawerDashContainer'>
        <div className='DrawerDashTop'>
            <h1>GradesBook</h1>
        </div>
        <div className='DrawerDashContainer1'>
            <div className='DrawerDashMid'>
                <NavLink to='/dashboard' end className={({isActive}) => (isActive ? "DrawerDashMidLinkActive" : "DrawerDashMidLink")}>
                    <img src={homeIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a> */}
                    <p>Home</p>
                </NavLink>
                <NavLink to='/dashboard/grades' className={({isActive}) => (isActive ? "DrawerDashMidLinkActive" : "DrawerDashMidLink")}>
                    <img src={gradesIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/grade" title="grade icons">Grade icons created by Freepik - Flaticon</a> */}
                    <p>Grades</p>
                </NavLink>
                <NavLink to='/dashboard/frequency' className={({isActive}) => (isActive ? "DrawerDashMidLinkActive" : "DrawerDashMidLink")}>
                    <img src={frequencyIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/frequency" title="frequency icons">Frequency icons created by Midev - Flaticon</a> */}
                    <p>Frequency</p>
                </NavLink>
                <NavLink to='/dashboard/timetable' className={({isActive}) => (isActive ? "DrawerDashMidLinkActive" : "DrawerDashMidLink")}>
                    <img src={timetableIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a> */}
                    <p>Timetable</p>
                </NavLink>
                <NavLink to='/dashboard/tests' className={({isActive}) => (isActive ? "DrawerDashMidLinkActive" : "DrawerDashMidLink")}>
                    <img src={testIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/test" title="test icons">Test icons created by Freepik - Flaticon</a> */}
                    <p>Tests</p>
                </NavLink>
                <NavLink to='/dashboard/achievements' className={({isActive}) => (isActive ? "DrawerDashMidLinkActive" : "DrawerDashMidLink")}>
                    <img src={achievementIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/award" title="award icons">Award icons created by Freepik - Flaticon</a> */}
                    <p>Achievements</p>
                </NavLink>
                <NavLink to='/dashboard/remarks' className={({isActive}) => (isActive ? "DrawerDashMidLinkActive" : "DrawerDashMidLink")}>
                    <img src={remarksIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/award" title="award icons">Award icons created by Freepik - Flaticon</a> */}
                    <p>Remarks</p>
                </NavLink>
                <NavLink to='/dashboard/student-to-classmates' className={({isActive}) => (isActive ? "DrawerDashMidLinkActive" : "DrawerDashMidLink")}>
                    <img src={statsIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/pie-chart" title="pie chart icons">Pie chart icons created by Pixel perfect - Flaticon</a> */}
                    <p>Student to classmates</p>
                </NavLink>
                <NavLink to='/dashboard/books' className={({isActive}) => (isActive ? "DrawerDashMidLinkActive" : "DrawerDashMidLink")}>
                    <img src={bookIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                    {/* <a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icons created by bqlqn - Flaticon</a> */}
                    <p>Books</p>
                </NavLink>
            </div>
        </div>
        <div className='DrawerDashBot'>
            <NavLink to='/' className='DrawerDashMidLink'>
                <img src={bookIcon} className='DrawerDashMidLinkIcon' alt='Home Icon'/>
                {/* <a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icons created by designvector10 - Flaticon</a> */}
                <p>Logout</p>
            </NavLink>
        </div>
    </div>
  )
}

export default DrawerDashNav