import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navigation/Navbar'
import './ContactPage.css'
import phoneIcon from '../../static/icons/phone.png'
import mailIcon from '../../static/icons/mail.png'
import officeIcon from '../../static/icons/office.png'

const ContactPage = () => {
  return (
    <>
        <nav>
            <Navbar/>
        </nav>
        <div className='ContactContainer'>
            <div className='ContactBanner'></div>
            <div className='PricingHeader'>
                <h1>Let's contact with us</h1>
                <p>Bibendum ut ipsum. Suspendisse sagittis ipsum a sem accumsan, non venenatis nulla tristique. Integer pellentesque felis eget fringilla ullamcorper, donec varius erat eget.</p>
            </div>
            <div className='ContactContainer1'>
                <div className='ContactLeft'>
                    <h1>Get In Touch</h1>
                    <div className='ContactLeftDiv'>
                        <h3>Phone</h3>
                        <div className='ContactLeftDiv1'>
                            <img src={phoneIcon} className='ContactLeftDiv1Icon' alt='Phone Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">Phone icons created by Gregor Cresnar - Flaticon</a> */}
                            <p>+48 876 786 543</p>
                        </div>
                        <h3>Email</h3>
                        <div className='ContactLeftDiv1'>
                            <img src={mailIcon} className='ContactLeftDiv1Icon' alt='Phone Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/mail" title="mail icons">Mail icons created by Freepik - Flaticon</a> */}
                            <p>email@email.com</p>
                        </div>
                        <div className='ContactLeftDiv1'>
                            <img src={mailIcon} className='ContactLeftDiv1Icon' alt='Phone Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/mail" title="mail icons">Mail icons created by Freepik - Flaticon</a> */}
                            <p>email@email.com</p>
                        </div>
                        <h3>Office</h3>
                        <div className='ContactLeftDiv1'>
                            <img src={officeIcon} className='ContactLeftDiv1Icon' alt='Phone Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/office" title="office icons">Office icons created by feen - Flaticon</a> */}
                            <p>66 Buckingham Gate, London SW1E 6AU, United Kingdom</p>
                        </div>
                    </div>
                </div>
                <div className='ContactRight'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1756.3404869619292!2d-0.1383796365406727!3d51.49779371189066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604dec9bb5bf9%3A0x9343bb74968c1ff2!2s66%20Buckingham%20Gate%2C%20London%20SW1E%206AU%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1666726861047!5m2!1spl!2spl" width="100%" height="100%"></iframe>
                </div>
            </div>
            <div className='HomeSection2Pricing'>
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
        </div>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}

export default ContactPage