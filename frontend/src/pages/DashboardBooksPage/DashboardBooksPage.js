import React from 'react'
import DrawerDashNav from '../../components/DrawerDashNav/DrawerDashNav'
import './DashboardBooksPage.css'
import accountIcon from '../../static/icons/userWhite.png'

const DashboardBooksPage = () => {
  return (
    <div className='DashboardContainer'>
        <DrawerDashNav/>
        <div className='DashboardContainer1'>
            <div className='DashboardGradesHeader'>
                <div className='DashboardGradesHeaderS'>
                    <div className='DashboardGradesHeader1'>
                        <h1>Books</h1>
                        <div className='DashboardHeaderBtn'>
                            <img src={accountIcon} className='DashboardHeaderIcon' alt='Profile Icon'/>
                            <p>Your Profile</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='DashboardGradesDetailsMain'>
                <div className='DashboardBooksMain'>
                    <div className='DashboardBooksHeader'>
                        <div className='DashboardBooksHeader1'>
                            <p>SUBJECT</p>
                        </div>
                        <div className='DashboardBooksHeader1'>
                            <p>TITLE</p>
                        </div>
                        <div className='DashboardBooksHeader1'>
                            <p>AUTHOR</p>
                        </div>
                        <div className='DashboardBooksHeader1'>
                            <p>PUBLISHING HOUSE</p>
                        </div>
                        <div className='DashboardBooksHeader1'>
                            <p>WHERE TO BUY</p>
                        </div>
                    </div>
                    <div className='DashboardBooksHeader'>
                        <div className='DashboardBooksMinDiv1'>
                            <p>Mathematics</p>
                        </div>
                        <div className='DashboardBooksMinDiv2'>
                            <p>Mathematics in School</p>
                        </div>
                        <div className='DashboardBooksMinDiv3'>
                            <p>Ksawery Tkaczyk</p>
                        </div>
                        <div className='DashboardBooksMinDiv4'>
                            <p>Some cool publishing house</p>
                        </div>
                        <div className='DashboardBooksMinDiv5'>
                            <a href='#' target='blank'>Find Book</a>
                        </div>
                    </div>
                    <div className='DashboardBooksHeader'>
                        <div className='DashboardBooksMinDiv1'>
                            <p>Mathematics</p>
                        </div>
                        <div className='DashboardBooksMinDiv2'>
                            <p>Mathematics in School</p>
                        </div>
                        <div className='DashboardBooksMinDiv3'>
                            <p>Ksawery Tkaczyk</p>
                        </div>
                        <div className='DashboardBooksMinDiv4'>
                            <p>Some cool publishing house</p>
                        </div>
                        <div className='DashboardBooksMinDiv5'>
                            <a href='#' target='blank'>Find Book</a>
                        </div>
                    </div>
                    <div className='DashboardBooksHeader'>
                        <div className='DashboardBooksMinDiv1'>
                            <p>Mathematics</p>
                        </div>
                        <div className='DashboardBooksMinDiv2'>
                            <p>Mathematics in School</p>
                        </div>
                        <div className='DashboardBooksMinDiv3'>
                            <p>Ksawery Tkaczyk</p>
                        </div>
                        <div className='DashboardBooksMinDiv4'>
                            <p>Some cool publishing house</p>
                        </div>
                        <div className='DashboardBooksMinDiv5'>
                            <a href='#' target='blank'>Find Book</a>
                        </div>
                    </div>
                    <div className='DashboardBooksHeader'>
                        <div className='DashboardBooksMinDiv1'>
                            <p>Mathematics</p>
                        </div>
                        <div className='DashboardBooksMinDiv2'>
                            <p>Mathematics in School</p>
                        </div>
                        <div className='DashboardBooksMinDiv3'>
                            <p>Ksawery Tkaczyk</p>
                        </div>
                        <div className='DashboardBooksMinDiv4'>
                            <p>Some cool publishing house</p>
                        </div>
                        <div className='DashboardBooksMinDiv5'>
                            <a href='#' target='blank'>Find Book</a>
                        </div>
                    </div>
                    <div className='DashboardBooksHeader'>
                        <div className='DashboardBooksMinDiv1'>
                            <p>Mathematics</p>
                        </div>
                        <div className='DashboardBooksMinDiv2'>
                            <p>Mathematics in School</p>
                        </div>
                        <div className='DashboardBooksMinDiv3'>
                            <p>Ksawery Tkaczyk</p>
                        </div>
                        <div className='DashboardBooksMinDiv4'>
                            <p>Some cool publishing house</p>
                        </div>
                        <div className='DashboardBooksMinDiv5'>
                            <a href='#' target='blank'>Find Book</a>
                        </div>
                    </div>
                    <div className='DashboardBooksHeader'>
                        <div className='DashboardBooksMinDiv1'>
                            <p>Mathematics</p>
                        </div>
                        <div className='DashboardBooksMinDiv2'>
                            <p>Mathematics in School</p>
                        </div>
                        <div className='DashboardBooksMinDiv3'>
                            <p>Ksawery Tkaczyk</p>
                        </div>
                        <div className='DashboardBooksMinDiv4'>
                            <p>Some cool publishing house</p>
                        </div>
                        <div className='DashboardBooksMinDiv5'>
                            <a href='#' target='blank'>Find Book</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardBooksPage