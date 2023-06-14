import React from 'react'
import './PricingPage.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navigation/Navbar'
import checkIcon from '../../static/icons/check.png'
import closeIcon from '../../static/icons/close.png'
import arrowIcon from '../../static/icons/arrowDown.png'
import { Link } from 'react-router-dom'

const PricingPage = () => {
  return (
    <>
        <nav>
            <Navbar/>
        </nav>
        <div className='PricingContainer'>
            <div className='PricingBanner'></div>
            <div className='PricingHeader'>
                <h1>Vivamus Varius Ullamcorper Nulla, Ornare Auctor Molestie Donec Accumsan</h1>
                <p>Curabitur nec lacus et erat sodales aliquet. Sed urna tortor, dapibus eu commodo a, bibendum ut ipsum. Suspendisse sagittis ipsum a sem accumsan, non venenatis nulla tristique. Integer pellentesque felis eget fringilla ullamcorper, donec varius erat eget.</p>
            </div>
            <div className='PricingContainer1'>
                <div className='PricingDiv'>
                    <h1 className='PricingDivH1'>Professional</h1>
                    <h3 className='PricingDivH3'>Sed porta lacus ac turpis placerat.</h3>
                    <p className='PricingDivP'>Proin vel urna dui. Aenean pretium posuere lobortis. Etiam eget elementum quam, eget eleifend mi. Vivamus et orci bibendum est consectetur hendrerit sed ut massa. Integer maximus neque et tortor egestas rutrum. Pellentesque purus diam, dignissim quis purus vel, rutrum efficitur ex.</p>
                    <p className='PricingDivPrice'>99/mo</p>
                    <div className='PricingDiv1'>
                        <div className='PricingDivText'>
                            <img src={checkIcon} className='PricingDivTextIcon' alt='Check Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/check" title="check icons">Check icons created by Maxim Basinski Premium - Flaticon</a> */}
                            <p>Proin vel urna dui. Aenean pretium posuere lobortis.</p>
                        </div>
                        <div className='PricingDivText'>
                            <img src={closeIcon} className='PricingDivTextIcon1' alt='Check Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by ariefstudio - Flaticon</a> */}
                            <p>Proin vel urna dui. Aenean pretium posuere lobortis.</p>
                        </div>
                        <div className='PricingDivText'>
                            <img src={closeIcon} className='PricingDivTextIcon1' alt='Check Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by ariefstudio - Flaticon</a> */}
                            <p>Proin vel urna dui. Aenean pretium posuere lobortis.</p>
                        </div>
                    </div>
                    <button type='button' className='PricingDivBtn'>Get Started</button>
                </div>
                <div className='PricingDiv'>
                    <h1 className='PricingDivH1'>Professional</h1>
                    <h3 className='PricingDivH3'>Sed porta lacus ac turpis placerat.</h3>
                    <p className='PricingDivP'>Proin vel urna dui. Aenean pretium posuere lobortis. Etiam eget elementum quam, eget eleifend mi. Vivamus et orci bibendum est consectetur hendrerit sed ut massa. Integer maximus neque et tortor egestas rutrum. Pellentesque purus diam, dignissim quis purus vel, rutrum efficitur ex.</p>
                    <p className='PricingDivPrice'>99/mo</p>
                    <div className='PricingDiv2'>
                        <div className='PricingDivText'>
                            <img src={checkIcon} className='PricingDivTextIcon' alt='Check Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/check" title="check icons">Check icons created by Maxim Basinski Premium - Flaticon</a> */}
                            <p>Proin vel urna dui. Aenean pretium posuere lobortis.</p>
                        </div>                       
                        <div className='PricingDivText'>
                            <img src={checkIcon} className='PricingDivTextIcon' alt='Check Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/check" title="check icons">Check icons created by Maxim Basinski Premium - Flaticon</a> */}
                            <p>Proin vel urna dui. Aenean pretium posuere lobortis.</p>
                        </div>
                        <div className='PricingDivText'>
                            <img src={closeIcon} className='PricingDivTextIcon1' alt='Check Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by ariefstudio - Flaticon</a> */}
                            <p>Proin vel urna dui. Aenean pretium posuere lobortis.</p>
                        </div>
                    </div>
                    <button type='button' className='PricingDivBtn'>Get Started</button>
                </div>
                <div className='PricingDiv'>
                    <h1 className='PricingDivH1'>Professional</h1>
                    <h3 className='PricingDivH3'>Sed porta lacus ac turpis placerat.</h3>
                    <p className='PricingDivP'>Proin vel urna dui. Aenean pretium posuere lobortis. Etiam eget elementum quam, eget eleifend mi. Vivamus et orci bibendum est consectetur hendrerit sed ut massa. Integer maximus neque et tortor egestas rutrum. Pellentesque purus diam, dignissim quis purus vel, rutrum efficitur ex.</p>
                    <p className='PricingDivPrice'>99/mo</p>
                    <div className='PricingDiv1'>
                        <div className='PricingDivText'>
                            <img src={checkIcon} className='PricingDivTextIcon' alt='Check Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/check" title="check icons">Check icons created by Maxim Basinski Premium - Flaticon</a> */}
                            <p>Proin vel urna dui. Aenean pretium posuere lobortis.</p>
                        </div>
                        <div className='PricingDivText'>
                            <img src={checkIcon} className='PricingDivTextIcon' alt='Check Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/check" title="check icons">Check icons created by Maxim Basinski Premium - Flaticon</a> */}
                            <p>Proin vel urna dui. Aenean pretium posuere lobortis.</p>
                        </div>
                        <div className='PricingDivText'>
                            <img src={checkIcon} className='PricingDivTextIcon' alt='Check Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/check" title="check icons">Check icons created by Maxim Basinski Premium - Flaticon</a> */}
                            <p>Proin vel urna dui. Aenean pretium posuere lobortis.</p>
                        </div>
                    </div>
                    <button type='button' className='PricingDivBtn'>Get Started</button>
                </div>
            </div>
            <div className='HelpContainer'>
                <div className='HelpContainer1'>
                    <h1>Need help choosing the right plan?</h1>
                    <div className='HelpContainerBtnsDiv'>
                        <Link className='HelpContainerBtn'>Contact Us</Link>
                        <Link className='HelpContainerBtn'>Compare Plans</Link>
                    </div>
                </div>
               
            </div>
            <div className='FaqContainer'>
                <div className='FaqHeader'>
                    <h1>Frequently Asked Questions</h1>
                    <p>Everything you need to know about the product and binding</p>
                </div>
                <div className='FaqMain'>
                    <div className='FaqMainDiv'>
                        <div className='FaqMainDivHeader'>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, risus non imperdiet ullamcorper</h3>
                            <img src={arrowIcon} className='FaqMainDivHeaderIcon' alt='Arrow Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        {/* <div className='FaqMainP'>
                            <p>Nullam et tortor at erat convallis cursus et eu nisl. Fusce faucibus felis ante, vulputate egestas elit sodales sollicitudin. Aliquam quis tempus tortor. Duis mattis vitae nulla nec cursus. Sed auctor porttitor diam, eu interdum felis rutrum quis. </p>
                        </div>                     */}
                    </div>
                    <div className='FaqMainDiv'>
                        <div className='FaqMainDivHeader'>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, risus non imperdiet ullamcorper</h3>
                            <img src={arrowIcon} className='FaqMainDivHeaderIcon' alt='Arrow Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        <div className='FaqMainP'>
                            <p>Nullam et tortor at erat convallis cursus et eu nisl. Fusce faucibus felis ante, vulputate egestas elit sodales sollicitudin. Aliquam quis tempus tortor. Duis mattis vitae nulla nec cursus. Sed auctor porttitor diam, eu interdum felis rutrum quis. </p>
                        </div>                    
                    </div>
                    <div className='FaqMainDiv'>
                        <div className='FaqMainDivHeader'>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, risus non imperdiet ullamcorper</h3>
                            <img src={arrowIcon} className='FaqMainDivHeaderIcon' alt='Arrow Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        <div className='FaqMainP'>
                            <p>Nullam et tortor at erat convallis cursus et eu nisl. Fusce faucibus felis ante, vulputate egestas elit sodales sollicitudin. Aliquam quis tempus tortor. Duis mattis vitae nulla nec cursus. Sed auctor porttitor diam, eu interdum felis rutrum quis. </p>
                        </div>                    
                    </div>
                    <div className='FaqMainDiv'>
                        <div className='FaqMainDivHeader'>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, risus non imperdiet ullamcorper</h3>
                            <img src={arrowIcon} className='FaqMainDivHeaderIcon' alt='Arrow Icon'/>
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        <div className='FaqMainP'>
                            <p>Nullam et tortor at erat convallis cursus et eu nisl. Fusce faucibus felis ante, vulputate egestas elit sodales sollicitudin. Aliquam quis tempus tortor. Duis mattis vitae nulla nec cursus. Sed auctor porttitor diam, eu interdum felis rutrum quis. </p>
                        </div>                    
                    </div>
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

export default PricingPage