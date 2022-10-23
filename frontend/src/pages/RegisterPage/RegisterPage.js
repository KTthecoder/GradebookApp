import React from 'react'
import '../LoginPage/LoginPage.css'
import accountIcon from '../../static/icons/user.png'
import passwordIcon from '../../static/icons/password.png'
import emailIcon from '../../static/icons/email.png'
import arrowLeftIcon from '../../static/icons/arrowleft.png'
import { Link, useNavigate } from 'react-router-dom'
import loginBanner from '../../static/svgs/login.svg'

const RegisterPage = () => {
    const navigation = useNavigate()

    return (
        <div className='LoginContainer'>
            <div className='LoginBanner1'></div>
            <div className='LoginBanner3'>
                <img src={loginBanner} className='LoginBannerImg' alt='Login Image'/>
            </div>
            <div className='LoginLeft'>
                <div className='LoginBackBtnDiv'>
                    <div className='LoginBackBtn' onClick={() => navigation('/')}>
                        <img src={arrowLeftIcon} className='LoginBackBtnIcon' alt='Arrow Left'/>
                        {/* <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Kirill Kazachek - Flaticon</a> */}
                        <p>Go Back</p>
                    </div>
                </div>
                <div className='LoginLeft1'>
                    <h1>Sign Up</h1>
                    <form className='LoginLeftForm'>
                        <div className='LoginLeftFormInpDiv'>
                            <img src={accountIcon} className='LoginLeftFormIcon' alt='Login Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/login" title="login icons">Login icons created by Sebastian Belalcazar - Flaticon</a> */}
                            <input type='text' className='LoginLeftFormInp' placeholder='Username'/>
                        </div>
                        <div className='LoginLeftFormInpDiv'>
                            <img src={emailIcon} className='LoginLeftFormIcon' alt='Login Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon</a> */}
                            <input type='email' className='LoginLeftFormInp' placeholder='Email'/>
                        </div>
                        <div className='LoginLeftFormInpDiv'>
                            <img src={passwordIcon} className='LoginLeftFormIcon' alt='Login Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by Prosymbols Premium - Flaticon</a> */}
                            <input type='password' className='LoginLeftFormInp' placeholder='Password'/>
                        </div>
                        <div className='LoginLeftFormInpDiv'>
                            <img src={passwordIcon} className='LoginLeftFormIcon' alt='Login Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by Prosymbols Premium - Flaticon</a> */}
                            <input type='password' className='LoginLeftFormInp' placeholder='Repeat Password'/>
                        </div>
                        <button type='submit' className='LoginLeftFormBtn'>Sign In</button>
                    </form>
                    <div className='LoginLeftBot'>
                        <p>You already have an account?</p>
                        <Link to='/sign-in' className='LoginLeftBotLink'>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage