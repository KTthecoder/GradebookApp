import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import Svg1 from '../../static/svgs/HomeSmall1.svg'
import Svg2 from '../../static/svgs/HomeBig1.svg'
import Svg3 from '../../static/svgs/HomeMedium1.svg'
import Svg4 from '../../static/svgs/HomeMedium2.svg'
import supportIcon from '../../static/icons/support.png'
import securityIcon from '../../static/icons/security.png'
import feedbackIcon from '../../static/icons/feedback.png'
import performenceIcon from '../../static/icons/performance.png'
import TasksSVG from '../../static/svgs/HomeTasks.svg'
import GradesSVG from '../../static/svgs/HomeGrades.svg'
import AttendanceSVG from '../../static/svgs/HomeAttendance.svg'
import Footer from '../../components/footer/Footer'
import Navbar from '../../navigation/Navbar'

const HomePage = () => {
  return (
    <>
    <nav>
        <Navbar/>
    </nav>
    <div className='HomeContainer'>
        <div className='HomeContainerBanner'></div>
        <div className='HomeContainer1'>
            <div className='HomeHeader'>
                <div className='HomeHeaderText'>    
                    <h1>Make your school life easier and more comfortable</h1>
                    <p>Sed sit amet semper lacus. Duis ac ligula sed libero condimentum mollis vitae a enim.</p>
                    <Link to='/' className='HomeHeaderTextBtn'>Get Started</Link>
                </div>
                <div className='HomeHeaderImages'>
                    <img src={Svg1} className='HomeHeaderImgSmall' alt='Svg1'/>
                    <img src={Svg4} className='HomeHeaderImgBig' alt='Svg2'/> 
                    <img src={Svg3} className='HomeHeaderImgMedium' alt='Svg3'/>
                </div>
            </div>
            <div className='HomeSection1'>
                <div className='HomeSection1Left'>
                    <h1 className='HomeH1'>What Make Us Best?</h1>
                    <p className='HomeP'>Luis vitae malesuada lacus. Proin elementum risus vestibulum, gravida lorem sit amet, pulvinar lacus. Aliquam ullamcorper erat in ullamcorper porttitor. Proin sit amet justo ac elit efficitur ultrices praesent fringilla.</p>
                </div>  
                <div className='HomeSection1Right'>
                    <div className='HomeSection1RightDiv'>
                        <img src={securityIcon} className='HomeSectionRightIcon' alt='Support Icon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/security" title="security icons">Security icons created by Freepik - Flaticon</a> */}
                        <h2>User Security</h2>
                        <p>Ut consectetur mauris et gravida convallis, donec sollicitudin rutrum lorem, tempor egestas.</p>
                    </div>
                    <div className='HomeSection1RightDiv'>
                        <img src={performenceIcon} className='HomeSectionRightIcon' alt='Support Icon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/performance" title="performance icons">Performance icons created by Parzival’ 1997 - Flaticon</a> */}
                        <h2>High Efficiency</h2>
                        <p>Duis vitae malesuada lacus. Proin risus vestibulum, gravida lorem sit amet, pulvinar lacus.</p>
                    </div>
                    <div className='HomeSection1RightDiv'>
                        <img src={feedbackIcon} className='HomeSectionRightIcon' alt='Support Icon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/feedback" title="feedback icons">Feedback icons created by Freepik - Flaticon</a> */}
                        <h2>Customer Feedback</h2>
                        <p>Ut eu ligula ex. Nulla id maximus lacus. Integer semper id ligula nec fringilla.</p>
                    </div>
                    <div className='HomeSection1RightDiv'>
                        <img src={supportIcon} className='HomeSectionRightIcon' alt='Support Icon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/support" title="support icons">Support icons created by Freepik - Flaticon</a> */}
                        <h2>24/h Support</h2>
                        <p>Sed metus nisl, congue sit amet purus ac, venenatis egestas sapien. Duis vestibulum metus.</p>
                    </div>
                </div>   
            </div>
        </div>
        <div className='HomeSection2'>
            <div className='HomeSection2Div'>
                <div className='HomeSection2Left'>
                    <h1 className='Home2H1'>Sign Up For Newsletter!</h1>
                    <p className='Home2P'>Luis vitae malesuada lacus. Proin elementum risus vestibulum, gravida lorem sit amet, pulvinar lacus. Aliquam ullamcorper erat in ullamcorper porttitor. Proin sit amet justo ac elit efficitur ultrices praesent fringilla.</p>
                </div>  
                <div className='HomeSection2Right'>
                    <input type='text' className='HomeSection2RightInp' placeholder='example@email.com'/>
                    <button type='button' className='HomeSection2RightBtn'>Submit</button>
                </div>
            </div>
        </div>
        <div className='HomeSection3Big'>
            <div className='HomeSection3'>
                <div className='HomeSection3Header'>
                    <div className='HomeSection3Header1'>
                        <h1 className='HomeH1'>The Best Solutions For Schools & Universities</h1>
                        <p className='HomeP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis malesuada eros et condimentum. Donec vestibulum feugiat lacus, a vulputate sem. Praesent id risus pharetra diam iaculis cursus.</p>
                    </div>
                </div>
                <div className='HomeSection3Main'>
                    <div className='HomeSection3MainDiv'>
                        <div className='HomeSection3MainDivImgDiv'>
                            <img src={GradesSVG} className='HomeSection3MainDivImg' alt='Intresting Image'/>
                            <div className='HomeSection3MainDivImgBack'></div>
                        </div>
                        <div className='HomeSection3MainDivTextDiv'>
                            <h1>Grades List</h1>
                            <p>Aenean tempus vel mauris id venenatis. Maecenas ut mauris id ex efficitur scelerisque. Sed tortor magna, eleifend vitae elit eget, rhoncus ullamcorper libero. Sed auctor maximus ipsum a rutrum. Curabitur lacus tellus, congue sed arcu et, vulputate accumsan nisi eleifend vitae elit.</p>
                            <Link className='HomeSection3MainDivTextDivBtn'>Read More</Link>
                        </div>
                    </div>
                </div>
                <div className='HomeSection3Main'>
                    <div className='HomeSection3MainDiv'>
                    <div className='HomeSection3MainDivTextDiv'>
                            <h1>Attendance Statistics</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet sapien vel neque finibus ullamcorper eu quis justo. Maecenas finibus erat non odio porttitor hendrerit. Nulla id congue magna. In vel turpis posuere, hendrerit sem nec, suscipit metus.</p>
                            <Link className='HomeSection3MainDivTextDivBtn'>Read More</Link>
                        </div>
                        <div className='HomeSection3MainDivImgDiv'>
                            <img src={AttendanceSVG} className='HomeSection3MainDivImg' alt='Intresting Image'/>
                            <div className='HomeSection3MainDivImgBack'></div>
                        </div>
                    </div>
                </div>
                <div className='HomeSection3Main'>
                    <div className='HomeSection3MainDiv'>
                        <div className='HomeSection3MainDivImgDiv'>
                            <img src={TasksSVG} className='HomeSection3MainDivImg' alt='Intresting Image'/>
                            <div className='HomeSection3MainDivImgBack'></div>
                        </div>
                        <div className='HomeSection3MainDivTextDiv'>
                            <h1>Create & Submit Tasks</h1>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc accumsan libero eu lacus malesuada, vel pulvinar metus interdum. Aenean eu erat pretium, vehicula diam id, molestie magna. Donec pharetra leo sit amet hendrerit consectetur. Nam luctus augue eu sem luctus, a suscipit velit blandit.</p>
                            <Link className='HomeSection3MainDivTextDivBtn'>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default HomePage