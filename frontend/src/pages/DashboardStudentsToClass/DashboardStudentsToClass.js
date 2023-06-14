import React, { useState } from 'react'
import DrawerDashNav from '../../components/DrawerDashNav/DrawerDashNav'
import '../DashboardGradesPage/DashboardGradesPage.css'
import accountIcon from '../../static/icons/userWhite.png'
import PieChart from '../../components/PieChart/PieChart.js'

const DashboardStudentsToClass = () => {
    const ClassGradesData = [
        {id: 1, grade: '1, 1+', count: 20},
        {id: 2, grade: '2-, 2, 2+', count: 32},
        {id: 3, grade: '3-, 3, 3+', count: 51},
        {id: 4, grade: '4-, 4, 4+', count: 28},
        {id: 5, grade: '5-, 5, 5+', count: 17},
        {id: 6, grade: '6-, 6', count: 8},
    ]

    const StudentGradesData = [
        {id: 1, grade: '1, 1+', count: 1},
        {id: 2, grade: '2-, 2, 2+', count: 1},
        {id: 3, grade: '3-, 3, 3+', count: 0},
        {id: 4, grade: '4-, 4, 4+', count: 3},
        {id: 5, grade: '5-, 5, 5+', count: 0},
        {id: 6, grade: '6-, 6', count: 1},
    ]

    const [classChartData, setClassChartData] = useState({
        labels: ClassGradesData.map((item) => item.grade),
        datasets: [{
          data: ClassGradesData.map((item) => item.count),
          backgroundColor: ['green', 'blue', 'red', 'yellow', 'purple', 'brown'],
          borderColor: 'black',
          borderWidth: 1,
        }]
    })

    const [studentChartData, setStudentChartData] = useState({
        labels: StudentGradesData.map((item) => item.grade),
        datasets: [{
          data: StudentGradesData.map((item) => item.count),
          backgroundColor: ['green', 'blue', 'red', 'yellow', 'purple', 'brown'],
          borderColor: 'black',
          borderWidth: 1,
        }],   
    })

    return (
        <div className='DashboardContainer'>
            <DrawerDashNav/>
            <div className='DashboardContainer1'>
                <div className='DashboardGradesHeader'>
                    <div className='DashboardGradesHeaderS'>
                        <div className='DashboardGradesHeader1'>
                            <h1>Student To Classmates</h1>
                            <div className='DashboardHeaderBtn'>
                                <img src={accountIcon} className='DashboardHeaderIcon' alt='Profile Icon'/>
                                <p>Your Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='DashboardGradesDetailsMain'>
                    <div className='DashboardToClassDiv'>
                        <h2>Mathematics</h2>
                        <div className='DashboardToClassDiv1'>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Class Average: <span>3.39</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={classChartData}/>
                                </div>          
                            </div>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Your Average: <span>4.27</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={studentChartData}/>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className='DashboardToClassDiv'>
                        <h2>History</h2>
                        <div className='DashboardToClassDiv1'>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Class Average: <span>3.39</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={classChartData}/>
                                </div>          
                            </div>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Your Average: <span>4.27</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={studentChartData}/>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className='DashboardToClassDiv'>
                        <h2>Mathematics</h2>
                        <div className='DashboardToClassDiv1'>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Class Average: <span>3.39</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={classChartData}/>
                                </div>          
                            </div>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Your Average: <span>4.27</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={studentChartData}/>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className='DashboardToClassDiv'>
                        <h2>History</h2>
                        <div className='DashboardToClassDiv1'>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Class Average: <span>3.39</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={classChartData}/>
                                </div>          
                            </div>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Your Average: <span>4.27</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={studentChartData}/>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className='DashboardToClassDiv'>
                        <h2>Mathematics</h2>
                        <div className='DashboardToClassDiv1'>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Class Average: <span>3.39</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={classChartData}/>
                                </div>          
                            </div>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Your Average: <span>4.27</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={studentChartData}/>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className='DashboardToClassDiv'>
                        <h2>History</h2>
                        <div className='DashboardToClassDiv1'>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Class Average: <span>3.39</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={classChartData}/>
                                </div>          
                            </div>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Your Average: <span>4.27</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={studentChartData}/>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className='DashboardToClassDiv'>
                        <h2>Mathematics</h2>
                        <div className='DashboardToClassDiv1'>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Class Average: <span>3.39</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={classChartData}/>
                                </div>          
                            </div>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Your Average: <span>4.27</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={studentChartData}/>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className='DashboardToClassDiv'>
                        <h2>History</h2>
                        <div className='DashboardToClassDiv1'>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Class Average: <span>3.39</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={classChartData}/>
                                </div>          
                            </div>
                            <div className='DashboardToClassDivChartDiv'>
                                <p>Your Average: <span>4.27</span></p>
                                <div className='DashboardToClassDivChart'>
                                    <PieChart chartData={studentChartData}/>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardStudentsToClass