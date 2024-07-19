import React from 'react'
import './Footer.css'
import logo1 from '../../Images/play-store.png'
import logo2 from '../../Images/app-store.png'
import logo from '../../Images/logo.png'

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='container'>
                <div className='footer-1'>
                    <h3>Download Our App</h3>
                    <p>Download App for smart phones</p>
                    <div class="app-logo">
                        <img src={logo1} alt="play store" />
                        <img src={logo2} alt="app store" />
                    </div>
                </div>
                <div className='footer-2'>
                    <img src={logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing
                         elit. Exercitationem, minima!
                    </p>
                </div>
                <div className='footer-3'>
                        <h3>usefull Links</h3>
                        <p>Coupons</p>
                        <p>Blog Post</p>
                        <p>Return Policy</p>
                        <p>Join Affiliate</p>
                </div>
                <div className='footer-4'>
                        <h3>Follow us</h3>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>YouTube</p>
                </div>
            </div>
            <hr />
            <p class="copyright">copyright 2022 - mani chowdary</p>
        </div>
    )
}
export default Footer